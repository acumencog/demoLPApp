import React, {useRef, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Animated, Easing} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../statics/colors';

const LPLoadingIcon = props => {
  const {size, speed, color, isLoading} = props;

  const loadingAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    Animated.loop(
      Animated.timing(loadingAnimation, {
        toValue: 1,
        duration: speed,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [isLoading, loadingAnimation, speed]);

  const getIconRotation = useCallback(
    () =>
      loadingAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      }),
    [loadingAnimation],
  );

  const customStyle = {
    width: size,
    height: size,
  };

  return (
    <Animated.View
      style={[
        styles.container,
        customStyle,
        {
          transform: [
            {
              rotate: getIconRotation(),
            },
          ],
        },
      ]}>
      <MaterialCommunityIcons
        style={styles.icon}
        name="loading"
        color={color}
        size={size}
      />
    </Animated.View>
  );
};

LPLoadingIcon.propTypes = {
  size: PropTypes.number,
  speed: PropTypes.number,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
};

LPLoadingIcon.defaultProps = {
  size: 40,
  speed: 1000,
  color: COLORS.CORNFLOWER_BLUE,
  isLoading: true,
};

const styles = StyleSheet.create({
  container: {},
  icon: {},
});

export default LPLoadingIcon;
