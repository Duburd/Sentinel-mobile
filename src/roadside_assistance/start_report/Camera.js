import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import ProgressBar from './ProgressBar'
import { Tile } from 'react-native-elements';


export default class Camera extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        <Tile imageSrc={ require('./../../../assets/images/contact.jpg')}    
          height={320} 
          title={'Camera'}
          icon={{ name: 'ios-phone-portrait', type: 'ionicon', color: 'white', size: 40}}
          featured
          onPress={()=> this.props.changeMainView('home')}
        />
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