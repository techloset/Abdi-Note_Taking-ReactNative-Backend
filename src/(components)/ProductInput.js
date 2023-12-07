import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
import ratio from '../styles/consts/ratio';

const {widthPixel, fontPixel} = ratio;
const ProductInput = ({placeholder, value, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={'#4F4F4F'}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default ProductInput;

const styles = StyleSheet.create({
  input: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    lineHeight: fontPixel(24),
    color: COLOR.black,
    alignSelf: 'center',
  },
});
