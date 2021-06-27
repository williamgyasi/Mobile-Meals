import {
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Text,
  StatusBar,
  View,
  Button
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";


//COMPONENTS
import { MStatusBar,MButton } from "../Components";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000",position:"relative" }}>
      <MStatusBar />
      <View style={{ height: "70%" }}>
        <ImageBackground
          style={{ width, flex: 1, justifyContent: "flex-end" }}
          source={require("../Assets/imagebac.webp")}
          resizeMode="cover"
        >
            <LinearGradient
            start={{x:0,y:0}}
            end={{x:0,y:1}}
            colors={[
                "transparent","#000"
            ]}
            style={{
                flex:1,
                justifyContent:"flex-end",
                paddingHorizontal:30,
                paddingBottom:50
            }}
            >
                <Text style={{fontSize:50,color:"#fff",fontWeight:"bold"}}>
                    Mobile Meals
                </Text>
                <Text style={{fontSize:14,color:"#ccca",fontWeight:"100",textAlign:"center",}}>
                    Food on the Go!
                </Text>
            </LinearGradient>

            
        </ImageBackground>
      </View>
      <View style={{position:"absolute",bottom:80,right:0,left:0,marginHorizontal:10}}>
          <MButton 
          onPress={()=>navigation.navigate('Registration')}
          style={{marginBottom:10}} >
              Register
          </MButton>
          <MButton 
          onPress={()=>navigation.navigate('LoginScreen')}
          dark >
              Login
          </MButton>
      </View>
    </SafeAreaView>
  );
}
