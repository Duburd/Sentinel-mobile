import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import ProgressBar from './ProgressBar'
import { Tile } from 'react-native-elements';


export default class ToolTips1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        <Tile imageSrc={ require('./../../../assets/images/contact.jpg')}    
          height={200} 
          title={'back from Tooltips'}
          icon={{ name: 'ios-phone-portrait', type: 'ionicon', color: 'white', size: 40}}
          featured
          onPress={()=> this.props.changeMainView('options')}
        />
        <Tile imageSrc={ require('./../../../assets/images/contact.jpg')}    
          height={200} 
          title={'form'}
          icon={{ name: 'ios-phone-portrait', type: 'ionicon', color: 'white', size: 40}}
          featured
          onPress={()=> this.props.changeMainView('form')}
        />
        <Tile imageSrc={ require('./../../../assets/images/contact.jpg')}    
          height={200} 
          title={'camera'}
          icon={{ name: 'ios-phone-portrait', type: 'ionicon', color: 'white', size: 40}}
          featured
          onPress={()=> this.props.changeMainView('camera')}
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