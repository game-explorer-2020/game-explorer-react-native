/**
 * @format
 */
import { AppRegistry } from 'react-native';

import App from './App';
//import App from './src/screens/Feed';
//import App from './src/screens/WebViewNews';
import Style from './src/styles/Style'

global.fontColor = Style.fontDark;
global.backgroundColor = Style.backgroundDark;

AppRegistry.registerComponent('GameExplorer', () => App);
