import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import BottomMenuBar from '../navigation/BottomMenuBar';

import {useAuth} from '../context/AuthContext';
import GoalsCRUD from '../components/GoalsCRUD';

const Goals = () => {
  const [mainGoalList, setMainGoalList] = useState([]);
  const [loading, setLoading] = useState(false);
  const {authData} = useAuth();
  const user_id = authData.id;

  useEffect(() => {
    fetchMainGoals();
  }, []);

  const fetchMainGoals = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://abdi-note-app-backend-prisma.vercel.app/api/main-goal?id=${user_id}`,
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
              `https://abdi-note-app-backend-prisma.vercel.app/api/main-goal/sub-goal?id=${mainGoal.id}`,
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

  return (
    <View style={styles.main}>
      <HeaderBack title="Back" />
      <View style={styles.line}></View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.goalDiv}>
            <Text style={styles.goalHeader}>📋Goals</Text>
          </View>

          {loading ? (
            <ActivityIndicator
              size="large"
              color="#6A3EA1"
              style={styles.loadingIndicator}
            />
          ) : (
            <View style={{marginTop: 20}}>
              {/* Render Main Goals */}
              <GoalsCRUD
                mainGoalList={mainGoalList}
                setMainGoalList={setMainGoalList}
                user_id={user_id}
                loading={loading}
                setLoading={setLoading}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <BottomMenuBar />
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#EFEEF0',
    marginTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  goalDiv: {
    marginTop: 20,
  },
  goalHeader: {
    color: 'black',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  loadingIndicator: {
    marginTop: 20,
  },
});
