import { Text } from 'native-base';
import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const SearchBar =({term,onTermChange,onTermSubmit})=>{
    return(
        <View style={styles.container}>
            <Ionicons name="search" style={styles.iconSearch} size={20} />
            <TextInput
            style={styles.inputText}
            value={term}
            onChangeText={onTermChange}
            placeholder="Search"
            autoCapitalize="none"
            onEndEditing={onTermSubmit}
             />

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#ccc",
        padding:15,
        flexDirection:"row",
        alignItems:"center",
        height:50,
        margin:10,
        borderRadius:10,
    },
    iconSearch:{
        marginRight:10,
    },
    inputText:{
        flex:1,
    
    }
})

export default SearchBar;