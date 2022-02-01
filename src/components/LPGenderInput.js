import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import FontistoIcons from 'react-native-vector-icons/Fontisto';

import {LPIconButton} from '.';
import LPText from './LPText';
import {COMPONENT_STATICS} from './statics/ComponentStatics';

const LPGenderInput = props => {
  const {value, onChange, error, touched} = props;

  const onGenderClick = useCallback(
    callbackValues => {
      onChange(callbackValues.id);
    },
    [onChange],
  );

  const getGenderIcon = buttonData => (
    <LPIconButton
      IconProvider={FontistoIcons}
      iconName={buttonData.iconName}
      style={styles.genderButtons}
      label={buttonData.displayName}
      primary={buttonData.id === value}
      callbackValues={buttonData}
      onPress={onGenderClick}
    />
  );

  const getGendersRadio = () => (
    <View style={styles.genderRadioContainer}>
      {getGenderIcon(COMPONENT_STATICS.GENDER_OPTIONS.MALE)}
      {getGenderIcon(COMPONENT_STATICS.GENDER_OPTIONS.FEMALE)}
      {getGenderIcon(COMPONENT_STATICS.GENDER_OPTIONS.OTHERS)}
    </View>
  );

  const getErrorView = () => {
    if (error && touched) {
      return (
        <View style={styles.errorContainer}>
          <LPText error>{error}</LPText>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {getGendersRadio()}
      {getErrorView()}
    </View>
  );
};

LPGenderInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

LPGenderInput.defaultProps = {
  value: '',
  onChange: () => {},
  onBlur: () => {},
  error: '',
  touched: false,
};

const styles = StyleSheet.create({
  container: {},
  genderRadioContainer: {
    flexDirection: 'row',
  },
  genderButtons: {
    width: 110,
  },
  errorContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default LPGenderInput;
