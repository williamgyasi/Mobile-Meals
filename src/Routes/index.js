import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import RandomScreen from "../Screens/Random";
import HomeScreen from "../Screens/Home";
import ShowResults from "../Screens/ShowResults";

const RootStack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Homescreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Random" component={RandomScreen} />
        <RootStack.Screen name="Homescreen" component={HomeScreen} />
        <RootStack.Screen name="ShowResults" component={ShowResults} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
