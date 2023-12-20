import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../styles/consts/ratio';
import Googleg from '../../assets/images/google.svg';
import Facebook from '../../assets/images/facebook.svg';
import AuthInput from '../../components/AuthInput';
import {TEXT, COLOR} from '../../styles/consts/GlobalStyles';
import PurpleBtn from '../../components/PurpleBtn';
import API_ENDPOINT_LOCAL from '../../constants/LOCAL';
import {useAuth} from '../../context/AuthContext';
import SCREENS from '../../constants/SCREENS';

const Login = () => {
  const [loading, setloading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {authData, setAuthData} = useAuth();

  const navigation = useNavigation();

  const handleChangeText = (field, text) => {
    setFormData({
      ...formData,
      [field]: text,
    });
  };

  const handleLogin = async () => {
    const {email, password} = formData;

    setloading(true);

    // Validate the email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    try {
      const res = await fetch(`${API_ENDPOINT_LOCAL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Login failed: ${errorData.message}`);
        return;
      } else {
        const userData = await res.json();

        const {user, token} = userData;

        setAuthData({user});
        await AsyncStorage.setItem('auth', JSON.stringify(user));
        await AsyncStorage.setItem('token', JSON.stringify(token));
        setloading(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    }
    setloading(false);
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
        />
        <View>
          <Text style={styles.login}>Let's Login</Text>
          <Text style={styles.notesIdea}>And notes your idea</Text>
          <View style={styles.inputParent}>
            <Text style={TEXT.inputLabel}>Email Address</Text>
            <AuthInput
              placeholder="Example: johndoe@gmail.com"
              value={formData.email}
              keyboardType="email-address"
              onChangeText={value => handleChangeText('email', value)}
            />
          </View>
          <View style={styles.inputParent}>
            <Text style={TEXT.inputLabel}>Password</Text>
            <AuthInput
              placeholder="********"
              value={formData.password}
              secureTextEntry={true}
              onChangeText={value => handleChangeText('password', value)}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.FORGOT_PASSWORD)}>
            <Text style={styles.forgot}>Forgot Password</Text>
          </TouchableOpacity>
          <View style={{marginTop: 25}}>
            <PurpleBtn
              onPress={handleLogin}
              disabled={loading}
              title={loading ? 'Logging In...' : 'Login'}
              icon="arrow-right"
            />
          </View>

          <View style={styles.parentLine}>
            <View style={styles.left}></View>
            <Text style={styles.Or}>Or</Text>
            <View style={styles.right}></View>
          </View>
          <View>
            <TouchableOpacity disabled style={styles.googleBtn}>
              <Googleg />
            </TouchableOpacity>

            <Text
              style={styles.registerHere}
              onPress={() => navigation.navigate(SCREENS.REGISTER)}>
              Don’t have any account? Register here
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  googleBtn: {
    paddingVertical: pixelSizeHorizontal(15),
    paddingHorizontal: pixelSizeHorizontal(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: widthPixel(327),
    height: widthPixel(53),
    borderWidth: widthPixel(1),
    borderColor: COLOR.baseGrey,
  },
  main: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeHorizontal(80),
  },
  login: {
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
  },

  inputParent: {
    marginTop: pixelSizeHorizontal(20),
  },

  forgot: {
    color: '#6A3EA1',
    fontSize: fontPixel(16),
    marginVertical: pixelSizeVertical(15),
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  Or: {
    textAlign: 'center',
    color: '#827D89',
    fontSize: fontPixel(12),
    fontWeight: '500',
  },
  left: {
    backgroundColor: '#EFEEF0',
    padding: pixelSizeHorizontal(1),
    height: heightPixel(1),
    width: widthPixel(130),
    marginTop: pixelSizeHorizontal(10),
  },
  right: {
    backgroundColor: '#EFEEF0',
    padding: pixelSizeHorizontal(1),
    height: heightPixel(1),
    width: widthPixel(130),
    marginTop: pixelSizeHorizontal(10),
  },
  parentLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: pixelSizeVertical(20),
  },
  registerHere: {
    color: '#6A3EA1',
    fontSize: fontPixel(16),
    textAlign: 'center',
    marginTop: pixelSizeHorizontal(30),
    lineHeight: 22.4,
    fontWeight: '500',
  },
  iconParent: {
    width: widthPixel(45),
    height: heightPixel(45),
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {width: 120, height: 20},
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 7,
  },

  iconsMain: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 15,
    paddingTop: pixelSizeHorizontal(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btndisable: {
    backgroundColor: 'gray',
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
});
