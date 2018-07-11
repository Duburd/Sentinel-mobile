import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import React      from 'react';
import HomeIndex  from './src/home/index.js'
import Options    from './src/roadside_assistance/Options.js'
import Report     from './src/roadside_assistance/start_report/Index.js'
import Camera     from './src/roadside_assistance/start_report/report_pages/camera_utils/Camera.js'
import Form       from './src/roadside_assistance/start_report/report_pages/Form.js'
import Contact    from './src/roadside_assistance/start_report/report_pages/Contact.js'
import fake_user  from './src/home/profile/fake_user.json';
import Profile from './src/home/profile/Main'
import Reports from './src/home/profile/Reports'
import Vehicles from './src/home/profile/Vehicles'

const navigateAction = NavigationActions.navigate({
  routeName: 'options',
  action: NavigationActions.navigate({ routeName: 'options' }),
});

const Stack = createStackNavigator({
  Home:    {
    screen: HomeIndex,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  options: { screen: Options },
  report:  { screen: Report },
  camera:  { screen: Camera },
  form:    { screen: Form },
  contact: { screen: Contact }
});

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      policyNum: '12345',
      pwd: 'Abcd1234',
      logErr: null,
      user: fake_user,
      tab: null,
      latest_report: 0,
    };
  }

  tryLogin = () => {
    this.setState({logErr: null})
    const loginObj = {
      policyNum: this.state.policyNum,
      pwd: this.state.pwd,
    }
    const cred = JSON.stringify(loginObj)
    fetch('https://alluring-shenandoah-49358.herokuapp.com/api/users/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: cred,
    })
    .then((results)=> results.json())
    .then((response) => {
      if(response.user === null){
          this.setState({logErr: response.message})
        } else {
          this.setState({user: response.user})
          this.currentTab(0)
          this.fadeModal()
        }
      })
      this.setReportId = this.setReportId.bind(this)
  }

  setReportId(i){
    this.setState({
      latest_report: i,
    })
    
  }

  fadeModal() {
    this.setState({isLoggedIn: true });
  }

  currentTab = (tabIndex) => {
    const tab = [
    <Profile user={this.state.user}/>,
    <Reports user={this.state.user}/>]
    [tabIndex]
    this.setState({tab})
  }

  onPolicyChange = (text) => this.setState({policyNum: text})
  onPwdChange    = (text) => this.setState({pwd:       text})

  render() {
    const { pwd, policyNum, isLoggedIn , logErr, user} = this.state;
    return <Stack 
    screenProps={{
      setReportId   :this.setReportId,
      latest_report :this.state.latest_report,
      user          :this.state.user,
      tab           :this.state.tab,
      currentTab    :this.currentTab,
      tryLogin      :this.tryLogin,
      login         :this.login,
      fromIndex     :{pwd, policyNum, isLoggedIn, logErr},
      onPolicyChange:this.onPolicyChange,
      onPwdChange   :this.onPwdChange,
    }} /> 
  }
}