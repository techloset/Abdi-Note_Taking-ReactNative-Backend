import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StatusBar,
  StyleSheet,
  Text,
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
} from '../../styles/consts/ratio';
import {TEXT} from '../../styles/consts/GlobalStyles';
import AuthInput from '../../components/AuthInput';
import SCREENS from '../../constants/SCREENS';
import {useToast} from 'react-native-toast-notifications';

const Register = () => {
  const navigation = useNavigation();
  const toast = useToast();

  const [loading, setloading] = useState(false);
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
    try {
      // Basic form validation
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        toast.show('Please fill in all fields.');
        return;
      }

      if (!validateEmail(formData.email)) {
        toast.show('Please enter a valid email address.');
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast.show('Passwords do not match.');
        return;
      }

      setloading(true);
      const response = await fetch(
        `https://abdi-note-app-backend-prisma.vercel.app/api/auth/signup`,
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
        navigation.navigate(SCREENS.LOGIN);
      } else {
        setloading(false);
        toast.show('An error occurred');
      }
    } catch (error) {
      console.log(error);
      setloading(false);
      toast.show('Please try again');
    }
  };

  const validateEmail = email => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
              value={formData.confirmPassword}
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
