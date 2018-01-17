import React, { Component } from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from "react-native";

export default class StudentAgenda extends Component {
  static navigationOptions = {
    tabBarLabel: 'Mi Agenda',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon name="calendar" size={ 25 } style={ { color: tintColor } }/>
    )
  };

  render() {
    return (
      <View>
        <Text>
          Student Agenda
        </Text>
      </View>
    );
  }
}