import {StyleSheet, Animated, View} from 'react-native';
import React from 'react';
import {COLOR} from '../styles/consts/GlobalStyles';
import ratio from '../styles/consts/ratio';

const {widthPixel, SCREEN_WIDTH} = ratio;

const Paginator = ({data, scrollX}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {data.map((_, i) => {
        const inputRange = [
          (i - 1) * SCREEN_WIDTH,
          i * SCREEN_WIDTH,
          (i + i) * SCREEN_WIDTH,
        ];

        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View style={[styles.dot, {opacity: dotOpacity}]} key={i} />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: widthPixel(13),
    width: widthPixel(13),
    borderRadius: 13,
    backgroundColor: COLOR.green,
    marginHorizontal: 6,
  },
});
