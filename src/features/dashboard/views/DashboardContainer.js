/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DashboardView from './DashboardView';
import {ROUTES} from '../../../routes/Routes';
import DashbaordActions from '../redux/DashbaordActions';
import {getData} from '../service/DashboardService';
import API_URLS from '../../../service/apiUrls';
import {parseNewsResponseData} from '../../../utils/DataUtils';
import {NEWS_TYPES, LOADING_STATUS} from '../../../statics/Enums';
import {DASHBOARD_COMPONENTS} from '../statics/DashboardStatics';
import LPLogger from '../../../utils/LPLogger';
import {
  addRecentChat,
  searchUser,
  isNullOrEmpty,
} from '../../../utils/CommonUtils';
import {withNavigationFocus} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {PROFILE_COMPONENTS} from '../../profile/statics/ProfileStatics';
import moment from 'moment';
import RNFS from 'react-native-fs';
import {Alert} from 'react-native';

const DashboardContainer = props => {
  const {
    navigation,
    controls,
    setComponentData,
    setDynamicDataApiStatus,
    newsData,
  } = props;

  const dispatch = useDispatch();
  const [isNewsSelected, setIsNewsSelected] = useState(false);
  const [newsDataRefreshStatus, setNewsDataRefreshStatus] = useState(
    LOADING_STATUS.NOT_YET_STARTED,
  );

  const {state: {params: {refreshSCreen = false} = {}} = {}} = navigation;

  const onNewsRefresh = useCallback(async () => {
    setNewsDataRefreshStatus(LOADING_STATUS.LOADING);
    setDynamicDataApiStatus({
      [DASHBOARD_COMPONENTS.NEWS_DATA.id]: LOADING_STATUS.LOADING,
    });
    Promise.all([
      getData(API_URLS.DASHBOARD.PRIMARY_NEWS, {}),
      getData(API_URLS.DASHBOARD.SECONDARY_NEWS, {}),
      getData(API_URLS.DASHBOARD.COMMUNITY_NEWS, {}),
    ])
      .then(
        ([
          primaryNewsResponse,
          secondaryNewsResponse,
          commumityNewsResponse,
        ]) => {
          const primaryNewsNormalized = parseNewsResponseData(
            primaryNewsResponse.data.messageBody.news,
            NEWS_TYPES.PRIMARY,
          );
          const secondaryNewsNormalized = parseNewsResponseData(
            secondaryNewsResponse.data.messageBody.socialNews,
            NEWS_TYPES.SECONDARY,
          );

          const communityNewsNormalized = parseNewsResponseData(
            commumityNewsResponse.data.messageBody.communityNews,
            NEWS_TYPES.COMMUNITY,
          );
          setComponentData({
            componentId: DASHBOARD_COMPONENTS.NEWS_DATA.id,
            data: {
              values: {
                ...primaryNewsNormalized.values,
                ...secondaryNewsNormalized.values,
                ...communityNewsNormalized.values,
              },
              primaryOrder: primaryNewsNormalized.order,
              secondaryOrder: secondaryNewsNormalized.order,
              cummunityOrder: communityNewsNormalized.order,
            },
          });
          setNewsDataRefreshStatus(LOADING_STATUS.COMPLETED);
          setDynamicDataApiStatus({
            [DASHBOARD_COMPONENTS.NEWS_DATA.id]: LOADING_STATUS.COMPLETED,
          });
        },
      )
      .catch(e => {
        setDynamicDataApiStatus({
          [DASHBOARD_COMPONENTS.NEWS_DATA.id]: LOADING_STATUS.FAILED,
        });
        setNewsDataRefreshStatus(LOADING_STATUS.FAILED);
        LPLogger.error(e, 'DashboardContainer getNewsData');
      });
  }, []);

  useEffect(() => {
    setDynamicDataApiStatus({
      [DASHBOARD_COMPONENTS.NEWS_DATA.id]: LOADING_STATUS.LOADING,
    });
    Promise.all([
      getData(API_URLS.DASHBOARD.PRIMARY_NEWS, {}),
      getData(API_URLS.DASHBOARD.SECONDARY_NEWS, {}),
      getData(API_URLS.DASHBOARD.COMMUNITY_NEWS, {}),
    ])
      .then(
        ([
          primaryNewsResponse,
          secondaryNewsResponse,
          commumityNewsResponse,
        ]) => {
          const primaryNewsNormalized = parseNewsResponseData(
            primaryNewsResponse.data.messageBody.news,
            NEWS_TYPES.PRIMARY,
          );
          const secondaryNewsNormalized = parseNewsResponseData(
            secondaryNewsResponse.data.messageBody.socialNews,
            NEWS_TYPES.SECONDARY,
          );

          const communityNewsNormalized = parseNewsResponseData(
            commumityNewsResponse.data.messageBody.communityNews,
            NEWS_TYPES.COMMUNITY,
          );
          setComponentData({
            componentId: DASHBOARD_COMPONENTS.NEWS_DATA.id,
            data: {
              values: {
                ...primaryNewsNormalized.values,
                ...secondaryNewsNormalized.values,
                ...communityNewsNormalized.values,
              },
              primaryOrder: primaryNewsNormalized.order,
              secondaryOrder: secondaryNewsNormalized.order,
              cummunityOrder: communityNewsNormalized.order,
            },
          });

          setDynamicDataApiStatus({
            [DASHBOARD_COMPONENTS.NEWS_DATA.id]: LOADING_STATUS.COMPLETED,
          });
        },
      )
      .catch(e => {
        setDynamicDataApiStatus({
          [DASHBOARD_COMPONENTS.NEWS_DATA.id]: LOADING_STATUS.FAILED,
        });
        LPLogger.error(e, 'DashboardContainer getNewsData');
      });
    if (refreshSCreen) {
      navigation.setParams({refreshSCreen: false});
    }
  }, [refreshSCreen]);

  const onBackRefresh = useCallback(data => {
    navigation.setParams({refreshSCreen: true});
  }, []);

  const onNewsClick = useCallback(() => alert('News Selected'));

  return (
    <DashboardView
      onNewsClick={onNewsClick}
      navigation={navigation}
      newsData={newsData}
      controls={controls}
      setNewsDataRefreshStatus={setNewsDataRefreshStatus}
      newsDataRefreshStatus={newsDataRefreshStatus}
      onNewsRefresh={onNewsRefresh}
    />
  );
};

DashboardContainer.propTypes = {
  navigation: PropTypes.object,
  controls: PropTypes.object,
  newsData: PropTypes.object,

  setComponentData: PropTypes.func,
  setDynamicDataApiStatus: PropTypes.func,
};

DashboardContainer.defaultProps = {
  navigation: {},
  controls: {},
  newsData: {},

  setComponentData: () => {},
  setDynamicDataApiStatus: () => {},
};

const mapStateToProps = store => ({
  controls: store.DashboardReducer.controls,
  newsData:
    store.DashboardReducer.dynamicData[DASHBOARD_COMPONENTS.NEWS_DATA.id],
});

const mapDispatchToProps = dispatch => ({
  setComponentData: payload =>
    dispatch(DashbaordActions.setComponentData(payload)),
  setDynamicDataApiStatus: payload =>
    dispatch(DashbaordActions.setDynamicDataApiStatus(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigationFocus(DashboardContainer));
