import React from 'react';
import {View, StyleSheet} from 'react-native';
import UserBarView from '../../user-bar/views/UserBarView';
import COLORS from '../../../statics/colors';
import {connect} from 'react-redux';

const LeaderboardView = props => {
  const {navigation} = props;

  return (
    <View style={styles.main.container}>
      <UserBarView navigation={navigation} />
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDisaptchToProps = dispatch => ({});

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLUE_DARK,
  },
});

const styles = {
  main,
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps,
)(LeaderboardView);
