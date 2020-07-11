/** @format */
import {
  AppRegistry,
} from 'react-native';
import MyApp from './App';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';
import SaveStore from './_test_/SaveStore';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);
YellowBox.ignoreWarnings(['Task orphaned']);


AppRegistry.registerComponent(appName, () => MyApp );

