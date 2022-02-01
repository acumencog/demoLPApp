'use strict';

import React, {useCallback} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import COLORS from '../statics/colors';
import {View, StyleSheet} from 'react-native';
// import LPBackButton from './LPBackButton';

const ScanScreen = ({onSuccessScanner}) => {
  const onSuccess = e => {
    if (onSuccessScanner) {
      console.log('e.data: ', e.data);
      onSuccessScanner(e.data);
    }
  };

  const onBackButtonClick = useCallback(() => {
    if (onSuccessScanner) {
      onSuccessScanner();
    }
  }, [onSuccessScanner]);

  return (
    <View style={styles.qrCodeMainContainer}>
      <QRCodeScanner onRead={onSuccess} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: 100,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCodeMainContainer: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: COLORS.RUSSIAN_BLACK,
    paddingBottom: 5,
  },
  backButtonContainer: {
    paddingLeft: 10,
    width: '100%',
    paddingTop: 0,
  },
});

export default ScanScreen;
