import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {LPProgressBar} from '../../../../components';
import COLORS from '../../../../statics/colors';
import {getData} from '../../../dashboard/service/DashboardService';
import API_URLS from '../../../../service/apiUrls';

const NewsSurvey = props => {
  const {newsData} = props;
  const [surveyList, setSurveyList] = useState([]);
  //get servey details
  useEffect(() => {
    getData(API_URLS.SURVEY.SURVEY_DETAILS, {
      newsId: newsData.newsId,
    })
      .then(sureveyDetailsResp => {
        const surveyResults =
          sureveyDetailsResp.data.messageBody.surveyResults || [];
        setSurveyList(surveyResults);
      })
      .catch(e => {
        console.log('NewsSurvey error: ', e);
      });
  }, [newsData.newsId]);

  const getSurveyItem = (item, index) => {
    return (
      <LPProgressBar
        textNumberOfLines={1}
        leftText={unescape(item.option)}
        percentage={parseInt(item.percent, 10)}
        colorGradiantArrayUSelected={
          index % 2 === 0
            ? [COLORS.BLUE_DARK, COLORS.VICTORIA]
            : [COLORS.CERISE_RED_2, COLORS.CERISE_RED_1, COLORS.CERISE_RED]
        }
        colorGradiantArraySelected={
          index % 2 === 0
            ? [COLORS.BLUE_DARK, COLORS.VICTORIA]
            : [COLORS.CERISE_RED_2, COLORS.CERISE_RED_1, COLORS.CERISE_RED]
        }
      />
    );
  };

  return (
    <View>{surveyList.map((item, index) => getSurveyItem(item, index))}</View>
  );
};

NewsSurvey.propTypes = {
  newsData: PropTypes.object,
  profileData: PropTypes.object,
};

NewsSurvey.defaultProps = {
  newsData: {},
  profileData: {},
};

export default NewsSurvey;
