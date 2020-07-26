import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Carousel from '../components/Carousel';


function ExploreList({ navigation }) {

    function navigateToList( route, items ) {
        navigation.navigate(route, {list: items});
    }
  
    function navigateToItem( route, item ) {
        if(route == 'GameDetails')
            navigation.navigate(route, {gameId: item});
        else
            navigation.navigate(route, {url: item});
    }

    return (
        <View style={global.backgroundColor, {flex:1}}>
            <Carousel name={"Popular Games"} isGame={true} showList={navigateToList} showItem={navigateToItem}/> 
            <Carousel name={"My Favorite Games"} isGame={true} showList={navigateToList} showItem={navigateToItem}/> 
            <Carousel name={"My Favorite News"} isGame={true} showList={navigateToList} showItem={navigateToItem}/> 
        </View>
    );
}

export default withNavigation(ExploreList);