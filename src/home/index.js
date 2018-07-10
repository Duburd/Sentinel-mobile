import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import FadeInView from './FadeInView'
import Nav from './Nav'
import Profile from './profile/Main'
import Reports from './profile/Reports'
import Vehicles from './profile/Vehicles'
import Login from './Login'

export default class HomeIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tab: <Profile/>,
      isLoggedIn: false,
      policyNum: '',
      pwd: '',
      logErr: null
    }
  }

  currentTab = (tabIndex) => {
    const tab = [<Profile/>,<Reports/>][tabIndex]
    this.setState({tab})
  }

  tryLogin = () => {
    loginObj = {
      policyNum: this.state.policyNum,
      pwd: this.state.pwd,
    }
    cred = JSON.stringify(loginObj)
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: cred,
    })
    .then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json()
      .catch(function (logErr) {
        console.log(logErr)
      });
    })
    this.fadeModal()
  }

  fadeModal() {
    this.setState({isLoggedIn: true });
  }

  onPolicyChange = (text) => this.setState({policyNum: text})
  onPwdChange    = (text) => this.setState({pwd:       text})

  render() {
    const { pwd, policyNum, isLoggedIn , logErr} = this.state;
    return (
      <View height={'100%'} width={'100%'}>
        <FadeInView navigation={this.props.navigation}/>
        <Login 
          tryLogin={this.tryLogin}  
          login={this.login}
          fromIndex={{pwd, policyNum, isLoggedIn, logErr}}
          onPolicyChange={this.onPolicyChange}
          onPwdChange={this.onPwdChange}
        />
        {this.state.tab}
        <Nav currentTab={this.currentTab} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});