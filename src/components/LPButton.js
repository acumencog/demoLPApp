import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../statics/colors';
import LPLoadingIcon from './LPLoadingIcon';
import {LOADING_STATUS} from '../statics/Enums';

/**
 * This method is used to customise and show the button on the UI using the props
 * We can handle the attributes like styles, gradient, on Press event button wrapping etc
 * @param {*} props used to customise the button
 * @return {*} returns the button with specified style and action.
 */
const LPButton = props => {
  const {
    disabled,
    onlyChild,
    onlyText,
    isLoading,
    noFeedback,
    children,
    customStyle,
    style,
    onlyTextStyle,
    onPress,
    callbackValues,
    colorGradiantArrayUSelected,
    colorGradiantArraySelected,
    buttonWrapper,
    buttonTextStyle,
  } = props;

  const onPressLocal = useCallback(() => {
    if (disabled) {
      return;
    }
    onPress && onPress(callbackValues);
  }, [callbackValues, disabled, onPress]);

  const colorGradiantArray = useMemo(() => {
    if (disabled) {
      return colorGradiantArraySelected
        ? colorGradiantArraySelected
        : [COLORS.PORT_GORE, COLORS.PORT_GORE];
    }
    return colorGradiantArrayUSelected
      ? colorGradiantArrayUSelected
      : [COLORS.VICTORIA, COLORS.BLUE_DARK];
  }, [colorGradiantArraySelected, colorGradiantArrayUSelected, disabled]);

  const getButtonView = () => (
    <LinearGradient
      colors={colorGradiantArray}
      angle={90}
      useAngle
      style={buttonWrapper ? buttonWrapper : styles.buttonWrapper}>
      <Text
        style={[
          styles.buttonText,
          {color: disabled ? COLORS.SILVER_CHALICE : COLORS.WHITE},
          buttonTextStyle,
        ]}>
        {children}
      </Text>
    </LinearGradient>
  );

  const getOnlyTextView = () => (
    <View style={styles.onlyTextContainer}>
      <Text style={[styles.onlyText, onlyTextStyle]}>{children}</Text>
    </View>
  );

  const getLoadingView = () => (
    <LinearGradient
      colors={[COLORS.CORNFLOWER_BLUE, COLORS.DENIM]}
      angle={90}
      useAngle
      style={buttonWrapper ? buttonWrapper : styles.buttonWrapper}>
      <LPLoadingIcon size={30} />
    </LinearGradient>
  );

  const getContent = () => {
    if (onlyChild) {
      return children;
    } else if (isLoading === true || isLoading === LOADING_STATUS.LOADING) {
      return getLoadingView();
    } else if (onlyText) {
      return getOnlyTextView();
    } else {
      return getButtonView();
    }
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

LPButton.propTypes = {
  disabled: PropTypes.bool,
  onlyChild: PropTypes.bool,
  onlyText: PropTypes.bool,
  noFeedback: PropTypes.bool,
  isLoading: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node,
  customStyle: PropTypes.object, // TODO, depricated, replace with style
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onlyTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  buttonTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  callbackValues: PropTypes.any,
  onPress: PropTypes.func,
};

LPButton.defaultProps = {
  disabled: false,
  onlyChild: false,
  onlyText: false,
  isLoading: false,
  noFeedback: false,
  children: null,
  customStyle: {},
  style: {},
  onlyTextStyle: {},
  buttonTextStyle: {},
  callbackValues: {},
  onPress: () => {},
};

const styles = StyleSheet.create({
  container: {},
  onlyTextContainer: {
    alignItems: 'center',
  },
  onlyText: {
    color: COLORS.WHITE,
    fontSize: 15,
    fontWeight: '500',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 20,
  },
});

export default LPButton;
