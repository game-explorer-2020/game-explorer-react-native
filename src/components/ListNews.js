import React from 'react'
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native'
import Style from '../styles/Style'
import Icon from 'react-native-vector-icons/FontAwesome';
 

export default props => {

    
    return (
        <SafeAreaView style={styles.paddingFeed}>
            <Image></Image>
            <Text style={[Style.fontP, global.fontColor, styles.newsText]}>
                Noticia     Noticia     Noticia     Noticia     Noticia     Noticia     Noticia Noticia     Noticia     Noticia     Noticia     NNoticia     Noticia     Noticia     Noticia     Noticia     Noticia     NoticiaNoticia     Noticia     Noticia     Noticia     Noticia     Noticia     NoticiaNoticia     Noticia     Noticia     Noticia     Noticia     Noticia     NoticiaNoticia     Noticia     Noticia     Noticia     Noticia     Noticia     Noticiaoticia     Noticia     Noticia Noticia     Noticia     Noticia     Noticia     Noticia     Noticia     Noticia
            </Text>
            <SafeAreaView style={styles.Row}>
                <Icon name="heart" size={25} color="green" />  
                <Text style={[Style.fontP, global.fontColor]}>
                    See More
                </Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    paddingFeed: {
        padding: 25,
        margin: 25
    },
    Row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        paddingTop: 15
    },
    frame: {
        height: 200,
        width: 'auto',
        borderRadius: 10
    },
    newsText: {
        alignItems: 'flex-start'
    }
})