import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import fake_user from './fake_user.json';

export default class Vehicles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    }
  componentDidMount(){}
  render() {
    return (
      <View style={styles.column}>
        <Text style={styles.title}>VEHICLES</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});
