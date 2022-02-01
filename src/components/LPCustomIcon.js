import React from 'react';
import PropTypes from 'prop-types';
import {SvgXml} from 'react-native-svg';
import SVG_ICONS from '../statics/SvgIcons';
import COLORS from '../statics/colors';
import {View, StyleSheet} from 'react-native';

/**
 * This component is used to display the svg based items those can be configured based on
 * props that send to this component
 * @param props  like iconName, size, color can be used to configure the component
 * @return the icon which contains the svg icon
 */
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
