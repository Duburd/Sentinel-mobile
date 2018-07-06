import React from 'react';
import { Picker, Animated, Alert, AppRegistry, Button, StyleSheet, ScrollView, Text } from 'react-native';
import ProgressBar from './ProgressBar'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import fake_user from './fake_user.json';

export default class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentDriver: '',
      currentVehicle: '',

    }
  }

  componentDidMount(){
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/3')
      .then((results)=> results.json())
      .then((users_data) => {
        users = users_data.map( (_) => (
          <Picker.Item label= {`${_.first_name} ${_.last_name}`} value={_.id}/>
        ))
        this.setState({users})});
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/10/vehicles')
      .then((results) => results.json())
      .then((vehicle_data) => {
        vehicles = vehicle_data.map((_) => (
            <Picker.Item label= {`${_.make} ${_.model}`} value={_.id}/>
      ))
        this.setState({vehicles})
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView height={'100%'} width={'100%'} style={{flex: 1}}>

        <Text style={styles.title}>Report</Text>
        <FormLabel>Current Driver</FormLabel>
        <Picker 
          selectedValue = {this.state.currentDriver}
          style={{ height: 50, width: "100%" }}
          onValueChange={(itemValue, itemIndex) => this.setState({currentDriver: itemValue})}>
          {this.state.users}
        </Picker>
        <FormLabel>Current Vehicle</FormLabel>
        <Picker
          selectedValue={this.state.currentVehicle}
          style={{ height: 50, width: "100%" }}
          onValueChange={(itemValue, itemIndex) => this.setState({currentVehicle: itemValue})}>
          {this.state.vehicles}
        </Picker>
        <Text style={styles.subtitle}>Report</Text>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={(text) => this.setState({username: text})} value={this.state.username}/>
        <FormValidationMessage>Error message</FormValidationMessage>
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormValidationMessage>Error message</FormValidationMessage>
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormValidationMessage>Error message</FormValidationMessage>
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormValidationMessage>Error message</FormValidationMessage>
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormValidationMessage>Error message</FormValidationMessage>
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});