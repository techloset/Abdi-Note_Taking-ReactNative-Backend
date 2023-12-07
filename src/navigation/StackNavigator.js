import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION from '../library/NAVIGATION';
import SCREENS from '../library/SCREENS';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.ONBOARDING}
      screenOptions={{headerShown: false}}>
      {NAVIGATION.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.screenName}
            component={item.component}
          />
        );
      })}
      {/* <Stack.Screen name='Home' component={HomeScreen}/> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
