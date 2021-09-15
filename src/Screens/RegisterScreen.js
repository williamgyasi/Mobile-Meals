import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

//COMPONENTS
import { MStatusBar, MTextInput, MButton } from "../Components";

const RegisterScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", flex: 1, position: "relative" }}
    >
      <MStatusBar />
      <ScrollView style={{flexGrow:1}} >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 30,
          }}
        >
          <Text style={{ fontFamily: "Metropolis-SemiBold", fontSize: 25 }}>
            Sign Up
          </Text>
          <Text style={{ fontFamily: "Metropolis-Regular", marginTop: 6 }}>
            Add your details to sign up
          </Text>
        </View>

        <View style={{ marginHorizontal: 15 }}>
          <MTextInput placeholder="Full Name">Full Name</MTextInput>
          <MTextInput placeholder={"Email"}>Email</MTextInput>
          <MTextInput placeholder={"Phone No"}>Mobile No</MTextInput>
          <MTextInput placeholder={"Password"}>Address</MTextInput>
          <MTextInput placeholder={"Password"}>Password</MTextInput>
          <MTextInput placeholder={"Password"}>Confirm Password</MTextInput>
        </View>
        <MButton bgcolor={"#FC6011"} style={{ justifyContent: "center" }}>
          Sign Up
        </MButton>


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
              marginRight: 3,
            }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity activeOpacity={0.85}>
            <Text style={{ color: "#FC6011" }}>Login</Text>
          </TouchableOpacity>
        </View>

        
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default RegisterScreen;
