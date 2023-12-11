import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import StackNavigator from './src/navigation/StackNavigator';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
