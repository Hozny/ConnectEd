import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ScrollView, Text, Image, View, Button } from "react-native";

export default function MatchesScreen() {
  let profile = basicProfile
  return (
    <View style={styles.container}>
      <SlidingProfilesView />
      <ProfileView profile={profile} />
    </View>
  );
}

const basicProfile = { 
    name: "Bob Rayban", 
    profilePicture: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png", 
    degree: "Actuarial Science", 
    university: "University of Waterloo 2024", 
    interests: [["apples", "red"], ["oranges", "orange"], ["bananas", "yellow"], ["kiwis", "green"]]
} 

function SlidingProfilesView() { 
    return (
        <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
            
            <Text>Matches</Text>
            <ScrollView horizontal={true} contentContainerStyle={{flexGrow: 1}} > 
                <SmallProfileIcon profile = {basicProfile}/>
                <SmallProfileIcon profile = {basicProfile}/>
                <SmallProfileIcon profile = {basicProfile}/>
                <SmallProfileIcon profile = {basicProfile}/>
            </ScrollView>
        </View>
    )
}

function SmallProfileIcon(props) { 
    return (
        <View style={{padding: "5%", alignItems: "center"}}> 
            <Image style = {{width: 65, height: 65, borderRadius: 65/2 }} source={{
              uri: props.profile.profilePicture
            }}/> 
            <Text>{props.profile.name}</Text>
            <Button style = {{marginTop: 100}} title="view"/>
        </View> 
    )
}

function ProfileView(props) { 
    return (
        <View style ={{padding: "5%", alignItems: "center"}}>
            <Text>{props.profile.name}</Text>
            <Image style = {{width: 200, height: 200, borderRadius: 200/6}} source={{
              uri: props.profile.profilePicture
            }}/> 
            <Text>{props.profile.degree}</Text>
            <Text>{props.profile.university}</Text>

            <Text>Interests:</Text>
            <InterestsContainer profile={props.profile} /> 
        </View> 
    )
}

function InterestsContainer(props) { 
    return (
        <View style = {{flex: 1, flexDirection:"row", height: 200}}>
            {props.profile.interests.map((pair) => <InterestBubble key={pair[0]} backgroundColor={pair[1]} interest={pair[0]} />)}
        </View> 
    )
}

function InterestBubble(props) { 
    return (
        <View style={{borderRadius: 5, backgroundColor: props.backgroundColor, height: 20, margin: 3, padding: 3}}> 
            <Text>{props.interest}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "15%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  interestBubble: { 
    backgroundColor: "red",
    borderRadius: 5,
    padding: 3, 
    height: 20,
    margin: 3, 
  }
});
