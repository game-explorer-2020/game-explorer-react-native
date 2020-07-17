import { registerRootComponent } from 'expo';

//import App from './src/App';
import App from './src/screens/WebViewNews';
import Style from './src/styles/Style'

global.fontColor = Style.fontDark;
global.backgroundColor = Style.backgroundDark;

registerRootComponent(App); 
