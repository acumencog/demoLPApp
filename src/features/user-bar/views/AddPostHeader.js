import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../statics/colors';
import {LPText, LPButton} from '../../../components';
import {USER_BAR_STATICS} from '../statics/UserBarStatics';
import {connect} from 'react-redux';
import ProfileActions from '../../profile/redux/ProfileActions';
import {PROFILE_COMPONENTS} from '../../profile/statics/ProfileStatics';
import {LEADERBOARD_COMPONENTS} from '../../leaderboard/statics/LeaderboardStatics';
import BackSvg from '../../../assets/images/back';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// const USER_BAR_HEIGHT = 115;
const USER_BAR_HEIGHT = Math.round(SCREEN_HEIGHT * 0.09);
const USER_IMAGE_SIZE = Math.round(SCREEN_WIDTH * 0.15);

// LEVELS MODAL
const LEVELS_H_MARGIN = SCREEN_WIDTH * 0.1;
const LEVELS_V_MARGIN = SCREEN_HEIGHT * 0.15;

const AddPostHeader = props => {
  const {onNextClick, onBackButtonClick} = props;

  const getNextView = () => (
    <LPButton onlyChild style={styles.levelContainer} onPress={onNextClick}>
      <LPText color={COLORS.CERISE_RED}>{USER_BAR_STATICS.LABELS.Next}</LPText>
    </LPButton>
  );

  const getBackBtnView = () => (
    <LPButton
      onlyChild
      style={styles.onBackButtonClick}
      onPress={onBackButtonClick}>
      <BackSvg />
    </LPButton>
  );
  const getTitleView = () => (
    <View style={styles.titleContainer}>
      <LPText color={COLORS.WHITE}>{USER_BAR_STATICS.LABELS.New_Post}</LPText>
    </View>
  );

  const getBackgroundSvg = () => <View style={styles.svgContainer} />;

  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.VICTORIA, COLORS.PORT_GORE]}>
      {getBackgroundSvg()}

      {getTitleView()}
      {onNextClick && getNextView()}
      {onBackButtonClick && getBackBtnView()}
    </LinearGradient>
  );
};

AddPostHeader.propTypes = {
  controls: PropTypes.object,
  pointsData: PropTypes.object,
  profileData: PropTypes.object,
  allLevelsData: PropTypes.array,
  navigation: PropTypes.object,
  onBackButtonClick: PropTypes.func,
  onNextClick: PropTypes.func,
  setComponentData: PropTypes.func,
  setDynamicDataApiStatus: PropTypes.func,
  getAllLevelsData: PropTypes.func,
};

AddPostHeader.defaultProps = {
  controls: {},
  profileData: {},
  pointsData: {},
  allLevelsData: [],
  navigation: {},

  updatePoints: () => {},
  setComponentData: () => {},
  onNextClick: undefined,
  onBackButtonClick: undefined,
  setDynamicDataApiStatus: () => {},
  getAllLevelsData: () => {},
};

const mapsStateToProps = state => ({
  allLevelsData:
    state.LeaderboardReducer.dynamicData[LEADERBOARD_COMPONENTS.ALL_LEVELS.id],
});

const mapDispatchToProps = dispatch => ({
  updatePoints: payload => dispatch(ProfileActions.updatePoints(payload)),
  setComponentData: payload =>
    dispatch(ProfileActions.setComponentData(payload)),
  setDynamicDataApiStatus: payload =>
    dispatch(ProfileActions.setDynamicDataApiStatus(payload)),
});

const styles = StyleSheet.create({
  container: {
    paddingTop: SCREEN_HEIGHT * 0.04,
    height: USER_BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  svgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.BLACK_ROCK,
  },
  userImageButton: {
    height: USER_IMAGE_SIZE,
    width: USER_IMAGE_SIZE,
    borderRadius: USER_BAR_HEIGHT / 2,
    backgroundColor: COLORS.RUSSIAN_BLACK,
    overflow: 'hidden',
  },
  userImage: {
    height: USER_IMAGE_SIZE,
    width: USER_IMAGE_SIZE,
    resizeMode: 'cover',
    transform: [
      {
        scale: 1.01, // to adjust for circluar bleed
      },
    ],
  },
  userImagePlaceHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileNameText: {},
  pointsContainer: {
    alignItems: 'center',
  },
  pointsLabelText: {
    fontSize: 10,
  },
  pointsText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  levelContainer: {
    marginLeft: 10,
    position: 'absolute',
    right: 0,
    top: SCREEN_HEIGHT * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: '100%',
  },

  onBackButtonClick: {
    marginLeft: 10,
    position: 'absolute',
    left: 0,
    top: SCREEN_HEIGHT * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: '100%',
  },
  titleContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: SCREEN_HEIGHT * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: '100%',
  },
  levelLogoContainer: {},
  levelsModal: {
    marginHorizontal: LEVELS_H_MARGIN,
    marginVertical: LEVELS_V_MARGIN,
  },
});

export default connect(
  mapsStateToProps,
  mapDispatchToProps,
)(AddPostHeader);
