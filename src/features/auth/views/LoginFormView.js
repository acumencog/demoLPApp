import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {LOGIN_STATICS} from '../statics/AuthStatics';
import {LPButton, LPCheckbox, LPInputField} from '../../../components';
import {INPUT_KEYBOARD_TYPE} from '../../../statics/Enums';

const FORM_FIELDS = ['userName', 'password'];

const loginValidationScheme = Yup.object().shape({
  userName: Yup.string().required(
    LOGIN_STATICS.INPUT_ERROR_MESSAGE.USER_NAME_MANDATORY,
  ),
  password: Yup.string().required(
    LOGIN_STATICS.INPUT_ERROR_MESSAGE.PASSWORD_MANDATORY,
  ),
});

const LoginFormView = props => {
  const {
    inputRefs,
    initialValues,
    onSaveCredsToggle,
    onForgotPassClick,
    onCreateAccountClick,
    saveCreds,
    onLoginClick,
  } = props;

  const formik = useFormik({
    initialValues: {userName: '', password: ''},
    onSubmit: onLoginClick,
    validationSchema: loginValidationScheme,
  });

  useEffect(() => {
    if (initialValues.userName) {
      formik.setFieldValue('userName', initialValues.userName, true);
      formik.setFieldValue('password', initialValues.password, true);
    }
  }, [initialValues.userName, initialValues.password, formik]);

  const onSubmitEditing = useCallback(
    (e, itemId) => {
      const itemIndex = FORM_FIELDS.indexOf(itemId);
      if (itemIndex + 1 < FORM_FIELDS.length) {
        if (inputRefs[FORM_FIELDS[itemIndex + 1]].current) {
          inputRefs[FORM_FIELDS[itemIndex + 1]].current.focus();
        }
      }
    },
    [inputRefs],
  );

  const getActionView = handleSubmit => (
    <View style={styles.actionContainer}>
      <LPButton
        onlyText
        style={styles.forgotPassword}
        onPress={onForgotPassClick}>
        {LOGIN_STATICS.ACTION_TEXT.FORGOT_PASSWORD}
      </LPButton>
      <LPButton onPress={handleSubmit} style={styles.loginButton}>
        {LOGIN_STATICS.ACTION_TEXT.LOG_IN}
      </LPButton>
      <LPButton
        onlyText
        style={styles.createAccountButton}
        onPress={onCreateAccountClick}>
        {LOGIN_STATICS.ACTION_TEXT.CREATE_ACCOUNT}
      </LPButton>
    </View>
  );

  const getSaveCredsOption = () => (
    <LPCheckbox
      label={LOGIN_STATICS.ACTION_TEXT.SAVE_CREDS}
      value={saveCreds}
      onChange={onSaveCredsToggle}
      style={styles.saveCredCheckbox}
    />
  );
  //userName, password field
  const getFormItems = () => (
    <View style={styles.itemsContainer}>
      <LPInputField
        id="userName"
        inputRef={inputRefs.userName}
        value={formik.values.userName}
        onChange={formik.handleChange('userName')}
        onBlur={formik.handleBlur('userName')}
        label={LOGIN_STATICS.LABEL.USERNAME}
        error={formik.errors.userName}
        touched={formik.touched.userName}
        keyboardType={INPUT_KEYBOARD_TYPE.EMAIL}
        onSubmitEditing={onSubmitEditing}
      />
      <LPInputField
        id="password"
        inputRef={inputRefs.password}
        value={formik.values.password}
        onChange={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        isSecure
        label={LOGIN_STATICS.LABEL.PASSWORD}
        error={formik.errors.password}
        touched={formik.touched.password}
        onSubmitEditing={onSubmitEditing}
      />
      {getSaveCredsOption()}
      {getActionView(formik.handleSubmit)}
    </View>
  );

  return <View style={styles.container}>{getFormItems()}</View>;
};

LoginFormView.propTypes = {
  inputRefs: PropTypes.object,
  initialValues: PropTypes.object,
  onSaveCredsToggle: PropTypes.func,
  onForgotPassClick: PropTypes.func,
  onLoginClick: PropTypes.func,
  onCreateAccountClick: PropTypes.func,
  saveCreds: PropTypes.bool,
};

LoginFormView.defaultProps = {
  inputRefs: {},
  initialValues: {},
  onSaveCredsToggle: () => {},
  onForgotPassClick: () => {},
  onLoginClick: () => {},
  onCreateAccountClick: () => {},
  saveCreds: false,
};

const styles = StyleSheet.create({
  container: {},
  itemsContainer: {},
  actionContainer: {
    marginTop: 20,
  },
  termsContainer: {
    marginTop: 20,
  },
  termsText: {
    fontSize: 11,
    textAlign: 'center',
  },
  saveCredCheckbox: {
    marginTop: 10,
  },
  forgotPassword: {
    alignItems: 'flex-start',
  },
  loginButton: {
    marginTop: 20,
  },
  createAccountButton: {
    marginTop: 20,
  },
});

export default LoginFormView;
