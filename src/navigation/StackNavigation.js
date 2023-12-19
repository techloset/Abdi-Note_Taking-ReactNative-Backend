import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AUTH_NAVIGATION from '../constants/AUTH_NAVIGATION';
import NAVIGATION from '../constants/NAVIGATION';
import {useAuth} from '../context/AuthContext';
import SCREENS from '../constants/SCREENS';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
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

export default StackNavigation;
