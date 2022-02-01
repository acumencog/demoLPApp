import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';

import UserBarView from '../../user-bar/views/UserBarView';
import COLORS from '../../../statics/colors';
import {PROFILE_COMPONENTS} from '../../profile/statics/ProfileStatics';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SCREEN_PADDING = SCREEN_WIDTH * 0.05;
const ITEM_MARGIN = SCREEN_WIDTH * 0.02;
const ITEM_WIDTH = (SCREEN_WIDTH - SCREEN_PADDING * 2 - ITEM_MARGIN * 2) / 2;
const LARGE_IMAGE_ASPECT_RATIO = 1.3;

const LARGE_IMAGE_HEIGHT = ITEM_WIDTH * LARGE_IMAGE_ASPECT_RATIO;
const SQUARE_IMAGE_HEIGHT = ITEM_WIDTH;

const DETAILS_MODAL = {
  H_MARGIN: SCREEN_WIDTH * 0.1,
  V_MARGIN: SCREEN_HEIGHT * 0.17,
};

const SHOP_LAZY_LOADING_CONFIG = {
  PAGE_SIZE: 7,
  TRIGGER_OFFSET: 4,
};

const ShopHomeView = props => {
  const {navigation} = props;

  return (
    <View style={styles.main.container}>
      <UserBarView navigation={navigation} />
    </View>
  );
};

ShopHomeView.propTypes = {
  navigation: PropTypes.object,
  controls: PropTypes.object,
  shopItemsData: PropTypes.object,
  userPointsData: PropTypes.object,

  setComponentData: PropTypes.func,
  setDynamicDataApiStatus: PropTypes.func,
};

ShopHomeView.defaultProps = {
  navigation: {},
  controls: {},
  shopItemsData: {
    order: {},
  },
  userPointsData: {},

  setComponentData: () => {},
  setDynamicDataApiStatus: () => {},
};

const mapStateToProps = store => ({
  userPointsData:
    store.ProfileReducer.dynamicData[PROFILE_COMPONENTS.POINTS.id],
});

const mapDispatchToProps = dispatch => ({});

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RUSSIAN_BLACK,
    paddingBottom: 90, // FOR TAB BAR
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: SCREEN_PADDING,
  },
  modal: {
    marginVertical: DETAILS_MODAL.V_MARGIN,
    marginHorizontal: DETAILS_MODAL.H_MARGIN,
  },
  contentContainer: {},
});

const items = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 150,
  },
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_PADDING,
    marginTop: 10,
    flexDirection: 'row',
  },

  imageListContainerLarge: {
    flex: 1,
    marginLeft: ITEM_MARGIN,
  },
  imageListContainerSquare: {
    flex: 1,
    marginRight: ITEM_MARGIN,
  },
  largeImageWrapper: {
    width: ITEM_WIDTH,
    height: LARGE_IMAGE_HEIGHT,
    marginBottom: ITEM_MARGIN * 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  squareImageWrapper: {
    width: ITEM_WIDTH,
    height: SQUARE_IMAGE_HEIGHT,
    marginBottom: ITEM_MARGIN * 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

const styles = {
  main,
  items,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopHomeView);
