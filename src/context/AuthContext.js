import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a context
const AuthContext = createContext();

// Create an AuthProvider component
export const AuthProvider = ({children}) => {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedData = await AsyncStorage.getItem('auth');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setAuthData(parsedData);
        }
      } catch (error) {
        console.error('Error checking login status: ', error);
      }
    };

    checkLoginStatus();
  }, []); // Empty dependency array ensures useEffect runs only once

  // Memoize the value passed to the Provider
  const contextValue = React.useMemo(
    () => ({authData, setAuthData}),
    [authData, setAuthData],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
