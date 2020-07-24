import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default function SignInScreen() { 
    return (
        <View style={styles.container}>
                <TextInput placeholder="Please enter your student email"
                    style={styles.TextInput} onChangeText = {text => {email = text} }/>
                <TextInput placeholder="Please enter account password" 
                    secureTextEntry={true} style={styles.TextInput} 
                    onChangeText = {text => {email = text} }/>
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
    TextInput: { 
        height: 40,
        width: "90%",
        borderColor: 'gray',
        borderWidth: 1
    } 
});
