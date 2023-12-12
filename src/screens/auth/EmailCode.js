import React, {useContext, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {useNavigation} from '@react-navigation/native';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constants/responsive';
// import OTPTextView from 'react-native-otp-textinput';
import {COLOR} from '../../styles/consts/GlobalStyles';
import PurpleBtn from '../../components/PurpleBtn';

const EmailCode = () => {
  const navigation = useNavigation();
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // const [otp, setOtp] = useState('');

  // Commented out API request code, replace with your implementation
  // const { verifyCode } = useContext(ContextAuth);
  // verifyCode(code);

  const submitcode = async () => {
    // console.log('otp', otp);

    return;

    // setLoading(true);
    try {
      // Commented out Yup validation, replace with your own validation logic
      // await validationSchema.validate(
      //   { code1, code2, code3, code4 },
      //   { abortEarly: false },
      // );
      // Replace the following with your API request logic
      // const code = code1 + code2 + code3 + code4;
      // const responce = await fetch(
      //   'Your API Endpoint',
      //   {
      //     method: 'POST',
      //     headers: { 'content-type': 'application/json' },
      //     body: JSON.stringify({
      //       verifyCode: code,
      //     }),
      //   },
      // );
      // if (responce.ok) {
      //   setLoading(false);
      //   const res = await responce.json();
      //   navigation.navigate('CreateNewPassword');
      // }
    } catch (error) {
      setLoading(false);
      const errors = {};
      // Handle errors
      // ...
      setValidationErrors(errors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.main}>
      <View>
        <HeaderBack title="Back to Login" />
      </View>
      <View style={styles.container}>
        <Text style={styles.forgot}>Submit you code</Text>
        <Text style={styles.notesIdea}>
          Check Your Email and Type Your email code here for change password
        </Text>
        <Text style={styles.lable}>Type Code</Text>
        <View style={styles.inputParent}>
          {/* <OTPTextView
            inputCount={4}
            offTintColor={COLOR.baseGrey}
            tintColor={COLOR.purple}
            textInputStyle={styles.codeInput}
            handleTextChange={e => setOtp(e)}
          /> */}
        </View>
        <View style={{marginTop: 100}}>
          <View>
            <PurpleBtn
              title={loading ? 'Loading...' : 'Submit Code'}
              onPress={submitcode}
              disabled={loading}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EmailCode;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    left: pixelSizeVertical(16),
    marginTop: pixelSizeHorizontal(250),
  },
  forgot: {
    fontSize: fontPixel(32),
    color: '#180E25',
    fontWeight: '700',
    fontFamily: 'Inter',
    lineHeight: 38.4,
  },
  notesIdea: {
    color: '#827D89',
    fontSize: fontPixel(16),
    marginTop: pixelSizeHorizontal(20),
    fontFamily: 'Inter',
    lineHeight: 22.4,
    fontWeight: '400',
    marginRight: pixelSizeVertical(20),
  },
  inputParent: {
    marginTop: pixelSizeHorizontal(30),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: pixelSizeVertical(30),
  },
  codeInput: {
    width: widthPixel(50),
    height: heightPixel(50),
    borderWidth: 1,
    fontSize: fontPixel(20),
    borderRadius: 5,
    marginRight: pixelSizeVertical(10),
    color: COLOR.black,
  },
  loadbtn: {
    backgroundColor: 'gray',
  },
});
