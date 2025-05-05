import React from 'react';
import { TextInput, StyleSheet, StyleProp, ViewStyle, KeyboardTypeOptions, TextInputProps } from 'react-native';

interface Props {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  autoCapitalize?: TextInputProps['autoCapitalize'];
}

const CustomTextInput: React.FC<Props> = ({ placeholder, value, onChangeText, secureTextEntry, style, keyboardType, accessibilityLabel, accessibilityHint, autoCapitalize }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      autoCapitalize={autoCapitalize}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default CustomTextInput;
