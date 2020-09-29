import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, Image, TouchableHighlight, FlatList } from 'react-native'
import Style from '../styles/Style'

export default function CarouselSimilarGames( props ) {
 
    const [myList, setMyList] = useState([props.list]);
    
    useEffect(() => {
        async function loadMyList() {
            setMyList(props.list)
        } 
        loadMyList();
    }, []);

    return (
        <SafeAreaView style={{flex:1}}>
            <SafeAreaView style={styles.Row}>
                <Text style={[styles.fontTitle, global.fontColor]}>Similar Games</Text>
            </SafeAreaView>
            <FlatList
            data={myList}
            keyExtractor={(item,index) => index.toString()}
            horizontal
            renderItem={({ item }) => (
                <TouchableHighlight onPress={() => props.loadNewDetails(item.id)}>
                    <Image source={{uri: item.coverUrl}} style={styles.frame}/>
                </TouchableHighlight>
            )}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingBottom: 7
    },
    frame: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10
    },
    fontTitle: {
        fontSize: 18,
        fontFamily: 'Nunito-Regular.ttf',
        textAlign: 'justify'
    }
})

