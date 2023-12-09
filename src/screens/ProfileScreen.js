import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ratio from '../styles/consts/ratio';
import {COLOR, COMMON, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';
import React, {useEffect, useState} from 'react';
import StoreHeader from '../(components)/StoreHeader';
import {useRoute} from '@react-navigation/native';
// icons
import OvalIcon from '../assets/images/icons/oval.svg';
import SCREENS from '../library/SCREENS';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../context/AuthContext';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const ProfileScreen = ({navigation}) => {
  const route = useRoute();

  const {userData, setUserData} = useAuth();

  const delToken = async () => {
    await AsyncStorage.removeItem('Token');
  };

  
  const signOut = async () => {
    try {
      await delToken();
      setUserData(null);
      navigation.navigate(SCREENS.LOGIN);
    } catch (error) {
      console.error(error);
    }
    console.log('Logout');
  };

  const optionsData = [
    {
      text: 'My Todos',
      function: () => navigation.navigate(SCREENS.HOME),
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
      function: () => signOut(),
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
            <Text style={styles.titleText}>{userData.name}</Text>
            <Text style={styles.text}>{userData.email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container_1}>
        {optionsData.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={item.function}
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
