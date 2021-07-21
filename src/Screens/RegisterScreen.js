import React from 'react'
import {View,Text,SafeAreaView,StatusBar} from 'react-native'


const RegisterScreen =()=>{
    return(
        <SafeAreaView 
        style={{
            marginTop:StatusBar.currentHeight,
        }}
        >
             <Text style={{fontFamily:'Roboto_100Thin'}}>I AM THE REGISTRATION SCREEN</Text>
        </SafeAreaView>
    )
}

export default RegisterScreen;