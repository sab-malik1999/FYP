/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Adenine from './Screens/Adenine';
import DNAScreen from './DNAScreen'
import MainScreen from './MainScreen'
import Guanine from './Screens/Guanine';
import Heredity from './Screens/Heredity';
AppRegistry.registerComponent(appName, () => Guanine);
