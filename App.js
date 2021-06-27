import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//NAVIGATION
import Navigation from './src/Routes'

export default function App() {
  if (!firebase.apps.length) {
    console.log("Connected With Firebase");
    firebase.initializeApp(config.firebaseConfig);
  }

  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
