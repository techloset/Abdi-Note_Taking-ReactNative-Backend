import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
import SCREENS from '../constants/SCREENS';
import {useNavigation} from '@react-navigation/native';
import HomeGoalItem from './HomeGoalItem';

const HomeScreenGoals = ({mainGoalList}) => {
  const navigation = useNavigation();

  const [selectedId, setSelectedId] = useState();

  const Goal = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <HomeGoalItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <>
      <View style={styles.parent}>
        <View style={styles.header}>
          <Text style={styles.pinned}>📋 Goals</Text>
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.GOALS)}>
            <Text style={styles.view}>View all</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={styles.container2}>
        <FlatList
          data={mainGoalList}
          renderItem={Goal}
          keyExtractor={item => item.id}
          extraData={selectedId}
          horizontal
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreenGoals;

const styles = StyleSheet.create({
  addCheckboxBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeHorizontal(8),
    borderRadius: 5,
    marginLeft: pixelSizeHorizontal(10),
  },
  addcheck: {
    color: '#6A3EA1',
    fontSize: fontPixel(16),
    textDecorationLine: 'underline',
  },
  goalItem: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  subgoalItem: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  checkbox: {
    marginTop: 6,
  },
  goalLabel: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.interBold,
    color: COLOR.purple,
    lineHeight: 22.4,
    marginTop: 5,
    flex: 1,
  },
  subgoalLabel: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.interRegular,
    color: COLOR.black,
    lineHeight: 19.6,
    marginTop: 3,
    flex: 1,
  },
  addGoalInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  addSubGoalInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6A3EA1',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 12,
    fontSize: 12,
    color: 'black',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#6A3EA1',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  main: {
    backgroundColor: '#FAF8FC',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(-3),
  },
  journey: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28.8,
    color: '#180E25',
  },
  text: {
    fontSize: fontPixel(14),
    fontWeight: '400',
    lineHeight: 19.6,
    color: '#827D89',
    width: widthPixel(237),
    textAlign: 'center',
    marginTop: pixelSizeHorizontal(20),
  },
  pinned: {
    color: 'black',
    fontSize: fontPixel(14),
    fontWeight: '700',
    lineHeight: 19.6,
  },
  parent: {
    padding: pixelSizeHorizontal(16),
    marginTop: pixelSizeVertical(16),
  },
  view: {
    color: '#6A3EA1',
    fontSize: fontPixel(12),
    textDecorationLine: 'underline',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card1: {
    backgroundColor: 'white',
    width: widthPixel(180),
    borderRadius: 8,
    marginHorizontal: pixelSizeHorizontal(16),
  },
  titlecard: {
    color: 'black',
    fontSize: fontPixel(16),
    fontWeight: '500',
    padding: pixelSizeHorizontal(16),
  },
  para: {
    color: 'black',
    fontSize: fontPixel(10),
    marginTop: pixelSizeHorizontal(10),
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  cardFooter: {
    backgroundColor: '#EFEEF0',
    padding: pixelSizeHorizontal(10),
    marginTop: pixelSizeVertical(20),
  },
});
