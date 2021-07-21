import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//FONTS
import { useFonts, Roboto_100Thin,Roboto_500Medium } from "@expo-google-fonts/roboto";

//NAVIGATION
import Navigation from "./src/Routes";

export default function App() {
  let [fontsloaded] = useFonts({
    Roboto_100Thin,
    Roboto_500Medium
  });

  if(!fontsloaded){
    return <Text>NOT LOADED</Text>
  }

  return <Navigation />;
}
