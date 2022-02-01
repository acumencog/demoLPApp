import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Platform} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import COLORS from '../statics/colors';
import {OS} from '../statics/Enums';
import LPButton from './LPButton';

const LPCheckbox = props => {
  const {label, value, setValueState, onChange, style} = props;

  const onChangeLocal = useCallback(() => {
    onChange(!value);
    setValueState(!value);
  }, [onChange, setValueState, value]);

  return (
    <View style={[styles.container, style]}>
      <CheckBox
        value={value}
        onValueChange={onChangeLocal}
        onAnimationType="bounce"
        offAnimationType="bounce"
        tintColors={{true: COLORS.CORNFLOWER_BLUE, false: COLORS.SILVER}}
        boxType="square"
        style={styles.checkbox}
      />
      <LPButton onPress={onChangeLocal} onlyText style={styles.lableText}>
        {label}
      </LPButton>
    </View>
  );
};

LPCheckbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  setValueState: PropTypes.func,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

LPCheckbox.defaultProps = {
  label: '',
  value: false,
  setValueState: () => {},
  onChange: () => {},
  style: {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lableText: {
    marginLeft: 10,
  },
  checkbox: {
    transform: [
      {
        scale: Platform.OS === OS.IOS ? 0.8 : 1,
      },
    ],
  },
});

export default LPCheckbox;
