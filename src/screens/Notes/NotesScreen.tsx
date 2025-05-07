import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import useAuth from '@/store/authStore';
import { getNotes } from '@/services/api/notes';
import { Note } from '../../types/note';
import { RootStackParamList } from '../../navigation/RootNavigator.d';
import { useTheme } from '../../theme/ThemeProvider';

type NotesScreenNavigationProp = NavigationProp<RootStackParamList, 'App'>;

const NotesScreen: React.FC = () => {
  const navigation = useNavigation<NotesScreenNavigationProp>();
  const { user } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    noteItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.neutralForeground3,
    },
  });

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      if (user) {
        const fetchedNotes = await getNotes(user.id);
        setNotes(fetchedNotes);
      }
      setLoading(false);
    };

    if (user) {
      fetchNotes();
    } else {
      try {
        navigation.navigate('Auth');
      } catch (error) {
        console.error('Navigation error:', error);
      }
    }
  }, [user, navigation]);

  const renderItem = ({ item }: { item: Note }) => (
    <View style={styles.noteItem}>
      <Text>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Notes Screen</Text>
      {/* TODO: Optimize FlatList performance */}
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NotesScreen;
