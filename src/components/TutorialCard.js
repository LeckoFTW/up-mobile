import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import Card from "../common/Card";

import { Colors, createStyleSheet, Fonts } from "../config/eStyleSheet";

export default class TutorialCard extends Component {
  render() {
    const { onPressCard, tutorialClass: { teacher, subject, date, location, startHour, endHour } } = this.props;

    return (
      <Card>
        <TouchableOpacity
          onPress={onPressCard}
        >
          <View style={styles.tutorialTitleContainer}>
            <Text style={styles.tutorialTitle}>Matematicas</Text>
          </View>
          <View style={styles.teacherInfoContainer}>
            <Image
              resizeMode="contain"
              style={styles.teacherAvatar}
              source={require('../../assets/images/man-5.png')}
            />
            <View>
              <Text style={styles.teacherName}>{teacher.name}</Text>
              <Text style={styles.teacherName}>{teacher.lastname}</Text>
            </View>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              <Icon name="calendar" size={17}/>
              {` Lunes 19 de Septiembre`}
            </Text>
            <Text style={[ styles.bold, styles.date ]}>
              <Icon name="clock-o" size={17}/>
              {` ${startHour}:00 - ${endHour}:00`}
            </Text>
            <Text style={styles.date}>
              <Icon name="building-o" size={17}/>
              {` ${location}`}
            </Text>
          </View>
        </TouchableOpacity>
      </Card>
    )
  }
}

const styles = createStyleSheet({
  tutorialTitleContainer: {
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 5
  },
  tutorialTitle: {
    fontSize: '0.85rem',
    fontFamily: Fonts.extraBold,
    color: Colors.darker
  },
  dateContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 10,
    padding: 20
  },
  date: {
    fontSize: '0.85rem',
    fontFamily: Fonts.extraLight
  },
  teacherInfoContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.darker
  },
  teacherAvatar: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 25
  },
  teacherName: {
    flex: 7,
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '$white',
    textShadowColor: '$darkerGray',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
    fontFamily: Fonts.regular
  },
  bold: {
    color: Colors.darker
  }
});