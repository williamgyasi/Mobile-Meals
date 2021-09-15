import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 


const MButton =({dark,style,children,onPress,bgcolor,icon,iconName})=>{
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{
            ...style,
            borderRadius:20,
            padding:15,
            marginHorizontal:10,
            borderWidth:dark?1:null,
            borderColor:dark?'#8DE969':"#fff",
            backgroundColor:dark?null:bgcolor,
            flexDirection:"row",
            
        }}
        >
            {
                icon &&
                <FontAwesome5 name={iconName} size={20} color="#fff"  />
            }
            <Text style={{textAlign:"center",color:"#fff",fontSize:15,fontFamily:"Metropolis-Regular",marginLeft:10}}>
                {children}
            </Text>
            
        </TouchableOpacity>
    )
}

export default MButton;