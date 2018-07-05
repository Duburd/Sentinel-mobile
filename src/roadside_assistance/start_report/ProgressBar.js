import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';

import Camera   from './Camera.js'
import Form     from './Form.js'
import Tooltips from './ToolTips1.js'
import Contact from './Contact.js'

import { createBottomTabNavigator, NavigationActions } from 'react-navigation';

export default createBottomTabNavigator({
  Tooltips: { screen: Tooltips },
  Camera:   { screen: Camera },
  Form:     { screen: Form },
  Contact:  { screen: Contact },
}, {
  initialRouteName: 'Tooltips',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});