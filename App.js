import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  AppState,
  Text,
} from 'react-native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {RootSiblingParent} from 'react-native-root-siblings';

import store from './src/store/configureStore';
import RootNavigator from './src/routes/RootNavigator';
import COLORS from './src/statics/colors';
import LPLogger from './src/utils/LPLogger';
import NavigationService from './src/routes/NavigationService';
import {postData} from './src/features/auth/service/AuthService';
import API_URLS from './src/service/apiUrls';
import {ROUTES} from './src/routes/Routes';

const App = () => {
  const [currentAppState, setCurrentAppState] = useState(null);

  useEffect(() => {
    SplashScreen.hide();
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }, []);

  const validateSession = useCallback(() => {
    LPLogger.info('App State to active, validating session');
    const currentRoute = NavigationService.getRootNavigationRoute();
    if (currentRoute === ROUTES.APP_NAV.id) {
      postData(API_URLS.AUTH.VALIDATE_SESSION)
        .then(() => {
          LPLogger.info('Validated session after app state change');
        })
        .catch(e => {
          LPLogger.info(
            'Failed to validate session after app state change. Going to login page',
          );
          NavigationService.navigateToLoginPage();
        });
    }
  }, []);

  const onAppStateChange = useCallback(
    nextAppState => {
      if (currentAppState !== nextAppState) {
        if (nextAppState === 'active') {
          validateSession();
        }
        setCurrentAppState(nextAppState);
      }
    },
    [currentAppState, validateSession],
  );

  useEffect(() => {
    AppState.addEventListener('change', onAppStateChange);
    return () => {
      AppState.removeEventListener('change', onAppStateChange);
    };
  }, [onAppStateChange]);
  LPLogger.intialize();

  const Wrapper = Platform.OS === 'ios' ? React.Fragment : RootSiblingParent;

  const setRootRef = useCallback(navRef => {
    NavigationService.setRootNavigator(navRef);
  }, []);

  return (
    <Provider store={store}>
      <Wrapper>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={COLORS.TRANSPARENT}
            barStyle="light-content"
            translucent
          />
          <RootNavigator ref={setRootRef} />
        </View>
      </Wrapper>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: COLORS.RUSSIAN_BLACK,
  },
});

export default App;
