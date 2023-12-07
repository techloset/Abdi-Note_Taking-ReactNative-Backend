import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, FONT_FAMILY} from '../../styles/consts/GlobalStyles';
import ratio from '../../styles/consts/ratio';
import Input from '../../(components)/Input';
import WhiteBtn from '../../(components)/WhiteBtn';
import SCREENS from '../../library/SCREENS';

const {fontPixel, pixelSizeVertical} = ratio;

const LoginScreen = ({navigation}) => {
  const [formData, setFormData] = useState({});

  const handleChangeText = (field, text) => {
    setFormData({
      ...formData,
      [field]: text,
    });
  };

  const handleLogin = () => {
    // // Access the email/mobile and password from formData
    // const {email, password} = formData;

    // // validate the email and password
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   alert('Please enter a valid email address');
    //   return;
    // }

    // if (password.length < 6) {
    //   alert('Password must be at least 6 characters long');
    //   return;
    // }

    // console.log('Email/Mobile:', email);
    // console.log('Password:', password);

    navigation.navigate(SCREENS.BOTTOM_NAVIGATOR);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Welcome to Notes App</Text>
      <Text style={styles.infoText}>Login to your account</Text>
      <View style={styles.inputsContainer}>
        <Input
          placeholder={'Email'}
          value={formData.email}
          keyboardType="email-address"
          onChangeText={value => handleChangeText('email', value)}
        />
        <Input
          placeholder={'Password'}
          value={formData.password}
          secureTextEntry={true} // If the input is a password
          onChangeText={value => handleChangeText('password', value)}
        />
      </View>
      <WhiteBtn text={'Login'} handleFunc={handleLogin} />
      <Text style={styles.bottomText}>Forgot your password?</Text>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SIGN_UP)}>
        <Text style={styles.bottomText}>
          Don’t have an account?{' '}
          <Text style={{fontFamily: FONT_FAMILY.montserratSemiBold}}>
            Sign up
          </Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bottomText: {
    color: COLOR.white,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.montserratRegular,
    letterSpacing: fontPixel(-0.434),
    marginTop: pixelSizeVertical(40),
  },
  inputsContainer: {
    marginBottom: pixelSizeVertical(35),
    gap: pixelSizeVertical(16),
  },
  infoText: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.montserratRegular,
    letterSpacing: fontPixel(-0.386),
    marginBottom: pixelSizeVertical(40),
  },
  headingText: {
    color: COLOR.white,
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.montserratMedium,
    letterSpacing: fontPixel(-0.579),
    marginBottom: pixelSizeVertical(60),
  },
  container: {
    backgroundColor: COLOR.green,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
