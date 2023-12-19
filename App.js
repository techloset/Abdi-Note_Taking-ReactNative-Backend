import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import OnboardingScreen from './src/screens/OnboardingScreen';
import {AuthProvider} from './src/context/AuthContext';

import 'react-native-gesture-handler';


const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
