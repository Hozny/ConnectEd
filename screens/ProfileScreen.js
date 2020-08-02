import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { firestore, storage } from "firebase";
import firebase from "firebase";

export default class ProfileScreen extends React.Component {
  state = {
    user: {
      name: "",
      major: "",
      graduatingYear: "",
    },
  };
  constructor(props) {
    super(props);
    this.userId = firebase.auth().currentUser.uid;
    this.profile = firestore()
      .collection("users")
      .doc(this.userId)
      .onSnapshot((doc) => {
        this.setState({
          user: {
            name: doc.data().name,
            major: doc.data().major,
            graduatingYear: doc.data().graduatingYear,
          },
        });
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.user.name}</Text>
        <Text>{this.state.user.major}</Text>
        <Text>Class of {this.state.user.graduatingYear}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
