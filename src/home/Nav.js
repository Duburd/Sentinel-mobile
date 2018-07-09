import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonGroup } from 'react-native-elements'
import { Constants } from 'expo';

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    this.props.currentTab(selectedIndex)
  }
  
  render () {
    const buttons = [
      <IconF name="user-circle" style={styles.nav_icon}/>,
      <IconF name="th-list"     style={styles.nav_icon}/>
    ]
    const { selectedIndex } = this.state
  
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={styles.nav}
      />
    )
  }
}

const styles = StyleSheet.create({
    nav_icon: {
      color: "#a6a6a6",
      fontSize: 50
    },
    nav: {
      margin: 0,
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      height: 70,
      width: '96%',
      backgroundColor: '#808080',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });