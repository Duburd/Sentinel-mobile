import React from 'react';
import { Platform, Picker, Animated, Alert, AppRegistry, StyleSheet, ScrollView, Text, Modal} from 'react-native';
import { FormInput, FormLabel, Button} from 'react-native-elements'

export default class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      usr: '',
      pwd: '',
    }
  }

  formSubmit = () => {
      reportObj = {
        usr: '',
        pwd: '',
        }
      report = JSON.stringify(reportObj)
      fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: report
      })
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json()
        .catch(function (err) {
          console.log(err)
        });
      })
  }

  render() {
    return (
      <Modal height={'100%'} width={'100%'} style={{flex: 1, margin: 5}}>

        <Text style={styles.title}>Login</Text>
        <FormLabel>Description Of Events</FormLabel>
        <FormInput 
          onChangeText={(text) => this.setState({usr: text})}
          value={this.state.usr} 
          editable = {true}
          />
        <FormInput 
          onChangeText={(text) => this.setState({pwd: text})} 
          value={this.state.pwd} 
          editable = {true}
          />
        <Text style={styles.subtitle}>Other Parties</Text>
        <Button containerViewStyle={styles.button} title={'Submit'} onPress={()=> this.addDriver()}/>
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