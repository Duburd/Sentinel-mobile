import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, ScrollView, Text, View } from 'react-native';
import { Divider, Avatar, Card } from 'react-native-elements';
import Vehicles from './Vehicles.js';

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){}
  render() {
    return (
      <ScrollView>
        <View style={styles.column}>
          <Text style={styles.title}>{this.props.user[0].first_name} {this.props.user[0].last_name}</Text>
          <Avatar
            style={styles.avatar}
            xlarge
            rounded
            source={{uri: this.props.user[0].uri}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text>cell: {this.props.user[0].phone_number}</Text>
          <Text>license number: {this.props.user[0].license_number}</Text>
          <Text>policy number: {this.props.user[0].policy_number}</Text>
          <Divider style={{height: 4, backgroundColor: 'lightblue'}}/>
          <Vehicles user={this.props.user}/>
        </View>
      </ScrollView>
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
    width: '100%',
    marginBottom: 100
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});
