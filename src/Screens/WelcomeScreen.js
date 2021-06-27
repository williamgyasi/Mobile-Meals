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
import { MStatusBar } from "../Components";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000",position:"relative" }}>
      <MStatusBar />
      <View style={{ height: "70%" }}>
        <ImageBackground
          style={{ width, flex: 1, justifyContent: "flex-end" }}
          source={require("../Assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
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
                <Text style={{fontSize:18,color:"#fff",fontWeight:"300",textAlign:"center"}}>
                    Food on the Go!
                </Text>
            </LinearGradient>

            
        </ImageBackground>
      </View>
      <View style={{position:"absolute",bottom:0,right:0,left:0,}}>
          <Button title="Login"  />
          <Button title="Register" />
      </View>
    </SafeAreaView>
  );
}
