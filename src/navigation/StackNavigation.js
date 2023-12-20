import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AUTH_NAVIGATION from '../constants/AUTH_NAVIGATION';
import NAVIGATION from '../constants/NAVIGATION';
import {useAuth} from '../context/AuthContext';
import SCREENS from '../constants/SCREENS';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {authData} = useAuth();
  const routes = authData ? NAVIGATION : AUTH_NAVIGATION;

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.ONBOARDING}
      screenOptions={{headerShown: false}}>
      {routes.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.screenName}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigation;
