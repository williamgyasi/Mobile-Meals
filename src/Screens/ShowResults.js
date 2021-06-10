import React, { useEffect, useState } from 'react'
import { View,Text,StatusBar,SafeAreaView,FlatList,Image } from 'react-native'
import yelp from '../Api/Yelp'


const ShowResults =({route})=>{
    const [result,setResult]=useState(null)

    const {itemID} =route.params

    const getRestaurant =async(id)=>{
        const response=await yelp.get(`/${id}`)
        console.log(response.data)
        setResult(response.data)
    }

    useEffect(()=>{
        getRestaurant(itemID)
    },[])

    if(!result) return null
    return(
        <SafeAreaView
        style={{
            marginTop:StatusBar.currentHeight
        }}
        >
            <FlatList
            data={result.photos}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>(
                <Image source={{uri:item}} style={{height:200,width:300}} />
            )}

             />
        </SafeAreaView>
    )
}

export default ShowResults;