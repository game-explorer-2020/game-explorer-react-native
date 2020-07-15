import React from 'react';
import { createAppContainer } from 'react-navigation';  
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import FeedScreen from './screens/Feed'
import ExploreScreen from './screens/Explore'

const AppNavigator = createMaterialTopTabNavigator(
    {
        Feed: FeedScreen,
        Explore: ExploreScreen
    },
    {
        tabBarOptions: {
            activeTineColor: 'white',
            showIcon: false,
            showLabel: true,
            style: {
                backgroundColor: 'black'
            },
            indicatorStyle: { 
                backgroundColor: "#17B978" 
            } 
        },  
    }
)
export default createAppContainer(AppNavigator);
