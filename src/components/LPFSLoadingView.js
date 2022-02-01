import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {LPLoadingIcon, LPText} from '.';

const LPFSLoadingView = props => {
  const {showLoading, loadingText, showLoaderIcon} = props;
  return (
    <Modal
      isVisible={showLoading}
      style={styles.modalView}
      backdropTransitionOutTiming={0}
      animationOut="fadeOut">
      <View style={styles.contentContianer}>
        {showLoaderIcon && <LPLoadingIcon />}
        <LPText style={styles.loadingText}>{loadingText}</LPText>
      </View>
    </Modal>
  );
};

LPFSLoadingView.propTypes = {
  showLoading: PropTypes.bool,
  showLoaderIcon: PropTypes.bool,
  loadingText: PropTypes.string,
};

LPFSLoadingView.defaultProps = {
  showLoading: true,
  showLoaderIcon: true,
  loadingText: 'Loading...',
};

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
  },
  contentContianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
  },
});

export default LPFSLoadingView;
