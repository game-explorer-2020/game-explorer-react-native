import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableHighlight, FlatList, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import Style from '../styles/Style';
import api from '../services/api';

function Carousel(props) {
    const [popularGames, setPopularGames] = useState([]);
    const [favoriteGames, setFavoriteGames] = useState([]);
    const [favoriteNews, setFavoriteNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadMyList();
    }, []);

    loadMyList = async () => {
        if(loading) return null;
        setLoading(true);
            setInterval(async () => {
            const response = await api.get('games');
            const response2 = await api.get('games/favorites');
            const response3 = await api.get('feeds/favorites');
            setTimeout(() => {
                setPopularGames([...response.data]);
                setFavoriteGames([...response2.data]);
                setFavoriteNews([...response3.data]);
                setLoading(false);
            }, 100);
        }, 2500);
    };

    return (
        <>
            {loading ? (
                <SafeAreaView style={[styles.centerLoading]}>
                    <ActivityIndicator size="large" color="#17B978" />
                </SafeAreaView>
            ) : (
                <>
                    <SafeAreaView style={{ flex: 1 }}>
                        <SafeAreaView style={styles.Row}>
                            <Text style={[Style.fontP, global.fontColor]}>Popular Games</Text>
                            <TouchableHighlight onPress={() => props.showList('GameList', popularGames)}>
                                <Text style={[global.fontColor, { fontSize: 13 }]}>SEE ALL →</Text>
                            </TouchableHighlight>
                        </SafeAreaView>
                        <FlatList
                            data={popularGames}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            renderItem={({ item }) => (
                                <TouchableHighlight onPress={() => props.showItem('GameDetails', item.id)}>
                                    <Image source={{ uri: item.coverUrl }} style={styles.frame} />
                                </TouchableHighlight>
                            )}
                        />
                    </SafeAreaView>
                    <SafeAreaView style={{ flex: 1 }}>
                        <SafeAreaView style={styles.Row}>
                            <Text style={[Style.fontP, global.fontColor]}>Favorite Games</Text>
                            <TouchableHighlight onPress={() => props.showList('GameList', favoriteGames, true)}>
                                <Text style={[global.fontColor, { fontSize: 13 }]}>SEE ALL →</Text>
                            </TouchableHighlight>
                        </SafeAreaView>
                        <FlatList
                            data={favoriteGames}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            renderItem={({ item }) => (
                                <TouchableHighlight onPress={() => props.showItem('GameDetails', item.id)}>
                                    <Image source={{ uri: item.coverUrl }} style={styles.frame} />
                                </TouchableHighlight>
                            )}
                        />
                    </SafeAreaView>
                    <SafeAreaView style={{ flex: 1 }}>
                        <SafeAreaView style={styles.Row}>
                            <Text style={[Style.fontP, global.fontColor]}>Favorite News</Text>
                            <TouchableHighlight onPress={() => props.showList('FavoriteNews', favoriteNews)}>
                                <Text style={[global.fontColor, { fontSize: 13 }]}>SEE ALL →</Text>
                            </TouchableHighlight>
                        </SafeAreaView>
                        <FlatList
                            data={favoriteNews}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            renderItem={({ item }) => (
                                <TouchableHighlight onPress={() => props.showItem('WebViewNews', item.url)}>
                                    <Image source={{ uri: item.imageUrl }} style={styles.frame} />
                                </TouchableHighlight>
                            )}
                        />
                    </SafeAreaView>
                </>
            )}      
        </>
    );
}

const styles = StyleSheet.create({
    Row: {
        paddingTop: 12,
        paddingBottom: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    frame: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginRight: 5
    },
    centerLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default withNavigation(Carousel);
