import React from 'react';
import { Platform, Picker, Animated, Alert, AppRegistry, StyleSheet, ScrollView, Text, Modal, View} from 'react-native';
import { FormInput, FormLabel, Button, FormValidationMessage} from 'react-native-elements'

export default class Form extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Modal
      animationType="fade"
      transparent={false}
      visible={!this.props.fromIndex.isLoggedIn}
      onRequestClose={() => {
        alert('You are now logged in.');
      
      }}>
        <View style={{flex:1, justifyContent: 'center'}}>
        <Text style={styles.title}>Login</Text>
        <FormValidationMessage labelStyle={{textAlign: 'center'}}>{this.props.fromIndex.logErr}</FormValidationMessage>
        <FormLabel>Policy Number</FormLabel>
        <FormInput 
          onChangeText={(text)=>this.props.onPolicyChange(text)}
          value={this.props.fromIndex.policyNum} 
          editable = {true}
          />
        <FormLabel>Password</FormLabel>
        <FormInput 
          onChangeText={(text)=>this.props.onPwdChange(text)} 
          value={this.props.fromIndex.pwd} 
          editable = {true}
          />
        <Button containerViewStyle={styles.button} title={'Submit'} onPress={()=> this.props.tryLogin()}/>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginTop: 10,
  },
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