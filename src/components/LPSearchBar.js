import React from 'react';
import {View, StyleSheet} from 'react-native';
import COLORS from '../statics/colors';
import LPInputField from './LPInputField';
import Icon from 'react-native-vector-icons/AntDesign';
import LPButton from './LPButton';
import PropTypes from 'prop-types';

const LPSearchBar = props => {
  return (
    <View style={styles.container}>
      <LPInputField
        {...props}
        textInputContainer={styles.inputContainer}
        textInput={styles.textInput}
      />
      <LPButton onlyChild onPress={props.onSearchPress}>
        <Icon name="search1" size={20} color={COLORS.WHITE} />
      </LPButton>
    </View>
  );
};

LPSearchBar.propTypes = {
  id: PropTypes.string,
  inputRef: PropTypes.object,
  labelTextStyle: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
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
  onSearchPress: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  autoCapitalize: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.BLUE_1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 18,
  },
  inputContainer: {
    height: 38,
  },
  textInput: {
    color: 'white',
    fontSize: 12,
    height: 38,
  },
});

export default LPSearchBar;
