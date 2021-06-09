import { Item } from 'native-base'
import React from 'react'
import {View,Text, FlatList} from 'react-native'

const ResultsList=({title,results})=>{
    return(
        <View>
            <Text>{title}</Text>
            <FlatList 
            data={results}
            horizontal
            keyExtractor={()=>results.id}
            renderItem={({item})=>(
                <Text>{item.name}</Text>
            )}
            />
        </View>
    )
}

export default ResultsList