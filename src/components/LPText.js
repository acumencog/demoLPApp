import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import COLORS from '../statics/colors';

const LPText = props => {
  const {
    children,
    bold,
    largHeaderText,
    headerText,
    smallText,
    error,
    primaryColored,
    centerAligned,
    numberOfLines,
    color,
    style,
  } = props;

  const customStyle = [
    styles.defaultText,
    largHeaderText ? styles.largHeaderText : null,
    headerText ? styles.headerText : null,
    smallText ? styles.smallText : null,
    bold ? styles.bold : null,
    error ? styles.error : null,
    primaryColored ? styles.primaryColored : null,
    centerAligned ? styles.centerAligned : null,
    color ? {color} : null,
    ...(Array.isArray(style) ? style : [style]),
  ];

  return (
    <Text style={customStyle} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

LPText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  bold: PropTypes.bool,
  error: PropTypes.bool,
  largHeaderText: PropTypes.bool,
  headerText: PropTypes.bool,
  smallText: PropTypes.bool,
  primaryColored: PropTypes.bool,
  centerAligned: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

LPText.defaultProps = {
  children: '',
  default: false,
  bold: false,
  error: false,
  largHeaderText: false,
  headerText: false,
  smallText: false,
  primaryColored: false,
  centerAligned: false,
  color: '',
  style: [],
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 15,
    color: COLORS.ALTO,
    flexShrink: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  error: {
    color: COLORS.BITTER_SWEET,
    fontSize: 12,
    fontStyle: 'italic',
  },
  largHeaderText: {
    color: COLORS.WHITE,
    fontSize: 27,
  },
  headerText: {
    color: COLORS.WHITE,
    fontSize: 18,
  },
  smallText: {
    fontSize: 10,
  },
  primaryColored: {
    color: COLORS.CERISE_RED,
  },
  centerAligned: {
    textAlign: 'center',
  },
});

export default LPText;
