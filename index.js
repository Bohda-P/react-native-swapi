/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

LogBox.ignoreLogs([
  /Expected style/, // styled-components warns (px is missed)
  '[react-native-gesture-handler]', // react-native-gesture-handler: warns from library
]);
