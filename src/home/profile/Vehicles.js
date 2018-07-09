import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { Icon, Avatar, Card } from 'react-native-elements';
import fake_user from './fake_user.json';


export default class Vehicles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: <Text>''</Text>
    }
  }
  componentDidMount(){
    CarIcon = <Icon name="ios-car-outline" type="ionicon" size={80} />
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/10/vehicles')
      .then((results) => results.json())
      .then((vehicle_data) => {
        vehicles = vehicle_data.map((vehicle) => (
          <Card key={vehicle.id} flexDirection={'row'} wrapperStyle={{width:'100%'}} containerStyle={{ flex: .4, flexDirection: 'row', height: '100%', width: '100%', margin: '2%'}}>
            <View style={{ padding: '5%' }}>
            {CarIcon}
            <Text>{vehicle.make} {vehicle.model}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Text> Year </Text>
            <Text> License Plate </Text>
            <Text> color </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Text> {vehicle.year}  </Text>
            <Text> {vehicle.plate} </Text>
            <Text> {vehicle.color} </Text>
            </View>
          </Card>
      ))
        this.setState({vehicles})
      });
  }
  render() {
    return (
      <View style={styles.column}>
        <Text style={styles.title}>My vehicles</Text>
        {this.state.vehicles}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  white_text: {
    color: 'white'
  },
  nav_icon: {
    color: "#a6a6a6",
  },
  column: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});
