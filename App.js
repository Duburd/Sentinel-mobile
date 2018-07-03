import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import HomeIndex from './src/home/index.js'
import Options from './src/roadside_assistance/Options.js'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.changeMainView = this.changeMainView.bind(this)
    this.state = {
      currentView: <HomeIndex changeMainView={this.changeMainView}/>
    }
  }
  changeMainView() {
    this.setState({
      currentView: <Options />
    })
  }
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        {this.state.currentView}
      </View>
    );
  }
}
