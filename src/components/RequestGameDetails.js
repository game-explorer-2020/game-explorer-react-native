import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Style from '../styles/Style'

export default class RequestGameDetails extends Component {

    state = {
        gameDetails: {}
    }

    constructor(props){
        super(props)
        this.gameId = props.gameId;
    }

    componentDidMount(){
        axios.get('http://game-explorer-unisul.herokuapp.com/api/v1/games/details/'+this.gameId)
            .then(response => {
                this.setState({
                    gameDetails: response.data
                });
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return (
            <View>
                <Text style={[Style.fontG, global.fontColor]}>
                    {JSON.stringify(this.state.gameDetails)}
                </Text>
            </View>
        )
    }

}