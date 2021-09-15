import React from "react"
import {TextInput} from 'react-native-paper'
import { Input, Center, NativeBaseProvider } from "native-base"

const theme={
    colors:{
        primary:"transparent",
        underlineColor:"green"
    },
    roundness:40
}
const MTextInput = ({value,OnChangeValue,placeholder,children}) => {
  return (
    <TextInput
    theme={theme}
    style={{
        backgroundColor:"#F2F2F2",
        marginBottom:30
    }}
    placeholderTextColor="#C8C9C9"
    outlineColor="transparent"
    mode="outlined"
    placeholder={children}
    value={value}
    passwordRules={false}
    onChangeText={OnChangeValue}
  />
  )
}


export default MTextInput

