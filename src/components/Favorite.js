import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';

export default props => {
    const [currentHeart, setHeart] = useState(props.heart);

    function favoriteItem() {
        if (currentHeart == 'heart') {
            setHeart('heart-o');
        } else {
            setHeart('heart');
        }
        if (props.isGame) {
            return api.put('games/favorites/' + props.contentId);
        } else {
            return api.put('feeds/favorites/' + props.contentId);
        }
    }

    return (
        <>
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => favoriteItem()}>
                <Icon name={currentHeart} size={props.size} color="#17B978" />
            </TouchableOpacity>
        </>
    );
};
