import React from 'react'
import {View,Text,StatusBar} from 'react-native'

const MStatusBar =({dark,color})=>{
    return(
        <StatusBar
        animated
        barStyle={dark?'light-content':'dark-content'}
        backgroundColor={dark?"red":"#fff"}
         />
        
    )
}

export default MStatusBar