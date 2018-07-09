import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { Icon, Card } from 'react-native-elements';


export default class Report extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: null
    }
  }
  componentDidMount(){
    CarIcon = <Icon name="ios-car-outline" type="ionicon" size={80} />
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/3/reports')
      .then((results) => results.json())
      .then((reports) => {
        reports = reports.map((_) => (
          <Card key={_} flexDirection={'row'} wrapperStyle={{width:'100%'}} containerStyle={{ flex: .4, flexDirection: 'row', height: '100%', width: '100%', margin: '2%'}}>
              <View style={{ padding: '5%' }}>
                {CarIcon}
              <Text>{_.make} {_.model}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-around'}}>
              <Text> Year </Text>
              <Text> License Plate </Text>
              <Text> color </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-around'}}>
              <Text> Case #{_.id} </Text>
              <Text> {_.created_at} </Text>
              <Text> {_.status} </Text>
              <Text> {_.damage} </Text>
              <Text> {_.description} </Text>
            </View>
          </Card>
      ))
        this.setState({reports})
      });
  }
  render() {
    return (
      <View style={styles.column}>
        <Text style={styles.title}>My reports</Text>
        {this.state.reports}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
