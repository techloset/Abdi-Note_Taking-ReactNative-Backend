import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import React from 'react';
import StoreHeader from '../(components)/StoreHeader';
// icons
import OvalIcon from '../assets/images/icons/oval.svg';
import SCREENS from '../library/SCREENS';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const ProfileScreen = ({navigation}) => {
  const optionsData = [
    {
      text: 'My Todos',
      nav: () => navigation.navigate(SCREENS.HOME),
    },
    {
      text: 'Language & Currency',
    },
    {
      text: 'Feedback',
    },
    {
      text: 'Refer a Friend',
    },
    {
      text: 'Terms & Conditions',
    },
    {
      text: 'Logout',
    },
  ];
  return (
    <SafeAreaView style={COMMON.super_Container}>
      <StoreHeader title={'Profile'} />
      <View style={styles.container}>
        <View style={styles.profile_Container}>
          <View style={styles.alphaLogo_Container}>
            <View style={styles.alphaLogo}>
              <Text style={TEXT.alphaLogoText}>T</Text>
            </View>
            <View style={styles.oval}>
              <OvalIcon width={pixelSizeVertical(18)} />
            </View>
          </View>
          <View style={styles.text_Container}>
            <Text style={styles.titleText}>Tradly Team</Text>
            <Text style={styles.text}>info@tradly.co</Text>
          </View>
        </View>
      </View>
      <View style={styles.container_1}>
        {optionsData.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={item.nav}
              style={styles.option}
              key={index}>
              <Text
                style={
                  index == 5
                    ? [TEXT.cardText, {color: COLOR.green}]
                    : TEXT.cardText
                }>
                {item.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  option: {
    paddingVertical: pixelSizeVertical(10.5),
    borderBottomColor: COLOR.border_clr,
    borderBottomWidth: widthPixel(1),
  },
  text: {
    fontFamily: FONT_FAMILY.montserratMedium,
    fontSize: fontPixel(12),
    color: COLOR.white,
    opacity: 0.8,
  },
  titleText: {
    fontFamily: FONT_FAMILY.montserratBold,
    fontSize: fontPixel(14),
    color: COLOR.white,
  },
  text_Container: {
    gap: pixelSizeVertical(5),
  },
  container_1: {
    paddingTop: pixelSizeVertical(15),
    height: widthPixel(266),
    width: widthPixel(340),
    backgroundColor: COLOR.white,
    borderRadius: widthPixel(8),
    marginTop: pixelSizeVertical(-133),
    alignSelf: 'center',
    paddingHorizontal: pixelSizeVertical(19),
    paddingVertical: pixelSizeVertical(7.5),
  },
  alphaLogo: {
    width: widthPixel(64),
    height: widthPixel(64),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(64),
    borderWidth: widthPixel(1.5),
    borderColor: COLOR.white,
  },
  oval: {
    position: 'absolute',
    bottom: pixelSizeVertical(11),
    right: pixelSizeVertical(-2),
  },
  alphaLogo_Container: {
    position: 'relative',
    alignSelf: 'flex-start',
  },
  profile_Container: {
    flexDirection: 'row',
    paddingHorizontal: pixelSizeVertical(26),
    alignItems: 'center',
    gap: pixelSizeVertical(15),
  },
  container: {
    paddingTop: pixelSizeVertical(15),
    height: widthPixel(251),
    backgroundColor: COLOR.green,
  },
});
