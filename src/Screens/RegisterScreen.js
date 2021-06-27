import React from 'react'
import {View,Text,SafeAreaView,StatusBar} from 'react-native'

const RegisterScreen =()=>{
    return(
        <SafeAreaView 
        style={{
            marginTop:StatusBar.currentHeight,
        }}
        >
            <Text>i am the registerScreen</Text>
        </SafeAreaView>
    )
}

export default RegisterScreen;