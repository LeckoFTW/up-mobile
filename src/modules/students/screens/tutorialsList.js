import React, { Component } from 'react';
import { FlatList, View } from "react-native";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import TutorialCard from "../../../components/TutorialCard";
import SearchBarHeader from '../../../components/SearchBarHeader';
import { createStyleSheet } from "../../../config/eStyleSheet";
import { EntypoIcon } from '../../../common/Icon';

const weekTutorialsQuery = gql`
  query getWeekTutorials($subjects: [String]!){
    weekTutorials(subjects: $subjects){
      id
      teacher{
        name
        lastname
      }
      subject
      date
      startHour
      endHour
      location
    }
  }  
`;

@graphql(weekTutorialsQuery, { options: { variables: { subjects: [ '5a543d0301c42de8a812da99' ] } } })
export default class TutorialsList extends Component {
  mockData = [
    {
      id: 1,
      teacher: { name: 'Andres Felipe', lastname: 'Gonzalez Forero' },
      schedule: { start_hour: 12, end_hour: 22 },
      classroom: { ubication: 'Torre V Salon 202' }
    }
  ];

  render() {
    const { weekTutorials } = this.props.data;
    if (!weekTutorials) return null;
    return (
      <View style={styles.container}>
        <SearchBarHeader/>
        <FlatList
          data={weekTutorials}
          keyExtractor={weekTutorial => weekTutorial.id}
          renderItem={this._renderTutorialCards}
        />
      </View>
    );
  }

  _renderTutorialCards = ({ item }) => (
    <TutorialCard tutorialClass={item} onPress={() => console.log('message')}/>
  );
}

TutorialsList.navigationOptions = {
  'tabBarLabel': 'Tutorias',
  'tabBarIcon': ({ tintColor }) => (
    <EntypoIcon name="list" size={25} style={{ color: tintColor }}/>
  )
};

const styles = createStyleSheet({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white'
  }
});