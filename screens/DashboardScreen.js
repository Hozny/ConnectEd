import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';
export default function DashboardScreen() {
    const userEmail="One day";
    return (
        <View style={styles.container}>
          <Text>Dashboard Screen</Text>
          <Text>{userEmail}</Text>
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
