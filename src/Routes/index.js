import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//FIREBASE
import * as firebase from 'firebase'
import config from "../Firebase/firebaseConfig";

//SCREENS
import RandomScreen from "../Screens/Random";
import HomeScreen from "../Screens/Home";
import ShowResults from "../Screens/ShowResults";
import LoginScreen from "../Screens/LoginScreen";


const RootStack = createStackNavigator();
const Navigation = () => {

  if(!firebase.apps.length){
    console.log('Connected With Firebase');
    firebase.initializeApp(config.firebaseConfig)
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="Random" component={RandomScreen} />
        <RootStack.Screen name="Homescreen" component={HomeScreen} />
        
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
