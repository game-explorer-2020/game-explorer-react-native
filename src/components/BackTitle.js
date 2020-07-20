import React from 'react'
import { Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import Style from '../styles/Style'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    return (
        <TouchableOpacity onPress={() => goBack()}>
            <SafeAreaView style={style.AppBlack, style.Header}>
                <Icon name="chevron-left" size={20} color={global.mainColor} /> 
                <Text style={[Style.fontG, global.fontColor, {marginLeft: 10}]}>{props.name}</Text>
            </SafeAreaView>
        </TouchableOpacity>
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
    },
    Header:{  
        backgroundColor: 'black',   
        padding: 10,  
        flexDirection:"row",
        alignItems: "center"
    }  
})
