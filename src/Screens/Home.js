import React from 'react'
import { Text, View } from 'native-base'
import {SafeAreaView} from 'react-native'
//components
import {
SearchBar
} from '../Components'


const HomeScreen = ()=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"red",alignItems:"center",justifyContent:"center"}}>
            <SearchBar />
        </SafeAreaView>
    )
}

export default HomeScreen;