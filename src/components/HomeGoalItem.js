import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import SCREENS from '../constants/SCREENS';
import {
  fontPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY, TEXT} from '../styles/consts/GlobalStyles';

const HomeGoalItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card1}
      onPress={() => navigation.navigate(SCREENS.GOALS)}>
      <View style={styles.goalItem} key={item.id}>
        <CheckBox
          style={styles.checkbox}
          tintColors={{true: '#6A3EA1', false: 'gray'}}
          value={item.isChecked}
        />
        <Text style={styles.goalLabel}>{item.title}</Text>
      </View>
      {item?.subgoals?.length > 0 ? (
        item.subgoals.slice(0, 4).map((subgoal, j) => (
          <View style={styles.subgoalItem} key={j}>
            <CheckBox
              style={styles.checkbox}
              tintColors={{true: '#6A3EA1', false: 'gray'}}
              value={subgoal?.isChecked}
            />
            <Text style={styles.subgoalLabel}>{subgoal?.title}</Text>
          </View>
        ))
      ) : (
        <Text
          style={[
            TEXT.paragraph,
            {paddingHorizontal: pixelSizeHorizontal(10)},
          ]}>
          Go to Goals Screen for adding Goals
        </Text>
      )}
      <View style={styles.cardFooter}>
        <Text style={{color: '#827D89', fontSize: 10}}>
          Go To Goals Screen for editing
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card1: {
    backgroundColor: 'white',
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
    color: COLOR.purple,
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

export default HomeGoalItem;
