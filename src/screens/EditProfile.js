import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator, // Import ActivityIndicator
  PermissionsAndroid, // Import PermissionsAndroid
} from 'react-native';
import {ScrollView} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../styles/consts/ratio';
import {useAuth} from '../context/AuthContext';
import storage from '@react-native-firebase/storage';
import API_ENDPOINT_LOCAL from '../constants/LOCAL';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () => {
  const {authData, setAuthData} = useAuth();

  const [updatedname, setname] = useState(authData.name);
  const [updatedemail, setEmail] = useState(authData.email);
  const [image, setImage] = useState(authData.profilePic);
  const [loading, setLoading] = useState();
  const [loadingImg, setLoadingImg] = useState();

  // console.log('image :>> ', authData);

  const signOut = async () => {
    try {
      setAuthData('');
      AsyncStorage.removeItem('auth');
      console.log('Logout');
    } catch (error) {
      console.error(error);
    }
  };

  const openGallery = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      if (granted) {
        const result = await launchImageLibrary();
        if (!result.didCancel && !result.error) {
          let data = result.assets[0];
          let newfile = {
            uri: data.uri,
            type: `test/${data.uri.split('.')[1]}`,
            name: `test.${data.uri.split('.')[1]}`,
          };

          handleUploadImage(newfile);
        } else {
          alert('Please select a file to upload');
        }
      } else {
        alert('You need to give camera permission to work');
      }
    } catch (error) {
      console.error('Error opening gallery:', error);
    }
  };

  const handleUploadImage = async image => {
    try {
      setLoadingImg(true); // Set loading to true when starting the upload

      if (!image || !image.uri) {
        throw new Error('Invalid image data');
      }

      const reference = storage().ref(image.name);

      if (!reference) {
        throw new Error('Failed to create storage reference');
      }

      const pathToFile = image.uri;

      if (!pathToFile) {
        throw new Error('Invalid file path');
      }

      // uploads file
      await reference.putFile(pathToFile);

      const url = await storage().ref(image.name).getDownloadURL();

      if (!url) {
        throw new Error('Failed to get download URL');
      }

      handleChangePic(url);
      return url;
    } catch (error) {
      console.error('Error uploading image:', error.message);
      throw error;
    }
  };

  const handleChangePic = async url => {
    try {
      const response = await fetch(
        `${API_ENDPOINT_LOCAL}/auth/update-user`,

        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: authData.email,
            profilePic: url,
          }),
        },
      );
      if (response.ok) {
        const profilePic = await response.json().profilePic;
        setImage(profilePic);
        setAuthData(prevUserData => ({
          ...prevUserData,
          profilePic: profilePic,
        }));
        console.log('====================================');
        console.log(profilePic);
        console.log('====================================');
        setLoadingImg(false);
      }
    } catch (error) {
      setLoadingImg(false);

      console.log(error);
    } finally {
      setLoadingImg(false);
    }
  };

  const handleChangeCredentials = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT_LOCAL}/auth/update-user`,

        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: updatedname,
            email: updatedemail,
            oldemail: authData.email,
          }),
        },
      );
      if (response.ok) {
        setLoading(false);
        const updatedUserData = {
          ...authData,
          name: updatedname,
          email: updatedemail,
        };
        setAuthData(updatedUserData);
        signOut();
        // navigation.navigate('Login');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
        />
        <View style={{display: 'flex', flexDirection: 'row', gap: 80}}>
          <HeaderBack title="Settings" />
          <Text style={styles.newNotes}>Edit Profile</Text>
        </View>
        <View style={styles.line}></View>

        <View style={styles.Profilepic}>
          <View>
            <Image
              source={
                image != null
                  ? {uri: image}
                  : require('../assets/images/user.png')
              }
              style={{width: 120, height: 120, borderRadius: 100}}
            />
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 16,
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.editBtn} onPress={openGallery}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Icon
                name="edit"
                size={16}
                color={'#6A3EA1'}
                style={{marginEnd: 5, marginTop: 3}}
              />
              {loadingImg ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.textbtn}>Edit Profile</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.line, styles.line2]}></View>

        <View style={styles.container}>
          <View style={styles.inputParent}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#180E25'}
              placeholder="Michael Antonio"
              value={updatedname}
              onChangeText={setname}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#180E25'}
              placeholder="anto_michael@gmail.com"
              value={updatedemail}
              onChangeText={setEmail}
            />
            <Text style={styles.passwordValidation}>
              Changing email address information means you need to re-login to
              the app.
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <TouchableOpacity
              style={styles.btn}
              onPress={handleChangeCredentials}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.text}>Save Changes</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  newNotes: {
    fontSize: fontPixel(16),
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    marginTop: pixelSizeHorizontal(15),
    lineHeight: 22.4,
    marginLeft: pixelSizeVertical(-10),
  },
  line: {
    width: widthPixel(100),
    height: heightPixel(1),
    backgroundColor: '#EFEEF0',
    marginTop: pixelSizeHorizontal(20),
  },
  Profilepic: {
    alignItems: 'center',
  },
  editBtn: {
    width: widthPixel(171),
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: pixelSizeVertical(8),
    borderColor: '#6A3EA1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtn: {
    color: '#6A3EA1',
    fontSize: fontPixel(16),
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    left: pixelSizeVertical(16),
    marginTop: pixelSizeHorizontal(-20),
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
    width: widthPixel(280),
  },
  line2: {
    marginHorizontal: pixelSizeHorizontal(2),
    width: widthPixel(90),
    marginStart: pixelSizeVertical(16),
    marginTop: pixelSizeHorizontal(20),
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
});
