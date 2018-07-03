import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import ProgressBar from './ProgressBar'

export default class ReportMain extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        <Text style={styles.title}>The report page</Text>
        <ProgressBar />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});