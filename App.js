import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {AuthProvider} from './src/context/AuthContext';
import 'react-native-gesture-handler';
import {ToastProvider} from 'react-native-toast-notifications';

const App = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </ToastProvider>
    </AuthProvider>
  );
};

export default App;
