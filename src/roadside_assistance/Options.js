import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';

export default class Options extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const {navigate} = this.props.navigation
    return (   
      <View height={'100%'} width={'100%'}>
        <Tile imageSrc={ require('./../../assets/images/report.jpg')}
          height={520} 
          title={'Start Report'}
          icon={{ name: 'new-message', type: 'entypo', color: 'white', size: 40}} 
          featured
          caption="tap here..."
          onPress={()=> navigate('report')}
        />
        <Tile imageSrc={ require('./../../assets/images/contact.jpg')}    
          height={250} 
          title={'Unsure whether or not to file a report? then contact a representitive.'}
          icon={{ name: 'ios-phone-portrait', type: 'ionicon', color: 'white', size: 40}}
          featured
          onPress={()=> navigate('contact')}
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
