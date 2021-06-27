import React from 'react'
import {TouchableOpacity,Text} from 'react-native'

const MButton =({dark,style,children})=>{
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        style={{
            ...style,
            borderRadius:10,
            padding:20,
            borderWidth:dark?1:null,
            borderColor:dark?'#8DE969':"#fff",
            backgroundColor:dark?null:"#8DE969"
        }}
        >
            <Text style={{textAlign:"center",color:"#fff",fontSize:15}}>
                {children}
            </Text>
            
        </TouchableOpacity>
    )
}

export default MButton;