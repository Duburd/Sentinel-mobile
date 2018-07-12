import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements'
import Camera   from './report_pages/camera_utils/Camera.js'
import Form     from './report_pages/Form.js'
import Tooltips from './report_pages/ToolTips1.js'
import Contact  from './report_pages/Contact.js'
import Witness  from './report_pages/Witnesses_access.js'

import { createBottomTabNavigator, NavigationActions } from 'react-navigation';

export default createBottomTabNavigator({
  Tooltips: { screen: Tooltips,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <Icon name="ios-checkbox-outline" type="ionicon" size={30} />,
    })},
  Camera:   { screen: Camera,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <Icon name="ios-camera-outline" type="ionicon" size={30} />,
    })},
  Form:     { screen: Form,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <Icon name="ios-paper-outline" type="ionicon" size={30} />,
    })},
  Witnesses:{ screen: Witness,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <Icon name="qrcode-scan" type="material-community" size={30} />,
    })},
  Contact:  { screen: Contact,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <Icon name="ios-contacts" type="ionicon" size={30} />,
    })},
}, {
  initialRouteName: 'Tooltips',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});