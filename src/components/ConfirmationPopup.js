import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Alert} from 'react-native';
import Modal from 'react-native-modal';
import COLORS from '../statics/colors';

/**
 * This component is used to show the confirmation prompt and get the info
 * from the user
 * @param  props like onPressLeftBtn, onPressLRightBtn
 * @return the component with prompt to get information from user
 */
const ConfirmationPopup = props => {
  const {onPressLeftBtn, onPressLRightBtn} = props;
  const [showPopup, setShowPopup] = useState(false);

  const onRightBtnPressed = useCallback(() => {
    setShowPopup(false);
    if (onPressLRightBtn) {
      onPressLRightBtn();
    }
  }, [onPressLRightBtn]);
  const onLeftBtnPressed = useCallback(() => {
    setShowPopup(false);
    if (onPressLeftBtn) {
      onPressLeftBtn();
    }
  }, [onPressLeftBtn]);
  const getContent = () =>
    Alert.alert('', props.message, [
      {
        text: props.leftBtnText,
        onPress: () => {
          onLeftBtnPressed();
        },
      },
      {
        text: props.rightBtnText,
        onPress: () => {
          onRightBtnPressed();
        },
      },
    ]);

  return (
    <Modal
      isVisible={showPopup}
      style={styles.modalView}
      backdropTransitionOutTiming={0}
      animationOut="fadeOut">
      {getContent()}
    </Modal>
  );
};

ConfirmationPopup.propTypes = {
  message: PropTypes.string,
  leftBtnText: PropTypes.string,
  rightBtnText: PropTypes.string,
  onPressLeftBtn: PropTypes.func,
  onPressLRightBtn: PropTypes.func,
};

ConfirmationPopup.defaultProps = {};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
  },
  contentContainer: {
    margin: 20,
    backgroundColor: COLORS.GREY_DARK,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 10,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 15,
    paddingHorizontal: 40,
  },
  viewContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {color: COLORS.BLUE_1, marginBottom: 20},
  messageText: {color: COLORS.BLACK, marginBottom: 20},
  buttonTextStyle: {fontSize: 12},
});

export default ConfirmationPopup;
