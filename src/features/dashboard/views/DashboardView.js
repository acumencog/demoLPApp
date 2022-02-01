import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  Platform,
} from 'react-native';
import {LOADING_STATUS} from '../../../statics/Enums';
import COLORS from '../../../statics/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LPText,
  DashboardNewsSamllCard,
  LPButton,
  LPLoadingView,
} from '../../../components';
import UserBarView from '../../user-bar/views/UserBarView';
import {
  DASHBOARD_STATICS,
  DASHBOARD_COMPONENTS,
} from '../statics/DashboardStatics';
import {isCompleted, isNullOrEmpty} from '../../../utils/CommonUtils';

const SCREEN_WIDTH = Dimensions.get('window').width;

// PRIMARY
const IMAGE_ASPECT_RATIO = 1.62;
const IMAGE_WIDTH = Math.round(SCREEN_WIDTH * 0.7);
const IMAGE_HEIGHT = Math.round(IMAGE_WIDTH / IMAGE_ASPECT_RATIO);

// SECONDARY
const SECONDARY_NEWS = {};
SECONDARY_NEWS.SCREEN_H_PADDING = SCREEN_WIDTH * 0.07;
SECONDARY_NEWS.IMAGE_ASPECT_RATIO = 1.74;
SECONDARY_NEWS.IMAGE_WIDTH = Math.round(SCREEN_WIDTH * 0.65);
SECONDARY_NEWS.IMAGE_HEIGHT = Math.round(
  SECONDARY_NEWS.IMAGE_WIDTH / SECONDARY_NEWS.IMAGE_ASPECT_RATIO,
);
SECONDARY_NEWS.IMAGE_PEAK_SIZE = SCREEN_WIDTH * 0.05;
SECONDARY_NEWS.IMAGE_MARGIN = SCREEN_WIDTH * 0.05;
SECONDARY_NEWS.SCROLL_SNAP_INTERVAL =
  SECONDARY_NEWS.IMAGE_WIDTH + SECONDARY_NEWS.IMAGE_MARGIN * 1.1;

const NEWS_LAZY_LOADING_CONFIG = {
  PAGE_SIZE: 5,
  TRIGGER_OFFSET: 2,
};

const DashboardView = props => {
  const {
    controls,
    newsData,
    navigation,
    onNewsClick,
    newsDataRefreshStatus,
    onNewsRefresh,
  } = props;

  const primaryNewsVisibleItemsArray = useMemo(() => {
    if (isNullOrEmpty(newsData.primaryOrder)) {
      return [];
    }
    return newsData.primaryOrder;
    // return newsData.primaryOrder.slice(0, NEWS_LAZY_LOADING_CONFIG.PAGE_SIZE);
  }, [newsData]);

  const isLoading = useMemo(
    () =>
      !isCompleted(
        controls.dynamicDataApiStatus[DASHBOARD_COMPONENTS.NEWS_DATA.id],
      ),
    [controls.dynamicDataApiStatus],
  );

  const getHeaderView = headerText => (
    <View style={styles.headerView.container}>
      <LPText headerText>{headerText}</LPText>
    </View>
  );

  const getPrimaryNewsItem = (newsId, i) => {
    const currentNewsData = newsData.values[newsId];
    const {surveyStatus = 0, videoStatus = 0} = currentNewsData;
    console.log('new--', currentNewsData);
    let tickView = null;

    if (
      surveyStatus &&
      surveyStatus === 1 &&
      (videoStatus && videoStatus === 1)
    ) {
      tickView = (
        <View style={styles.primaryNewsView.tickCircle}>
          <MaterialCommunityIcons
            style={{
              color: '#404f90',
            }}
            name="check-all"
            size={24}
            color="white"
          />
        </View>
      );
    } else if (
      (surveyStatus && surveyStatus === 1) ||
      (videoStatus && videoStatus === 1)
    ) {
      tickView = (
        <View style={styles.primaryNewsView.tickCircle}>
          <MaterialCommunityIcons
            style={{color: '#404f90'}}
            name="check"
            size={24}
          />
        </View>
      );
    }
    return (
      <Animated.View
        key={newsId}
        style={[styles.primaryNewsView.itemContainer]}>
        <LPButton
          onlyChild
          onPress={onNewsClick}
          noFeedback
          callbackValues={currentNewsData}>
          <DashboardNewsSamllCard
            id={newsId}
            height={IMAGE_HEIGHT}
            width={IMAGE_WIDTH}
            imageUrl={currentNewsData.imageUrl}
            header={currentNewsData.heading}
            subHeader={currentNewsData.subHeading}
            tickView={tickView}
          />
        </LPButton>
      </Animated.View>
    );
  };

  const getPrimaryNewsViewFList = () => (
    <View style={styles.primaryNewsView.container}>
      <FlatList
        horizontal
        data={primaryNewsVisibleItemsArray}
        renderItem={({item}) => getPrimaryNewsItem(item)}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  const getCommunityNewsItem = newsId => {
    const currentNewsData = newsData.values[newsId];
    return (
      <LPButton
        key={newsId}
        onlyChild
        noFeedback
        onPress={onNewsClick}
        callbackValues={currentNewsData}
        style={styles.secondaryNewsView.itemContainer}>
        <DashboardNewsSamllCard
          id={newsId}
          height={SECONDARY_NEWS.IMAGE_HEIGHT}
          width={SECONDARY_NEWS.IMAGE_WIDTH}
          imageUrl={currentNewsData.imageUrl}
          header={currentNewsData.heading}
          subHeader={currentNewsData.description}
        />
      </LPButton>
    );
  };

  const getSecondaryNewsViewFList = () => {
    return (
      <View style={styles.secondaryNewsView.container}>
        <FlatList
          horizontal
          data={newsData.secondaryOrder}
          renderItem={({item}) => getCommunityNewsItem(item)}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const getCommunityNewsViewFList = () => (
    <View style={styles.secondaryNewsView.crosleContainer}>
      <FlatList
        horizontal
        data={newsData.cummunityOrder}
        renderItem={({item}) => getCommunityNewsItem(item)}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  const getContent = () => (
    <View style={styles.main.scrollViewContent}>
      {getHeaderView(DASHBOARD_STATICS.LABELS.HEADER)}
      {getPrimaryNewsViewFList()}
      {getHeaderView(DASHBOARD_STATICS.LABELS.COMMUNITY_NEWS)}
      {getCommunityNewsViewFList()}
      {getHeaderView(DASHBOARD_STATICS.LABELS.SECONDARY_HEADER)}
      {getSecondaryNewsViewFList()}
    </View>
  );

  return (
    <View style={styles.main.container}>
      <UserBarView navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={newsDataRefreshStatus === LOADING_STATUS.LOADING}
            onRefresh={onNewsRefresh}
            tintColor={COLORS.ALTO}
            titleColor={COLORS.ALTO}
            title={DASHBOARD_STATICS.LABELS.REFRESH_TITLE}
          />
        }>
        {isLoading ? <LPLoadingView marginTop={200} /> : getContent()}
      </ScrollView>
    </View>
  );
};

DashboardView.propTypes = {
  controls: PropTypes.object,
  navigation: PropTypes.object,
  newsData: PropTypes.object,

  onNewsClick: PropTypes.func,
};

DashboardView.defaultProps = {
  controls: {},
  navigation: {},
  newsData: {},

  onNewsClick: () => {},
};

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RUSSIAN_BLACK,
    paddingBottom: 60, // FOR TAB BAR
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

const headerView = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

const primaryNewsView = StyleSheet.create({
  tickCircle: {
    borderRadius: 12,
    width: 24,
    height: 24,
    backgroundColor: '#cdcac9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 3,
    bottom: 3,
  },
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
  scrollContent: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginHorizontal: 10,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
});

const secondaryNewsView = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
  flatListContainer: {
    marginTop: 10,
  },
  crosleContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  scrollViewContent: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginHorizontal: 10,
    width: SECONDARY_NEWS.IMAGE_WIDTH,
    height: SECONDARY_NEWS.IMAGE_HEIGHT,
  },
});

const communityewsView = StyleSheet.create({
  item: {
    width: SECONDARY_NEWS.IMAGE_WIDTH,
    height: SECONDARY_NEWS.IMAGE_HEIGHT,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

const styles = {
  main,
  headerView,
  primaryNewsView,
  secondaryNewsView,
  communityewsView,
};

export default DashboardView;
