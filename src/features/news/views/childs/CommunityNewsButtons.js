import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, FlatList} from 'react-native';
import {LPButton} from '../../../../components';
import COLORS from '../../../../statics/colors';
import {putData} from '../../../dashboard/service/DashboardService';
import API_URLS from '../../../../service/apiUrls';
import LPLogger from '../../../../utils/LPLogger';

const CommunityNewsButtons = props => {
  const {newsData, profileData, setSurveyStatus} = props;
  const [newsButtonList, setNewsButtonList] = useState([]);

  useEffect(() => {
    const surveyList = [];
    const surveyOptions = newsData.options.split('|');
    Object.keys(surveyOptions).forEach((key, index) => {
      if (surveyOptions[key] !== '') {
        surveyList.push({
          label: surveyOptions[key],
          key: surveyOptions[key],
          selectedColors:
            index % 2 === 0
              ? [COLORS.GREY_DARK, COLORS.GREY_DARK_2]
              : [COLORS.GREY_DARK, COLORS.GREY_DARK_2],
          unSelectedColors:
            index % 2 === 0
              ? [COLORS.GREY_DARK, COLORS.GREY_DARK_2]
              : [COLORS.GREY_DARK, COLORS.GREY_DARK_2],
        });
      }
    });
    setNewsButtonList(surveyList);
  }, [newsData.options]);
  const onPressNewsButtonItem = selectedItem => {
    putData(
      API_URLS.SURVEY.SURVEY_CREATE,
      {},
      {
        communityNewsId: newsData.newsId,
        userId: profileData.userID,
        selectedOption: selectedItem.key,
      },
    )
      .then(savedNewStatus => {
        setSurveyStatus(true);
      })
      .catch(e => {
        LPLogger.error(e, 'NewsDetailsView setLikedStatus');
      });
  };

  const getNewsButtonItem = ({item}) => {
    return (
      <LPButton
        key={item.key}
        callbackValues={item}
        onPress={onPressNewsButtonItem}
        colorGradiantArrayUSelected={item.selectedColors}
        colorGradiantArraySelected={item.unSelectedColors}
        style={styles.newsButtonsStyles.WowThanksButton}>
        {unescape(item.label)}
      </LPButton>
    );
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={newsButtonList}
        extraData={newsButtonList}
        keyExtractor={item => item.key.toString()}
        renderItem={getNewsButtonItem}
        scrollEnabled={false}
      />
    </View>
  );
};

CommunityNewsButtons.propTypes = {
  newsData: PropTypes.object,
  profileData: PropTypes.object,
};

CommunityNewsButtons.defaultProps = {
  newsData: {},
  profileData: {},
};

const newsButtonsStyles = StyleSheet.create({
  WowThanksButton: {
    marginTop: 10,
  },
});

const styles = {
  newsButtonsStyles,
};

export default CommunityNewsButtons;
