import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { flexDirection, justifyContent } from "styled-system";

//COMPONENTS
import { MStatusBar, MTextInput, MButton } from "../Components";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <MStatusBar />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 40,
        }}
      >
        <Text style={{ fontFamily: "Metropolis-SemiBold", fontSize: 25 }}>
          Login
        </Text>
        <Text style={{ fontFamily: "Metropolis-Regular", marginTop: 6 }}>
          Add your details to login
        </Text>
      </View>

      <View style={{ marginHorizontal: 15 }}>
        <MTextInput placeholder="Email">Email</MTextInput>

        <MTextInput placeholder={"Password"}>Password</MTextInput>
      </View>
      <MButton bgcolor={"#FC6011"} style={{justifyContent:"center"}}>Login</MButton>

      <TouchableOpacity activeOpacity={0.75}>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            fontFamily: "Metropolis-Regular",
            color: "#7C7D7E",
          }}
        >
          Forgot your password?
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 60 }}>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            fontFamily: "Metropolis-Regular",
            letterSpacing: 4,
          }}
        >
          or Login With
        </Text>
        <MButton icon iconName="facebook" bgcolor={"#347EC0"} style={{ marginBottom: 10,justifyContent:"center" }}>
          Login With Facebook
        </MButton>
        <MButton icon iconName="google" style={{ marginBottom: 10,justifyContent:"center",alignItems:"center" }} bgcolor={"#E04E42"}>Google Sign In</MButton>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          
          bottom: 10,
          position: "absolute",
          right: 0,
          left: 0,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            fontFamily: "Metropolis-Regular",
            color: "#7C7D7E",
            marginRight:3
          }}
        >
          Dont have an account yet?
          
        </Text>
        <TouchableOpacity activeOpacity={0.85}>
            <Text  style={{color:"#FC6011"}}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
