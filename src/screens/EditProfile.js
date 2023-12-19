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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditProfile = () => {
  const {authData, setAuthData} = useAuth();
  const userData = authData.user;
  const [image, setImage] = useState();
  let options = {
    saveToPhotos: true,
    MediaType: 'photo',
    allowEditing: true,
  };

  const openGallery = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //   const result = await launchImageLibrary(options);
    //   setImage(result.assets[0].uri);
    // }

    if (granted) {
      const result = await launchImageLibrary();
      let data = result.assets[0];
      console.log('data', result);
      return;
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
        setImage(newfile);
      }
    } else {
      alert('you need to give up permission to work');
    }
  };

  const handleUpload = image => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'employeeApp');
    data.append('cloud_name', 'mukeshph66');

    fetch('https://api.cloudinary.com/v1_1/mukeshph66/image/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        setPicture(data.url);
        setModal(false);
      })
      .catch(err => {
        Alert.alert('error while uploading');
      });
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
        <Text>EditProfile</Text>

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
              <Text style={styles.textbtn}>Edit Profile</Text>
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
              value={userData.name}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#180E25'}
              placeholder="anto_michael@gmail.com"
              value={userData.email}
            />
            <Text style={styles.passwordValidation}>
              Changing email address information means you need to re-login to
              the app.
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.text}>Save Changes</Text>
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
