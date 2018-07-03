import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';

export default class Options extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        <Tile imageSrc={ require('./../../assets/images/roadside.jpg')}    
          height={320} 
          title={'hi'}
          icon={{ name: 'gesture-tap', type: 'material-community', color: 'white', size: 30}}
          featured
          caption="tap here..."
          onPress={()=> Alert.alert('Hey 1')}
        />      
        <Tile imageSrc={ require('./../../assets/images/roadside.jpg')}
          height={320} 
          title={'hi'}
          icon={{ name: 'gesture-tap', type: 'material-community', color: 'white', size: 40}} 
          featured
          caption="tap here..."
          onPress={()=> Alert.alert('Hey 2')}
        />      
        <Tile imageSrc={ require('./../../assets/images/roadside.jpg')}    
          height={320} 
          title={'hi'}
          icon={{ name: 'gesture-tap', type: 'material-community', color: 'white', size: 40}} 
          featured
          caption="tap here..."
          onPress={()=> Alert.alert('Hey 3')}
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
