import React from 'react';
import { SafeAreaView } from 'react-native';
import NewsFeed from './NewsFeed'

export default function Feed() {
    return (
    <SafeAreaView style={global.backgroundColor}>
        <NewsFeed/> 
    </SafeAreaView>
    );
}
