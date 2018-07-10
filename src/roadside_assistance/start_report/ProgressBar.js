import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';

import Camera   from './report_pages/camera_utils/Camera.js'
import Form     from './report_pages/Form.js'
import Tooltips from './report_pages/ToolTips1.js'
import Contact  from './report_pages/Contact.js'
import Witness  from './report_pages/Witnesses_access.js'

import { createBottomTabNavigator, NavigationActions } from 'react-navigation';

export default createBottomTabNavigator({
  Tooltips: { screen: Tooltips },
  Camera:   { screen: Camera   },
  Form:     { screen: Form     },
  Witnesses:{ screen: Witness  },
  Contact:  { screen: Contact  },
}, {
  initialRouteName: 'Tooltips',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});