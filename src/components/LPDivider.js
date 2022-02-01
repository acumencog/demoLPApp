import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import COLORS from '../statics/colors';

const LPDivider = props => {
  const {color, height, marginVertical, style} = props;

  const customStyle = {
    height,
    marginVertical,
    backgroundColor: color,
  };
  return <View style={[styles.container, customStyle, style]} />;
};

LPDivider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  marginVertical: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

LPDivider.defaultProps = {
  color: COLORS.DENIM,
  height: 2,
  marginVertical: 2,
  style: {},
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 1,
  },
});

export default LPDivider;
