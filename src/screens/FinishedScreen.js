import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  fontPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../constants/responsive';
// svgs
import {COMMON_STYLES, TEXT} from '../styles/consts/GlobalStyles';
import Illustration from '../assets/images/finishedManAI.svg';
import Arrow from '../assets/images/homeArrow.svg';

const FinishedScreen = () => {
  return (
    <SafeAreaView style={COMMON_STYLES.super_container}>
      <View style={styles.container}>
        <Illustration width="100%" />
        <View style={styles.initialTextContainer}>
          <Text style={[TEXT.heading, {textAlign: 'center'}]}>
            No Finished Notes Yet
          </Text>
          <Text style={[TEXT.paragraph, {textAlign: 'center'}]}>
            Once you create a note and finish it, it will be appeared on this
            screen. So, let’s start your journey!
          </Text>
        </View>
        <Arrow width="100%" />
      </View>
    </SafeAreaView>
  );
};

export default FinishedScreen;

const styles = StyleSheet.create({
  initialTextContainer: {
    gap: pixelSizeHorizontal(16),
    marginTop: pixelSizeHorizontal(24),
    marginBottom: pixelSizeHorizontal(21),
  },
  container: {
    paddingHorizontal: pixelSizeHorizontal(62),
    marginTop: pixelSizeHorizontal(153),
  },
});
