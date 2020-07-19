import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ListGames from './screens/ListGames';
import ExploreList from './screens/ExploreList';

const screens = {
    ExploreList: {
        screen: ExploreList
    },
    ListGames: {
        screen: ListGames
    },
}


const RouteStack = createSwitchNavigator(screens);
export default createAppContainer(RouteStack);