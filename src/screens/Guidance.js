import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import Icon from 'react-native-vector-icons/Octicons';
import BottomMenuBar from '../navigation/BottomMenuBar';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../styles/consts/ratio';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

import {useAuth} from '../context/AuthContext';
import {useToast} from 'react-native-toast-notifications';

const Guidance = () => {
  const toast = useToast();
  const {authData} = useAuth();

  const [loadingImg, setLoadingImg] = useState(false);
  const [image, setImage] = useState();

  let options = {
    quality: 0.1,
    allowsEditing: false,
    noData: true,
    storageOptions: {skipBackup: true},
  };

  const openGallery = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      if (granted) {
        const result = await launchImageLibrary(options);
        if (!result.didCancel && !result.error) {
          const data = result.assets[0];
          const newfile = {
            uri: data.uri,
            type: `test/${data.uri.split('.')[1]}`,
            name: `test.${data.uri.split('.')[1]}`,
          };

          handleUploadImage(newfile);
        } else {
          toast.show('Please select a file to upload');
        }
      } else {
        toast.show('You need to give camera permission to work');
      }
    } catch (error) {
      console.error('Error opening gallery:', error);
    }
  };

  const handleUploadImage = async selectedImage => {
    try {
      setLoadingImg(true);

      if (!selectedImage || !selectedImage.uri) {
        throw new Error('Invalid image data');
      }

      const reference = storage().ref(selectedImage.name);

      if (!reference) {
        throw new Error('Failed to create storage reference');
      }

      const pathToFile = selectedImage.uri;

      if (!pathToFile) {
        throw new Error('Invalid file path');
      }

      // Uploads file
      await reference.putFile(pathToFile);

      const url = await storage().ref(selectedImage.name).getDownloadURL();

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
      let response;
      if (image?.id) {
        response = await fetch(
          `https://abdi-note-app-backend-prisma.vercel.app/api/guidance`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: image.id,
              bannerImage: url,
            }),
          },
        );
      } else {
        response = await fetch(
          `https://abdi-note-app-backend-prisma.vercel.app/api/guidance`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              currentUserId: authData.id,
              bannerImage: url,
            }),
          },
        );
      }

      if (response.ok) {
        const bannerImage = await response.json();
        setImage(image?.id ? bannerImage.updatedItem : bannerImage.image);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoadingImg(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const response = await fetch(
        `https://abdi-note-app-backend-prisma.vercel.app/api/guidance?id=${authData.id}`,
        {
          method: 'GET',
        },
      );
      if (response.ok) {
        const array = await response.json();
        const data = array.guidanceImageModel[0];
        setImage(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.main}>
      <HeaderBack title="Back" />
      <View style={styles.line}></View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.newIdea}>💡 New Product Ideas</Text>
          <View style={{marginTop: 20}}>
            <Image
              source={
                image != null
                  ? {uri: image.image}
                  : require('../assets/images/laptop.png')
              }
              style={styles.image}
            />
            <TouchableOpacity
              disabled={loadingImg}
              onPress={openGallery}
              style={styles.iconPencil}>
              {loadingImg ? (
                <ActivityIndicator />
              ) : (
                <Icon name="pencil" size={30} color="#6A3EA1" />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.para}>
              Create a mobile app UI Kit that provides basic notes functionality
              but with some improvement.
            </Text>
            <Text style={styles.para}>
              There will be a choice to select what kind of notes that the user
              needs, so the experience while taking notes can be unique based on
              the needs.
            </Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.reminder}>
              Reminder set on 15/07/2021, 18:30
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomMenuBar />
    </View>
  );
};

export default Guidance;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    padding: pixelSizeHorizontal(16),
  },
  line: {
    width: widthPixel(100),
    height: pixelSizeHorizontal(1),
    backgroundColor: '#EFEEF0',
    marginTop: pixelSizeHorizontal(35),
  },
  newIdea: {
    fontSize: fontPixel(32),
    fontWeight: '700',
    color: '#180E25',
  },
  para: {
    fontSize: fontPixel(16),
    fontWeight: '400',
    lineHeight: fontPixel(22.4),
    color: '#827D89',
    paddingHorizontal: pixelSizeHorizontal(10),
    marginTop: pixelSizeHorizontal(20),
  },
  reminder: {
    fontSize: fontPixel(12),
    fontWeight: '400',
    lineHeight: fontPixel(14.52),
    color: '#827D89',
    marginTop: pixelSizeHorizontal(25),
  },
  iconPencil: {
    width: widthPixel(64),
    height: pixelSizeVertical(64),
    borderRadius: widthPixel(100),
    padding: pixelSizeHorizontal(16),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: pixelSizeHorizontal(10),
    right: pixelSizeVertical(15),
  },
  image: {
    width: widthPixel(328),
    height: pixelSizeHorizontal(260),
    borderRadius: widthPixel(10),
  },
});
