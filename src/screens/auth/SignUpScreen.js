import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, FONT_FAMILY} from '../../styles/consts/GlobalStyles';
import ratio from '../../styles/consts/ratio';
import Input from '../../(components)/Input';
import WhiteBtn from '../../(components)/WhiteBtn';
import BackIcon from '../../assets/images/icons/backIcon.svg';
import SCREENS from '../../library/SCREENS';

const {fontPixel, pixelSizeVertical} = ratio;

const SignUpScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = () => {
    const {firstName, lastName, email, password, confirmPassword} = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Additional validation logic can be added here

    // If validation passes, you can proceed with the sign-up logic
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email/Mobile:', email);
    console.log('Password:', password);

    // Perform sign-up logic here
    // For example, you might want to navigate to the next screen if the sign-up is successful
    navigation.navigate(SCREENS.BOTTOM_NAVIGATOR);
  };

  const handleChangeText = (field, text) => {
    setFormData({
      ...formData,
      [field]: text,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.header}>
          <BackIcon width={20} />
        </TouchableOpacity>
        <View style={styles.containerCenter}>
          <Text style={styles.headingText}>Welcome to Notes App</Text>
          <Text style={styles.infoText}>Signup to your account</Text>
          <View style={styles.inputsContainer}>
            <Input
              placeholder={'First Name'}
              value={formData.firstName}
              onChangeText={text => handleChangeText('firstName', text)}
            />
            <Input
              placeholder={'Last Name'}
              value={formData.lastName}
              onChangeText={text => handleChangeText('lastName', text)}
            />
            <Input
              placeholder={'Email'}
              value={formData.email}
              keyboardType="email-address"
              onChangeText={text => handleChangeText('email', text)}
            />
            <Input
              placeholder={'Password'}
              value={formData.password}
              secureTextEntry={true}
              onChangeText={text => handleChangeText('password', text)}
            />
            <Input
              placeholder={'Re-enter Password'}
              value={formData.confirmPassword}
              secureTextEntry={true}
              onChangeText={text => handleChangeText('confirmPassword', text)}
            />
          </View>
          <WhiteBtn text={'Create'} handleFunc={handleSignUp} />
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.LOGIN)}>
            <Text style={styles.bottomText}>
              Have an account?{' '}
              <Text style={{fontFamily: FONT_FAMILY.montserratSemiBold}}>
                Sign in
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(80),
  },
  header: {
    paddingHorizontal: pixelSizeVertical(16),
    marginTop: pixelSizeVertical(50),
  },
  scroll: {
    height: '100vh',
  },
  container: {
    backgroundColor: COLOR.green,
    flex: 1,
  },
});
