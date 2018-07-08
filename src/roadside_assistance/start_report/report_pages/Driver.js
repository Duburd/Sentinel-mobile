import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements'

export default class Driver extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){}

  render() {
    const {setDriverDetails, removeDriver, i, details} = this.props;
    return (
      <View style={styles.column}>
        <Text style={styles.subtitle}>Driver {i + 1}</Text>
        <Button title={'Remove This Driver'} onPress={()=> removeDriver(i)}/>
        <FormLabel>First Name</FormLabel>
        <FormInput onChangeText={(text) => setDriverDetails(i, 'first_name',     text)} value={details.first_name}    />
        <FormLabel>Last Name</FormLabel>
        <FormInput onChangeText={(text) => setDriverDetails(i, 'last_name',      text)} value={details.last_name}     />
        <FormLabel>Insurance Policy Number</FormLabel>
        <FormInput onChangeText={(text) => setDriverDetails(i, 'policy_number',  text)} value={details.policy_number} />
        <FormLabel>Licence Number</FormLabel>
        <FormInput onChangeText={(text) => setDriverDetails(i, 'license_number', text)} value={details.licence_number}/>
        <FormLabel>Phone Number</FormLabel>
        <FormInput onChangeText={(text) => setDriverDetails(i, 'phone_number',   text)} value={details.phone_number}  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    margin: 15,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});
