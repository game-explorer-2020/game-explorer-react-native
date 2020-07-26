import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    fontG: {
        fontSize: 22,
        fontFamily: 'Nunito-Bold.ttf',
        textAlign: 'justify'
    },
    fontP: {
        fontSize: 16,
        fontFamily: 'Nunito-Regular.ttf',
        textAlign: 'justify'
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
    },
    container: {
        flex: 1,
        margin: 0,
        width: '100%',
        height: '100%'
    }
})
