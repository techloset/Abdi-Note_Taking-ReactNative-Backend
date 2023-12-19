import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {COLOR} from '../styles/consts/GlobalStyles';
import {widthPixel, pixelSizeHorizontal} from '../styles/consts/ratio';

const AuthInput = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  value,
  keyboardType,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={COLOR.baseGrey}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      value={value}
      keyboardType={keyboardType}
    />
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: pixelSizeHorizontal(20),
    color: '#180E25',
    width: '100%',
    borderColor: '#C8C5CB',
    borderRadius: 8,
    height: widthPixel(54),
  },
});
