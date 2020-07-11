import { registerRootComponent } from 'expo';

import App from './src/App';
import Estilo from './src/estilos/Estilo'

global.colorMode = Estilo.fontDark;
//import {app as appName} from './app.json';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App); //(appName, () => App);
