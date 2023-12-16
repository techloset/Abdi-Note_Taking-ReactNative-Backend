import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import HeaderBack from '../components/HeaderBack';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconF from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../constants/responsive';
const Register = () => {
  const navigation = useNavigation();

  const [loading, setloading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (fieldName, text) => {
    setFormData({...formData, [fieldName]: text});
  };

  const handleFieldFocus = fieldName => {
    setFieldErrors({...fieldErrors, [fieldName]: null});
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleRegister = async () => {
    try {
      await validationSchema.validate(formData, {abortEarly: false});
      handleSubmit();
    } catch (errors) {
      const errorMessages = {};
      errors.inner.forEach(error => {
        errorMessages[error.path] = error.message;
      });
      setFieldErrors(errorMessages);
    }
  };

  const handleSubmit = async () => {
    try {
      setloading(true);
      const response = await fetch(
        'https://notesapp-backend-omega.vercel.app/api/user/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        },
      );
      if (response.ok) {
        setloading(false);
        Toast.success("Register Successfuly");
        navigation.navigate('Login');
      } else {
        setloading(false);
        Toast.error("Email Alreadt Exit");
      }
    } catch (error) {
      console.log(error);
      setloading(false);
      Toast.error("Email Alreadt Exit");
    }
  };



  return (
    <ScrollView style={styles.main}>
      <View>
        <HeaderBack title="Back to Login" />
      </View>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
        />
        <View>
          <Text style={styles.reg}>Register</Text>
          <Text style={styles.notesIdea}>And start taking notes</Text>
          <View style={styles.inputParent}>
            <Text style={styles.lable}>Full Name</Text>
            <TextInput
              value={formData.name}
              onChangeText={text => handleInputChange('name', text)}
              style={styles.input}
              placeholderTextColor={'#C8C5CB'}
              placeholder="Example: John Doe"
              onFocus={() => handleFieldFocus('name')}
            />
          </View>
          {fieldErrors.name && (
            <Text style={{color: 'red', fontSize: 10}}>{fieldErrors.name}</Text>
          )}
          <View style={styles.inputParent}>
            <Text style={styles.lable}>Email Address</Text>
            <TextInput
              value={formData.email}
              onChangeText={text => handleInputChange('email', text)}
              style={styles.input}
              placeholderTextColor={'#C8C5CB'}
              placeholder="Example: johndoe@gmail.com"
              onFocus={() => handleFieldFocus('email')}
            />
          </View>
          {fieldErrors.email && (
            <Text style={{color: 'red', fontSize: 10}}>
              {fieldErrors.email}
            </Text>
          )}
          <View style={styles.inputParent}>
            <Text style={styles.lable}>Password</Text>
            <TextInput
              value={formData.password}
              onChangeText={text => handleInputChange('password', text)}
              style={styles.input}
              placeholderTextColor={'#C8C5CB'}
              placeholder="********"
              secureTextEntry={!showPassword}
              onFocus={() => handleFieldFocus('password')}
            />

            <View style={styles.iconParent}>
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}>
                <IconF
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>

          {fieldErrors.password && (
            <Text style={{color: 'red', fontSize: 10}}>
              {fieldErrors.password}
            </Text>
          )}
          <View style={styles.inputParent}>
            <Text style={styles.lable}>Retype Password</Text>
            <TextInput
              secureTextEntry={true}
              value={formData.confirmPassword}
              onChangeText={text => handleInputChange('confirmPassword', text)}
              style={styles.input}
              placeholderTextColor={'#C8C5CB'}
              placeholder="********"
              onFocus={() => handleFieldFocus('confirmPassword')}
            />
          </View>
          {fieldErrors.confirmPassword && (
            <Text style={{color: 'red', fontSize: 10}}>
              {fieldErrors.confirmPassword}
            </Text>
          )}

          <View style={{marginTop: 30}}>
            <View>
              <TouchableOpacity
                onPress={handleRegister}
                disabled={loading}
                style={[styles.btn, loading && styles.btndisable]}>
                <Text style={styles.text}>
                  {loading ? <>Loading...</> : 'Register'}
                </Text>
                <Icon
                  style={styles.icon}
                  name={'arrow-right'}
                  size={30}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeHorizontal(50),
  },
  reg: {
    fontSize: fontPixel(32),
    color: '#180E25',
    fontWeight: '700',
    fontFamily: 'Inter',
    lineHeight: 38.4,
    // marginTop: pixelSizeHorizontal(2),
  },
  notesIdea: {
    color: '#827D89',
    fontSize: fontPixel(16),
    marginTop: pixelSizeHorizontal(10),
    fontFamily: 'Inter',
    lineHeight: 22.4,
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

  lable: {
    color: 'black',
    fontSize: fontPixel(16),
    fontWeight: '500',
    marginVertical: pixelSizeVertical(10),
    lineHeight: 22.4,
  },
  inputParent: {
    marginTop: pixelSizeHorizontal(10),
  },
  btn: {
    backgroundColor: '#6A3EA1',
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeHorizontal(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
    width: widthPixel(328),
    height: heightPixel(54),
  },
  text: {
    color: 'white',
    fontSize: fontPixel(16),
    fontWeight: '500',
    paddingLeft: pixelSizeVertical(115),
    lineHeight: 22.4,
    fontFamily: 'Inter',
  },
  icon: {
    fontSize: fontPixel(20),
    textAlign: 'right',
    paddingLeft: pixelSizeVertical(40),
  },
  eyeIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: pixelSizeHorizontal(-53),
    marginRight: pixelSizeVertical(10),
    textAlign: 'right',
    width: widthPixel(20),
  },

  iconParent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btndisable: {
    backgroundColor: 'gray',
  },
});
