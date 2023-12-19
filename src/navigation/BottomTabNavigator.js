import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome6';
import IconsM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsE from 'react-native-vector-icons/Entypo';
import IconsA from 'react-native-vector-icons/AntDesign';
import IconsF from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FinishedScreen from '../screens/FinishedScreen';
import CreateNewNotes from '../screens/CreateNewNotes';
import Settings from '../screens/Settings';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          height: 84,
          paddingVertical: 20,
          paddingBottom: 16,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 0,
          shadowOpacity: 0.1,
        },
      }}>
      <Tab.Screen
        name="HomeScreens"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#6A3EA1',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <IconsE name="home" size={30} color="#6A3EA1" />
              </>
            ) : (
              <>
                <IconsM name="home-outline" size={30} color="#827D89" />
              </>
            ),
        }}
      />

      <Tab.Screen
        name="FinishedScreen"
        component={FinishedScreen}
        options={{
          tabBarLabel: 'Finished',
          tabBarActiveTintColor: '#6A3EA1',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <Icons name="clipboard-check" size={30} color="#6A3EA1" />
              </>
            ) : (
              <>
                <IconsM
                  name="clipboard-check-outline"
                  size={30}
                  color="#827D89"
                />
              </>
            ),
        }}
      />

      <Tab.Screen
        name="CreateNewNotes"
        component={CreateNewNotes}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarLabel: '',
          tabBarIconStyle: {
            position: 'relative',
            marginTop: -52,
            tabBarHideOnKeyboard: true,
          },
          tabBarActiveTintColor: '#6A3EA1',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconParent}>
                <IconsF
                  name="plus"
                  style={styles.iconPlus}
                  size={40}
                  color="white"
                />
              </View>
            ) : (
              <View style={styles.iconParent}>
                <IconsF
                  name="plus"
                  style={styles.iconPlus}
                  size={40}
                  color="white"
                />
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="SearchBar"
        component={SearchBar}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarLabel: 'Search',
          tabBarActiveTintColor: '#6A3EA1',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <IconsA name="search1" size={30} color="#6A3EA1" />
              </>
            ) : (
              <>
                <IconsA name="search1" size={30} color="#827D89" />
              </>
            ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarLabel: 'Settings',
          tabBarActiveTintColor: '#6A3EA1',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <IconsA name="setting" size={30} color="#6A3EA1" />
              </>
            ) : (
              <>
                <IconsA name="setting" size={30} color="#827D89" />
              </>
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconParent: {
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 7,
    shadowOffset: {width: 120, height: 20},
    backgroundColor: '#6A3EA1',
    borderRadius: 100,
    height: 64,
    width: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
