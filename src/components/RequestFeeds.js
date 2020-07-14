import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Style from '../styles/Style'

export default class App extends Component {

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

    render(){
        return (
            <View>
                { this.state.feeds.map(feed => <Text style={[Style.fontG, global.fontColor]} key={feed.id}>{feed.title}</Text>)}
            </View>
        )
    }

}