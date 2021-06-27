import React from 'react'
import {TouchableOpacity} from 'react-native'

const MButton =({dark,style})=>{
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        style={{
            ...style,
            
        }}
        >
            
        </TouchableOpacity>
    )
}