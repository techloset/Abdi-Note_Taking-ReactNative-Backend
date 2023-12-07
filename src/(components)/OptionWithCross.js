import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

// icon
import CrossIcon from '../assets/images/icons/cross.svg';

const OptionWithCross = ({text}) => {
  return (
    <TouchableOpacity style={styles.option}>
      <Text style={styles.optionText}>{text}</Text>
      <View style={{paddingTop: pixelSizeVertical(3.1)}}>
        <CrossIcon width={pixelSizeVertical(9.215)} />
      </View>
    </TouchableOpacity>
  );
};

export default OptionWithCross;

const styles = StyleSheet.create({
  optionText: {
    color: COLOR.neutral,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.montserratRegular,
    lineHeight: fontPixel(24),
  },
  option: {
    height: widthPixel(24),
    alignSelf: 'flex-start',
    backgroundColor: COLOR.input_clr,
    alignItems: 'center',
    borderRadius: widthPixel(26),
    flexDirection: 'row',
    paddingStart: pixelSizeVertical(13),
    paddingEnd: pixelSizeVertical(19.78),
    gap: pixelSizeVertical(10),
    marginTop: pixelSizeVertical(6),
    marginBottom: pixelSizeVertical(5),
  },
});
