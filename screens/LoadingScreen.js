import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import firebase from 'firebase';

export default function LoadingScreen(props) { 
    useEffect(() => { 
        checkIfLoggedIn();
    });
    checkIfLoggedIn = () => { 
      firebase.auth().onAuthStateChanged(function(user) { 
          if (user) { 
              props.navigation.navigate('DashboardScreen');
          } else { 
              props.navigation.navigate('AuthHomeScreen');
          }
      });
    };
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
          <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
