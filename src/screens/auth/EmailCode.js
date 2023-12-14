import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import HeaderBack from '../components/HeaderBack';
import {useNavigation} from '@react-navigation/native';
import {ContextAuth} from './AuthContext';
import * as Yup from 'yup';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../constants/responsive';

const EmailCode = () => {
  const navigation = useNavigation();
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    code1: Yup.string()
      .required('fields are required')
      .length(1, 'All fields are required'),
    code2: Yup.string()
      .required('Code 2 is required')
      .length(1, 'Code 2 must be a single character'),
    code3: Yup.string()
      .required('Code 3 is required')
      .length(1, 'Code 3 must be a single character'),
    code4: Yup.string()
      .required('Code 4 is required')
      .length(1, 'Code 4 must be a single character'),
  });

  const code1Ref = useRef();
  const code2Ref = useRef();
  const code3Ref = useRef();
  const code4Ref = useRef();

  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');

  const handleCodeChange = (text, ref) => {
    if (text.length === 1) {
      ref.current.focus();
    }
  };

  const handleFocus = () => {
    setValidationErrors('');
  };

  const code = code1 + code2 + code3 + code4;
  const {verifyCode} = useContext(ContextAuth);
  verifyCode(code);

  const submitcode = async () => {
    setLoading(true);
    try {
      await validationSchema.validate(
        {code1, code2, code3, code4},
        {abortEarly: false},
      );
      const code = code1 + code2 + code3 + code4;
      const responce = await fetch(
        'https://notesapp-backend-omega.vercel.app/api/user/verifycode',
       
        {
          method: 'POST',
          headers: {'content-type': 'application/json'},

          body: JSON.stringify({
            verifyCode: code,
          }),
        },
      );

      if (responce.ok) {
        setLoading(false);
        const res = await responce.json();

        navigation.navigate('CreateNewPassword');
      }
    } catch (error) {
      setLoading(false);
      const errors = {};
      error.inner.forEach(e => {
        errors[e.path] = e.message;
      });
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
          <TextInput
            ref={code1Ref}
            style={styles.codeInput}
            placeholderTextColor="#180E25"
            placeholder="0"
            value={code1}
            maxLength={1}
            onChangeText={text => {
              setCode1(text);
              handleCodeChange(text, code2Ref);
            }}
            onFocus={handleFocus}
          />
          <TextInput
            ref={code2Ref}
            style={styles.codeInput}
            placeholderTextColor="#180E25"
            placeholder="0"
            value={code2}
            onChangeText={text => {
              setCode2(text);
              handleCodeChange(text, code3Ref);
            }}
            maxLength={1}
            onFocus={handleFocus}
          />
          <TextInput
            ref={code3Ref}
            style={styles.codeInput}
            placeholderTextColor="#180E25"
            placeholder="0"
            value={code3}
            onChangeText={text => {
              setCode3(text);
              handleCodeChange(text, code4Ref);
            }}
            maxLength={1}
            onFocus={handleFocus}
          />
          <TextInput
            ref={code4Ref}
            style={styles.codeInput}
            placeholderTextColor="#180E25"
            placeholder="0"
            value={code4}
            onChangeText={text => setCode4(text)}
            maxLength={1}
            onFocus={handleFocus}
          />
        </View>
        {validationErrors.code1 && (
          <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>
            {validationErrors.code1}
          </Text>
        )}
        <View style={{marginTop: 100}}>
          <View>
            <TouchableOpacity
              onPress={submitcode}
              style={[styles.btn, loading && styles.loadbtn]}>
              <Text style={styles.text}>
                {loading ? 'Loading...' : 'Submit Code'}
              </Text>
            </TouchableOpacity>
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
  lable: {
    color: 'black',
    fontSize: fontPixel(16),
    fontWeight: '500',
    marginVertical: pixelSizeVertical(10),
    lineHeight: 22.4,
  },
  inputParent: {
    marginTop: pixelSizeHorizontal(30),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: pixelSizeVertical(30),
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
  codeInput: {
    width: widthPixel(50),
    height: heightPixel(50),
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: fontPixel(20),
    textAlign: 'center',
    borderRadius: 5,
    marginRight: pixelSizeVertical(10),
    color: 'black',
  },
  loadbtn: {
    backgroundColor: 'gray',
  },
});
