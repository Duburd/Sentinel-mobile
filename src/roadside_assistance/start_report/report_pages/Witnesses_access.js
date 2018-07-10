import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text, linking } from 'react-native';
import { Tile } from 'react-native-elements';
import { WebBrowser } from 'expo';
import fake_user from './fake_user.json';
import { Linking } from 'react-native';
import QRCode from 'react-native-qrcode';

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: `https://alluring-shenandoah-49358.herokuapp.com/reports/${id}/witnesses`
    }
  }
  componentDidMount(){
  }
  render() {
    return (
      <View style={styles.column}>
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='black'
          fgColor='white'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-around',
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
