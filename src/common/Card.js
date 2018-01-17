import React from 'react';
import { View } from "react-native";

import { createStyleSheet, Colors } from "../config/eStyleSheet";

const Card = ({ children }) => (
  <View style={ styles.cardContainer }>
    { children }
  </View>
);

const styles = createStyleSheet({
  cardContainer: {
    backgroundColor: '#FFF',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10,
    shadowColor: Colors.lightGray,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 15
  }
});

export default Card;