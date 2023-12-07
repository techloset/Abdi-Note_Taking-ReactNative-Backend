import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, TEXT} from '../styles/consts/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const {pixelSizeVertical} = ratio;

const StoreHeader = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <View>
          <Text style={TEXT.heading}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default StoreHeader;

const styles = StyleSheet.create({
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
    paddingTop: pixelSizeVertical(50),
    paddingBottom: pixelSizeVertical(33),
  },
});
