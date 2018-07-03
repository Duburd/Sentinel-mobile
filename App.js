import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import HomeIndex from './src/home/index.js'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: <HomeIndex changeMainView={this.changeMainView}/>
    }
  }
  changeMainView = () => {
    this.state.currentView = (this.state.currentView === <HomeIndex /> ? <AddReport /> : <HomeIndex />)
  }
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        {this.state.currentView}
      </View>
    );
  }
}
