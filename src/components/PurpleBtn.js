import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  fontPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../constants/responsive';
import {COLOR} from '../styles/consts/GlobalStyles';

const PurpleBtn = ({title, icon, iconColor, onPress, disabled}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.btn}>
      <Icon style={styles.icon} name={null} size={30} color={iconColor} />
      <Text style={styles.text}>{title}</Text>
      <Icon style={styles.icon} name={icon} size={30} color={iconColor} />
    </TouchableOpacity>
  );
};

export default PurpleBtn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLOR.purple,
    paddingVertical: pixelSizeHorizontal(15),
    paddingHorizontal: pixelSizeHorizontal(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
    width: widthPixel(328),
    height: widthPixel(54),
  },
  text: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    fontWeight: '500',
    lineHeight: fontPixel(22.4),
    fontFamily: 'Inter',
    // paddingRight: pixelSizeHorizontal(30),
  },
  icon: {
    fontSize: 20,
    textAlign: 'right',
  },
});
