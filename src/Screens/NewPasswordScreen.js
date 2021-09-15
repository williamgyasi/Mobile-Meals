import React from "react";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const {height} =Dimensions.get("window")


//COMPONENTS
import { MStatusBar, MTextInput, MButton,MFloatingButton } from "../Components";

const NewPasswordScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <MStatusBar />
      <MFloatingButton style={{left:10,top:20}} />
      <Text
        style={{
          fontFamily: "Metropolis-SemiBold",
          fontSize: 25,
          textAlign: "center",
          marginTop: height*0.11,
        }}
      >
        New Password
      </Text>
      <Text
        style={{
          fontFamily: "Metropolis-Regular",
          textAlign: "center",
          marginHorizontal: 35,
          marginVertical: 10,
          color: "#515056",
        }}
      >
        Please enter a new password to reset your account
      </Text>

      <MTextInput placeholder="Email">New Password</MTextInput>
      <MTextInput placeholder="Email">Confirm Password</MTextInput>

      

      <MButton
        icon
        iconName="check-circle"
        bgcolor={"#FC6011"}
        style={{ justifyContent: "center" }}
      >
        Confirm
      </MButton>

      
    </SafeAreaView>
  );
};

export default NewPasswordScreen;
