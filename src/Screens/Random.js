import React, { useEffect } from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";
// import Prodigee from "../Api/Prodigee"
const Random = () => {

  const testApi = async () => {
      console.log("aca")
      const response = await Prodigee.post('/api/me',{

      })
      .catch((error)=>{
          console.log(error)
      })
    //   console.log(response.data)
      
  };


  useEffect(() => {
    testApi();
    
  }, []);

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <Text>I AM THE RANDOM SCREEN</Text>
    </SafeAreaView>
  );
};

export default Random;
