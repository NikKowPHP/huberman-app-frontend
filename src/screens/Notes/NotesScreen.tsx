import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../store/authStore';
import { getNotes } from '../../services/api/notes';
import { Note } from '../../types/note';

const NotesScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

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
        navigation.navigate('Login');
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
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  noteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default NotesScreen;
