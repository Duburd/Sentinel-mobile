import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Nav extends React.Component {
    render() {
      return (
        <View style={styles.nav}>
          <Icon name="user-circle" style={styles.nav_icon}></Icon>
          <Icon name="car" style={styles.nav_icon}></Icon>
          <Icon name="th-list" style={styles.nav_icon}></Icon>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    nav_icon: {
      color: "#a6a6a6",
      fontSize: 50
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