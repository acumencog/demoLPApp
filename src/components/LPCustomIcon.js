import React from 'react';
import PropTypes from 'prop-types';
import {SvgXml} from 'react-native-svg';
import SVG_ICONS from '../statics/SvgIcons';
import COLORS from '../statics/colors';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const LPCustomIcon = props => {
  const {iconName, size, color} = props;

  if (!iconName) {
    return null;
  }

  return (
    <View>
      <SvgXml
        xml={SVG_ICONS[iconName](color)}
        width={size}
        height={size}
        stroke={color}
      />
    </View>
  );
};

LPCustomIcon.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

LPCustomIcon.defaultProps = {
  iconName: '',
  size: 30,
  color: COLORS.CERISE_RED,
};

const main = StyleSheet.create({
  unreadCount: {
    position: 'absolute',
    top: -12,
    right: -5,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.CERISE_RED_1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadCountText: {
    fontSize: 11,
    color: COLORS.WHITE,
  },
});
const styles = {
  main,
};
export default LPCustomIcon;
