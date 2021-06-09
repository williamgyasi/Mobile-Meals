import { Item } from 'native-base'
import React from 'react'
import {View,Text, FlatList,TouchableOpacity} from 'react-native'
import {withNavigation} from '@react-navigation/compat'

//COMPONENTS
import {
    ResultDetail
}from '../Components'

const ResultsList=({title,results,navigation})=>{
    return(
        <View style={{marginBottom:10}}>
            <Text style={{marginBottom:10,fontSize:20,fontWeight:"bold"}}>{title}</Text>
            <FlatList 
            data={results}
            horizontal
            bounces
            showsHorizontalScrollIndicator={false}
            keyExtractor={(results)=>results.id}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate("ShowResults",{
                    itemID:item.id
                })}>
                    <ResultDetail item={item} />
                </TouchableOpacity>
                
            )}
            />
        </View>
    )
}

export default withNavigation(ResultsList)