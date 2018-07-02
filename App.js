import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import FadeInView from './FadeInView'
import Nav from './Nav'
//import BottomNav from "./bottom-nav.js";



export default class App extends React.Component {
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        <FadeInView/>
        <Nav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    height: '30%',
    width: '100%'
  }
});
