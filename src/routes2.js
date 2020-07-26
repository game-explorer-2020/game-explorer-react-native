import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ListGames from './screens/ListGames';
import ExploreList from './screens/ExploreList';
import GameDetails from './screens/GameDetails';

const screens = {
    ExploreList: {
        screen: ExploreList
    },
    ListGames: {
        screen: ListGames
    },
    GameDetails: {
        screen: GameDetails
    }
}


const RouteStack = createSwitchNavigator(screens);
export default createAppContainer(RouteStack);