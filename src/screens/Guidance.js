import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import HeaderBack from '../components/HeaderBack';
import Icon from 'react-native-vector-icons/Octicons';
import BottomMenuBar from '../navigation/BottomMenuBar';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../styles/consts/ratio';
const Guidence = () => {
  return (
    <View style={styles.main}>
      <View>
        <HeaderBack title="Back" />
      </View>
      <View style={styles.line}></View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.newIdea}>💡 New Product </Text>
          <Text style={styles.newIdea}> Ideas</Text>
          <View style={{marginTop: 20}}>
            <Image
              source={require('../assets/images/laptop.png')}
              style={styles.image}
            />
            <View>
              <TouchableOpacity
                style={{display: 'flex', alignItems: 'flex-end'}}>
                <View style={styles.iconPencil}>
                  <Icon name="pencil" size={30} color="#6A3EA1" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.para}>
              Create a mobile app UI Kit that provide a basic notes
              functionality but with some improvement.
            </Text>
            <Text style={styles.para}>
              There will be a choice to select what kind of notes that user
              needed, so the experience while taking notes can be unique based
              on the needs.
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

export default Guidence;

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
    height: heightPixel(1),
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
    lineHeight: 22.4,
    color: '#827D89',
    paddingHorizontal: pixelSizeHorizontal(10),
    marginTop: pixelSizeHorizontal(20),
  },
  reminder: {
    fontSize: fontPixel(12),
    fontWeight: '400',
    lineHeight: 14.52,
    color: '#827D89',
    marginTop: pixelSizeHorizontal(25),
  },
  btns: {
    width: 'auto',
    borderRadius: 100,
    backgroundColor: '#EFEEF0',
    marginTop: pixelSizeHorizontal(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: pixelSizeHorizontal(8),
  },
  btntext: {
    fontSize: fontPixel(12),
    fontWeight: '400',
    color: '#827D89',
  },
  iconPencil: {
    width: widthPixel(64),
    height: heightPixel(64),
    borderRadius: 100,
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
    height: heightPixel(260),
  },
});
