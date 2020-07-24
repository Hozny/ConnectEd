import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



export const AuthNavigator = createStackNavigator({
    ChoiceScreen: ChoiceScreen,
    SignInScreen: SignInScreen, 
    SignUpScreen: SignUpScreen 
});
 
function ChoiceScreen(props) {
    let email = 'Please enter your student email';
    let password = '';
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
                <Button title="Sign in" onPress={bool => 
                    {if(bool) props.navigation.navigate('SignInScreen')}} />
                <Button title="Sign up" onPress={bool => 
                    {if(bool) props.navigation.navigate('SignUpScreen')}} />
        </View>
    );
}
function SignUpScreen(props) { 
    return (
        <View style={styles.container}>
                <Text>Sign Up Screen </Text> 
                <TextInput placeholder="Please enter your student email"
                    style={styles.TextInput} onChangeText = {text => {email = text} }/>
                <TextInput placeholder="Please enter account password" 
                    secureTextEntry={true} style={styles.TextInput} 
                    onChangeText = {text => {email = text} }/>
                    <Button title="Already have an account? Sign in" 
                        onPress={bool => {if(bool)props.navigation.navigate('SignInScreen')}}/>
            <StatusBar style="auto" />
        </View>
    );
} 
function SignInScreen(props) { 
    return (
        <View style={styles.container}>
                <Text>Sign In Screen </Text> 
                <TextInput placeholder="Please enter your student email"
                    style={styles.TextInput} onChangeText = {text => {email = text} }/>
                <TextInput placeholder="Please enter account password" 
                    secureTextEntry={true} style={styles.TextInput} 
                    onChangeText = {text => {email = text} }/>
                    <Button title="Don't have an account? Sign up" 
                        onPress={() => props.navigation.navigate('LogInScreen')}/>
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
