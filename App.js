import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import FadeInView from './FadeInView'
//import BottomNav from "./bottom-nav.js";



export default class App extends React.Component {
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        <View style={styles.container}>
          <FadeInView />
        </View>
        <View style={styles.nav}>
          <Icon name="user-circle" style={styles.nav_icon}></Icon>
          <Icon name="car" style={styles.nav_icon}></Icon>
          <Icon name="th-list" style={styles.nav_icon}></Icon>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav_icon: {
    color: "#a6a6a6",
    fontSize: 50
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    height: '30%',
    width: '100%'
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
