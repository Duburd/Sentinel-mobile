import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import fake_user from './fake_user.json';

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {results:[fake_user]}
    }
  }
  componentDidMount(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({ users: responseJson })
    })
  }
  render() {
    return (
      <View style={styles.column}>
        <Text style={styles.title}>{this.state.users.results[0].name.first} {this.state.users.results[0].name.last}</Text>
        <Avatar
          style={styles.avatar}
          xlarge
          rounded
          source={{uri: this.state.users.results[0].picture.medium}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text>{this.state.users.results[0].email}</Text>
        <Text>cell: {this.state.users.results[0].cell}</Text>
        <Text>policy number: {this.state.users.results[0].id.value}</Text>
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
