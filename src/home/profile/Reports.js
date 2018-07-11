import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import moment from 'moment';

export default class Report extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: null
    }
  }
  componentDidMount(){
    CarIcon = <Icon name="ios-paper-outline" type="ionicon" size={80} />
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/3/reports')
      .then((results) => results.json())
      .then((reports) => {
        reports = reports.map((_) => (
          <Card key={_.id} style={styles.column}>
            <View style={{ padding: '5%' }}>
                {CarIcon}
              <Text style={styles.title}> Case #{_.id} </Text>
              <Text style={styles.h2}> {_.status} </Text>
              <Text style={styles.subtitle}>{_.make} {_.model} {_.year}</Text>
            </View>
            <View>
              <Card>
                <Text style={{fontWeight: 'bold'}}> Damage: </Text>
                <Text> {_.damage} </Text>
              </Card>
              <Card>
                <Text style={{fontWeight: 'bold'}}> Description: </Text>
                <Text> {_.description} </Text>
              </Card>
              <Text style={{fontWeight: 'bold', marginTop: 15, textAlign: 'center'}}> {moment(_.created_at).format("MMMM Do YYYY, h:mm a")} </Text>
            </View>
          </Card>
      ))
        this.setState({reports})
      });
  }
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>My Reports</Text>
        {this.state.reports}
      </ScrollView>
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
  },
  h2: {
    fontSize: 24,
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
