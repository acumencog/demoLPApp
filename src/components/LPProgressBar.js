/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useMemo, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../statics/colors';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const PROGREESS_BAR_WIDTH = SCREEN_WIDTH * 0.72;

const LPProgressBar = props => {
  const {
    disabled,
    noFeedback,
    children,
    customStyle,
    style,
    leftText,
    percentage,
    onlyTextStyle,
    onPress,
    callbackValues,
    colorGradiantArrayUSelected,
    colorGradiantArraySelected,
    buttonWrapper,
    textNumberOfLines,
  } = props;
  const [animation] = useState(new Animated.Value(0));
  const interpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, (percentage * PROGREESS_BAR_WIDTH) / 100],
  });

  useEffect(() => {
    animateProgress();
  }, [animateProgress]);

  const animateProgress = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const onPressLocal = useCallback(() => {
    if (disabled) {
      return;
    }
    onPress(callbackValues);
  }, [callbackValues, disabled, onPress]);

  const colorGradiantArray = useMemo(() => {
    if (disabled) {
      return colorGradiantArraySelected
        ? colorGradiantArraySelected
        : [COLORS.CERISE_RED_2, COLORS.CERISE_RED_1, COLORS.CERISE_RED];
    }
    return colorGradiantArrayUSelected
      ? colorGradiantArrayUSelected
      : [COLORS.CERISE_RED_2, COLORS.CERISE_RED_1, COLORS.CERISE_RED];
  }, [colorGradiantArraySelected, colorGradiantArrayUSelected, disabled]);

  const getButtonView = () => (
    <View style={styles.buttonContainer}>
      <LinearGradient
        colors={[COLORS.GREY_DARK, COLORS.GREY_DARK]}
        angle={90}
        useAngle
        style={buttonWrapper ? buttonWrapper : styles.buttonWrapper}>
        {children}
      </LinearGradient>
      <Animated.View style={[styles.buttonWrapperSecond, {width: interpolate}]}>
        <LinearGradient
          colors={colorGradiantArray}
          angle={90}
          useAngle
          style={[styles.buttonWrapperSecond, styles.btnWraperSecondExtra]}
        />
      </Animated.View>

      <Text
        style={[styles.onlyText, onlyTextStyle]}
        numberOfLines={textNumberOfLines}>
        {leftText}
      </Text>
    </View>
  );

  const getContent = () => {
    return (
      <View style={styles.mainContainer}>
        {getButtonView()}
        <Text style={[styles.percentage]}>{`${percentage}%`}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={noFeedback ? 1 : 0.5}
      style={[styles.container, customStyle, style]}
      onPress={onPressLocal}>
      {getContent()}
    </TouchableOpacity>
  );
};

LPProgressBar.propTypes = {
  disabled: PropTypes.bool,
  noFeedback: PropTypes.bool,
  leftText: PropTypes.string,
  percentage: PropTypes.number,
  children: PropTypes.node,
  customStyle: PropTypes.object, // TODO, depricated, replace with style
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onlyTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  callbackValues: PropTypes.any,
  onPress: PropTypes.func,
};

LPProgressBar.defaultProps = {
  disabled: false,
  noFeedback: false,
  leftText: '',
  percentage: 0,
  children: null,
  customStyle: {},
  style: {},
  onlyTextStyle: {},
  callbackValues: {},
  onPress: () => {},
};

const styles = StyleSheet.create({
  container: {marginTop: 10},
  onlyTextContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onlyText: {
    color: COLORS.WHITE,
    fontSize: 13,
    fontWeight: '500',
    width: '80%',
    position: 'absolute',
    left: 10,
    alignSelf: 'center',
  },
  buttonWrapper: {
    justifyContent: 'center',
    minHeight: 40,
    width: '100%',
    borderRadius: 11,
  },
  btnWraperSecondExtra: {width: '100%'},
  buttonWrapperSecond: {
    justifyContent: 'center',
    minHeight: 40,
    borderRadius: 9,
    width: '80%',
    position: 'absolute',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginRight: 12,
    width: PROGREESS_BAR_WIDTH,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  percentage: {
    color: COLORS.WHITE,
    width: 38,
    textAlign: 'right',
  },
});

export default LPProgressBar;
