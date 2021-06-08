import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//SCREENS
import RandomScreen from '../Screens/Random'
import HomeScreen from '../Screens/Home'


const RootStack=createStackNavigator();

const Navigation=()=>{
    return(
        <NavigationContainer>
            <RootStack.Screen name="Random" component={RandomScreen} />
            <RootStack.Screen name="Homescreen" component={HomeScreen} />
        </NavigationContainer>
    )
}

export default Navigation;

