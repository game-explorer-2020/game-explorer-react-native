import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navigator from './Navigator'
import WebViewNews from './screens/WebViewNews';
import GameList from './screens/GameList';
import GameDetails from './screens/GameDetails';
import FavoriteNews from './screens/FavoriteNews';

const screens = {

    Home: {
        screen: Navigator,
        navigationOptions: {
            headerTitle: 'Game Explorer',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
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
            }
        }
    },
    FavoriteNews: {
        screen: FavoriteNews,
        navigationOptions: {
            headerTitle: 'Favorite News',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
            }
        }
    }
}

const RouteStack = createStackNavigator(screens, { initialRouteName: 'Home' });
export default createAppContainer(RouteStack);
