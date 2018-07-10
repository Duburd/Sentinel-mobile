import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import FadeInView from './FadeInView'
import Nav from './Nav'
import Profile from './profile/Main'
import Reports from './profile/Reports'
import Vehicles from './profile/Vehicles'
import Login from './profile/Login'

export default class HomeIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tab: <Profile/>,
      modalVisible: true,
    }
  }

  currentTab = (tabIndex) => {
    const tab = [<Profile/>,<Reports/>][tabIndex]
    this.setState({tab})
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View height={'100%'} width={'100%'}>
        <FadeInView navigation={this.props.navigation}/>
          <Login />
        {this.state.tab}
        <Nav currentTab={this.currentTab}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});