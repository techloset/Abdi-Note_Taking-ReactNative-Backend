import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {AuthProvider} from './src/context/AuthContext';
import 'react-native-gesture-handler';
// =================================================================
// new Code

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
