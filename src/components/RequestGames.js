import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Style from '../styles/Style'

export default class RequestGames extends Component {

    state = {
        games: []
    }

    componentDidMount(){
        axios.get("http://game-explorer-unisul.herokuapp.com/api/v1/games")
            .then(response => {
                this.setState({
                    games: response.data
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
                { this.state.games.map(game => <Text style={[Style.fontG, global.fontColor]} key={game.id}>{game.title}</Text>)}
            </View>
        )
    }

}