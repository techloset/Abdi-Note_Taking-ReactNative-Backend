import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import WishlistHeader from '../(components)/WishlistHeader';
import GreenBtn from '../(components)/GreenBtn';
import React from 'react';
const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
import ProductInput from '../(components)/ProductInput';

// icon
import AddIcon from '../assets/images/icons/addIconSmall.svg';
import CrossIcon from '../assets/images/icons/crossCircle.svg';
import PickIcon from '../assets/images/icons/pick.svg';
import OptionWithCross from '../(components)/OptionWithCross';
import SCREENS from '../library/SCREENS';

const AddProductScreen = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <WishlistHeader title={data} />
      <View style={styles.container_1}>
        <View style={styles.image}>
          <TouchableOpacity style={styles.addPhotoContainer}>
            <AddIcon />
            <Text style={styles.addFaded}>Add Photos</Text>
            <Text style={styles.smallFaded}>1600 x 1200 for hi res</Text>
          </TouchableOpacity>
          <View style={styles.vegImgContainer}>
            <Image
              style={styles.vegImg}
              source={require('../assets/images/veggies/brocCarrot.png')}
            />
            <View style={styles.icon}>
              <CrossIcon />
            </View>
          </View>
        </View>
        <View style={styles.fadedContainer}>
          <Text style={styles.faded}>Max. 4 photos per product</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container_2}>
        <View>
          <Text style={styles.inputLabel}>Product Name</Text>
          <ProductInput placeholder={'Brocolli'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Category Product</Text>
          <ProductInput placeholder={'Vegetables'} />
        </View>
        <View style={styles.inputsRow}>
          <View>
            <Text style={styles.inputLabel}>Price</Text>
            <TextInput
              style={[
                styles.input,
                {
                  width: widthPixel(121),
                },
              ]}
              placeholderTextColor={'#333A42'}
              placeholder={'$  30'}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Offer Price</Text>
            <TextInput
              style={[
                styles.input,
                {
                  width: widthPixel(121),
                },
              ]}
              placeholderTextColor={'#333A42'}
              placeholder={'$   15'}
            />
          </View>
        </View>
        <View>
          <Text style={styles.inputLabel}>Location Details</Text>
          <View style={styles.inputWith_icon_Container}>
            <TextInput
              style={styles.inputWith_icon}
              placeholderTextColor={'#4F4F4F'}
              placeholder={'Kualalumpur,Malaysia'}
            />
            <PickIcon />
          </View>
        </View>
        <View>
          <Text style={styles.inputLabel}>Location Details</Text>
          <TextInput
            style={styles.textarea}
            placeholderTextColor={'#4F4F4F'}
            multiline={true}
            placeholder={'Lorem ipsum dolor sit amet.'}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Condition</Text>
          <ProductInput placeholder={'Organic'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Price Type</Text>
          <ProductInput placeholder={'Fixed'} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Additional Details</Text>
          <View style={styles.optionInput}>
            <OptionWithCross text={'Cash on delivery'} />
            <OptionWithCross text={'Available'} />
          </View>
        </View>
      </ScrollView>
      {/* bottom */}
      <View style={COMMON.bottom_Bar}>
        <GreenBtn
          text={data}
          handleFunc={() =>
            navigation.navigate(SCREENS.MY_STORE, {
              data: true,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  optionInput: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(3),
  },
  textarea: {
    width: '80%',
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    lineHeight: fontPixel(24),
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
    color: COLOR.black,
  },
  inputWith_icon: {
    width: '80%',
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    color: COLOR.black,
    lineHeight: fontPixel(24),
  },
  inputWith_icon_Container: {
    width: widthPixel(335),
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLOR.input_clr,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratMedium,
    lineHeight: fontPixel(24),
    color: COLOR.black,
    alignSelf: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(41),
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.neutral,
    lineHeight: fontPixel(14),
    opacity: 0.5,
  },
  container_2: {
    paddingHorizontal: pixelSizeVertical(23.5),
    gap: pixelSizeVertical(25),
    backgroundColor: COLOR.white,
    paddingTop: pixelSizeVertical(18),
    paddingBottom: pixelSizeVertical(152),
  },
  icon: {
    position: 'absolute',
    top: pixelSizeVertical(-8),
    right: pixelSizeVertical(-8),
  },
  vegImg: {
    width: '100%',
    height: '100%',
  },
  vegImgContainer: {
    width: widthPixel(140),
    height: widthPixel(108),
    position: 'relative',
  },
  faded: {
    fontFamily: FONT_FAMILY.montserratRegular,
    fontSize: fontPixel(14),
    color: COLOR.black,
    opacity: 0.5,
    lineHeight: fontPixel(16),
  },
  fadedContainer: {
    paddingStart: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(14),
  },
  smallFaded: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(10),
    color: COLOR.black,
    opacity: 0.2,
    lineHeight: fontPixel(10),
    letterSpacing: fontPixel(0.3),
  },
  addFaded: {
    fontFamily: FONT_FAMILY.montserratSemiBold,
    fontSize: fontPixel(14),
    color: COLOR.black,
    opacity: 0.4,
    lineHeight: fontPixel(28),
  },
  addPhotoContainer: {
    width: widthPixel(140),
    height: widthPixel(105),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pixelSizeVertical(10),
    borderColor: COLOR.border_clr,
    borderWidth: widthPixel(1),
    borderStyle: 'dashed',
  },
  image: {
    paddingStart: pixelSizeVertical(21),
    gap: pixelSizeVertical(15),
    flexDirection: 'row',
  },
  container_1: {
    height: widthPixel(193),
    width: '100%',
    paddingTop: pixelSizeVertical(31),
  },
});
