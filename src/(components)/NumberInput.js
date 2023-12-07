import {StyleSheet, TextInput, View, Text} from 'react-native';
import React from 'react';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
import ratio from '../styles/consts/ratio';
import ArrowIcon from '../assets/images/icons/arrowDown.svg';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const NumberInput = () => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>+91</Text>
      <ArrowIcon width={10} />
      <TextInput
        style={styles.input}
        placeholderTextColor={COLOR.white}
        placeholder="9876543210"
      />
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  text: {
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.montserratBold,
    letterSpacing: fontPixel(-0.434),
    color: COLOR.white,
    paddingRight: pixelSizeVertical(7),
  },
  input: {
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.montserratBold,
    letterSpacing: fontPixel(-0.434),
    width: '100%',
    paddingStart: pixelSizeVertical(9),
  },
  inputContainer: {
    height: widthPixel(48),
    width: widthPixel(311),
    borderWidth: 1,
    borderColor: COLOR.white,
    borderRadius: widthPixel(24),
    paddingStart: pixelSizeVertical(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
