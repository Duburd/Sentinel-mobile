import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text, linking } from 'react-native';
import { Tile } from 'react-native-elements';
import { WebBrowser } from 'expo';
import fake_user from './fake_user.json';
import { Linking } from 'react-native';

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [fake_user]
    }
  }
  componentDidMount(){
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/3')
      .then((results)=> results.json())
      .then((user) => {this.setState({user})});
  }
  render() {
    return (
      <View style={styles.column}>
        <Tile imageSrc={ require('./../../../../assets/images/customer_service.jpg')}
          height={520}
          title={'Contact A Representitive'}
          caption={'tap to place call...'}
          icon={{ name: 'md-contacts', type: 'ionicon', color: 'white', size: 40}}
          featured
          onPress={()=> Linking.openURL('tel://7788555726')}
        />
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
