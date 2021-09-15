import React from "react";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { alignSelf, justifyContent } from "styled-system";

//COMPONENTS
import { MStatusBar, MTextInput, MButton } from "../Components";

const NewPasswordScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <MStatusBar />
      <Text
        style={{
          fontFamily: "Metropolis-SemiBold",
          fontSize: 25,
          textAlign: "center",
          marginTop: 30,
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

      <View style={{ 
          flexDirection: "row", 
      flexWrap: "wrap",
      marginHorizontal:35,marginVertical:20,
      justifyContent:"space-around"
      }}>
          <Text 
          adjustsFontSizeToFit={true}
          style={{
              width:50,
              height:50,
              backgroundColor:"#F2F2F2",
              textAlign:"center",
              borderRadius:10,
              textAlignVertical:"center",
              
              alignSelf:"center"
          }}>
              1
          </Text>

          <Text 
          adjustsFontSizeToFit={true}
          style={{
              width:50,
              height:50,
              backgroundColor:"#F2F2F2",
              textAlign:"center",
              borderRadius:10,
              textAlignVertical:"center",
              
              alignSelf:"center"
          }}>
              1
          </Text>

          <Text 
          adjustsFontSizeToFit={true}
          style={{
              width:50,
              height:50,
              backgroundColor:"#F2F2F2",
              textAlign:"center",
              borderRadius:10,
              textAlignVertical:"center",
              
              alignSelf:"center"
          }}>
              1
          </Text>
          <Text 
          adjustsFontSizeToFit={true}
          style={{
              width:50,
              height:50,
              backgroundColor:"#F2F2F2",
              textAlign:"center",
              borderRadius:10,
              textAlignVertical:"center",
              
              alignSelf:"center"
          }}>
              1
          </Text>

      </View>

      <MButton
        icon
        iconName="arrow-right"
        bgcolor={"#FC6011"}
        style={{ justifyContent: "center" }}
      >
        Next
      </MButton>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
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
          Didnt recieve yet?
        </Text>
        <TouchableOpacity activeOpacity={0.85}>
          <Text style={{ color: "#FC6011", marginVertical: 20 }}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewPasswordScreen;
