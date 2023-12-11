import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION from '../library/NAVIGATION';
import SCREENS from '../library/SCREENS';
import {useAuth} from '../context/AuthContext';
import AUTH_NAVIGATION from '../library/AUTH_NAVIGATION';

const Stack = createStackNavigator();
const StackNavigator = () => {
  const {authData} = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.ONBOARDING}
      screenOptions={{headerShown: false}}>
      {!authData
        ? AUTH_NAVIGATION.map((item, index) => {
            return (
              <Stack.Screen
                key={index}
                name={item.screenName}
                component={item.component}
              />
            );
          })
        : NAVIGATION.map((item, index) => {
            return (
              <Stack.Screen
                key={index}
                name={item.screenName}
                component={item.component}
              />
            );
          })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
