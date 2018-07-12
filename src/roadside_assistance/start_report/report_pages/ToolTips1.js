import React from 'react';
import { Animated, Alert, AppRegistry, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';


export default class ToolTips1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tooltips: [
        'It is important that you remain calm.',
        'Do not argue with other drivers and passengers. Save your story for the police.',
        'Do not voluntarily assume liability or take responsibility.',
        'If the vehicle damage is under $2,000, call a Reporting Centre. Otherwise. Call the police FIRST.',
        'If safe to do so, let\'s take some pictures to document the situation.',
      ],
      index: 0,
    }
  }
  
  nextSlide = () => {
    if (this.state.index > this.state.tooltips.length - 2){
      const {navigate} = this.props.navigation
      this.setState({index: 0})
      navigate('Camera')
    } else {
      index = this.state.index + 1;
      this.setState({
        index
      })
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{width: '100%', height: '100%'}} >
        <TouchableOpacity style={styles.container} onPress={this.nextSlide}>
          <Text style={styles.title}>
            {this.state.tooltips[this.state.index]}
          </Text>
          <Text style={styles.subtitle}>
            Tap to Continue...
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  },
  subtitle: {
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  },
});