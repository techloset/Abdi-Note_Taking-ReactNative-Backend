import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  fontPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../styles/consts/ratio';
// svgs
import {COLOR, COMMON_STYLES, TEXT} from '../styles/consts/GlobalStyles';
import Illustration from '../assets/images/homeManAI.svg';
import Arrow from '../assets/images/homeArrow.svg';
import HomeScreenGoals from '../components/HomeScreenGoals';
import {useAuth} from '../context/AuthContext';
import API_ENDPOINT_LOCAL from '../constants/LOCAL';
import HomeScreenNeeds from '../components/HomeScreenNeeds';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = () => {
  const [mainGoalList, setMainGoalList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkboxList, setCheckboxList] = useState();

  const {authData} = useAuth();
  const user_id = authData.user.id;

  useFocusEffect(
    React.useCallback(() => {
      fetchMainGoals();
      fetchItems();
    }, []),
  );

  const fetchMainGoals = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_ENDPOINT_LOCAL}/main-goal?id=${user_id}`,
        {
          method: 'GET',
        },
      );
      if (response.ok) {
        const array = await response.json();
        const data = array.mainGoals;
        const mainGoalsWithSubgoals = await Promise.all(
          data.map(async mainGoal => {
            const subgoalResponse = await fetch(
              `${API_ENDPOINT_LOCAL}/main-goal/sub-goal?id=${mainGoal.id}`,
            );
            if (subgoalResponse.ok) {
              const array = await subgoalResponse.json();
              const subgoals = array.subGoals;
              return {...mainGoal, subgoals};
            } else {
              return mainGoal;
            }
          }),
        );

        setMainGoalList(mainGoalsWithSubgoals);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  // goals
  // =================================================================
  // Monthly needs

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_ENDPOINT_LOCAL}/buying?id=${user_id}`,

        {
          method: 'GET',
        },
      );

      if (response.ok) {
        const data = await response.json();
        setCheckboxList(data.buyTasks);
      } else {
        console.error('Error fetching items');
      }
    } catch (error) {
      console.error('Error fetching items', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={COMMON_STYLES.super_container}>
      <StatusBar
        animated={true}
        backgroundColor={COLOR.light}
        barStyle={'dark-content'}
      />

      {mainGoalList?.length || checkboxList?.length > 0 ? (
        <>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#6A3EA1"
              style={styles.loadingIndicator}
            />
          ) : (
            <>
              <HomeScreenNeeds checkboxList={checkboxList} />
              <HomeScreenGoals mainGoalList={mainGoalList} />
            </>
          )}
        </>
      ) : (
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
      )}
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
