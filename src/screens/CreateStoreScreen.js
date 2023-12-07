import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import React from 'react';
// icons
import StoreMainIcon from '../assets/images/icons/storeMain.svg';
import WishlistHeader from '../(components)/WishlistHeader';
import GreenBtn from '../(components)/GreenBtn';
import OptionWithCross from '../(components)/OptionWithCross';
import ProductInput from '../(components)/ProductInput';
import SCREENS from '../library/SCREENS';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const CreateStoreScreen = ({navigation}) => {
  const inputsData = [
    {
      inputLabel: 'Store Name',
      placeholderText: 'Tradly Store',
    },
    {
      inputLabel: 'Store Web Adddress',
      placeholderText: 'tradly.app',
    },
    {
      inputLabel: 'Store Description',
      placeholderText: 'Sell Groceries and homecare product',
    },
    {
      inputLabel: 'Store Type',
      placeholderText: 'Groceries Store',
    },
    {
      inputLabel: 'Address',
      placeholderText: '125 Crescent Ave, Woodbury',
    },
    {
      inputLabel: 'City',
      placeholderText: 'New York',
    },
    {
      inputLabel: 'State',
      placeholderText: '125 Crescent Ave, Woodbury',
    },
    {
      inputLabel: 'Country',
      placeholderText: 'USA',
    },
    {
      inputLabel: 'Courier Name',
      placeholderText: 'Blue Dart',
    },
    {
      inputLabel: 'Courier Name',
      placeholderText: 'Tradly Store',
    },
  ];

  return (
    <SafeAreaView style={COMMON.super_Container}>
      <WishlistHeader title={'My Store'} />
      <View style={styles.container}>
        <StoreMainIcon width={pixelSizeVertical(152)} />
        <Text style={[TEXT.cardText, styles.text]}>
          This information is used to set up your shop
        </Text>
      </View>
      {/* inputs */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {inputsData.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.inputLabel}>{item.inputLabel}</Text>
              <ProductInput placeholder={item.placeholderText} />
            </View>
          );
        })}
        <View>
          <Text style={styles.inputLabel}>Tagline</Text>
          <View style={styles.optionInput}>
            <OptionWithCross text={'Groceries'} />
          </View>
        </View>
      </ScrollView>
      {/* inputs */}
      {/* Bottom */}
      <View style={COMMON.bottom_Bar}>
        <GreenBtn
          text={'Create'}
          handleFunc={() =>
            navigation.navigate(SCREENS.MY_STORE, {data: false})
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateStoreScreen;

const styles = StyleSheet.create({
  optionInput: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(16),
    opacity: 0.5,
  },
  scroll: {
    paddingHorizontal: pixelSizeVertical(20),
    backgroundColor: COLOR.white,
    paddingTop: pixelSizeVertical(15),
    paddingBottom: pixelSizeVertical(122),
    gap: pixelSizeVertical(19),
  },
  text: {
    width: pixelSizeVertical(240),
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(23),
    gap: pixelSizeVertical(25),
    paddingBottom: pixelSizeVertical(17),
  },
});
