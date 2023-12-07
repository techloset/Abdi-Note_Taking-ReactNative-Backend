import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, TEXT} from '../styles/consts/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
// icon
import BackIcon from '../assets/images/icons/backIcon.svg';
import SearchIcon from '../assets/images/icons/browse.svg';

const {pixelSizeVertical} = ratio;

const StoreProfileHeader = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={24} />
        </TouchableOpacity>
        <Text style={TEXT.heading}>{title}</Text>
        <SearchIcon width={24} fill={COLOR.white} />
      </View>
    </View>
  );
};

export default StoreProfileHeader;

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingHorizontal: pixelSizeVertical(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(38),
  },
  headerContainer: {
    backgroundColor: COLOR.green,
    paddingTop: pixelSizeVertical(40),
  },
});
