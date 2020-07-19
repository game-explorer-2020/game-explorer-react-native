import React from 'react'
import { Text, SafeAreaView, StyleSheet} from 'react-native'
import Style from '../styles/Style'
import Icon from 'react-native-fontawesome';

export default props => {
    return (
        <SafeAreaView style={style.AppBlack}>
            <Text style={[Style.fontG, global.fontColor]}>Game Explorer</Text>
            <Icon name="heart" size={14} color="#17B978" />  
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    AppBlack: {
        backgroundColor: 'black',
        alignItems: "flex-start",
        paddingTop: 8,
    },
    AppWhite: {
        backgroundColor: 'white',
        alignItems: "flex-start",
        paddingTop: 8,
    }
})
