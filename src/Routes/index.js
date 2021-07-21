import React,{useEffect,useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//SCREENS
import LoginScreen from "../Screens/LoginScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import HomeScreen from "../Screens/HomeScreen";

const RootStack = createStackNavigator();

const IndexStack = [
  { name: "LoginScreen", component: LoginScreen },
  { name: "WelcomeScreen", component: WelcomeScreen },
  { name: "Registration", component: RegisterScreen },
  { name: "HomeScreen", component: HomeScreen},

];

const IndexNavigator = ({ initialRouteName }) => {
  return (
    <RootStack.Navigator initialRouteName={initialRouteName}>
      {IndexStack.map((obj) => (
        <RootStack.Screen
          name={obj.name}
          key={obj.name}
          options={{ headerShown: false }}
          component={obj.component}
        />
      ))}
    </RootStack.Navigator>
  );
};


const Navigation = () => {
  const [user,setUser]=useState(null)

  
  useEffect(()=>{
    
  },[])

  return (
    <NavigationContainer>
      <IndexNavigator initialRouteName="HomeScreen" />
    </NavigationContainer>
  );
};

export default Navigation;
