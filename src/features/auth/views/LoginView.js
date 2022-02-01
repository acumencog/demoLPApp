import React, {useRef, useEffect, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';

import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  SafeAreaView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import COLORS from '../../../statics/colors';
import {LPText, LPLoadingIcon, LPLogo} from '../../../components';
import {LOGIN_STATICS} from '../statics/AuthStatics';
import {ROUTES} from '../../../routes/Routes';
import {SAVED_CREDS_KEYS, OTP_GEN_MODE} from '../../../statics/Enums';
import {postData} from '../service/AuthService';
import API_URLS from '../../../service/apiUrls';
import {addAccessToken} from '../../../service/api';
import LoginFormView from './LoginFormView';
import ProfileActions from '../../profile/redux/ProfileActions';
import {extractUserDataFromApiResposne} from '../../../utils/DataUtils';
import LPLogger from '../../../utils/LPLogger';
import {PROFILE_COMPONENTS} from '../../profile/statics/ProfileStatics';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const LOGO_SIZE = SCREEN_HEIGHT * 0.3;
const ANIMATION_DURATION = 300;
const INITIAL_LOADING_DELAY = 1000;
const SCREEN_H_PADDING = SCREEN_WIDTH * 0.1;

const LoginView = props => {
  const {navigation, setComponentData, resetApplicationData} = props;
  const dispatch = useDispatch();
  const [saveCreds, setSaveCreds] = useState(true);
  const inputRefs = {
    userName: useRef(null),
    password: useRef(null),
  };

  const animationHandler = useRef(new Animated.Value(0)).current;
  const loaderAnimationHandler = useRef(new Animated.Value(0)).current;

  // clear access token everytime user lands on this page
  useEffect(() => {
    addAccessToken('');
    resetApplicationData();
    LPLogger.setUserData('', '');
  }, [resetApplicationData]);

  useEffect(() => {
    Animated.timing(animationHandler, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
    getSavedCreds();
  }, [animationHandler, getSavedCreds, showLoginScreen]);

  const getSavedCreds = useCallback(async () => {
    const savedUserName = await AsyncStorage.getItem(
      SAVED_CREDS_KEYS.USER_NAME,
    );
    const savedPassword = await AsyncStorage.getItem(SAVED_CREDS_KEYS.PASSWORD);
    if (savedUserName) {
      setSaveCreds(true);
      Animated.timing(loaderAnimationHandler, {
        toValue: 1,
        duration: ANIMATION_DURATION / 2,
        useNativeDriver: false,
      }).start();
      logUserIn(
        {
          userName: savedUserName,
          password: savedPassword,
        },
        true,
      );
    } else {
      setTimeout(() => {
        showLoginScreen();
      }, 1000);
    }
  }, [loaderAnimationHandler, logUserIn, showLoginScreen]);

  const showLoginScreen = useCallback(() => {
    Animated.timing(animationHandler, {
      toValue: 2,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      Animated.timing(loaderAnimationHandler, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }).start();
    }, INITIAL_LOADING_DELAY);
  }, [animationHandler, loaderAnimationHandler]);

  const onCreateAccountClick = useCallback(() => {
    navigation.navigate(ROUTES.AUTH_REGISTRATION.id);
  }, [navigation]);

  const onForgotPassClick = useCallback(() => {}, []);

  const saveCredsToAsyncStore = useCallback(async values => {
    await AsyncStorage.setItem(SAVED_CREDS_KEYS.USER_NAME, values.userName);
    await AsyncStorage.setItem(SAVED_CREDS_KEYS.PASSWORD, values.password);
  }, []);

  const logUserIn = useCallback(
    (values, autoLogin = false) => {
      addAccessToken('');
      postData(
        API_URLS.AUTH.LOGIN,
        {},
        {
          userName: values.userName,
          password: values.password,
          deviceToken: global.deviceToken ? global.deviceToken : '',
          deviceType: Platform.OS,
        },
      )
        .then(loginResponse => {
          const userData = loginResponse.data.messageBody.userResponse[0];
          if (saveCreds) {
            values.userName = userData.userName;
            saveCredsToAsyncStore(values);
          }

          LPLogger.setUserData(userData.userID, userData.userName);
          LPLogger.info(`User Logged in autoLogin ${autoLogin}`);
          onLoginSuccessful(userData, values.password);
        })
        .catch(e => {
          showLoginScreen();
          LPLogger.error(e, 'LoginView onLoginClick');
        });
    },
    [onLoginSuccessful, saveCreds, saveCredsToAsyncStore, showLoginScreen],
  );

  const onLoginClick = useCallback(
    values => {
      Animated.timing(loaderAnimationHandler, {
        toValue: 1,
        duration: ANIMATION_DURATION / 2,
        useNativeDriver: false,
      }).start();
      logUserIn(values, false);
    },
    [loaderAnimationHandler, logUserIn],
  );

  const onLoginSuccessful = useCallback(
    async (userData, password) => {
      if (!userData.accessToken) {
        LPLogger.error(
          `LoginView onLoginSuccessful User Access token not received, userData: ${JSON.stringify(
            userData,
          )}`,
        );
        showLoginScreen();
        return;
      }
      addAccessToken(userData.accessToken, userData.refreshToken);
      setComponentData({
        componentId: PROFILE_COMPONENTS.TOKENS.id,
        data: {
          accessToken: userData.accessToken,
          refreshToken: userData.refreshToken,
        },
      });
      setComponentData({
        componentId: PROFILE_COMPONENTS.USER_PROFILE.id,
        data: extractUserDataFromApiResposne(userData),
      });
      if (userData.emailVerified !== 1) {
        LPLogger.info('User email not verified Going to OTP page');
        showLoginScreen();
        navigation.navigate(ROUTES.AUTH_OTP.id, {
          otpMode: OTP_GEN_MODE.FROM_LOGIN,
        });
        return;
      }
      Animated.timing(animationHandler, {
        toValue: 3,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }).start(() => {
        navigation.navigate(ROUTES.APP_TAB_NAV.id);
      });
    },
    [animationHandler, navigation, setComponentData, showLoginScreen],
  );

  const onSaveCredsToggle = useCallback(async value => {
    if (!value) {
      AsyncStorage.setItem(SAVED_CREDS_KEYS.USER_NAME, '');
      AsyncStorage.setItem(SAVED_CREDS_KEYS.PASSWORD, '');
    }
    setSaveCreds(value);
  }, []);

  const getLogoPositionY = useCallback(
    () =>
      animationHandler.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [250, 200, 0, -200],
      }),
    [animationHandler],
  );

  const getLogoOpacity = useCallback(
    () =>
      animationHandler.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [0, 1, 1, 0],
      }),
    [animationHandler],
  );

  const getLogoScale = useCallback(
    () =>
      animationHandler.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [1, 1, 0.8, 0.8],
      }),
    [animationHandler],
  );

  const getFormPositionY = useCallback(
    () =>
      animationHandler.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [50, 50, 0, 0],
      }),
    [animationHandler],
  );

  const getFormOpacity = useCallback(
    () =>
      animationHandler.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [0, 0, 1, 0],
      }),
    [animationHandler],
  );

  const getLogoView = () => (
    <Animated.View
      style={[
        styles.logoView.container,
        {
          transform: [
            {translateY: getLogoPositionY()},
            {scale: getLogoScale()},
          ],
          opacity: getLogoOpacity(),
        },
      ]}>
      <LPLogo size={LOGO_SIZE} animated />
    </Animated.View>
  );

  const getLoginForm = () => (
    <Animated.View
      style={[
        styles.loginForm.container,
        {
          transform: [{translateY: getFormPositionY()}],
          opacity: getFormOpacity(),
        },
      ]}>
      <LoginFormView
        inputRefs={inputRefs}
        saveCreds={saveCreds}
        onSaveCredsToggle={onSaveCredsToggle}
        onForgotPassClick={onForgotPassClick}
        onLoginClick={onLoginClick}
        onCreateAccountClick={onCreateAccountClick}
        initialValues={{}}
      />
      {getLoadingView()}
    </Animated.View>
  );

  const getLoadingView = () => (
    <Animated.View
      pointerEvents="none"
      style={[styles.loadingView.container, {opacity: loaderAnimationHandler}]}>
      <LPLoadingIcon style={styles.loadingView.loader} />
      <LPText style={styles.loadingView.loadingText}>
        {LOGIN_STATICS.LABEL.LOGGIN_IN}
      </LPText>
    </Animated.View>
  );

  return (
    <View style={styles.main.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.main.scrollView}
        keyboardShouldPersistTaps="never"
        getTextInputRefs={() => [
          inputRefs.password.current,
          inputRefs.password.current,
        ]}
        scrollEnabled={false}>
        <SafeAreaView style={styles.main.safeAreaContainer}>
          {getLogoView()}
          <View style={styles.main.contentContainer}>{getLoginForm()}</View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
};

LoginView.propTypes = {
  navigation: PropTypes.object,
  setComponentData: PropTypes.func,
  resetApplicationData: PropTypes.func,
};

LoginView.defaultProps = {
  navigation: {},
  setComponentData: () => {},
  resetApplicationData: () => {},
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setComponentData: payload =>
    dispatch(ProfileActions.setComponentData(payload)),
  resetApplicationData: payload =>
    dispatch(ProfileActions.resetApplicationData(payload)),
});

const main = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: COLORS.RUSSIAN_BLACK,
  },
  scrollView: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

const logoView = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const loginForm = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_H_PADDING,
    overflow: 'hidden',
  },
});

const actionView = StyleSheet.create({
  container: {
    overflow: 'hidden',
    marginTop: 20,
  },
});

const loadingView = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: COLORS.RUSSIAN_BLACK,
  },
  loader: {},
  loadingText: {
    marginTop: 10,
  },
});

const styles = {
  main,
  logoView,
  loginForm,
  actionView,
  loadingView,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);
