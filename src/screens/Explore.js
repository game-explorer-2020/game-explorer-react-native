import React from 'react';
import { SafeAreaView } from 'react-native';
import ExploreList from './ExploreList'

export default function Explore() {
    return (
    <SafeAreaView style={global.backgroundColor}>
        <ExploreList/> 
    </SafeAreaView>
    );
}
