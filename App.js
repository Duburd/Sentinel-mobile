import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import HomeIndex from './src/home/index.js'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        <HomeIndex />
      </View>
    );
  }
}
