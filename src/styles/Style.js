import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    fontG: {
        fontSize: 22,
        fontFamily: 'NunitoBold',
        textAlign: 'auto'
    },
    fontP: {
        fontSize: 16,
        fontFamily: 'NunitoRegular',
        textAlign: 'auto'
    },
    fontLight: {
        color: 'black'
    },
    fontDark: {
        color: 'white'
    },
    backgroundDark: {
        backgroundColor: 'black',
        flexGrow: 1,
        justifyContent: "center", //Centraliza na vertical da tela
        alignItems: "center",      //Centraliza na horizontal da tela
        padding: 20
    },
    backgroundight: {
        backgroundColor: 'white',
        flexGrow: 1,
        justifyContent: "center", //Centraliza na vertical da tela
        alignItems: "center",      //Centraliza na horizontal da tela
        padding: 20
    }
})
