import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Style from '../styles/Style'

function RequestGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    async function fetchGames() {
        const response = await api.get(`/games`);
        setGames(response.data);
    }

    return (
        <View>
            { games.map(game => <Text style={[Style.fontG, global.fontColor]} key={game.id}>{game.title}</Text>)}
        </View>
    )

}

export default RequestGames;