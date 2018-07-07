import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, Slider, Platform } from 'react-native';
import { Ionicons, MaterialIcons, Foundation, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import styles from './cameraStyles.js';

const renderBottomBar = (takePicture, toggleView, newPhotos) => (
  <View
    style={styles.bottomBar}>
    <View style={{ flex: 0.4 }}>
      <TouchableOpacity
        onPress={takePicture()}
        style={{ alignSelf: 'center' }}
      >
        <Ionicons name="ios-radio-button-on" size={70} color="white" />
      </TouchableOpacity>
    </View> 
    <TouchableOpacity style={styles.bottomButton} onPress={takePicture()}>
      <View>
        <Foundation name="thumbnails" size={30} color="white" />
        {newPhotos && <View style={styles.newPhotosDot}/>}
      </View>
    </TouchableOpacity>
  </View>
)

export default renderBottomBar