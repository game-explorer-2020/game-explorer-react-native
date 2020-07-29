import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation';
import Style from '../styles/Style'
import api from '../services/api';


function Carousel ( props, { navigation }) {

    const [myList, setMyList] = useState([]);
    
    useEffect(() => {
        async function loadMyList() {
            if(props.isGame){
                const response = await api.get('games');
                setMyList([...response.data]);
            } else {
                const response = await api.get('feeds');
                setMyList([...response.data]);
            }
        } 
        loadMyList();
    }, []);

  

    return (
        <SafeAreaView style={{flex:1},{width:330}}>
            <SafeAreaView style={styles.Row}>
                <Text style={[Style.fontP, global.fontColor]}>{props.name}</Text>
                <TouchableOpacity onPress={() => props.showList(props.isGame?'ListGames':'ListFeed', myList)}>
                    <Text style={[global.fontColor, {fontSize: 13}]}>SEE ALL →</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <FlatList
            data={myList}
            keyExtractor={(item,index) => index.toString()}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => props.isGame?props.showItem('GameDetails', item.id):props.showItem('WebViewNews', item.url)}>
                    <Image source={props.isGame?{uri: item.coverUrl}:{uri: item.imageUrl}} style={styles.frame}/>
                </TouchableOpacity>
            )}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Row: {
        paddingTop: 12,
        paddingBottom: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    frame: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginRight: 10
    }
})

export default withNavigation(Carousel);