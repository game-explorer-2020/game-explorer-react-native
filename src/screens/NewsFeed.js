import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import Style from '../styles/Style';
import moment from 'moment';
import api from '../services/api';
import { withNavigation } from 'react-navigation';
import Favorite from '../components/Favorite';

function NewsFeed({ navigation }) {
    const [feeds, setFeeds] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadFeeds();
    }, []);

    loadFeeds = async () => {
        if (loading) return;
        setLoading(true);
        const response = await api.get('feeds?page=' + currentPage);
        setTimeout(() => {
            setFeeds([...feeds, ...response.data]);
            setLoading(false);
        }, 200);
    };

    function handleNavigate(item) {
        navigation.navigate('WebViewNews', { url: item.url });
    }

    function getDate(param) {
        return moment(new Date(param.date * 1000), 'YYYYMMDD').fromNow();
    }

    async function handleLoadMore() {
        if (loading) return;
        await setCurrentPage(currentPage + 1);
        loadFeeds();
    }

    function renderFooter() {
        if (!loading) return null;
        return (
            <SafeAreaView style={[styles.bottomLoading]}>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        );
    }

    return (
        <>
            {loading ? (
                <SafeAreaView style={[styles.centerLoading]}>
                    <ActivityIndicator size="large" color="#494949" />
                </SafeAreaView>
            ) : (
                <>
                    <FlatList
                        data={feeds}
                        extraData={feeds}
                        vertical
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        onEndReached={handleLoadMore}
                        onEndThreshold={0.1}
                        contentContainerStyle={{ flexGrow: 1 }}
                        ListFooterComponent={renderFooter}
                        renderItem={({ item }) => (
                            <>
                                <TouchableHighlight onPress={() => handleNavigate(item)}>
                                    <Image source={{ uri: item.imageUrl }} style={styles.frame}></Image>
                                </TouchableHighlight>
                                <Text style={[Style.fontP, global.fontColor, styles.newsText]}>
                                    {item.title}
                                    {item.id}
                                </Text>
                                <SafeAreaView style={styles.Row}>
                                    <Favorite heart={item.isFavorite ? 'heart' : 'heart-o'} isGame={false} contentId={item.id} size={14} />
                                    <Text style={[Style.fontP, styles.timeStamp]}>{getDate({ date: item.publishedAt })}</Text>
                                </SafeAreaView>
                            </>
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
    bottomLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        zIndex: 10
    },
    centerLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default withNavigation(NewsFeed);
