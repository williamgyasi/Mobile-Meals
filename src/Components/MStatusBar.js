import React from 'react'
import {View,Text,StatusBar} from 'react-native'

const MStatusBar =({dark,color})=>{
    return(
        <StatusBar
        animated
        barStyle={dark?'dark-content':'light-content'}
        backgroundColor={dark?"red":"#000"}
         />
        
    )
}

export default MStatusBar