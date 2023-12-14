import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import WhiteButton from '../components/WhiteButton';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../constants/responsive';

const LoadingScreen = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#6A3EA1"
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/loginpic.png')}
        />
        <Text style={styles.para}>
          Jot Down anything you want to achieve, today or in the future
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', gap: 16}}>
          <Icon name="circle" size={12} color="#DEDC52" />
          <Icon name="circle" size={12} color="#EFE9F7" />
          <Icon name="circle" size={12} color="#EFE9F7" />
        </View>
        <WhiteButton
          title="Let's Get Started"
          icon="arrow-right"
          color="#6A3EA1"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6A3EA1',
  },
  btnparent: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  image: {
    width: widthPixel(280),
    height: heightPixel(280),
    top: pixelSizeHorizontal(70),
  },
  para: {
    color: 'white',
    fontSize: fontPixel(20),
    fontWeight: '700',
    paddingHorizontal: pixelSizeHorizontal(5),
    lineHeight: 28,
  },
});

export default LoadingScreen;
