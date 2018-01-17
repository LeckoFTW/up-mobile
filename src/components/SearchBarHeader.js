import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { FontAwesomeIcon, IonicIcon } from '../common/Icon';
import { Colors, createStyleSheet } from '../config/eStyleSheet';

export default class SearchBarHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <IonicIcon name="ios-search-outline" size={20} style={styles.searchIcon}/>
          <TextInput placeholder="Search" style={styles.searchInput}/>
        </View>
        <View style={styles.side}>
        </View>
      </View>
    );
  }
}

const styles = createStyleSheet({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  side: {
    flex: 1
  },
  center: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.lighterGray,
    height: 30,
    borderRadius: 5
  },
  searchIcon: {
    flex : 1
  },
  searchInput: {
    flex : 9
  }
});