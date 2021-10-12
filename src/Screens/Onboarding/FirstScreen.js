import React from "react";
import { View, SafeAreaView, Text, Image,Dimensions } from "react-native";

import { MStatusBar, MButton } from "../../Components";

const width =Dimensions.get('window').width;
const height =Dimensions.get('window').height;

const FirstScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <MStatusBar />
      {/* Image */}
      <Image 
      style={{
          resizeMode:"contain",
          height:height*0.65,
          width:width
      }}
      source={require("../../Assets/firstscreen.png")} />

      {/* DOTS */}
      <View
        style={{
          //   backgroundColor:"red",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          flexDirection: "row",
          
        }}
      >
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 50,
            backgroundColor: "#FC6011",
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 50,
            backgroundColor: "#D6D6D6",
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 50,
            backgroundColor: "#D6D6D6",
            marginHorizontal: 5,
          }}
        ></View>
      </View>

      {/* BOTTOM TEXT */}
      <View 
      style={{alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"#4A4B4D",fontSize:28}}>Find Food You Love</Text>
          <Text style={{textAlign:"center",width:width*0.7,fontSize:13,marginVertical:20,color:"#7C7D7E"}}>Discover the best food from over 1,000
              restaurants and fast delivery to your doorstep
          </Text>
          </View>
      

      {/* BOTTOM */}
      <MButton 
      onPress={()=>navigation.navigate('secondScreen')}
      bgcolor={"#FC6011"} style={{ justifyContent: "center",marginTop:20 }}>
        Next
      </MButton>
    </SafeAreaView>
  );
};

export default FirstScreen;