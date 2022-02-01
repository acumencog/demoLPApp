import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HORIZONTAL_PADDING = SCREEN_WIDTH * 0.05;

const LeaderboardRankings = props => {
  return <View style={styles.ranks.container} />;
};

const ranks = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: 90, // FOR TAB BAR
  },
});

const styles = {
  ranks,
};

export default LeaderboardRankings;
