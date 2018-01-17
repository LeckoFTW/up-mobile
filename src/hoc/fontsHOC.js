import React, { Component } from 'react';
import { Font } from 'expo';

export const withFonts = () => WrapperComponent => {
  return class extends Component {
    state = {
      areFontsLoaded: false
    };

    componentDidMount() {
      Font.loadAsync({
        'Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'ExtraBold': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
        'Thin' : require('../../assets/fonts/Montserrat-Thin.ttf'),
        'ExtraLight': require('../../assets/fonts/Montserrat-ExtraLight.ttf'),
        'Light': require('../../assets/fonts/Montserrat-Light.ttf')
      }).then(() => this.setState({ areFontsLoaded: true }));

    }

    render() {
      if (this.state.areFontsLoaded) {
        return (
          <WrapperComponent/>
        );
      }
      return null;
    }
  }
};


