import React, {useCallback, useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TextInput, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import COLORS from '../statics/colors';
import LPText from './LPText';
import {
  INPUT_KEYBOARD_TYPE,
  INPUT_TYPE_AUTO_CAPITALIZE,
} from '../statics/Enums';
import {isNullOrEmpty} from '../utils/CommonUtils';

const LPInputField = props => {
  const {
    id,
    inputRef,
    value,
    label,
    labelTextStyle,
    isSecure,
    showSecureButton,
    keyboardType,
    style,
    onChange,
    onBlur,
    onSubmitEditing,
    error,
    touched,
    autoCapitalize,
    setValueState,
    textInputContainer,
    textInput,
    placeholder,
    multiline,
    placeholderTextColor,
    maxLength,
  } = props;
  const labelAnimation = useRef(new Animated.Value(0)).current;

  const [isFocused, setIsFocused] = useState(false);
  const [showSecureText, setShowSecureText] = useState(false);

  useEffect(() => {
    Animated.timing(labelAnimation, {
      toValue: isFocused ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, labelAnimation]);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlurLocal = useCallback(
    event => {
      onBlur(event);
      setIsFocused(false);
    },
    [onBlur],
  );

  const onTextChange = useCallback(
    e => {
      onChange(e.nativeEvent.text);
      setValueState(e.nativeEvent.text);
      setIsFocused(true);
    },
    [onChange, setValueState],
  );

  const getLabelPoitionY = useCallback(
    () =>
      labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, value ? 0 : 20],
      }),
    [labelAnimation, value],
  );

  const getLabelFontSize = useCallback(
    () =>
      labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [10, value ? 10 : 15],
      }),
    [labelAnimation, value],
  );

  const onSubmitEditingLocal = useCallback(
    e => {
      onSubmitEditing(e, id);
    },
    [id, onSubmitEditing],
  );

  const onShowSecureShowTouchStart = useCallback(() => {
    setShowSecureText(true);
  }, []);

  const onShowSecureShowTouchEnd = useCallback(() => {
    setShowSecureText(false);
  }, []);

  const getLabelView = () =>
    label ? (
      <Animated.View style={[styles.labelContainer, {top: getLabelPoitionY()}]}>
        <Animated.Text
          style={[
            styles.labelText,
            labelTextStyle,
            {fontSize: getLabelFontSize()},
          ]}>
          {label}
        </Animated.Text>
      </Animated.View>
    ) : null;

  const getShowSecureTextButton = () => (
    <View
      style={styles.showSecureButton}
      onTouchStart={onShowSecureShowTouchStart}
      onTouchEnd={onShowSecureShowTouchEnd}>
      <Icon name="eye" size={20} color={COLORS.SILVER_CHALICE} />
    </View>
  );

  const getTextInputView = () => {
    return (
      <View
        style={
          !isNullOrEmpty(textInputContainer)
            ? textInputContainer
            : styles.textInputContainer
        }>
        <TextInput
          ref={inputRef}
          style={!isNullOrEmpty(textInput) ? textInput : styles.textInput}
          value={value}
          onChange={onTextChange}
          secureTextEntry={isSecure && !showSecureText}
          clearTextOnFocus={false}
          autoCorrect={true}
          onFocus={onFocus}
          onBlur={onBlurLocal}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onSubmitEditing={onSubmitEditingLocal}
          placeholder={placeholder}
          textAlignVertical={'center'}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : COLORS.WHITE
          }
          multiline={multiline}
          maxLength={maxLength}
        />
        {isSecure && showSecureButton && getShowSecureTextButton()}
      </View>
    );
  };

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
    <View style={[styles.container, style]}>
      {getLabelView()}
      {getTextInputView()}
      {getErrorView()}
    </View>
  );
};

LPInputField.propTypes = {
  id: PropTypes.string,
  inputRef: PropTypes.object,
  labelTextStyle: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  labelRight: PropTypes.string,
  isSecure: PropTypes.bool,
  showSecureButton: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  setValueState: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textInput: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textInputContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  multiline: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
  autoCapitalize: PropTypes.string,
};

LPInputField.defaultProps = {
  id: '',
  inputRef: {},
  labelTextStyle: {},
  value: '',
  placeholder: '',
  label: '',
  labelRight: '',
  isSecure: false,
  showSecureButton: true,
  keyboardType: INPUT_KEYBOARD_TYPE.DEFAULT,
  style: {},
  textInputContainer: {},
  textInput: {},
  onChange: () => {},
  onBlur: () => {},
  onSubmitEditing: () => {},
  setValueState: () => {},
  error: '',
  touched: false,
  autoCapitalize: INPUT_TYPE_AUTO_CAPITALIZE.NONE,
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  textInputContainer: {
    flexDirection: 'row',
    borderBottomColor: COLORS.BLUE_1,
    borderBottomWidth: 1,
  },
  textInput: {
    // backgroundColor: 'blue',
    color: COLORS.WHITE,
    height: 50,
    flex: 1,
  },
  showSecureButton: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  countContainer: {
    position: 'absolute',
    right: 0,
  },
  labelText: {
    color: COLORS.SILVER_CHALICE,
    // fontSize: 15,
  },
  errorContainer: {
    marginTop: 5,
  },
});

export default LPInputField;
