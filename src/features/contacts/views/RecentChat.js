import React from 'react';
import {View, StyleSheet} from 'react-native';
import UserBarView from '../../user-bar/views/UserBarView';
import COLORS from '../../../statics/colors';

const RecentChat = props => {
  const {navigation} = props;

  return (
    <View style={styles.main.container}>
      <UserBarView navigation={navigation} />
    </View>
  );
};

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RUSSIAN_BLACK,
  },
});

const styles = {
  main,
};

export default RecentChat;
