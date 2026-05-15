import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth
import SignInView from '../screens/auth/SignInView';
import LogInView from '../screens/auth/LogInView';
import ForgotPasswordView from '../screens/auth/ForgotPasswordView';
import CodeInputView from '../screens/auth/CodeInputView';
import ResetPasswordView from '../screens/auth/ResetPasswordView';

// Onboarding
import CreateAccountView from '../screens/onboarding/CreateAccountView';
import FavoriteDishesForm from '../screens/onboarding/FavoriteDishesForm';
import AddPaymentMethod from '../screens/onboarding/AddPaymentMethod';
import PaymentSelectionView from '../screens/onboarding/PaymentSelectionView';
import AddPaymentView from '../screens/onboarding/AddPaymentView';

// Consumer
import HomePageView from '../screens/consumer/HomePageView';

export type RootStackParamList = {
  SignIn: undefined;
  LogIn: undefined;
  ForgotPassword: undefined;
  CodeInput: undefined;
  ResetPassword: undefined;
  CreateAccount: undefined;
  FavoriteDishesForm: undefined;
  AddPaymentMethod: undefined;
  PaymentSelection: undefined;
  AddPayment: undefined;
  HomePage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      {/* Auth */}
      <Stack.Screen name="SignIn"          component={SignInView}        options={{ animation: 'fade' }} />
      <Stack.Screen name="LogIn"           component={LogInView} />
      <Stack.Screen name="ForgotPassword"  component={ForgotPasswordView} />
      <Stack.Screen name="CodeInput"       component={CodeInputView} />
      <Stack.Screen name="ResetPassword"   component={ResetPasswordView} />

      {/* Onboarding */}
      <Stack.Screen name="CreateAccount"      component={CreateAccountView} />
      <Stack.Screen name="FavoriteDishesForm" component={FavoriteDishesForm} />
      <Stack.Screen name="AddPaymentMethod"   component={AddPaymentMethod} />
      <Stack.Screen name="PaymentSelection"   component={PaymentSelectionView} />
      <Stack.Screen name="AddPayment"         component={AddPaymentView} />

      {/* Consumer */}
      <Stack.Screen name="HomePage" component={HomePageView} options={{ animation: 'fade' }} />
    </Stack.Navigator>
  );
}
