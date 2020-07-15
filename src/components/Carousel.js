import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Style from '../styles/Style'

export default props => {

    let Image_Http_URL = { uri: 'https://media.contentapi.ea.com/content/dam/bf/images/bfcom-migration/battlefield-1.jpg.adapt.crop191x100.1200w.jpg'}
   
    return (
        <>
            <SafeAreaView style={styles.Row}>
                <Text style={[Style.fontP, global.fontColor]}>{props.name}</Text>
                <Text style={[Style.fontP, global.fontColor, {fontSize: 12}]}>SEE ALL →</Text>
            </SafeAreaView>
            <ScrollView
            horizontal={true}
            >
                <Image source={Image_Http_URL} style={styles.frame} />
                <Image source={Image_Http_URL} style={styles.frame} />
                <Image source={Image_Http_URL} style={styles.frame} />
                <Image source={Image_Http_URL} style={styles.frame} />               
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    Row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        paddingTop: 15
    },
    frame: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginRight: 10
    },
})