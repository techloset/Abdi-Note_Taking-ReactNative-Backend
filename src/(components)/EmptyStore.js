import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, TEXT} from '../styles/consts/GlobalStyles';
import React from 'react';
// icons
import StoreBtn from './StoreBtn';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../library/SCREENS';

const {pixelSizeVertical} = ratio;

const EmptyStore = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <View style={styles.container}>
        <Text style={[TEXT.title, styles.text]}>You Dont Have a Product</Text>
        <StoreBtn
          text={'Add Product'}
          color={COLOR.green}
          handleFunc={() =>
            navigation.navigate(SCREENS.ADD_PRODUCT, {
              data: 'Add Product',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default EmptyStore;

const styles = StyleSheet.create({
  text: {
    marginBottom: pixelSizeVertical(37),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(59),
  },
});
