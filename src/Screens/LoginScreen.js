import React from 'react'
import {View,Text,SafeAreaView,StatusBar} from 'react-native'

const LoginScreen =()=>{
    return(
        <SafeAreaView 
        style={{
            marginTop:StatusBar.currentHeight,
        }}
        >
            <Text>i am the homescreen</Text>
        </SafeAreaView>
    )
}

export default LoginScreen;