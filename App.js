import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
//import BottomNav from "./bottom-nav.js";

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    console.log(Animated)
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
      <Text>Have you been in an accident</Text>
      </FadeInView>
        <Text style={styles.title}></Text>
        <View style={styles.nav}>
        <View style={{width: 40, height: 40, backgroundColor: 'black'}}></View>
        <View style={{width: 40, height: 40, backgroundColor: 'black'}}></View>
        <View style={{width: 40, height: 40, backgroundColor: 'black'}}></View>
        <View style={{width: 40, height: 40, backgroundColor: 'black'}}></View>
        <View style={{width: 40, height: 40, backgroundColor: 'black'}}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    color: 'lightblue',
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
