import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Navigator from './Navigator'
import ExploreList from './screens/ExploreList';
import NewsFeed from './screens/NewsFeed';
import WebViewNews from './screens/WebViewNews';
import GameList from './screens/GameList';
import GameDetails from './screens/GameDetails';


const screens = {

    Home: {
        screen: Navigator,
        navigationOptions: {
            headerTitle: 'Game Explorer',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
                //fontFamily: 'Nunito-Bold.ttf',
            }
        }
    },
    WebViewNews: {
        screen: WebViewNews,
        navigationOptions: {
            headerTitle: 'WebView News',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
                //fontFamily: 'Nunito-Bold.ttf',
            }
        }
    },
    GameList: {
        screen: GameList,
        navigationOptions: {
            headerTitle: 'Game List',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
                //fontFamily: 'Nunito-Bold.ttf',
            }
        }
    },
    GameDetails: {
        screen: GameDetails,
        navigationOptions: {
            headerTitle: 'Game Details',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
                //fontFamily: 'Nunito-Bold.ttf',
            }
        }
    }
}

const RouteStack = createStackNavigator(screens, { initialRouteName: 'Home' });
export default createAppContainer(RouteStack);
