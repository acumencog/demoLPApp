import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../statics/colors';
import {LPButton, LPText} from '.';

const ICON_SIZE_RATIO = 0.4;
const LPIconButton = props => {
  const {
    IconProvider,
    iconName,
    label,
    size,
    style,
    primary,
    onPress,
    callbackValues,
  } = props;

  const gradientColors = [
    primary ? COLORS.CORNFLOWER_BLUE : COLORS.PORT_GORE,
    primary ? COLORS.DENIM : COLORS.PORT_GORE,
  ];

  const getIconView = () => (
    <LinearGradient
      colors={gradientColors}
      useAngle
      angle={90}
      style={[
        styles.iconWrapper,
        {height: size, width: size, borderRadius: size / 2},
      ]}>
      <IconProvider
        size={size * ICON_SIZE_RATIO}
        name={iconName}
        color={COLORS.WHITE}
      />
    </LinearGradient>
  );

  const getLabelView = () => (
    <LPText style={styles.labelText} smallText>
      {label}
    </LPText>
  );

  return (
    <LPButton onlyChild onPress={onPress} callbackValues={callbackValues}>
      <View style={[styles.container, style]}>
        {IconProvider && getIconView()}
        {label && getLabelView()}
      </View>
    </LPButton>
  );
};

LPIconButton.propTypes = {
  IconProvider: PropTypes.func,
  iconName: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  primary: PropTypes.bool,

  // buttons params
  onPress: PropTypes.func,
  callbackValues: PropTypes.object,
};

LPIconButton.defaultProps = {
  IconProvider: null,
  iconName: '',
  label: '',
  size: 50,
  style: {},
  primary: true,

  // buttons params
  onPress: () => {},
  callbackValues: {},
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PORT_GORE,
  },
  labelText: {
    marginTop: 5,
  },
});

export default LPIconButton;
