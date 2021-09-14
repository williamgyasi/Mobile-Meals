import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from 'expo-app-loading';

//FONTS
import { useFonts } from "expo-font";

//NAVIGATION
import Navigation from "./src/Routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Metropolis-ExtraBold": require("./src/Fonts/Metropolis-ExtraBold.otf"),
    "Metropolis-SemiBold": require("./src/Fonts/Metropolis-SemiBold.otf"),
    "Metropolis-Bold": require("./src/Fonts/Metropolis-Bold.otf"),
    "Metropolis-Regular": require("./src/Fonts/Metropolis-Regular.otf"),
    "Metropolis-Medium": require("./src/Fonts/Metropolis-Medium.otf"),
    "Metropolis-Light": require("./src/Fonts/Metropolis-Light.otf"),
    "Metropolis-ExtraLight": require("./src/Fonts/Metropolis-ExtraLight.otf"),
    "Metropolis-Thin": require("./src/Fonts/Metropolis-Thin.otf"),
    
    
  });
  if(!fontsLoaded){
    return <AppLoading />
  }
  else{
    return <Navigation />
  }
  
  
}
