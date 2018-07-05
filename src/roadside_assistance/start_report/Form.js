import React from 'react';
import { Picker, Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import ProgressBar from './ProgressBar'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentDriver: 'Matt Greff',
      currentVehicle: 'BMW M3',
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View height={'100%'} width={'100%'} style={{flex: 1}}>

        <Text style={styles.title}>Report</Text>
        <Picker 
          selectedValue = {this.state.currentDriver}
          style={{ height: 50, width: '80%'}}
          onValueChange={(itemValue, itemIndex) => this.setState({currentDriver: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Picker
          selectedValue={this.state.currentVehicle}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({currentVehicle: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text style={styles.subtitle}>Report</Text>
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
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormValidationMessage>Error message</FormValidationMessage>
        
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
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});