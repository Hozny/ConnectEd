import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './screens/LoadingScreen';
import { AuthNavigator }  from './screens/AuthHomeScreen';
import DashboardScreen from './screens/DashboardScreen';

import firebase from 'firebase';
import firebaseConfig from './config'; 

firebase.initializeApp(firebaseConfig);
firebase.auth().signOut().then(() => console.log('signed out'));

export default function App() {
  return (
      <AppContainer />
  );
}


const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen, 
    AuthHomeScreen: AuthNavigator, 
    DashboardScreen: DashboardScreen, 
});
 
const AppContainer = createAppContainer(AppSwitchNavigator);

