import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../styles/consts/ratio';
import SCREENS from '../constants/SCREENS';
import {useNavigation} from '@react-navigation/native';
import HomeGoalItem from './HomeGoalItem';
import {TEXT} from '../styles/consts/GlobalStyles';

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
        {mainGoalList?.length > 0 ? (
          <FlatList
            data={mainGoalList}
            renderItem={Goal}
            keyExtractor={item => item.id}
            extraData={selectedId}
            horizontal
          />
        ) : (
          <Text style={TEXT.heading}>Nothing Found</Text>
        )}
      </SafeAreaView>
    </>
  );
};

export default HomeScreenGoals;

const styles = StyleSheet.create({
  parent: {
    padding: pixelSizeHorizontal(16),
    marginTop: pixelSizeVertical(16),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(-3),
  },
  pinned: {
    color: 'black',
    fontSize: fontPixel(14),
    fontWeight: '700',
    lineHeight: 19.6,
  },
  view: {
    color: '#6A3EA1',
    fontSize: fontPixel(12),
    textDecorationLine: 'underline',
  },
});
