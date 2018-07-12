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
    }
  }
  componentDidMount(){
  }
  render() {
    return (
      <View style={styles.column}>
      <Text style={styles.title}>
        Have witnesses of the event scan this to give their statement
      </Text>
        <QRCode
          value={`https://alluring-shenandoah-49358.herokuapp.com/witness?reportId=${this.props.screenProps.latest_report}`}
          size={400}
          bgColor='black'
          fgColor='whitesmoke'/>
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
