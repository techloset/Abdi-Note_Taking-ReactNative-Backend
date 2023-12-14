import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WhiteButton from '../components/WhiteButton';
import Onboard from '../assets/images/onboarding.svg';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../constants/responsive';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const GoLogin = () => {
    navigation.navigate('Login');
    console.log('first');
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#6A3EA1"
      />
      <View style={styles.container}>
        <Onboard style={styles.image} />

        <Text style={styles.para}>
          Jot Down anything you want to achieve, today or in the future
        </Text>
        <View style={styles.circleContainer}>
          <FontAwesome5 name="circle" size={12} color="#DEDC52" />
          <FontAwesome5 name="circle" size={12} color="#EFE9F7" />
          <FontAwesome5 name="circle" size={12} color="#EFE9F7" />
        </View>
        <WhiteButton
          title="Let's Get Started"
          icon="arrow-right"
          color="#6A3EA1"
          onPress={GoLogin}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6A3EA1',
  },
  image: {
    width: widthPixel(280),
    height: heightPixel(280),
    top: pixelSizeHorizontal(70),
  },
  para: {
    color: 'white',
    fontSize: fontPixel(20),
    fontWeight: '700',
    paddingHorizontal: pixelSizeHorizontal(5),
    lineHeight: 28,
  },
  circleContainer: {
    flexDirection: 'row',
    gap: 16,
  },
});

export default OnboardingScreen;
