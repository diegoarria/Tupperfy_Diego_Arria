import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInView from '../screens/auth/SignInView';
import LogInView from '../screens/auth/LogInView';
import CreateAccountView from '../screens/auth/CreateAccountView';

export type AuthStackParamList = {
  SignIn: undefined;
  LogIn: undefined;
  CreateAccount: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Stack.Screen name="SignIn" component={SignInView} />
      <Stack.Screen name="LogIn" component={LogInView} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="CreateAccount" component={CreateAccountView} options={{ animation: 'slide_from_right' }} />
    </Stack.Navigator>
  );
}
