import React from "react";
import { View, SafeAreaView, Text } from "react-native";

//COMPONENTS
import { MStatusBar,MTextInput } from "../Components";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <MStatusBar />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical:40
        }}>
        <Text style={{fontFamily:"Metropolis-SemiBold",fontSize:25}}>Login</Text>
        <Text style={{fontFamily:"Metropolis-Regular",marginTop:6}}>Add your details to login</Text>
      </View>

      <View>
        <MTextInput>
          wecac
        </MTextInput>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
