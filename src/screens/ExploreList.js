import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Carousel from '../components/Carousel';


function ExploreList({ navigation }) {

    function handleNavigate( route, items ) {
        navigation.navigate(route, {list: items});
    }

    return (
        <View style={global.backgroundColor, {flex:1}}>
            <Carousel name={"Popular Games"} funcao={handleNavigate}/> 
            <Carousel name={"My Favorite Games"} funcao={handleNavigate}/> 
            <Carousel name={"My Favorite News"} funcao={handleNavigate}/> 
        </View>
    );
}

export default withNavigation(ExploreList);