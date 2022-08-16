import { LottieView } from 'lottie-react-native';
import React, { Component } from 'react';
import { View } from 'react-native';

export class Splash extends Component {
  render() {
    return (
        <View style={{flex:1 , justifyContent: 'center', alignItems:'center', backgroundColor: "#FFFFF"}}>
            <LottieView
            source = {require('./assets/pulse.json') }
            autoPlay
            loop = {false} 
            />
      </View>
    )
  }
}

export default Splash