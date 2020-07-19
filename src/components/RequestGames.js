import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Style from '../styles/Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';

function NewsFeed ({ navigation }) {
    const [games, setGames] = useState([]);

    useEffect(() => {
    async function loadFeeds() {
        const response = await api.getDataFromAPI('games');
        setFeeds(response.data);
    }

        loadFeeds();
    }, []);

    function handleNavigate(item) {
        navigation.navigate('WebViewNews', { item });
    }

    return (           
        <>
            <FlatList
                data={games}
                keyExtractor={(item,index) => index.toString()}
                vertical
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity onPress={() => handleNavigate(item)}>
                        <Image source={{uri: item.imageUrl}} style={styles.frame}></Image>
                    </TouchableOpacity>
                </SafeAreaView>
                )}
            />
        </>
    )
 }
    
const styles = StyleSheet.create({
    Row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        marginTop: 5,
        marginBottom: 20
    },
    frame: {
        marginTop: 8,
        height: 175,
        width: 'auto',
        borderRadius: 10
    },
    newsText: {
        paddingTop: 5,
        paddingBottom: 3,
        alignItems: 'flex-start'
    },
    timeStamp: {
        alignItems: 'flex-start',
        fontSize: 15,
        color: '#494949',
        letterSpacing: 0.15
    }
})

export default withNavigation(NewsFeed);