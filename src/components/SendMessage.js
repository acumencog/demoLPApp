import React, {
  useCallback,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../statics/colors';
import LPInputField from './LPInputField';
import Icon from 'react-native-vector-icons/FontAwesome';

const SendMessage = forwardRef((props, ref) => {
  const {
    disabled,
    onPress,
    placeholder,
    onClickPhoto,
    onClickPlus,
    maxLength,
  } = props;
  const [message, setMessage] = useState('');
  const onPressLocal = useCallback(() => {
    if (disabled) {
      return;
    }
    onPress(message.trim());
  }, [message, disabled, onPress]);

  useImperativeHandle(ref, () => ({
    setEmptyMessage(value) {
      setMessage('');
    },
  }));

  const getButtonView = () => (
    <View style={styles.buttonContainer}>
      <LinearGradient
        colors={[COLORS.VICTORIA, COLORS.CERISE_RED_2]}
        angle={90}
        useAngle
        style={styles.buttonWrapperSecond}>
        <View style={styles.onlyTextContainer}>
          <LPInputField
            id="sendMessage"
            value={message}
            onChange={text => {
              setMessage(text);
            }}
            multiline={true}
            placeholder={placeholder}
            style={styles.sendMessage}
            textInputContainer={styles.textInputContainer}
            textInput={styles.textInput}
            maxLength={maxLength}
          />
          {!onClickPhoto && (
            <Icon
              name="send"
              size={20}
              color={COLORS.WHITE}
              style={styles.sendBtn}
              onPress={onPressLocal}
            />
          )}

          {onClickPhoto && (
            <Icon
              name="camera"
              size={20}
              color="white"
              style={styles.cameraBtn}
              onPress={onClickPhoto}
            />
          )}
          {onClickPlus && (
            <Icon
              name="plus"
              size={20}
              color="white"
              style={styles.addBtn}
              onPress={onClickPlus}
            />
          )}
        </View>
      </LinearGradient>
      {onClickPhoto && (
        <Icon
          name="send"
          size={20}
          color={message.length > 0 ? COLORS.CERISE_RED_1 : COLORS.WHITE}
          style={styles.sendChatBtn}
          onPress={onPressLocal}
        />
      )}
    </View>
  );

  const getContent = () => {
    return getButtonView();
  };

  return getContent();
});

SendMessage.propTypes = {
  disabled: PropTypes.bool,
  noFeedback: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  customStyle: PropTypes.object, // TODO, depricated, replace with style
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onlyTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  callbackValues: PropTypes.any,
  onPress: PropTypes.func,
};

SendMessage.defaultProps = {
  disabled: false,
  noFeedback: false,
  title: '',
  children: null,
  customStyle: {},
  style: {},
  onlyTextStyle: {},
  callbackValues: {},
  onPress: () => {},
};

const styles = StyleSheet.create({
  onlyTextContainer: {
    paddingRight: 20,
    paddingLeft: 14,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sendMessage: {flex: 1},
  onlyText: {
    color: COLORS.WHITE,
    fontSize: 13,
    fontWeight: '500',
  },

  buttonWrapperSecond: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 38,
    paddingTop: 22,
    backgroundColor: COLORS.BLUE_DARK,
    minHeight: 70,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: COLORS.WHITE,
    minHeight: 33,
    maxHeight: 100,
    height: 'auto',
    fontSize: 15,
    flex: 1,
  },
  sendBtn: {paddingLeft: 10, paddingBottom: 12},
  sendChatBtn: {paddingHorizontal: 10, paddingBottom: 12},
  cameraBtn: {paddingLeft: 10, paddingBottom: 12},
  addBtn: {paddingLeft: 20, paddingBottom: 12},
});

export default SendMessage;
