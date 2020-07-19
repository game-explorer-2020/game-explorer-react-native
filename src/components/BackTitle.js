import React from 'react'
import { Text, SafeAreaView, StyleSheet} from 'react-native'
import Style from '../styles/Style'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    return (
        <SafeAreaView style={style.AppBlack}>
            <Icon name="arrow-left" size={20} color="#000000" /> 
            <Text style={[Style.fontG, global.fontColor]}>{props.name}</Text>
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
