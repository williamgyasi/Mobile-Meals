import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//NAVIGATION
import Navigation from "./src/Routes";

//FIREBASE
import * as firebase from "firebase";
import config from "./src/Firebase/firebaseConfig";

export default function App() {
  // if (!firebase.apps.length) {
  //   console.log("Connected With Firebase");
    
  // } else {
  //   console.log("ac");
  // }

  let firebaseAppDefined = false;

  // setInterval(() => {
  //   if (!firebaseAppDefined) {
  //     if (firebase.app()) {
  //       console.log("Error")
  //       firebase.initializeApp(config.firebaseConfig);
  //       firebaseAppDefined = true;
  //     }
  //   }
  // }, 100);

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
