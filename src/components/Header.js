import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Style from '../styles/Style'

export default props => {
    return (
        <View style={style.AppBlack, style.header}>
            <Text style={[Style.fontG, global.fontColor]}>Game Explorer</Text>
        </View>        
    )
}


const style = StyleSheet.create({
    AppBlack: {
        backgroundColor: 'black',
        paddingTop: 8
    },
    AppWhite: {
        backgroundColor: 'white',
        paddingTop: 8
    },
    header:{  
        backgroundColor: 'black',  
        paddingHorizontal: 8,  
        paddingTop: 5
    }  
})
