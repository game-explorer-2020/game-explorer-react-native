import { registerRootComponent } from 'expo';

import App from './src/App';
import Style from './src/styles/Style'

global.fontColor = Style.fontDark;
global.backgroundColor = Style.backgroundDark;

registerRootComponent(App); 
