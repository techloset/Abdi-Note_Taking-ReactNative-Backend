import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import SCREENS from '../constants/SCREENS';
import {
  fontPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';

const HomeNeedsItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.BUY_SOMETHING)}>
      <ImageBackground
        style={styles.card1}
        source={{
          uri: 'https://fastly.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU',
        }}>
        <View style={styles.goalItem} key={item.id}>
          <CheckBox
            style={styles.checkbox}
            tintColors={{true: COLOR.light, false: COLOR.baseGrey}}
            value={item.isChecked}
          />
          <Text style={styles.goalLabel}>{item.title}</Text>
        </View>

        <View style={styles.cardFooter}>
          <Text style={{color: '#827D89', fontSize: 10}}>
            Go To Buy Buying Something Screen for editing
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 160,
    borderRadius: widthPixel(5),
    alignSelf: 'center',
  },
  card1: {
    backgroundColor: COLOR.warning,
    width: widthPixel(180),
    height: widthPixel(220),
    borderRadius: 8,
    marginHorizontal: pixelSizeHorizontal(16),
    overflow: 'hidden',
  },
  goalItem: {
    flexDirection: 'row',
    marginTop: pixelSizeHorizontal(10),
    alignItems: 'center',
  },
  subgoalItem: {
    flexDirection: 'row',
    marginLeft: pixelSizeHorizontal(20),
    marginTop: pixelSizeHorizontal(5),
    alignItems: 'center',
  },
  checkbox: {
    marginTop: pixelSizeHorizontal(6),
  },
  goalLabel: {
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.interBold,
    color: COLOR.light,
    lineHeight: fontPixel(22.4),
    marginTop: pixelSizeHorizontal(5),
    flex: 1,
  },
  subgoalLabel: {
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.interRegular,
    color: COLOR.black,
    lineHeight: fontPixel(19.6),
    marginTop: pixelSizeHorizontal(3),
    flex: 1,
  },
  cardFooter: {
    backgroundColor: COLOR.baseGrey,
    padding: pixelSizeHorizontal(10),
    marginTop: pixelSizeHorizontal(20),
    position: 'absolute',
    bottom: pixelSizeHorizontal(0),
    left: 0,
    right: 0,
    marginTop: pixelSizeHorizontal(100),
  },
});

export default HomeNeedsItem;
