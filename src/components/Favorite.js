import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';


export default props => {
    const [currentHeart, setHeart] = useState('heart-o');

    postFavorite = async (url) => {
        return await api.put(url + props.contentId);
    } 

    function favoriteItem () {
        if(props.isGame){
            postFavorite('games/favorites/');
        }else{
            postFavorite('feeds/favorites/');
        }
        if(props.isFavorite){
            setHeart('heart-o');
        }else{
            setHeart('heart');
        }
    };

    return (
        <>
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => favoriteItem()}>
                <Icon name={props.heart} size={props.size} color="#17B978" />
            </TouchableOpacity>
        </>
    )
}
