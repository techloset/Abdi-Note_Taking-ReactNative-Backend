import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, TEXT} from '../styles/consts/GlobalStyles';
import React from 'react';
// icons
import StoreMainIcon from '../assets/images/icons/storeMain.svg';
import StoreHeader from '../(components)/StoreHeader';
import StoreBtn from '../(components)/StoreBtn';
import SCREENS from '../library/SCREENS';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const StoreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <StoreHeader title={'My Store'} />
      <View style={styles.container}>
        <StoreMainIcon width={pixelSizeVertical(152)} />
        <Text style={[TEXT.title, styles.text]}>You Dont Have a Store</Text>
        <StoreBtn
          text={'Create Store'}
          btnColor={COLOR.green}
          color={COLOR.white}
          handleFunc={() => navigation.navigate(SCREENS.CREATE_STORE)}
        />
      </View>
    </SafeAreaView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  text: {
    marginTop: pixelSizeVertical(28.11),
    marginBottom: pixelSizeVertical(37),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(57),
  },
});
