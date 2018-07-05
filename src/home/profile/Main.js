import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { Divider, Avatar } from 'react-native-elements';
import fake_user from './fake_user.json';
import Vehicles from './Vehicles.js';
export default class Profile extends React.Component {
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
        <Text style={styles.title}>{this.state.user[0].first_name} {this.state.user[0].last_name}</Text>
        <Avatar
          style={styles.avatar}
          xlarge
          rounded
          source={{uri: 'http://kuf.klr.dev.edudigital.agency/files/2018/06/blank-user.png'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text>cell: {this.state.user[0].phone_number}</Text>
        <Text>license_number number: {this.state.user[0].license_number}</Text>
        <Text>policy number: {this.state.user[0].policy_number}</Text>
        <Divider style={{ backgroundColor: 'blue', height: 20, borderStyle: 'solid' }} />
        <Vehicles />
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
