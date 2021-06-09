import React from 'react'
import { View,Text,StatusBar,SafeAreaView } from 'react-native'

const ShowResults =({route})=>{
    return(
        <SafeAreaView
        style={{
            marginTop:StatusBar.currentHeight
        }}
        >
            <Text>
                {route.params.itemID}
            </Text>
        </SafeAreaView>
    )
}

export default ShowResults;