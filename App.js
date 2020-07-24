import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import SignInScreen from './screens/SignInScreen';

import firebase from 'firebase';
import firebaseConfig from './config'; 

firebase.initializeApp(firebaseConfig);
export default function App() {
  return (
      <AppNavigator />
  );
}


const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen, 
    LoginScreen: LoginScreen, 
    DashboardScreen: DashboardScreen, 
    SignInScreen: SignInScreen
});
 
const AppNavigator = createAppContainer(AppSwitchNavigator);

