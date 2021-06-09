import { Item } from 'native-base'
import React from 'react'
import {View,Text, FlatList} from 'react-native'

//COMPONENTS
import {
    ResultDetail
}from '../Components'

const ResultsList=({title,results})=>{
    return(
        <View style={{marginBottom:10}}>
            <Text style={{marginBottom:10,fontSize:20,fontWeight:"bold"}}>{title}</Text>
            <FlatList 
            data={results}
            horizontal
            bounces
            showsHorizontalScrollIndicator={false}
            keyExtractor={()=>results.id}
            renderItem={({item})=>(
               <ResultDetail item={item}  />
            )}
            />
        </View>
    )
}

export default ResultsList