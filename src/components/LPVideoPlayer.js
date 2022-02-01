import React, {useRef, useCallback, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  BackHandler,
  Animated,
} from 'react-native';
import RNVideo from 'react-native-video';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {LPLoadingIcon, LPButton, LPText} from '.';
import COLORS from '../statics/colors';
import {secondsToTimeString} from '../utils/CommonUtils';
import {OS} from '../statics/Enums';
import LPLogger from '../utils/LPLogger';
import LPBackButton from './LPBackButton';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const DEFAULT_VIDEO_ASPECT_RATIO = 1.78;

const FULL_SCREEN_DIMS = {
  // needs some adjustment for android full screen
  width: SCREEN_HEIGHT + (Platform.OS === OS.ANDROID ? 50 : 0),
  height: SCREEN_WIDTH,
  hPadding: 30,
};

const FS_PLAYER_INITIAL_POSITION = 300;

const DEFAULT_BUFFER_CONFIG = {
  minBufferMs: 1000,
  maxBufferMs: 10000,
  bufferForPlaybackMs: 1500,
  playbackAfterRebufferMs: 1000,
};

const LPVideoPlayer = props => {
  const {
    id,
    newsId,
    url,
    aspectRatio,
    thumbnail,
    style,
    onVideoEnd,
    onFullScreenChange,
  } = props;

  const videoPlayerRef = useRef(null);
  const playerAnimation = useRef(new Animated.Value(1)).current;

  const [isPaused, setIsPaused] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [totalDuration, setTotalDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const loadStartTime = useRef(null);

  const onLoadStart = useCallback(() => {
    loadStartTime.current = new Date();
    setIsVideoLoading(true);
  }, []);

  const onVideoLoaded = useCallback(
    e => {
      setTotalDuration(e.duration);
      if (Platform.OS === OS.ANDROID) {
        videoPlayerRef.current.seek(progress, 50);
        setIsVideoLoading(false);
      }
      if (Platform.OS === OS.IOS && progress > 0) {
        videoPlayerRef.current.seek(progress, 50);
      }
      if (loadStartTime.current) {
        const loadingTime = new Date() - loadStartTime.current;
        LPLogger.logResponseTime(
          `Video Loading Time newsId: ${newsId}`,
          loadingTime,
        );
      }
    },
    [newsId, progress],
  );

  const onVideoReady = useCallback(e => {
    setIsVideoLoading(false);
  }, []);

  const onPlayClick = useCallback(() => {
    setIsPaused(false);
  }, []);

  const onPauseClick = useCallback(() => {
    setIsPaused(true);
  }, []);

  const onProgress = useCallback(e => {
    setProgress(e.currentTime);
  }, []);

  const onVideoEndLocal = useCallback(() => {
    changeFullScreen(false);
    setIsPaused(true);
    if (Platform.OS === OS.ANDROID) {
      videoPlayerRef.current.seek(0);
      setProgress(0);
    }
    onVideoEnd();
  }, [changeFullScreen, onVideoEnd]);

  const onVideoError = useCallback(
    e => {
      LPLogger.error(
        `Video Player error for newsId ${newsId}, error: ${JSON.stringify(e)}`,
        'LPVideoPlayer onVideoError',
      );
    },
    [newsId],
  );

  const onFullScreenClick = useCallback(() => {
    // videoPlayerRef.current.presentFullscreenPlayer();
    LPLogger.info(`Video Player full screen: ${!isFullScreen}`);
    changeFullScreen(!isFullScreen);
  }, [changeFullScreen, isFullScreen]);

  const changeFullScreen = useCallback(
    newStatus => {
      if (newStatus) {
        playerAnimation.setValue(0);
        Animated.timing(playerAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
      setIsFullScreen(newStatus);
      onFullScreenChange(newStatus);
    },
    [onFullScreenChange, playerAnimation],
  );

  useEffect(() => {
    const backHandeler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isFullScreen) {
          changeFullScreen(false);
          return true;
        }
      },
    );
    return () => {
      backHandeler.remove();
    };
  });

  const onFullScreenBackButtonClick = useCallback(() => {
    changeFullScreen(false);
  }, [changeFullScreen]);

  const getPlayerMarginLeft = useCallback(
    () =>
      playerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [FS_PLAYER_INITIAL_POSITION, 0],
      }),
    [playerAnimation],
  );

  const getStatusIcon = () => {
    if (isVideoLoading) {
      return <LPLoadingIcon size={60} />;
    }
    if (isPaused) {
      return (
        <LPButton
          onlyChild
          style={styles.controls.statusIconWrapper}
          onPress={onPlayClick}>
          <Icon name="play" size={30} color={COLORS.WHITE} />
        </LPButton>
      );
    }
    return null;
  };

  const getThumbnail = () => (
    <View style={styles.controls.thumbnailContainer}>
      <Image source={{uri: thumbnail}} style={styles.controls.thumbnailImage} />
    </View>
  );

  const getBackButton = () => (
    <LPBackButton
      onPress={onFullScreenBackButtonClick}
      style={styles.controls.backButtonContainer}
      backgroundColor={COLORS.SEMI_TRANSPARENT_LIGHT}
    />
  );

  const getOverlayButton = () => (
    <View style={styles.controls.overlayButtonContainer}>
      <LPButton
        onPress={onPauseClick}
        onlyChild
        style={styles.controls.overlayButton}
      />
    </View>
  );

  const getOverlayControls = () => (
    <View style={styles.controls.container}>
      {((isPaused && progress <= 0) || isVideoLoading) && getThumbnail()}
      {!isPaused && getOverlayButton()}
      {getStatusIcon()}
      {isFullScreen && isPaused && getBackButton()}
    </View>
  );

  const getProgressView = () => {
    const progressString = secondsToTimeString(Math.round(progress));
    const totalDurationString = secondsToTimeString(Math.round(totalDuration));
    const progressPercentage = totalDurationString
      ? ((progress / totalDuration) * 100).toFixed(2)
      : 0;

    const prgContainerExtra = {paddingRight: isFullScreen ? 60 : 4};
    return (
      <View style={[styles.controls.progressContainer, prgContainerExtra]}>
        <View style={styles.controls.progressBarContainer}>
          <View
            style={[
              styles.controls.progressBar,
              {width: `${progressPercentage}%`},
            ]}
          />
        </View>
        <View style={styles.controls.progressText}>
          <LPText smallText color={COLORS.WHITE}>
            {`${progressString}/${totalDurationString}`}
          </LPText>
        </View>
        <LPButton
          onlyChild
          style={styles.controls.fullScreenIconContainer}
          onPress={onFullScreenClick}>
          <MaterialIcon name="fullscreen" size={30} color={COLORS.WHITE} />
        </LPButton>
      </View>
    );
  };

  const getPlayerView = () => (
    <RNVideo
      key={id}
      ref={videoPlayerRef}
      source={{uri: url}}
      style={styles.main.videoPlayer}
      onBuffer={() => {}}
      onError={onVideoError}
      onLoadStart={onLoadStart}
      onLoad={onVideoLoaded}
      onReadyForDisplay={onVideoReady}
      onProgress={onProgress}
      onEnd={onVideoEndLocal}
      resizeMode={'cover'}
      paused={isPaused}
      bufferConfig={DEFAULT_BUFFER_CONFIG}
      progressUpdateInterval={100}
      repeat={Platform.OS === OS.IOS}
      allowsExternalPlayback={false}
      ignoreSilentSwitch="ignore"
      playInBackground={false}
    />
  );

  const normalVideoSizeStyle = {
    height: (SCREEN_WIDTH * 0.8) / aspectRatio + 30, // adjsut 30 for bottom progress bar
  };

  return (
    <Animated.View
      style={[
        styles.main.container,
        isFullScreen ? styles.main.fullScreenContainer : normalVideoSizeStyle,
        {
          marginLeft: getPlayerMarginLeft(),
          opacity: playerAnimation,
        },
        style,
      ]}>
      <View key={id} style={[styles.main.videoPlayerContainer]}>
        {getPlayerView()}
        {getOverlayControls()}
        {getProgressView()}
      </View>
    </Animated.View>
  );
};

LPVideoPlayer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  newsId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  url: PropTypes.string,
  width: PropTypes.number,
  aspectRatio: PropTypes.number,
  thumbnail: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onVideoEnd: PropTypes.func,
  onFullScreenChange: PropTypes.func,
};

LPVideoPlayer.defaultProps = {
  id: '',
  newsId: '',
  url: '',
  aspectRatio: DEFAULT_VIDEO_ASPECT_RATIO,
  thumbnail: '',
  style: {},
  onVideoEnd: () => {},
  onFullScreenChange: () => {},
};

const anchor = parseInt(
  (Math.max(FULL_SCREEN_DIMS.height, FULL_SCREEN_DIMS.width) -
    Math.min(FULL_SCREEN_DIMS.height, FULL_SCREEN_DIMS.width)) /
    2,
  10,
);

const main = StyleSheet.create({
  container: {},
  fullScreenContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: COLORS.RUSSIAN_BLACK,
    height: FULL_SCREEN_DIMS.height,
    width: FULL_SCREEN_DIMS.width,
    transform: [
      {
        rotateZ: '90deg',
      },
      {translateY: anchor},
      {translateX: anchor},
    ],
  },
  videoPlayerContainer: {
    backgroundColor: COLORS.MIRAGE,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
    flex: 1,
  },
  videoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 29,
  },
});

const controls = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  thumbnailImage: {
    flex: 1,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  overlayButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayButton: {
    flex: 1,
  },
  statusIconWrapper: {
    backgroundColor: COLORS.SEMI_TRANSPARENT,
    justifyContent: 'center',
    paddingLeft: 18,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  progressContainer: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    backgroundColor: COLORS.PORT_GORE,
    flexDirection: 'row',
    paddingLeft: 24,
    opacity: 0.9,
  },
  progressBarContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  progressBar: {
    height: 5,
    borderRadius: 3,
    backgroundColor: COLORS.CERISE_RED,
  },
  progressText: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  fullScreenIconContainer: {
    marginLeft: 5,
  },
});

const styles = {
  main,
  controls,
};

export default LPVideoPlayer;
