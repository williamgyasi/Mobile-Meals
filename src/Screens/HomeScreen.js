import React from 'react'
import { Text,View,StatusBar,SafeAreaView } from 'react-native'


//COMPONENTS
import {MStatusBar} from '../Components'

const HomeScreen = ()=>{

    return(
        <SafeAreaView
        style={{
            marginTop:StatusBar.currentHeight
        }}
        >
            <Text style={{fontFamily:'Roboto_500Medium'}}>I AM THE Home SCREEN</Text>
        </SafeAreaView>
    )
}

export default HomeScreen