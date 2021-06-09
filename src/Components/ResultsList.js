import React from 'react'
import {View,Text} from 'react-native'

const ResultsList=({title,results})=>{
    return(
        <View>
            <Text>{title}</Text>
            <Text>I HAVE{results.length}</Text>
        </View>
    )
}

export default ResultsList