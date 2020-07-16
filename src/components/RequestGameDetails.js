import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { View, Text } from 'react-native';
import Style from '../styles/Style'

function RequestGameDetails(props) {
    const [gameDetails, setGameDetails] = useState({});

    useEffect(() => {
        fetchGameDetails();
    }, []);

    async function fetchGameDetails() {
        const response = await api.get(`/games/details/${props.gameId}`);
        setGameDetails(response.data);
    }

    return (
        <View>
            <Text style={[Style.fontG, global.fontColor]}>
                {JSON.stringify(gameDetails)}
            </Text>
        </View>
    );
}

export default RequestGameDetails;