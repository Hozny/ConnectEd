import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';


export const AuthNavigator = createStackNavigator({
    ChoiceScreen: ChoiceScreen,
    SignInScreen: SignInScreen, 
    SignUpScreen: SignUpScreen
});

/* Bridge screen between sign-up and sign-in choice*/ 
function ChoiceScreen(props) {
    let email = 'Please enter your student email';
    let password = '';
    return (
        <View style={styles.container}>
            <Text>Welcome ConnectEd Screen</Text>
                <Button title="Sign in" onPress={bool => 
                    {if(bool) props.navigation.navigate('SignInScreen')}} />
                <Button title="Sign up" onPress={bool => 
                    {if(bool) props.navigation.navigate('SignUpScreen')}} />
        </View>
    );
}

/* to validate student emails */ 
function checkStudentEmail(email) { 
    return true;
} 

function SignUpScreen(props) { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => { 
        if (checkStudentEmail(email)) { 
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(function() { 
                      Alert.alert(
                          "Account successfully created", 
                          "",
                          [
                              { text: "OK", onPress: () => console.log("OK Pressed") }
                          ],
                          { cancelable: false }
                      );
                })
                .catch(function(error) { 
                Alert.alert(
                      error.message,
                      "Please try again",
                      [
                          {
                              text: "Cancel",
                              onPress: () => console.log("Cancel Pressed"),
                              style: "cancel"
                          },
                          { text: "OK", onPress: () => console.log("OK Pressed") }
                      ],
                      { cancelable: false }
                );
            });
        }
    }
    return (
        <View style={styles.container}>
                <Text>Sign Up Screen </Text> 

                <TextInput placeholder="Please enter your student email"
                    style={styles.TextInput} 
                    onChangeText = {userEmail => setEmail(userEmail) }/>
                <TextInput placeholder="Please enter account password" 
                    secureTextEntry={true} style={styles.TextInput} 
                    onChangeText = {userPassword => setPassword(userPassword) }/>

                <Button title="Sign Up" 
                    onPress={bool => {if(bool) { 
                        createUser();
                    }}}/>
                <Button title="Already have an account? Sign in" 
                    onPress={bool => {if(bool)props.navigation.navigate('SignInScreen')}}/>
            <StatusBar style="auto" />
        </View>
    );
} 

function SignInScreen(props) { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignIn = () => { 
        if (checkStudentEmail(email)) { 
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function() { 
                    console.log('successful login');
                    //                    props.navigation.navigate('DashboardScreen');
                })
                .catch(function(error) { 
                Alert.alert(
                      error.message,
                      "Please try again",
                      [
                          {
                              text: "Cancel",
                              onPress: () => console.log("Cancel Pressed"),
                              style: "cancel"
                          },
                          { text: "OK", onPress: () => console.log("OK Pressed") }
                      ],
                      { cancelable: false }
                );
            });
        }

    } 
    return (
        <View style={styles.container}>
                <Text>Sign In Screen </Text> 
                <TextInput placeholder="Please enter your student email"
                    style={styles.TextInput} 
                    onChangeText = {userEmail => setEmail(userEmail) }/>
                <TextInput placeholder="Please enter account password" 
                    secureTextEntry={true} style={styles.TextInput} 
                    onChangeText = {userPassword => setPassword(userPassword) }/>
                <Button title="Sign In" 
                    onPress={bool => {if(1) { 
                        userSignIn();
                    }}}
                />
                <Button title="Don't have an account? Sign up" 
                    onPress={bool => {if(bool)props.navigation.navigate('SignUpScreen')}}/>
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
