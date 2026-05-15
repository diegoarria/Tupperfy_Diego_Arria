import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/context/AppContext';
import AuthNavigator from './src/navigation/AuthNavigator';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
