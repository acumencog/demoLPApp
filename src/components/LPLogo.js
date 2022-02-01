import React, {useMemo, useRef, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {LOGO_ONLY, LOGO_ORBIT} from '../statics/Variables';

const ORBIT_ANIMATION_SPEED = 1000;
const LOGO_IMAGE_MARGIN_RATIO = 0.2;

const LPLogo = props => {
  const {size, padding, animated, animationDuration} = props;

  const orbitAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animated) {
      Animated.timing(orbitAnimation, {
        toValue: 1,
        duration: animationDuration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    }
  }, [animated, animationDuration, orbitAnimation]);

  const getOribitRatation = useCallback(() => {
    if (!animated) {
      return '0deg';
    }
    return orbitAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  }, [animated, orbitAnimation]);

  const getOrbitOpacity = useCallback(() => {
    if (!animated) {
      return 1;
    }
    return orbitAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
  }, [animated, orbitAnimation]);

  const getLogoScale = useCallback(() => {
    if (!animated) {
      return 1;
    }
    return orbitAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.9, 0.9, 1],
    });
  }, [animated, orbitAnimation]);

  const getLogoOpacity = useCallback(() => {
    if (!animated) {
      return 1;
    }
    return orbitAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    });
  }, [animated, orbitAnimation]);

  const logoStyles = useMemo(
    () => ({
      borderRadius: size / 2,
      height: size,
      width: size,
      padding,
    }),
    [padding, size],
  );

  const logoImageStyles = useMemo(
    () => ({
      margin: size * LOGO_IMAGE_MARGIN_RATIO,
    }),
    [size],
  );

  return (
    <View style={[styles.container, logoStyles]}>
      <Animated.Image
        source={LOGO_ONLY}
        style={[
          styles.logoImage,
          logoImageStyles,
          {
            opacity: getLogoOpacity(),
            transform: [
              {
                scale: getLogoScale(),
              },
            ],
          },
        ]}
      />
      <Animated.Image
        source={LOGO_ORBIT}
        style={[
          styles.logoOrbit,
          {
            opacity: getOrbitOpacity(),
            transform: [
              {
                rotate: getOribitRatation(),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

LPLogo.propTypes = {
  size: PropTypes.number,
  padding: PropTypes.number,
  animationDuration: PropTypes.number,
  animated: PropTypes.bool,
};

LPLogo.defaultProps = {
  size: 150,
  padding: 0,
  animationDuration: ORBIT_ANIMATION_SPEED,
  animated: false,
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  logoImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoOrbit: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LPLogo;
