import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../statics/colors';
import Plus from '../assets/images/plus.svg';
/**
 * This function is used to show the button with Icon
 * @param  props disabled,noFeedback,children,customStyle,style,title,onlyTextStyle,    onPress,
    callbackValues,colorGradiantArrayUSelected,colorGradiantArraySelected,buttonWrapper,showPlus
 * @return button with configuration mentioned in the props
 */
const LPButtonWithIcon = props => {
  const {
    disabled,
    noFeedback,
    children,
    customStyle,
    style,
    title,
    onlyTextStyle,
    onPress,
    callbackValues,
    colorGradiantArrayUSelected,
    colorGradiantArraySelected,
    buttonWrapper,
    showPlus,
  } = props;

  const onPressLocal = useCallback(() => {
    if (disabled) {
      return;
    }
    onPress(callbackValues);
  }, [callbackValues, disabled, onPress]);

  //Contains the gradient of the button
  const colorGradiantArray = useMemo(() => {
    if (disabled) {
      return colorGradiantArraySelected
        ? colorGradiantArraySelected
        : [COLORS.CERISE_RED, COLORS.CERISE_RED_1, COLORS.CERISE_RED_2];
    }
    return colorGradiantArrayUSelected
      ? colorGradiantArrayUSelected
      : [COLORS.CERISE_RED, COLORS.CERISE_RED_1, COLORS.CERISE_RED_2];
  }, [colorGradiantArraySelected, colorGradiantArrayUSelected, disabled]);

  /**
   * This method is used to return the button  with configuration
   *
   * @return the button with configurations
   */
  const getButtonView = () => (
    <View style={styles.buttonContainer}>
      <LinearGradient
        colors={colorGradiantArray}
        angle={90}
        useAngle
        style={buttonWrapper ? buttonWrapper : styles.buttonWrapper}>
        {children}
      </LinearGradient>
      <LinearGradient
        colors={[COLORS.VICTORIA, COLORS.CERISE_RED_2]}
        angle={90}
        useAngle
        style={styles.buttonWrapperSecond}>
        <View style={styles.onlyTextContainer}>
          <Text style={[styles.onlyText, onlyTextStyle]}>{title}</Text>
          {showPlus && <Plus width={22} height={22} />}
        </View>
      </LinearGradient>
    </View>
  );

  const getContent = () => {
    return getButtonView();
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

LPButtonWithIcon.propTypes = {
  disabled: PropTypes.bool,
  noFeedback: PropTypes.bool,
  showPlus: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  customStyle: PropTypes.object, // TODO, depricated, replace with style
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onlyTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  callbackValues: PropTypes.any,
  onPress: PropTypes.func,
};

LPButtonWithIcon.defaultProps = {
  disabled: false,
  noFeedback: false,
  showPlus: true,
  title: '',
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
  },
  buttonWrapper: {
    justifyContent: 'center',
    minHeight: 50,
    paddingRight: 22,
    paddingLeft: 10,
    borderRadius: 10,
  },
  buttonWrapperSecond: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 40,
    borderRadius: 10,
    marginLeft: -14,
  },
  buttonContainer: {flexDirection: 'row'},
});

export default LPButtonWithIcon;
