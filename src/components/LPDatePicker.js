import React, {useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Platform} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import {OS} from '../statics/Enums';
import LPButton from './LPButton';
import LPText from './LPText';
import COLORS from '../statics/colors';
import {dateFormatToString} from '../utils/CommonUtils';
import {COMPONENT_STATICS} from './statics/ComponentStatics';

const LPDatePicker = props => {
  const {
    id,
    value,
    onChange,
    label,
    onSubmitEditing,
    setValueState,
    error,
    touched,
    style,
  } = props;

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChangeLocal = useCallback(
    (e, selectedDate) => {
      if (Platform.OS === OS.ANDROID) {
        setShowPicker(false);
        onChange(selectedDate.toISOString());
        setValueState(selectedDate.toISOString());
        onSubmitEditing(null, id);
      }
      setDate(selectedDate);
    },
    [id, onChange, onSubmitEditing, setValueState],
  );

  const onDateClick = useCallback(() => {
    setShowPicker(true);
  }, []);

  // IOS only
  const onDateSelectClick = useCallback(() => {
    setShowPicker(false);
    onChange(date.toISOString());
    setValueState(date.toISOString());
    onSubmitEditing(null, id);
  }, [date, id, onChange, onSubmitEditing, setValueState]);

  const valueString = useMemo(() => dateFormatToString(value), [value]);

  const getPickerComp = () => (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode="date"
      is24Hour={true}
      display={Platform.OS === OS.IOS ? 'spinner' : 'default'}
      onChange={onChangeLocal}
      locale="de_LU"
    />
  );

  const getIOSPickerView = () => (
    <Modal
      isVisible={showPicker}
      style={styles.pickerModal}
      backdropTransitionOutTiming={0}
      onBackButtonPress={() => {}}
      animationOut="fadeOut"
      onBackdropPress={() => {}}>
      <View style={styles.pickerContainer}>
        {getPickerComp()}
        <LPButton onPress={onDateSelectClick} style={styles.iosSelectButton}>
          {COMPONENT_STATICS.DATE_PICKER_STATICS.BUTTONS.SELECT}
        </LPButton>
      </View>
    </Modal>
  );

  const getPickerView = () => {
    if (Platform.OS === OS.IOS) {
      return getIOSPickerView();
    } else if (Platform.OS === OS.ANDROID && showPicker) {
      return getPickerComp();
    }
    return null;
  };

  const getSelectedDateView = () => (
    <LPButton onlyChild onPress={onDateClick} style={styles.valueButton}>
      <LPText
        style={[
          styles.placeholderText,
          valueString ? styles.placeholderTextSmall : {},
        ]}>
        {label}
      </LPText>
      {valueString ? (
        <LPText style={styles.valueText}>{valueString}</LPText>
      ) : null}
    </LPButton>
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
    <View style={[styles.container, style]}>
      {getSelectedDateView()}
      {getPickerView()}
      {getErrorView()}
    </View>
  );
};

LPDatePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  inputRef: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  setValueState: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

LPDatePicker.defaultProps = {
  id: '',
  label: '',
  value: '',
  onChange: () => {},
  setValueState: () => {},
  inputRef: {},
  onBlur: () => {},
  onSubmitEditing: () => {},
  touched: false,
  error: '',
  style: {},
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  valueButton: {
    borderBottomColor: COLORS.BLUE_1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    height: 50,
  },
  placeholderText: {
    color: COLORS.SILVER_CHALICE,
    fontSize: 15,
    position: 'absolute',
  },
  placeholderTextSmall: {
    fontSize: 10,
  },
  valueText: {
    marginTop: 10,
  },
  errorContainer: {
    marginTop: 5,
  },
  pickerModal: {
    margin: 0,
    backgroundColor: COLORS.SEMI_TRANSPARENT_LIGHT,
  },
  pickerContainer: {
    backgroundColor: COLORS.WHITE,
  },
  iosSelectButton: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default LPDatePicker;
