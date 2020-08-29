import React from 'react';
import { SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Carousel from '../components/Carousel';

function ExploreList({ navigation }) {
    function navigateToList(route, items, favorite = false) {
        navigation.navigate(route, { list: items, isFavorite: favorite });
    }

    function navigateToItem(route, item) {
        if (route == 'GameDetails') navigation.navigate(route, { gameId: item });
        else if (route == 'WebViewNews') navigation.navigate(route, { url: item });
    }

    return (
        <SafeAreaView style={(global.backgroundColor, { flex: 1 })}>
            <Carousel showList={navigateToList} showItem={navigateToItem} />
        </SafeAreaView>
    );
}

export default withNavigation(ExploreList);
