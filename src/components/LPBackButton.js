import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {isNullOrEmpty} from '../utils/CommonUtils';
import COLORS from '../statics/colors';
import LPText from './LPText';
import {OS} from '../statics/Enums';
import BackSvg from '../assets/images/back';
const DEFAULT_SIZE = 30;

/**
 * This method is used to show the back button
 *
 * @param {*} props used to customise the back button
 * @return {*} returns the back button with style that you pass in the props
 */
const LPBackButton = props => {
  const {size, onPress, children, circular, style} = props;
  const containerSize = size * 1.3;
  const customButtonStyle = {
    width: !isNullOrEmpty(circular) ? containerSize : null,
    height: containerSize,
    borderRadius: !isNullOrEmpty(circular) ? containerSize / 2 : 0,
  };

  let marginLeft = 10;
  if (customButtonStyle.marginLeft) {
    marginLeft = customButtonStyle.marginLeft;
  } else if (style.marginLeft) {
    marginLeft = style.marginLeft;
  }

  return (
    <TouchableOpacity
      onlyChild
      onPress={onPress}
      style={[styles.button, style, {marginLeft}]}>
      <BackSvg />
      {children && (
        <LPText style={styles.label} headerText>
          {children}
        </LPText>
      )}
    </TouchableOpacity>
  );
};

LPBackButton.propTypes = {
  size: PropTypes.number,
  onPress: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  backgroundColor: PropTypes.string,
  circular: PropTypes.bool,
};

LPBackButton.defaultProps = {
  size: DEFAULT_SIZE,
  onPress: () => {},
  children: null,
  style: {},
  backgroundColor: null,
  circular: true,
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.SEMI_TRANSPARENT_DARK,
    paddingHorizontal: 5,
    width: 34,
    height: 34,
    borderRadius: 20,
  },
  icon: {
    paddingTop: Platform.OS === OS.IOS ? 3 : 0,
  },
  label: {
    marginLeft: 10,
  },
});

export default LPBackButton;
