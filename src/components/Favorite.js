import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    const [currentHeart, setHeart] = useState('heart-o');

    function favoriteItem (props) {
        if(currentHeart == 'heart-o'){
            setHeart('heart');
        }else{
            setHeart('heart-o');
        }
    };

    return (
        <>
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => favoriteItem(props.content)}>
                <Icon name={currentHeart} size={props.size} color="#17B978" />
            </TouchableOpacity>
        </>
    )
}

const style = StyleSheet.create({
})