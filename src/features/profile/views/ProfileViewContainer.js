import React, {useState} from 'react';

import {View, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import COLORS from '../../../statics/colors';
import {LPFSLoadingView} from '../../../components';
import {PROFILE_STATICS, PROFILE_COMPONENTS} from '../statics/ProfileStatics';

import {LOADING_STATUS, NEWS_TYPES} from '../../../statics/Enums';

import {LEADERBOARD_COMPONENTS} from '../../leaderboard/statics/LeaderboardStatics';
import {withNavigationFocus} from 'react-navigation';

const ProfileViewContainer = props => {
  const [updateStatus, setUpdateStatus] = useState(
    LOADING_STATUS.NOT_YET_STARTED,
  );

  return (
    <View style={styles.main.container}>
      <LPFSLoadingView
        loadingText={PROFILE_STATICS.MESSAGES.LOGGING_OUT}
        showLoading={updateStatus === LOADING_STATUS.LOADING}
      />
    </View>
  );
};

const mapsStateToProps = state => ({
  allLevelsData:
    state.LeaderboardReducer.dynamicData[LEADERBOARD_COMPONENTS.ALL_LEVELS.id],
});

const mapDispatchToProps = () => ({});

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RUSSIAN_BLACK,
    paddingBottom: 60,
  },
});

const styles = {
  main,
};

export default connect(
  mapsStateToProps,
  mapDispatchToProps,
)(withNavigationFocus(ProfileViewContainer));
