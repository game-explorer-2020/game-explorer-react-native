import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, TouchableHighlight, ActivityIndicator } from 'react-native';
import Style from '../styles/Style';
import moment from 'moment';
import api from '../services/api';
import Favorite from '../components/Favorite';

function NewsFeed({ navigation }) {
    const [feeds, setFeeds] = useState(navigation.state.params.list);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadFeeds();
    }, []);

    loadFeeds = async () => {
        if (loading) return;
        setLoading(true);
        const response = await api.get('feeds/favorites');
        setTimeout(() => {
            setFeeds([...feeds, ...response.data]);
            setLoading(false);
        }, 100);
    };

    function handleNavigate(item) {
        navigation.navigate('WebViewNews', { url: item.url });
    }

    function getDate(param) {
        return moment(new Date(param.date * 1000), 'YYYYMMDD').fromNow();
    }

    return (
        <>
            {loading ? (
                <SafeAreaView style={[styles.centerLoading]}>
                    <ActivityIndicator size="large" color="#17B978" />
                </SafeAreaView>
            ) : (
                <>
                    <FlatList
                        data={feeds}
                        keyExtractor={(item, index) => index.toString()}
                        vertical
                        showsHorizontalScrollIndicator={false}
                        onEndThreshold={0.1}
                        contentContainerStyle={{ flexGrow: 1 }}
                        renderItem={({ item }) => (
                            <SafeAreaView style={Style.backgroundDark}>
                                <TouchableHighlight onPress={() => handleNavigate(item)}>
                                    <Image source={{ uri: item.imageUrl }} style={styles.frame}></Image>
                                </TouchableHighlight>
                                <Text style={[Style.fontP, global.fontColor, styles.newsText]}>{item.title}</Text>
                                <SafeAreaView style={styles.Row}>
                                    <Favorite heart={item.favorite ? 'heart' : 'heart-o'} isGame={false} contentId={item.id} size={14} />
                                    <Text style={[Style.fontP, styles.timeStamp]}>{getDate({ date: item.publishedAt })}</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        )}
                    />
                </>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    Row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 5,
        marginBottom: 15
    },
    frame: {
        marginTop: 8,
        height: 175,
        width: '100%',
        borderRadius: 10
    },
    newsText: {
        paddingTop: 5,
        paddingBottom: 3,
        alignItems: 'flex-start'
    },
    timeStamp: {
        alignItems: 'flex-end',
        fontSize: 15,
        color: '#494949',
        letterSpacing: 0.15
    },
    centerLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
});

export default withNavigation(NewsFeed);
