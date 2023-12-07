import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, TEXT} from '../styles/consts/GlobalStyles';
import FiltersRow from './FiltersRow';
// icon
import BackIcon from '../assets/images/icons/backIcon.svg';

const {pixelSizeVertical} = ratio;

const ProductsHeader = ({title, navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={24} />
        </TouchableOpacity>
        <Text style={[TEXT.heading, {textAlign: 'center'}]}>{title}</Text>
        <View />
      </View>
      <FiltersRow />
    </View>
  );
};

export default ProductsHeader;

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingHorizontal: pixelSizeVertical(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(28),
  },
  headerContainer: {
    backgroundColor: COLOR.green,
    paddingTop: pixelSizeVertical(40),
  },
});
