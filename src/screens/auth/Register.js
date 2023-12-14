import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconF from 'react-native-vector-icons/FontAwesome';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constants/responsive';
import {COLOR, TEXT} from '../../styles/consts/GlobalStyles';
import AuthInput from '../../components/AuthInput';

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
  const [showPassword, setShowPassword] = useState(true);

  const handleChangeText = (field, text) => {
    setFormData({
      ...formData,
      [field]: text,
    });
  };

  const handleRegister = async () => {
    console.log('formData', formData);

    return;
    try {
      // Validation logic here (you may implement your own validation logic)
      // ...

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
        // Handle successful registration
        // ...
        navigation.navigate('Login');
      } else {
        setloading(false);
        // Handle registration error
        // ...
      }
    } catch (error) {
      console.log(error);
      setloading(false);
      // Handle other errors
      // ...
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
            <Text style={TEXT.inputLabel}>Full Name</Text>
            <AuthInput
              placeholder="Example: John Doe"
              value={formData.name}
              onChangeText={value => handleChangeText('name', value)}
            />
          </View>
          <View style={styles.inputParent}>
            <Text style={TEXT.inputLabel}>Email Address</Text>
            <AuthInput
              placeholder="Example: johndoe@gmail.com"
              value={formData.email}
              onChangeText={value => handleChangeText('email', value)}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputParent}>
            <Text style={TEXT.inputLabel}>Password</Text>
            <AuthInput
              placeholder="********"
              value={formData.password}
              onChangeText={value => handleChangeText('password', value)}
              secureTextEntry={!showPassword}
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

          <View style={styles.inputParent}>
            <Text style={TEXT.inputLabel}>Retype Password</Text>
            <AuthInput
              placeholder="********"
              value={formData.password}
              onChangeText={value => handleChangeText('confirmPassword', value)}
              secureTextEntry={true}
            />
          </View>

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
