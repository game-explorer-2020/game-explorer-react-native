import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, Text, StyleSheet, ScrollView } from 'react-native';
import Style from '../styles/Style'
import moment from 'moment';
import api from '../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';


function RequestFeeds() {
    const [feeds, setFeeds] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetchFeeds();
    }, []);

    async function fetchFeeds() {
        const response = await api.get(`/feeds?offset${currentPage}`);
        setFeeds(response.data.map(feed => {
            return {
                ...feed,
                publishedAt: moment(new Date(feed.publishedAt * 1000), "YYYYMMDD").fromNow()
            };
        }));
    }

    return (
        <SafeAreaView>
            <ScrollView horizontal={false}>
            {feeds.map(feed =>     
                <>
                    <Image key={feed.id} source={{uri: feed.imageUrl}} style={styles.frame}></Image>
                    <Text key={feed.id1} style={[Style.fontP, global.fontColor, styles.newsText]}>{feed.title}</Text>
                    <SafeAreaView key={feed.id2} style={styles.Row}>
                        <Icon key={feed.id3} name="heart" size={13} color="#17B978" />  
                        <Text key={feed.id4} style={[Style.fontP, styles.timeStamp]}>{feed.publishedAt}</Text>
                    </SafeAreaView>
                </>
            )}
            </ScrollView>
        </SafeAreaView>
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
        height: 200,
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
        fontSize: 13,
        color: '#494949',
        letterSpacing: 0.15
    }
})

export default RequestFeeds;