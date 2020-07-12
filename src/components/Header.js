import React from 'react'
import { Text, SafeAreaView, StyleSheet} from 'react-native'
import Style from '../styles/Style'

export default props => {
    return (
        <SafeAreaView style={style.AppBlack}>
            <Text style={[Style.fontG, global.fontColor]}>Game Explorer</Text>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    AppBlack: {
        backgroundColor: 'black',
        alignItems: "flex-start",
        paddingTop: 10,
        paddingLeft: 10
    },
    AppWhite: {
        backgroundColor: 'white',
        alignItems: "flex-start",
        paddingTop: 10,
        paddingLeft: 10
    }
})
