import React from "react";
import { Text, View, StatusBar, SafeAreaView } from "react-native";

//COMPONENTS
import { MStatusBar, MTextInput, MButton } from "../Components";

const OTPScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <MStatusBar />
      <Text
        style={{
          fontFamily: "Metropolis-SemiBold",
          fontSize: 25,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        We have sent an OTP to your Mobile
      </Text>
      <Text
        style={{
          fontFamily: "Metropolis-Regular",
          textAlign: "center",
          marginHorizontal: 35,
          marginVertical: 20,
        }}
      >
        Please check your mobile number continue to reset password
      </Text>

      <View style={{flexDirection:"row"}}>

      </View>

     

      <MButton
        icon
        iconName="arrow-forward"
        bgcolor={"#FC6011"}
        style={{ justifyContent: "center" }}
      >
        Next
      </MButton>
    </SafeAreaView>
  );
};

export default OTPScreen;
