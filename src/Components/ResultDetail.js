import React,{useEffect} from 'react'
import { View,Text,Image } from 'react-native'
// import ProdigeeConnect from '../Api/ProdigeeConnect'


const ResultDetail =({item})=>{
   
    return(
        <View style={{marginRight:10}}>
            <Image style={{width:200,height:200,borderRadius:10,resizeMode:"cover",marginBottom:10}} source={{uri:item.image_url}} />
            <Text>{item.name}</Text>
            <Text>{item.rating} Stars, {item.review_count} Review </Text>
        </View>
    )
}

export default ResultDetail;