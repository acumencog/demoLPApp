import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import COLORS from '../../../statics/colors';
import {withNavigationFocus} from 'react-navigation';

/**
 * This function is used  for picking the image from the gallery
 * @return the image
 */
const PickImage = props => {
  return (
    <View style={styles.container}>
      <Text>{'Add Community Post'}</Text>
    </View>
  );
};

PickImage.propTypes = {
  profileData: PropTypes.object,
};

PickImage.defaultProps = {
  profileData: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RUSSIAN_BLACK,
    marginBottom: 60,
  },
});

export default withNavigationFocus(PickImage);
