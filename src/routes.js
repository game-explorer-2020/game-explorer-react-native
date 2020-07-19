import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import NewsFeed from './screens/NewsFeed';
import WebViewNews from './screens/WebViewNews';

const screens = {
    NewsFeed: {
        screen: NewsFeed
    },
    WebViewNews: {
        screen: WebViewNews
    },
}


const RouteStack = createSwitchNavigator(screens);
export default createAppContainer(RouteStack);