import React from 'react';
import { Platform, Picker, Animated, Alert, AppRegistry, Button, StyleSheet, ScrollView, Text} from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements'
import { Constants, Location, Permissions } from 'expo';
import fake_user from './fake_user.json';

export default class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentDriver: null,
      currentVehicle: null,
      location: null,
      address: null,
      errorMessage: null,
      additionalDrivers: 0,
      description: '', 
    }
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  componentDidMount(){
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/3')
      .then((results)=> results.json())
      .then((users_data) => {
        currentDriver = users_data[0].id
        this.setState({currentDriver})
        users = users_data.map( (_) => (
          <Picker.Item label= {`${_.first_name} ${_.last_name}`} value={_.id}/>
        ))
        this.setState({users})});
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/10/vehicles')
      .then((results) => results.json())
      .then((vehicle_data) => {
        currentVehicle = vehicle_data[0].id
        this.setState({currentVehicle})
        vehicles = vehicle_data.map((_) => (
            <Picker.Item label= {`${_.make} ${_.model}`} value={_.id}/>
      ))
        this.setState({vehicles})
      });
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      location
    });
    let address = await Location.reverseGeocodeAsync(location.coords)
    this.setState({
      address
    });
  };

  formSubmit = () => {
      amazonPhotos = this.props.screenProps.saveToAws()
      const { street, city, region, country, postalCode } = this.state.address[0];
      const address = `${street} ${city} ${region} ${country} ${postalCode}`
      const selectedPhotos = this.props.screenProps.selectedPhotos
      reportObj = {
        location: address,
        description: this.state.description,
        status: "Pending",
        user_id: this.state.currentDriver,
        vehicle_id: this.state.currentVehicle,
        media: amazonPhotos,
      }
      report = JSON.stringify(reportObj)
      fetch('https://alluring-shenandoah-49358.herokuapp.com/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: report
      })
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        const {navigate} = this.props.navigation
        navigate('Contact')
        return response.json()
        .catch(function (err) {
          console.log(err)
        });
      })
  }

  render() {
    let location = { status: 'Waiting for location...' };
    if (this.state.errorMessage) {
      location = this.state.errorMessage;
    } else if (this.state.address) {
      location = this.state.address[0];
      location.status = 'Location found!'
    }

    const { navigate } = this.props.navigation;
    return (
      <ScrollView height={'100%'} width={'100%'} style={{flex: 1}}>

        <Text style={styles.title}>Report</Text>
        <Text style={styles.subtitle}>{location.status}</Text>
        <Text style={styles.subtitle}>{location.postalCode} {location.street}</Text>
        <Text style={styles.subtitle}> {location.city} {location.region}</Text>
        <FormLabel>Current Driver</FormLabel>
        <Picker 
          selectedValue = {this.state.currentDriver}
          style={{ height: 50, width: "100%" }}
          onValueChange={(itemValue, itemIndex) => this.setState({currentDriver: itemValue})}>
          {this.state.users}
        </Picker>
        <FormLabel>Current Vehicle</FormLabel>
        <Picker
          selectedValue={this.state.currentVehicle}
          style={{ height: 50, width: "100%" }}
          onValueChange={(itemValue, itemIndex) => this.setState({currentVehicle: itemValue})}>
          {this.state.vehicles}
        </Picker>
        <FormLabel>Description Of Events</FormLabel>
        <FormInput 
          onChangeText={(text) => this.setState({description: text})} 
          value={this.state.username} 
          editable = {true}
          maxLength = {40} multiline = {true}
          numberOfLines = {4}
          />
        <Text style={styles.subtitle}>Other Drivers</Text>
        <Text style={styles.subtitle}>Driver</Text>
        <FormLabel>First Name</FormLabel>
        <FormInput onChangeText={(text) => this.setState({username: text})} value={this.state.username}/>
        <FormLabel>Last Name</FormLabel>
        <FormInput />
        <FormLabel>Insurance Policy Number</FormLabel>
        <FormInput />
        <FormLabel>Licence Number</FormLabel>
        <FormInput />
        <FormLabel>Phone Number</FormLabel>
        <FormInput />
        <Button title={'Submit Claim For Review'} onPress={()=> this.formSubmit()}/>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});