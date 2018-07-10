import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import FadeInView from './FadeInView'
import Nav from './Nav'
import Profile from './profile/Main'
import Reports from './profile/Reports'
import Vehicles from './profile/Vehicles'
import Login from './Login'
import fake_user from './profile/fake_user.json';


export default class HomeIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tab: null,
      isLoggedIn: false,
      policyNum: '',
      pwd: '',
      logErr: null,
      user: fake_user
    }
  }
  componentDidMount(){
  }
  currentTab = (tabIndex) => {
    const tab = [
    <Profile user={this.state.user}/>,
    <Reports user={this.state.user}/>]
    [tabIndex]
    this.setState({tab})
  }

  tryLogin = () => {
    this.setState({logErr: null})
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
    .then((results)=> results.json())
    .then((response) => {
      if(response.user === null){
          this.setState({logErr: response.message})
        } else {
          this.setState({user: response.user})
          this.currentTab(0)          
          this.fadeModal()
        }
      })
  }

  fadeModal() {
    this.setState({isLoggedIn: true });
  }

  onPolicyChange = (text) => this.setState({policyNum: text})
  onPwdChange    = (text) => this.setState({pwd:       text})

  render() {
    const { pwd, policyNum, isLoggedIn , logErr, user} = this.state;
    return (
      <View height={'100%'} width={'100%'}>
        <FadeInView navigation={this.props.navigation} user={user}/>
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