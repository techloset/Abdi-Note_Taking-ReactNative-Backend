import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import React from 'react';
import SearchInput from './SearchInput';
import StoreProductCard from './StoreProductCard';
// icons
import AddIcon from '../assets/images/icons/addIcon.svg';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../library/SCREENS';

const {widthPixel, pixelSizeVertical} = ratio;

const FilledStore = () => {
  const navigation = useNavigation();

  const cardData = [
    {
      title: 'Brocolli',
      img: require('../assets/images/veggies/brocolli.png'),
    },
  ];
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <View style={styles.container}>
        <SearchInput />
        <Text style={[TEXT.title, styles.text]}>You Dont Have a Product</Text>
        <ScrollView contentContainerStyle={styles.container_1}>
          <StoreProductCard data={cardData} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(SCREENS.ADD_PRODUCT, {
                data: 'Add Product',
              })
            }
            style={styles.addProductContainer}>
            <AddIcon />
            <Text
              style={[
                TEXT.heading_2,
                {fontFamily: FONT_FAMILY.montserratMedium},
              ]}>
              Add Product
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FilledStore;

const styles = StyleSheet.create({
  addProductContainer: {
    width: widthPixel(160),
    height: widthPixel(200),
    borderRadius: widthPixel(10),
    borderColor: COLOR.neutral,
    borderWidth: widthPixel(1),
    overflow: 'hidden',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    gap: pixelSizeVertical(10),
  },
  container_1: {
    flexDirection: 'row',
    gap: pixelSizeVertical(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: pixelSizeVertical(16),
    paddingStart: pixelSizeVertical(19),
  },
  container: {
    paddingTop: pixelSizeVertical(9),
  },
});
