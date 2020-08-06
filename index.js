/**
* @format
*/
//import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';

import App from './src/App';
import Style from './src/styles/Style'

global.fontColor = Style.fontDark;
global.backgroundColor = Style.backgroundDark;
global.mainColor = "#FFFFFF";

//registerRootComponent(App);
AppRegistry.registerComponent('GameExplorer', () => App);