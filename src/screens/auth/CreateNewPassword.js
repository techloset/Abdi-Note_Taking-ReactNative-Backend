import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import HeaderBack from '../components/HeaderBack';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {ContextAuth} from './AuthContext';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../constants/responsive';

const CreateNewPassword = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {userCode} = useContext(ContextAuth);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleFieldFocus = fieldName => {
    setPasswordError({...passwordError, [fieldName]: null});
  };



  const handleSubmit = async () => {
    setLoading(true);
    try {
      await validationSchema.validate(
        {password, confirmPassword},
        {abortEarly: false},
      );

      const responce = await fetch(
        'https://notesapp-backend-omega.vercel.app/api/user/createnewPassword',
       
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({password: password, verifyCode: userCode}),
        },
      );
      if (responce.ok) {
        setLoading(false);
        navigation.navigate('Login');
      }
    } catch (error) {
      setLoading(false);
      const errorMessages = {};
      error.inner.forEach(err => {
        errorMessages[err.path] = err.message;
      });
      setPasswordError(errorMessages);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <ScrollView style={styles.main}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />

      <View>
        <HeaderBack title="Back to Login" />
      </View>
      <View style={styles.container}>
        <Text style={styles.forgot}>Create a New</Text>
        <Text style={styles.forgot}>Password</Text>
        <Text style={styles.notesIdea}>
          Your new password should be different{' '}
        </Text>
        <Text style={styles.notesIdea2}>from the previous password</Text>
        <View style={styles.inputParent}>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#180E25'}
            placeholder="********"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            onFocus={() => handleFieldFocus('password')}
          />
          {passwordError.password && (
            <Text style={styles.errorText}>{passwordError.password}</Text>
          )}
          <Text style={styles.passwordValidation}>
            min. 6 characters, combination of 0-9, A-Z, a-z
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Retype New Password</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#180E25'}
            placeholder="********"
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
            onFocus={() => handleFieldFocus('confirmPassword')}
          />
          {passwordError.confirmPassword && (
            <Text style={styles.errorText}>
              {passwordError.confirmPassword}
            </Text>
          )}
        </View>
        <View style={{marginTop: 40}}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.btn, loading && styles.loadbtn]}>
            <Text style={styles.text}>
              {loading ? 'Loading...' : 'Change Password'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    left: pixelSizeVertical(16),
    marginTop: pixelSizeHorizontal(140),
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
  },
  notesIdea2: {
    color: '#827D89',
    fontSize: fontPixel(16),
    fontFamily: 'Inter',
    lineHeight: 22.4,
    fontWeight: '400',
  },
  input: {
    borderWidth: 1,
    padding: pixelSizeHorizontal(16),
    color: '#180E25',
    width: widthPixel(328),
    borderColor: '#C8C5CB',
    borderRadius: 8,
    height: heightPixel(54),
  },
  label: {
    color: 'black',
    fontSize: fontPixel(16),
    fontWeight: '500',
    marginVertical: pixelSizeVertical(10),
    lineHeight: 22.4,
  },
  inputParent: {
    marginTop: pixelSizeHorizontal(50),
  },
  passwordValidation: {
    color: '#C8C5CB',
    fontSize: fontPixel(12),
    lineHeight: 14.52,
    top: pixelSizeHorizontal(5),
  },
  btn: {
    backgroundColor: '#6A3EA1',
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeHorizontal(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: widthPixel(328),
    height: heightPixel(54),
  },
  text: {
    color: 'white',
    fontSize: fontPixel(16),
    fontWeight: '500',
    lineHeight: 22.4,
    fontFamily: 'Inter',
  },
  errorText: {
    color: 'red',
    fontSize: fontPixel(10),
    width: '60%',
    marginTop: pixelSizeHorizontal(4),
  },
  loadbtn: {
    backgroundColor: 'gray',
  },
});
