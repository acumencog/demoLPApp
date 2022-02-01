import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import COLORS from '../../../statics/colors';
import {LPLogo} from '../../../components';
import ProfileActions from '../../profile/redux/ProfileActions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const PADDING_STATUS_BAR = SCREEN_HEIGHT * 0.02;
const LOGO_SIZE = SCREEN_HEIGHT * 0.15;
const SCREEN_MARGIN_TOP = SCREEN_HEIGHT * 0.05;
const PAGE_CONTENT_TOP_MARGIN = SCREEN_HEIGHT * 0.02;
const PAGE_H_PADDING = SCREEN_WIDTH * 0.1;

const RegistrationContainer = props => {
  const getLogoView = () => (
    <View style={styles.main.logoContainer}>
      <LPLogo size={LOGO_SIZE} />
    </View>
  );

  return <View style={styles.main.container}>{getLogoView()}</View>;
};

RegistrationContainer.propTypes = {
  navigation: PropTypes.object,
  setComponentData: PropTypes.func,
};

RegistrationContainer.defaultProps = {
  navigation: {},
  setComponentData: () => {},
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setComponentData: payload =>
    dispatch(ProfileActions.setComponentData(payload)),
});

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RUSSIAN_BLACK,
    paddingTop: PADDING_STATUS_BAR,
  },
  logoContainer: {
    marginTop: SCREEN_MARGIN_TOP,
    alignItems: 'center',
  },
});

const pages = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
  },
  pageWrapper: {
    width: SCREEN_WIDTH,
    paddingHorizontal: PAGE_H_PADDING,
    marginBottom: 40,
    marginTop: PAGE_CONTENT_TOP_MARGIN,
  },
});

const styles = {
  main,
  pages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationContainer);
