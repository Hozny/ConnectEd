import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";

import firebase from "firebase";
import MatchesScreen from "./MatchesScreen";
import ProfileScreen from "./ProfileScreen";
import RulesScreen from "./RulesScreen";

export const DashboardScreen = createMaterialBottomTabNavigator(
  {
    Matches: {
      screen: MatchesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-people"}
            />
          </View>
        ),
      },
    },
    Rules: {
      screen: RulesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialIcon
              style={[{ color: tintColor }]}
              size={25}
              name={"home"}
            />
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialIcon
              style={[{ color: tintColor }]}
              size={25}
              name={"account-circle"}
            />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: "Profile",
    activeColor: "black",
    inactiveColor: "grey",
    barStyle: { backgroundColor: "white" },
  }
);
