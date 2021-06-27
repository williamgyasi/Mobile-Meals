import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//FIREBASE
import * as firebase from "firebase";
import config from "../Firebase/firebaseConfig";

//SCREENS
import RandomScreen from "../Screens/Random";
import HomeScreen from "../Screens/Home";
import ShowResults from "../Screens/ShowResults";
import LoginScreen from "../Screens/LoginScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import RegisterScreen from "../Screens/RegisterScreen";

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
  if (!firebase.apps.length) {
    console.log("Connected With Firebase");
    firebase.initializeApp(config.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <IndexNavigator initialRouteName="WelcomeScreen" />
    </NavigationContainer>
  );
};

export default Navigation;
