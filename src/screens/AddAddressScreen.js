import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import WishlistHeader from '../(components)/WishlistHeader';
import GreenBtn from '../(components)/GreenBtn';
import React, {useState} from 'react';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
// icons
import LocationIcon from '../assets/images/icons/currentLocation.svg';
import AddressInput from '../(components)/AddressInput';
import SCREENS from '../library/SCREENS';

const AddAddressScreen = ({navigation}) => {
  const address = true;
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <WishlistHeader title={'Add a new Address'} />
      <View style={styles.container_1}>
        <LocationIcon />
        <Text style={styles.locationText}>Use current location</Text>
      </View>
      {/* inputs */}
      <View style={styles.container_2}>
        <View>
          <Text style={styles.inputLabel}>Name</Text>
          <AddressInput placeholder={'Tradly Team'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Phone</Text>
          <AddressInput placeholder={'+621234567890'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Street address</Text>
          <AddressInput placeholder={'Kualalumpur Malaysia'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>City</Text>
          <AddressInput placeholder={'Kualalumpur'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>State</Text>
          <AddressInput placeholder={'Malaysia'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Zip Code</Text>
          <AddressInput placeholder={'75119'} />
        </View>
      </View>

      {/* bottom */}
      <View style={COMMON.bottom_Bar}>
        <GreenBtn
          text={'Save'}
          handleFunc={() => navigation.navigate(SCREENS.CHECKOUT)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  inputLabel: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(16),
    opacity: 0.5,
  },
  container_2: {
    paddingHorizontal: pixelSizeVertical(23.5),
    marginTop: pixelSizeVertical(36),
    gap: pixelSizeVertical(16),
  },
  locationText: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(16),
    color: COLOR.blue,
    lineHeight: fontPixel(24),
  },
  container_1: {
    height: widthPixel(65),
    width: '100%',
    backgroundColor: COLOR.white,
    marginBottom: pixelSizeVertical(9),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: pixelSizeVertical(8),
  },
});
