import React, { Component } from 'react';
import axios from 'axios';
import { SafeAreaView, Image, Text, StyleSheet, ScrollView } from 'react-native';
import Style from '../styles/Style'
import RequestAPI from './RequestAPI';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class RequestFeeds extends Component {

    state = {
        feeds: []
    }

    componentDidMount(){
        axios.get("http://game-explorer-unisul.herokuapp.com/api/v1/feeds")
            .then(response => {
                this.setState({
                    feeds: response.data
                });
                //console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    getData = props => moment(new Date(props.data * 1000), "YYYYMMDD").fromNow()
   
    render(){
        return (
            <SafeAreaView>
                <ScrollView horizontal={false}>
                {this.state.feeds.map(feed =>     
                    <>
                        <Image key={feed.id} source={{uri: feed.imageUrl}} style={styles.frame}></Image>
                        <Text key={feed.id1} style={[Style.fontP, global.fontColor, styles.newsText]}>{feed.title}</Text>
                        <SafeAreaView key={feed.id2} style={styles.Row}>
                            <Icon key={feed.id3} name="heart" size={13} color="#17B978" />  
                            <Text key={feed.id4} style={[Style.fontP, styles.timeStamp]}>
                                {this.getData({data: feed.publishedAt})}
                            </Text>
                        </SafeAreaView>
                    </>
                )}
                </ScrollView>
            </SafeAreaView>
        )
    }
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