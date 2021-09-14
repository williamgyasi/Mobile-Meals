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
            <Text style={{fontFamily:'Metropolis-Light',fontSize:40}}>I AM THE Lock Screen </Text>
        </SafeAreaView>
    )
}

export default HomeScreen