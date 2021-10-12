import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import LoginScreen from "../Screens/LoginScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import HomeScreen from "../Screens/HomeScreen";
import ForgotPassword from "../Screens/ForgotPassword";
import OTPScreen from "../Screens/OTPScreen";
import NewPasswordScreen from "../Screens/NewPasswordScreen";

//ONBORADDING UI
import FirstScreen from "../Screens/Onboarding/FirstScreen";
import SecondScreen from "../Screens/Onboarding/SecondScreen";
import ThirdScreen from "../Screens/Onboarding/ThirdScreen";

const RootStack = createStackNavigator();
const SliderNav = createStackNavigator();

const sliderStack = [
  { name: "firstScreen", component: FirstScreen },
  { name: "secondScreen", component: SecondScreen },
  { name: "thirdScreen", component: ThirdScreen },
];

const OnboardingSlider = () => {
  return (
    <SliderNav.Navigator
      initialRouteName="firstScreen"
      screenOptions={{
        headerShown: true,
      }}>
        {sliderStack.map((obj) => (
        <SliderNav.Screen
          name={obj.name}
          key={obj.name}
          options={{ headerShown: false }}
          component={obj.component}
        />
      ))}


    </SliderNav.Navigator>
  );
};

const IndexStack = [
  { name: "LoginScreen", component: LoginScreen },
  { name: "WelcomeScreen", component: WelcomeScreen },
  { name: "Registration", component: RegisterScreen },
  { name: "HomeScreen", component: HomeScreen },
  { name: "ForgotPassword", component: ForgotPassword },
  { name: "OTPScreen", component: OTPScreen },
  { name: "NewPasswordScreen", component: NewPasswordScreen },
  { name: "OnboardingSlider", component: OnboardingSlider },
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
  // const [user,setUser]=useState(null)

  // useEffect(()=>{

  // },[])

  return (
    <NavigationContainer>
      <IndexNavigator initialRouteName="OnboardingSlider" />
    </NavigationContainer>
  );
};

export default Navigation;
