import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Text,
  StatusBar,
  View,
  Button,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Input, NativeBaseProvider, useColorModeValue } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

//COMPONENTS
import { MStatusBar, MButton } from "../Components";

const { width, height } = Dimensions.get("window");

//FIREBASE
import * as firebase from "firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async() => {
      const response = await firebase.auth().signInWithEmailAndPassword(email,password);
      response
      .then(()=>{
          navigation.navigate('Home')
      })
      
    
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#000", position: "relative" }}
    >
      <MStatusBar />
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ width, flex: 1, justifyContent: "flex-end" }}
          source={require("../Assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.5)"]}
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: 10,
              paddingBottom: 50,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: "#fff",
                fontWeight: "bold",
                marginTop: 20,
              }}
            >
              Login
            </Text>
            <View style={{ marginTop: 20 }}>
              <TextInput
                mode={"outlined"}
                style={{ backgroundColor: "#ccca", borderColor: "red" }}
                label="Email"
                onChangeText={setEmail}
                value={email}
                selectionColor="#13A64A"
                underlineColor="#13A64A"
              />
              <TextInput
                mode={"outlined"}
                style={{ backgroundColor: "#ccca", borderColor: "red" }}
                label="Password"
                onChangeText={setPassword}
                value={password}
                selectionColor="#13A64A"
                underlineColor="#13A64A"
              />

              <MButton
                onPress={handleSignIn}
                dark
                style={{ marginVertical: 10 }}
              >
                Login
              </MButton>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
