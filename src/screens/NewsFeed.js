import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Style from '../styles/Style'
import moment from 'moment';
import api from '../services/api';
import Favorite from '../components/Favorite'

function NewsFeed ({ navigation }) {

    const [feeds, setFeeds] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadFeeds();
    }, []);

    loadFeeds = async () => {
        if(loading) return;
        setLoading(true)
        const response = await api.get('feeds?offset='+currentPage);
        setTimeout(() => {
            setFeeds([...feeds, ...response.data]);
            setLoading(false);
        }, 100)
    } 

    function handleNavigate( item ) {
        navigation.navigate('WebViewNews', { url : item.url });
    }
  
    function getData (props) {
        return moment(new Date(props.data * 1000), "YYYYMMDD").fromNow();
    }

    function renderFooter() {
        if (!loading) return null;
        return (
          <SafeAreaView>
            <ActivityIndicator />
          </SafeAreaView>
        );
    };
                  
    function handleLoadMore () {
        if(loading) return;
        setCurrentPage(currentPage + 1);
        loadFeeds();
    };

    function renderFooter() {
        if (loading) return null;
        return (
          <View>
            <ActivityIndicator />
          </View>
        );
    };

    return (           
        <>
            <FlatList
                data={feeds}
                keyExtractor={(item,index) => index.toString()}
                vertical
                showsHorizontalScrollIndicator={true}
                onEndReached={handleLoadMore}
                onEndThreshold={0.1}    
                contentContainerStyle={{ flexGrow: 1 }}
                ListFooterComponen={renderFooter}
                renderItem={({ item }) => (
                <SafeAreaView>
                    <TouchableOpacity onPress={() => handleNavigate(item)}>
                        <Image source={{uri: item.imageUrl}} style={styles.frame}></Image>
                    </TouchableOpacity>
                        <Text style={[Style.fontP, global.fontColor, styles.newsText]}>{item.title}</Text>
                        <SafeAreaView style={styles.Row}>
                            <Favorite content={item}/>  
                            <Text style={[Style.fontP, styles.timeStamp]}>
                                {getData({data: item.publishedAt})}
                            </Text>
                        </SafeAreaView>
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
    }
})

export default withNavigation(NewsFeed);