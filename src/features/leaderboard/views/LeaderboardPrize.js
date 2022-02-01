import React from 'react';

import {View, StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HORIZONTAL_PADDING = SCREEN_WIDTH * 0.05;

const LeaderboardPrize = props => {
  return <View style={styles.main.container} />;
};

const main = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: 90, // FOR TAB BAR
  },
});

const styles = {
  main,
};

export default LeaderboardPrize;
