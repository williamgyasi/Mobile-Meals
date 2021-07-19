import React,{useEffect,useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//FIREBASE
import * as firebase from "firebase";
import config from "../Firebase/firebaseConfig";

//SCREENS
import LoginScreen from "../Screens/LoginScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import RegisterScreen from "../Screens/RegisterScreen";

//FIREBASE
import {GetUIDIfLoggedIn,GetUserInfoSnapshot} from '../Firebase'


const RootStack = createStackNavigator();

const IndexStack = [
  { name: "LoginScreen", component: LoginScreen },
  { name: "WelcomeScreen", component: WelcomeScreen },
  { name: "Registration", component: RegisterScreen },
];

const IndexNavigator = ({ initialRouteName }) => {
  return (
    <RootStack.Navigator initialRouteName={initialRouteName}>
      {IndexStack.map((obj) => (
        <RootStack.Screen
          name={obj.name}
          key={obj.name}
          options={{ headerShown: false }}
          component={obj.component}
        />
      ))}
    </RootStack.Navigator>
  );
};


const Navigation = () => {
  const [user,setUser]=useState(null)

  
  useEffect(()=>{
    GetUIDIfLoggedIn()
    .then((uid)=>{
      GetUserInfoSnapshot(uid)
      .then((snapshot)=>{

      })
    })
  },[])

  return (
    <NavigationContainer>
      <IndexNavigator initialRouteName="LoginScreen" />
    </NavigationContainer>
  );
};

export default Navigation;
