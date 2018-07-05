import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import ProgressBar from './ProgressBar'
import { Tile } from 'react-native-elements';


export default class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View height={'100%'} width={'100%'}>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});