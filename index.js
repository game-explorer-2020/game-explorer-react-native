/**
 * @format
 */
import { AppRegistry } from 'react-native';

import App from './App';
import Style from './src/styles/Style'

global.fontColor = Style.fontDark;
global.backgroundColor = Style.backgroundDark;
global.mainColor = "#FFFFFF";

AppRegistry.registerComponent('GameExplorer', () => App);
