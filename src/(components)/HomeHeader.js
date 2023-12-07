import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, TEXT} from '../styles/consts/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

// icons
import HeartIcon from '../assets/images/icons/heart.svg';
import CartIcon from '../assets/images/icons/cart.svg';
import SearchInput from './SearchInput';
import SCREENS from '../library/SCREENS';

const {pixelSizeVertical} = ratio;

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <View>
          <Text style={TEXT.heading}>My Todos</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  ellipse: {
    position: 'absolute',
    width: pixelSizeVertical(14),
    height: pixelSizeVertical(14),
    borderRadius: pixelSizeVertical(14),
    backgroundColor: '#FF7272',
    right: pixelSizeVertical(-7),
    top: pixelSizeVertical(-3),
  },
  cartIcon: {
    position: 'relative',
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: pixelSizeVertical(18),
  },
  headerTextContainer: {
    paddingHorizontal: pixelSizeVertical(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: COLOR.green,
    paddingTop: pixelSizeVertical(40),
    paddingBottom: pixelSizeVertical(25),
  },
});
