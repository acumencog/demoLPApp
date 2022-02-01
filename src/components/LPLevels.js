import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Image} from 'react-native';

import {LEVEL_LOGOS} from '../statics/Variables';
import COLORS from '../statics/colors';

const LPLevels = props => {
  const {size, level, style} = props;

  const customImageStyle = {
    width: size,
    height: size,
  };

  if (level <= 0) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={LEVEL_LOGOS[level]}
        style={[styles.image, customImageStyle, style]}
      />
      <Text style={styles.levelText}>{level}</Text>
    </View>
  );
};

LPLevels.propTypes = {
  level: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
};

LPLevels.defaultProps = {
  level: 1,
  size: 50,
  style: {},
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  image: {
    margin: 5,
    marginBottom: 8,
  },
  levelText: {
    color: COLORS.WHITE,
    position: 'absolute',
    fontSize: 10,
    bottom: 4,
    right: -1,
  },
});

export default LPLevels;
