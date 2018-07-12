import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import FadeInView from './FadeInView'
import Nav from './Nav'
import Login from './Login'


export default class HomeIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){}


  render() {
    const { pwd, email, isLoggedIn , logErr, user} = this.props.screenProps.fromIndex;
    const { onPolicyChange, tryLogin, login , onPwdChange, tab, currentTab} = this.props.screenProps;
    return (
      <View height={'100%'} width={'100%'}>
        <FadeInView navigation={this.props.navigation} user={user}/>
        <Login 
          tryLogin={tryLogin}
          login={login}
          fromIndex={{pwd, email, isLoggedIn, logErr}}
          onPolicyChange={onPolicyChange}
          onPwdChange={onPwdChange}
        />
        {tab}
        <Nav currentTab={currentTab} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});