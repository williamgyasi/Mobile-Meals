import React from "react";
import { Text, View, StatusBar, SafeAreaView } from "react-native";

//COMPONENTS
import { MStatusBar, MTextInput, MButton } from "../Components";

const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <MStatusBar />
      <Text style={{ fontFamily: "Metropolis-SemiBold", fontSize: 25 }}>
        Reset Password
      </Text>
      <Text style={{ fontFamily: "Metropolis-Regular", marginTop: 6 }}>
        Please enter the email to recieve a link to create a new password via email.
      </Text>

      <MTextInput placeholder={"Password"}>Email</MTextInput>

      <MButton bgcolor={"#FC6011"} style={{ justifyContent: "center" }}>
        Send Link
      </MButton>
    </SafeAreaView>
  );
};

export default ForgotPassword;
