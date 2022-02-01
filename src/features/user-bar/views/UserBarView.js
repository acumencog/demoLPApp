import React, {useCallback, useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import {
  Svg,
  Polygon,
  Defs,
  Stop,
  LinearGradient as SvgLinearGradient,
} from 'react-native-svg';
import Modal from 'react-native-modal';
import AnimateNumber from '@bankify/react-native-animate-number';
import FeatureIcon from 'react-native-vector-icons/Feather';

import COLORS from '../../../statics/colors';
import {LPText, LPButton, LPLevels} from '../../../components';
import {ROUTES} from '../../../routes/Routes';
import {USER_BAR_STATICS} from '../statics/UserBarStatics';
import LevelsView from '../../levels/views/LevelsView';
import {connect} from 'react-redux';
import ProfileActions from '../../profile/redux/ProfileActions';
import {PROFILE_COMPONENTS} from '../../profile/statics/ProfileStatics';
import {LOADING_STATUS} from '../../../statics/Enums';
import LeaderboardActions from '../../leaderboard/redux/LeaderboardActions';
import {LEADERBOARD_COMPONENTS} from '../../leaderboard/statics/LeaderboardStatics';
import {isNullOrEmpty, roundOfNumber} from '../../../utils/CommonUtils';
import {
  idetifyLevelsByPoints,
  getProgressInCurrentLevel,
  getLevelColor,
} from '../../../utils/DataUtils';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// const USER_BAR_HEIGHT = 115;
const USER_BAR_HEIGHT = Math.round(SCREEN_HEIGHT * 0.16);
const USER_IMAGE_SIZE = Math.round(SCREEN_WIDTH * 0.15);
const USER_LEVEL_SIZE = Math.round(SCREEN_WIDTH * 0.15);

// LEVELS MODAL
const LEVELS_H_MARGIN = SCREEN_WIDTH * 0.1;
const LEVELS_V_MARGIN = SCREEN_HEIGHT * 0.15;

const UserBarView = props => {
  const {
    controls,
    profileData,
    pointsData,
    allLevelsData,

    navigation,

    updatePoints,
    setComponentData,
    setDynamicDataApiStatus,
    getAllLevelsData,
  } = props;

  const [isLevelModalVisible, setIsLevelModalVisible] = useState(false);

  const initialPointsAnimatedValue = pointsData ? pointsData.points || 0 : 0;

  useEffect(() => {
    if (
      controls.dynamicDataApiStatus[PROFILE_COMPONENTS.POINTS.id] ===
        LOADING_STATUS.COMPLETED ||
      controls.dynamicDataApiStatus[PROFILE_COMPONENTS.POINTS.id] ===
        LOADING_STATUS.LOADING ||
      controls.dynamicDataApiStatus[PROFILE_COMPONENTS.POINTS.id] ===
        LOADING_STATUS.FAILED
    ) {
      return;
    }
    setDynamicDataApiStatus({
      [PROFILE_COMPONENTS.POINTS.id]: LOADING_STATUS.LOADING,
    });
    updatePoints();
  }, [
    controls.dynamicDataApiStatus,
    setComponentData,
    setDynamicDataApiStatus,
    updatePoints,
  ]);

  const navigateToProfileScreen = () => {
    let navigatePath = ROUTES.PROFILE.id;

    if (global.selectedTab === ROUTES.CHAT_STACK_NAVIGATOR.id) {
      navigatePath = ROUTES.PROFILE_CHAT_TAB.id;
    } else if (global.selectedTab === ROUTES.PLUS.id) {
      navigatePath = ROUTES.PROFILE_COMMUNITY_NEWS_TAB.id;
    } else if (global.selectedTab === ROUTES.LEADER_NAVIGATOR.id) {
      navigatePath = ROUTES.PROFILE_LEADER_BOARD_TAB.id;
    } else if (global.selectedTab === ROUTES.SHOP_NAVIGATOR.id) {
      navigatePath = ROUTES.PROFILE_SHOAP_TAB.id;
    }
    navigation.navigate(navigatePath);
  };
  useEffect(() => {
    getAllLevelsData();
  }, [getAllLevelsData]);

  const onProfileClick = () => {
    navigateToProfileScreen();
  };

  const onLevelsClick = useCallback(() => {
    setIsLevelModalVisible(true);
  }, []);

  const onLevelsModalClose = useCallback(() => {
    setIsLevelModalVisible(false);
  }, []);

  const userLevel = useMemo(() => {
    if (isNullOrEmpty(allLevelsData) || isNullOrEmpty(pointsData)) {
      return 0;
    }
    return idetifyLevelsByPoints(pointsData.yearlyPoints, allLevelsData);
  }, [allLevelsData, pointsData]);

  const userLevelProgress = useMemo(() => {
    const progress = getProgressInCurrentLevel(
      pointsData.yearlyPoints,
      allLevelsData,
    );
    return progress && progress >= 0 && progress <= 100 ? progress : 0;
  }, [allLevelsData, pointsData.yearlyPoints]);

  const getProfileImage = () => {
    if (profileData.thumbnailImage) {
      return (
        <Image
          source={{uri: profileData.thumbnailImage}}
          style={styles.userImage}
        />
      );
    }
    return (
      <View style={styles.userImagePlaceHolder}>
        <FeatureIcon name="user" size={30} color={COLORS.SILVER_CHALICE} />
      </View>
    );
  };

  const getProfileImageView = () => (
    <LPButton onlyChild style={styles.userImageButton} onPress={onProfileClick}>
      {getProfileImage()}
    </LPButton>
  );

  const getProfileName = () => (
    <LPButton
      onlyChild
      style={styles.profileNameContainer}
      onPress={onProfileClick}>
      <LPText style={styles.profileNameText} color={COLORS.WHITE}>
        {profileData.userName}
      </LPText>
    </LPButton>
  );

  const getPointsValueText = value => (
    <LPText style={styles.pointsText} color={COLORS.WHITE}>
      {value}
    </LPText>
  );

  const getPointsView = () => (
    <View style={styles.pointsContainer}>
      <LPText style={styles.pointsLabelText} color={COLORS.WHITE}>
        {USER_BAR_STATICS.LABELS.POINTS}
      </LPText>
      <AnimateNumber
        initial={initialPointsAnimatedValue}
        value={pointsData.points || 0}
        formatter={roundOfNumber}
        renderContent={getPointsValueText}
        interval={1}
      />
    </View>
  );

  const getLevelLogo = () => {
    return (
      <View style={styles.levelLogoContainer}>
        <LPLevels level={userLevel} size={20} />
      </View>
    );
  };

  const getLevelView = () => (
    <LPButton onlyChild style={styles.levelContainer} onPress={onLevelsClick}>
      <AnimatedCircularProgress
        style={styles.animatedCircle}
        size={USER_LEVEL_SIZE}
        width={4}
        fill={userLevelProgress}
        rotation={0}
        tintColor={getLevelColor(userLevel)}
        backgroundColor={COLORS.RUSSIAN_BLACK}
        lineCap="round"
        padding={1}
        duration={0}
        children={getLevelLogo}
      />
    </LPButton>
  );

  const getBackgroundSvg = () => (
    <View style={styles.svgContainer}>
      <Svg
        width={SCREEN_WIDTH}
        height={USER_BAR_HEIGHT}
        preserveAspectRatio="xMidYMid slice"
        viewBox={'0 0 500 100'}>
        <Defs>
          <SvgLinearGradient id="grad" x1="0" y1="1" x2="0" y2="0">
            <Stop offset="0" stopColor="#000" stopOpacity=".5" />
            <Stop offset="1" stopColor="#000" stopOpacity=".2" />
          </SvgLinearGradient>
        </Defs>
        <Polygon points="150,0 350,100 0,100 0,0" fill="url(#grad)" />
        <Polygon points="0,0 320,0 0,100" fill="url(#grad)" />
      </Svg>
    </View>
  );

  const getLevelModal = () => (
    <Modal
      isVisible={isLevelModalVisible}
      style={styles.levelsModal}
      backdropTransitionOutTiming={0}
      onBackButtonPress={onLevelsModalClose}
      onBackdropPress={onLevelsModalClose}>
      <LevelsView onRequestClose={onLevelsModalClose} />
    </Modal>
  );

  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.VICTORIA, COLORS.PORT_GORE]}>
      {getBackgroundSvg()}
      {getProfileImageView()}
      {getProfileName()}
      {getPointsView()}
      {getLevelView()}
      {getLevelModal()}
    </LinearGradient>
  );
};

UserBarView.propTypes = {
  controls: PropTypes.object,
  pointsData: PropTypes.object,
  profileData: PropTypes.object,
  allLevelsData: PropTypes.array,
  navigation: PropTypes.object,

  setComponentData: PropTypes.func,
  setDynamicDataApiStatus: PropTypes.func,
  getAllLevelsData: PropTypes.func,
};

UserBarView.defaultProps = {
  controls: {},
  profileData: {},
  pointsData: {},
  allLevelsData: [],
  navigation: {},

  updatePoints: () => {},
  setComponentData: () => {},
  setDynamicDataApiStatus: () => {},
  getAllLevelsData: () => {},
};

const mapsStateToProps = state => ({
  controls: state.ProfileReducer.controls,
  profileData:
    state.ProfileReducer.dynamicData[PROFILE_COMPONENTS.USER_PROFILE.id] || {},
  pointsData: state.ProfileReducer.dynamicData[PROFILE_COMPONENTS.POINTS.id],
  allLevelsData:
    state.LeaderboardReducer.dynamicData[LEADERBOARD_COMPONENTS.ALL_LEVELS.id],
});

const mapDispatchToProps = dispatch => ({
  updatePoints: payload => dispatch(ProfileActions.updatePoints(payload)),
  setComponentData: payload =>
    dispatch(ProfileActions.setComponentData(payload)),
  setDynamicDataApiStatus: payload =>
    dispatch(ProfileActions.setDynamicDataApiStatus(payload)),
  getAllLevelsData: payload =>
    dispatch(LeaderboardActions.getAllLevelsData(payload)),
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
  profileNameContainer: {
    marginLeft: 10,
    flex: 1,
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
)(UserBarView);
