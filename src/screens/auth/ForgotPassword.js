import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../styles/consts/ratio';
import {TEXT} from '../../styles/consts/GlobalStyles';
import AuthInput from '../../components/AuthInput';
import PurpleBtn from '../../components/PurpleBtn';

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  return (
    <ScrollView style={styles.main}>
      <HeaderBack title="Back to Login" />
      <View style={styles.container}>
        <Text style={styles.forgot}>Forgot Password</Text>
        <Text style={styles.notesIdea}>
          Insert your email address to receive a code for creating a new
          password
        </Text>
        <View style={styles.inputParent}>
          <Text style={TEXT.inputLabel}>Email Address</Text>
          <AuthInput
            placeholder="Example: johndoe@gmail.com"
            onChangeText={e => setEmail(e)}
            keyboardType="email-address"
          />
        </View>
        <View style={{marginTop: pixelSizeHorizontal(50)}}>
          <PurpleBtn
            onPress={() => alert('Please go back to the previous screen')}
            title="Submit"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: pixelSizeVertical(16),
    marginTop: pixelSizeHorizontal(250),
  },
  forgot: {
    fontSize: fontPixel(32),
    color: '#180E25',
    fontWeight: '700',
    fontFamily: 'Inter',
    lineHeight: pixelSizeVertical(38.4),
  },
  notesIdea: {
    color: '#827D89',
    fontSize: fontPixel(16),
    marginTop: pixelSizeHorizontal(20),
    fontFamily: 'Inter',
    lineHeight: pixelSizeVertical(22.4),
    fontWeight: '400',
  },
  inputParent: {
    marginTop: pixelSizeHorizontal(50),
  },
  btn: {
    backgroundColor: '#6A3EA1',
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeHorizontal(20),
    borderRadius: pixelSizeHorizontal(100),
    width: widthPixel(328),
    height: pixelSizeVertical(54),
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: fontPixel(16),
    fontWeight: '500',
    lineHeight: pixelSizeVertical(22.4),
    fontFamily: 'Inter',
  },
  loadbtn: {
    backgroundColor: 'gray',
  },
});
