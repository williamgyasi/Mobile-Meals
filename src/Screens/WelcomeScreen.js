import {ImageBackground, SafeAreaView, Dimensions, Text,StatusBar} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient'

const {width,height}=Dimensions.get('window') 


export default function WelcomeScreen ({navigation}) {
  return (
     <SafeAreaView style={{height:"60%",backgroundColor:"#000"}}>
         <StatusBar />
         <ImageBackground 
         style={{width}}
         >

         </ImageBackground>

     </SafeAreaView>
  )
}
