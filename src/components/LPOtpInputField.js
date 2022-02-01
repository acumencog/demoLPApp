import React, {useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Keyboard,
  Text,
  Platform,
} from 'react-native';
import {OS} from '../statics/Enums';
import COLORS from '../statics/colors';
import {INPUT_KEYBOARD_TYPE} from '../statics/Enums';
import LPButton from './LPButton';
import {isNullOrEmpty} from '../utils/CommonUtils';

const SCREEN_WIDTH = Dimensions.get('window').width;
const FONT_SIZE = SCREEN_WIDTH * 0.15;

const LPOtpInputField = props => {
  const {value, setValueState} = props;

  const hiddenTextRef = useRef();

  const onOtpClick = () => {
    if (hiddenTextRef.current) {
      if (Platform.OS === OS.ANDROID) {
        hiddenTextRef.current.blur();
      }
      hiddenTextRef.current.focus();
    }
  };
  //otp length is 4
  const onOtpChange = useCallback(
    newValue => {
      if (isNullOrEmpty(newValue)) {
        setValueState('');
      }
      if (newValue.length > 4 || !/^\d+$/.test(newValue)) {
        return;
      } else if (newValue.length === 4) {
        Keyboard.dismiss();
      }
      setValueState(newValue);
    },
    [setValueState],
  );

  const getHiddenTextField = () => (
    <TextInput
      ref={hiddenTextRef}
      keyboardType={INPUT_KEYBOARD_TYPE.NUMERIC}
      dataDetectorTypes="none"
      contextMenuHidden
      onChangeText={onOtpChange}
      style={styles.hiddenInputField}
      value={value}
      autoFocus={false}
    />
  );
  //show otp
  const getOtpDigitView = digit => (
    <View style={styles.otpDigitContainer}>
      <Text style={styles.optDigitText}>{digit}</Text>
    </View>
  );
  //get otp
  const getOtpView = () => (
    <LPButton onlyChild onPress={onOtpClick} style={styles.otpContainer}>
      {getOtpDigitView(value[0])}
      {getOtpDigitView(value[1])}
      {getOtpDigitView(value[2])}
      {getOtpDigitView(value[3])}
    </LPButton>
  );

  return (
    <View style={styles.container}>
      {getHiddenTextField()}
      {getOtpView()}
    </View>
  );
};

LPOtpInputField.propTypes = {
  value: PropTypes.string,
  setValueState: PropTypes.func,
};

LPOtpInputField.defaultProps = {
  value: '123',
  setValueState: () => {},
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  hiddenInputField: {
    width: 0,
    height: 0,
  },
  otpContainer: {
    flexDirection: 'row',
  },
  otpDigitContainer: {
    width: 50,
    minHeight: 80,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.PORT_GORE,
    borderBottomWidth: 4,
  },
  optDigitText: {
    fontSize: FONT_SIZE,
    color: COLORS.WHITE,
  },
});

export default LPOtpInputField;
