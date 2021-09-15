import React from "react";
import { Text, View, StatusBar, SafeAreaView } from "react-native";

//COMPONENTS
import { MStatusBar, MTextInput, MButton } from "../Components";

const ForgotPassword = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#fff"}}>
      <MStatusBar />
      <Text style={{ fontFamily: "Metropolis-SemiBold", fontSize: 25,textAlign:"center",marginTop:30 }}>
        Reset Password
      </Text>
      <Text style={{ fontFamily: "Metropolis-Regular",textAlign:"center",marginHorizontal:35,marginVertical :20 }}>
        Please enter the email to recieve a link to create a new password via
        email.
      </Text>

      <MTextInput placeholder={"Password"}>Email</MTextInput>

      <MButton icon iconName="telegram" bgcolor={"#FC6011"} style={{ justifyContent: "center" }}>
        Send Link
      </MButton>
    </SafeAreaView>
  );
};

export default ForgotPassword;
