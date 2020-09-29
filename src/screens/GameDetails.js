import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import Style from '../styles/Style';
import Carousel from '../components/CarouselSimilarGames';
import api from '../services/api';
import Favorite from '../components/Favorite';
import moment from 'moment';
import { withNavigation } from 'react-navigation';

function GameDetails({ navigation }) {
    const [gameId, setGameId] = useState(navigation.state.params.gameId);
    const [game, setGameDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadGameDetails();
    }, []);

    loadGameDetails = async () => {
        const response = await api.get('games/details/' + gameId);
        setTimeout(() => {
            setGameDetails({ ...response.data });
            setLoading(false);
        }, 100);
    };

    async function loadNewDetails(id) {
        if (loading) return;
        await setGameId(id);
        setLoading(true);
        loadGameDetails();
    }

    function getDate(params) {
        return moment(new Date(params.date * 1000), 'YYYY MM DD HH:mm').format('LL');
    }

    function getScore(params) {
        if (params.score < 10) return 'Awful';
        if (params.score < 30) return 'Bad';
        if (params.score < 50) return 'Fine';
        if (params.score < 70) return 'Good';
        if (params.score < 90) return 'Great';
        if (params.score <= 100) return 'Masterpiece';
    }

    return (
        <>
            {loading ? (
                <SafeAreaView style={[styles.centerLoading]}>
                    <ActivityIndicator size="large" color="#17B978" />
                </SafeAreaView>
            ) : (
                <ScrollView style={([Style.container], global.backgroundColor)}>
                    <>
                        <SafeAreaView style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: game.coverUrl }} style={styles.frame} />
                            <SafeAreaView style={(styles.gamesDetails, { width: '50%', flex: 1 })}>
                                <Text style={[styles.mainText, global.fontColor]}>{game.name}</Text>
                                <SafeAreaView style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={([Style.fontP], styles.smallTextGrey)}>Genres: </Text>
                                    <Text style={([Style.fontP], styles.smallTextGreen)}>
                                        {game.genres.map((o, i) => (game.genres.length === i + 1 ? o : o + '\n'))} 
                                    </Text>
                                </SafeAreaView>
                                <SafeAreaView style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={([Style.fontP], styles.smallTextGrey)}>Platforms: </Text>
                                    <Text style={([Style.fontP], styles.smallTextGreen)}>
                                        {game.platforms.map((o, i) => (game.genres.length === i + 1 ? o : o + '\n'))} 
                                    </Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        </SafeAreaView>
                        <SafeAreaView style={[styles.Row]}>
                            <SafeAreaView style={{ flex: 1, alignContent: 'flex-start', justifyContent: 'flex-start', marginTop: 5 }}>
                                <Text style={([Style.fontG], styles.smallTextGrey)}>{getDate({ date: game.releaseDate })}</Text>
                                <Text style={([Style.fontG], styles.smallTextGrey)}>{game.involvedCompanies[0]} </Text>
                                <Favorite
                                    style={{ marginLeft: 10 }}
                                    heart={game.favorite ? 'heart' : 'heart-o'}
                                    isGame={true}
                                    contentId={game.id}
                                    size={18}
                                />
                            </SafeAreaView>
                            {game.aggregatedRating ? (
                                <SafeAreaView style={{ flex: 1, alignContent: 'center' }}>
                                    <Text style={[Style.fontP, styles.scoreLarge]}>
                                        {Math.floor(game.aggregatedRating)}
                                    </Text>
                                    <Text style={styles.mediumTextGreen}>{getScore({ score: game.aggregatedRating })}</Text>
                                    <Text style={[Style.fontP, styles.smallTextGrey]}>
                                        Based on {game.aggregatedRatingCount} member ratings
                                    </Text>
                                </SafeAreaView>
                            ) : null}
                            {game.rating ? (
                                <SafeAreaView style={{ flex: 1, alignContent: 'center' }}>
                                    <Text style={[Style.fontP, styles.scoreLarge]}>{Math.floor(game.rating)}</Text>
                                    <Text style={styles.mediumTextGreen}>{getScore({ score: game.rating })}</Text>
                                    <Text style={[Style.fontP, styles.smallTextGrey]}>Based on {game.ratingCount} critic ratings</Text>
                                </SafeAreaView>
                            ) : null}
                        </SafeAreaView>
                        <SafeAreaView style={{ flex: 1 }}>
                            <Text style={[Style.fontP, global.fontColor, styles.summaryText]}>{game.summary}</Text>
                        </SafeAreaView>
                        <Carousel loadNewDetails={loadNewDetails} list={game.similarGames} />
                    </>
                </ScrollView>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 20,
        flexWrap: 'wrap'
    },
    smallTextGrey: {
        fontSize: 14,
        color: '#494949',
        alignItems: 'flex-start',
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    smallTextGreen: {
        fontSize: 14,
        color: '#17B978',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    mediumTextGreen: {
        fontSize: 16,
        color: '#17B978',
        alignItems: 'flex-start',
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    frame: {
        margin: 5,
        height: 175,
        width: 150,
        borderRadius: 5
    },
    gamesDetails: {
        padding: 10,
        alignItems: 'flex-start'
    },
    scoreLarge: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center'
    },
    Row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    summaryText: {
        paddingTop: 5,
        paddingBottom: 3,
        fontSize: 13,
        alignItems: 'flex-start',
        flex: 1
    },
    centerLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
});
export default withNavigation(GameDetails);
