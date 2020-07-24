import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function LoginScreen(props) {
    let email = 'Please enter your student email';
    let password = '';
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button title="Sign in" onPress={props.navigation.navigate('SignInScreen')}/>
            <Button title="Sign up"/>
        </View>
    );
}
function LoginInput() { 
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
