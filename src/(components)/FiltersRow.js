import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
// icons
import Sort from '../assets/images/icons/sort.svg';
import Location from '../assets/images/icons/location.svg';
import Category from '../assets/images/icons/category.svg';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const FiltersRow = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Sort />
        <Text style={styles.btnText}>Sort By</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Location />
        <Text style={styles.btnText}>Sort By</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Category />
        <Text style={styles.btnText}>Sort By</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FiltersRow;

const styles = StyleSheet.create({
  btnText: {
    color: COLOR.white,
    fontSize: fontPixel(12),
    fontFamily: FONT_FAMILY.montserratMedium,
  },
  btn: {
    width: widthPixel(112),
    height: widthPixel(31),
    backgroundColor: COLOR.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(26),
    borderColor: COLOR.white,
    borderWidth: widthPixel(1),
    gap: pixelSizeVertical(5),
    flexDirection: 'row',
  },
  container: {
    paddingVertical: pixelSizeVertical(12),
    paddingHorizontal: pixelSizeVertical(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
