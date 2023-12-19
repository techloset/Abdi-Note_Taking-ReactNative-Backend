import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  fontPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../styles/consts/ratio';
// svgs
import {COLOR, COMMON_STYLES, TEXT} from '../styles/consts/GlobalStyles';
import Illustration from '../assets/images/homeManAI.svg';
import Arrow from '../assets/images/homeArrow.svg';

const HomeScreen = () => {
  return (
    <SafeAreaView style={COMMON_STYLES.super_container}>
      <StatusBar
        animated={true}
        backgroundColor={COLOR.light}
        barStyle={'dark-content'}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />

      <View style={styles.container}>
        <Illustration width="100%" />
        <View style={styles.initialTextContainer}>
          <Text style={[TEXT.heading, {textAlign: 'center'}]}>
            Start Your Journey
          </Text>
          <Text style={[TEXT.paragraph, {textAlign: 'center'}]}>
            Every big step start with small step. Notes your first idea and
            start your journey!
          </Text>
        </View>
        <Arrow width="100%" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
