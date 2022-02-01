import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {LPLoadingIcon} from '.';
import LPText from './LPText';

const LPLoadingView = props => {
  const {loadingText, marginTop, style, size} = props;

  return (
    <View style={[styles.container, style, {marginTop}]}>
      <LPLoadingIcon size={size} />
      {loadingText && <LPText style={styles.text}>{loadingText}</LPText>}
    </View>
  );
};

LPLoadingView.propTypes = {
  loadingText: PropTypes.string,
  marginTop: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

LPLoadingView.defaultProps = {
  loadingText: 'Loading',
  marginTop: 0,
  size: 40,
  style: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
  },
});

export default LPLoadingView;
