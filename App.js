import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import React      from 'react';
import HomeIndex  from './src/home/index.js'
import Options    from './src/roadside_assistance/Options.js'
import ToolTips1  from './src/roadside_assistance/start_report/ToolTips1.js'
import Camera     from './src/roadside_assistance/start_report/Camera.js'
import Form       from './src/roadside_assistance/start_report/Form.js'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.changeMainView = this.changeMainView.bind(this)
    this.state = {
      currentView: <HomeIndex changeMainView = {this.changeMainView}/>,
      allViews: {
        home:    HomeIndex,
        options: Options,
        report:  ToolTips1,
        camera:  Camera,
        form:    Form,
      }
    }
  }
  changeMainView(nextViewKey) {
    const CurrentClass = this.state.allViews[nextViewKey]
    const currentView = <CurrentClass changeMainView = {this.changeMainView}/>
    this.setState({
      currentView
    })
  }
  render() {
    return (
      <View height={'100%'} width={'100%'}>
        {this.state.currentView}
      </View>
    );
  }
}
