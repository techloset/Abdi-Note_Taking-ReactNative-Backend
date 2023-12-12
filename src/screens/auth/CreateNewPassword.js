import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import {useNavigation} from '@react-navigation/native';
import {
  fontPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../constants/responsive';
import AuthInput from '../../components/AuthInput';
import {TEXT} from '../../styles/consts/GlobalStyles';

const CreateNewPassword = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleFieldFocus = fieldName => {
    setPasswordError({...passwordError, [fieldName]: null});
  };

  const handleChangeText = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Validation code removed
    try {
      // Validation code removed
      // API call logic commented out
      // setLoading(false);
      // navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      // Error handling logic for validation removed
      // setPasswordError(errorMessages);
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
          Your new password should be different
        </Text>
        <Text style={styles.notesIdea2}>from the previous password</Text>
        <View style={styles.inputParent}>
          <Text style={TEXT.inputLabel}>New Password</Text>
          <AuthInput
            placeholder="********"
            value={formData.password}
            secureTextEntry={true}
            onChangeText={value => handleChangeText('password', value)}
            onFocus={() => handleFieldFocus('password')}
          />
          <Text style={styles.passwordValidation}>
            min. 6 characters, combination of 0-9, A-Z, a-z
          </Text>
        </View>
        <View style={[styles.inputParent, {marginTop: 20}]}>
          <Text style={TEXT.inputLabel}>Retype New Password</Text>
          <AuthInput
            placeholder="********"
            value={formData.confirmPassword}
            secureTextEntry={true}
            onChangeText={value => handleChangeText('confirmPassword', value)}
            onFocus={() => handleFieldFocus('confirmPassword')}
          />
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
    marginLeft: pixelSizeHorizontal(16),
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
  inputParent: {
    marginTop: pixelSizeHorizontal(50),
    paddingRight: pixelSizeHorizontal(20),
  },
  passwordValidation: {
    color: '#C8C5CB',
    fontSize: fontPixel(12),
    lineHeight: 14.52,
    marginTop: pixelSizeHorizontal(5),
  },
  btn: {
    backgroundColor: '#6A3EA1',
    paddingVertical: pixelSizeHorizontal(15),
    paddingHorizontal: pixelSizeHorizontal(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: widthPixel(328),
    height: widthPixel(54),
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
