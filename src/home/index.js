import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import FadeInView from './FadeInView'
import Nav from './Nav'
import Profile from './profile/Main'
import Reports from './profile/Reports'
import Vehicles from './profile/Vehicles'

export default class HomeIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tab: <Profile/>
    }
  }
  currentTab = (tabIndex) => {
    const tab = [<Profile/>,<Vehicles/>,<Reports/>][tabIndex]
    this.setState({tab})
  }
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        <FadeInView changeMainView={this.props.changeMainView}/>
        {this.state.tab}
        <Nav currentTab={this.currentTab}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});