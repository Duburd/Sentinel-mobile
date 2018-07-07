import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import ProgressBar from './ProgressBar'
import { Tile } from 'react-native-elements';
import { RNS3 } from 'react-native-aws3';
import secrets from './../../../.secrets.json'


export default class ReportMain extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedPhotos: []
    }
  }

  addPhoto = (uri, isSelected) => {
    let selectedPhotos = this.state.selectedPhotos;
    if (isSelected) {
      selectedPhotos.push(uri);
    } else {
      selectedPhotos = selectedPhotos.filter(item => item !== uri);
    }
    this.setState({ selectedPhotos });
    Alert.alert(this.state.selectedPhotos.length.toString())
  }

  saveToAws = () => {
    arrayOfAmazonPhotoUri = []
    this.state.selectedPhotos.forEach((uri) => {
      let file_name = '';
      uri.replace(/(\/+\S+\.jpg$)/, (m, p1)=> {
        file_name = p1
        arrayOfAmazonPhotoUri.push(`https://s3.amazonaws.com/lhl-insurance-buddy/${p1}`)
      });
      const file = {
        // `uri` can also be a file system path (i.e. file://)
        uri: uri,
        name: file_name,
        type: "image/png"
      }
      
      const options = {
        bucket: "lhl-insurance-buddy",
        region: "us-east-1",
        accessKey: secrets.AWS_PUBLIC_KEY,
        secretKey: secrets.AWS_SECRET_KEY,
        successActionStatus: 201
      }
      
      RNS3.put(file, options).then(response => {
        if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
        console.log(response.body);
        this.setState({ newPhotos: true })
      });
      Alert.alert('this doesn\'t happen');
    });
    return arrayOfAmazonPhotoUri
  }

  render() {
    const {addPhoto, saveToAws} = this;
    const { navigate } = this.props.navigation;
    return (
      <View height={'100%'} width={'100%'}>
         <ProgressBar screenProps={{ addPhoto, saveToAws }}/>
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