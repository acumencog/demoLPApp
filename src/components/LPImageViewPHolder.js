import React, {useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, Animated} from 'react-native';
import COLORS from '../statics/colors';
import LPLoadingIcon from './LPLoadingIcon';

const LOADING_TEXT = 'Loading...';
const ANIMATION_TIME = 500;

const LPImageView = props => {
  const {
    showLoaderView,
    loadingText,
    style,
    containerStyle,
    loadingIconSize,
    ...otherProps
  } = props;

  const loaderOpacity = useRef(new Animated.Value(1)).current;

  const onImageLoaded = useCallback(() => {
    Animated.timing(loaderOpacity, {
      toValue: 0,
      duration: ANIMATION_TIME,
      useNativeDriver: false,
    }).start();
  }, [loaderOpacity]);

  const getLoaderView = () => (
    <Animated.View style={[styles.loaderContainer, {opacity: loaderOpacity}]}>
      <LPLoadingIcon size={loadingIconSize} />
    </Animated.View>
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        style={[styles.image, style]}
        {...otherProps}
        onLoad={onImageLoaded}
      />
      {showLoaderView && getLoaderView()}
    </View>
  );
};

LPImageView.propTypes = {
  showLoaderView: PropTypes.bool,
  loadingText: PropTypes.string,
  loadingIconSize: PropTypes.number,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

LPImageView.defaultProps = {
  showLoaderView: true,
  loadingText: LOADING_TEXT,
  containerStyle: {},
  style: {},
  loadingIconSize: 30,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    backgroundColor: COLORS.PORT_GORE,
  },
  loaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: COLORS.PORT_GORE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LPImageView;
