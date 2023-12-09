import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a context
const AuthContext = createContext();

// Create an AuthProvider component
export const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

  // Check login status on component mount
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedData = await AsyncStorage.getItem('user');
        const parsedData = JSON.parse(storedData);
        setUserData(parsedData);
      } catch (error) {
        console.error('Error checking login status: ', error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{userData, setUserData}}>
      {children}
    </AuthContext.Provider>
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
