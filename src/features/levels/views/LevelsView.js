import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Platform, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import COLORS from '../../../statics/colors';
import {LPButton, LPText, LPLevels, LPDivider} from '../../../components';
import {OS, LOADING_STATUS} from '../../../statics/Enums';
import {LEVELS_STATICS} from '../statics/LevelsStatics';
import {connect} from 'react-redux';
import {LEADERBOARD_COMPONENTS} from '../../leaderboard/statics/LeaderboardStatics';
import LPLogger from '../../../utils/LPLogger';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PADDING_HORIZONTAL = SCREEN_WIDTH * 0.05;

const LevelsView = props => {
  const {controls, onRequestClose, allLevelsData} = props;

  useEffect(() => {
    LPLogger.info('Opened all levels modal');
  }, []);

  const onCloseClick = useCallback(() => {
    onRequestClose();
  }, [onRequestClose]);

  const getCloseButton = () => (
    <LPButton
      onlyChild
      style={styles.main.closeButtonContainer}
      onPress={onCloseClick}>
      <Icon name="close" size={30} color={COLORS.WHITE} />
    </LPButton>
  );

  const getLevelItem = (levelData, i) => (
    <View key={levelData.id} style={styles.levels.levelWrapper}>
      {i > 0 && <LPDivider marginVertical={12} />}
      <View style={styles.levels.headerContainer}>
        <LPLevels level={levelData.level} size={35} />
        <View style={styles.levels.pointsContainer}>
          <LPText headerText>{levelData.minPoints}</LPText>
          <LPText smallText>{LEVELS_STATICS.LABELS.POINTS_TEXT}</LPText>
        </View>
      </View>
      <View style={styles.levels.descriptionContainer}>
        <LPText style={styles.levels.descriptionText}>{levelData.info}</LPText>
      </View>
    </View>
  );

  const getLevelsView = () => (
    <View style={styles.levels.container}>
      {allLevelsData.map(getLevelItem)}
    </View>
  );

  const isLoading =
    controls.dynamicDataApiStatus[LEADERBOARD_COMPONENTS.ALL_LEVELS.id] !==
    LOADING_STATUS.COMPLETED;

  return (
    <View style={styles.main.container}>
      {getCloseButton()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {!isLoading && getLevelsView()}
      </ScrollView>
    </View>
  );
};

LevelsView.propTypes = {
  controls: PropTypes.object,
  allLevelsData: PropTypes.array,
  onRequestClose: PropTypes.func,
};

LevelsView.defaultProps = {
  controls: {},
  allLevelsData: [],
  onRequestClose: () => {},
};

const mapStateToProps = state => ({
  controls: state.LeaderboardReducer.controls,
  allLevelsData:
    state.LeaderboardReducer.dynamicData[LEADERBOARD_COMPONENTS.ALL_LEVELS.id],
});

const mapDispatchToProps = dispatch => ({});

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RUSSIAN_BLACK,
    borderRadius: 10,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: 30,
  },
  closeButtonContainer: {
    position: 'absolute',
    right: -20,
    top: -20,
    width: 40,
    height: 40,
    backgroundColor: COLORS.PORT_GORE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: Platform.OS === OS.IOS ? 3 : 0,
    paddingLeft: Platform.OS === OS.IOS ? 1 : 0,
  },
});

const levels = StyleSheet.create({
  container: {},
  levelWrapper: {},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pointsContainer: {
    alignItems: 'center',
  },
  descriptionContainer: {
    marginTop: 5,
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 20,
  },
});

const styles = {
  main,
  levels,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LevelsView);
