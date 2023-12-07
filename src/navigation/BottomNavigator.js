import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR} from '../styles/consts/GlobalStyles';
import ratio from '../styles/consts/ratio';
import BOTTOM_NAVIGATION from '../library/BOTTOM_NAVIGATION';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLOR.white,
          height: ratio.widthPixel(53),
        },
        tabBarActiveTintColor: COLOR.green,
      }}>
      {BOTTOM_NAVIGATION.map((item, i) => {
        return (
          <Tab.Screen
            key={i}
            name={item.screenName}
            component={item.component}
            options={() => ({
              tabBarIcon: ({focused}) => {
                const iconColor = focused ? COLOR.green : COLOR.neutral_03;

                return <item.icon fill={iconColor} />;
              },
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
