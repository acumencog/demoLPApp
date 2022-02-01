import {guidGenerator, isNullOrEmpty} from './CommonUtils';
import {NEWS_TYPES} from '../statics/Enums';
import {LEVEL_COLORS, MAX_LEVEL} from '../statics/Variables';
import COLORS from '../statics/colors';

/**
 * This functon will return formatted user data object
 * @param {Object} userData user data coming from server
 * @returns will return formatted user data object
 */
const extractUserDataFromApiResposne = userData => ({
  userName: userData.userName,
  userID: userData.userID,
  firstName: userData.firstName,
  lastName: userData.lastName,
  email: userData.email,
  gender: userData.gender,
  dateOfBirth: userData.dateOfBirth,
  zipCode: userData.zipCode + '', // to force is as string
  phoneNo: userData.phoneNo,
  profilePic: userData.profilePic,
  addressLine1: userData.addressLine1,
  addressLine2: userData.addressLine2,
  aboutMe: userData.aboutMe,
  designation: userData.designation,
  showBirthday: userData.showBirthday,
  chatUserId: userData.chatUserId,
  thumbnailImage: userData.thumbnailImage
    ? userData.thumbnailImage
    : userData.thumbnailPhoto,
});

/**
 * This function for get formated data from api response
 * @param {Object} allLevelsRawData data from server
 * @returns will return formated data
 */
const parseAllLevelsData = allLevelsRawData => {
  let levelsData = [];
  allLevelsRawData.forEach(currentLevelData => {
    const pointsRange = JSON.parse(currentLevelData.points);
    levelsData[currentLevelData.level - 1] = {
      id: currentLevelData.id,
      info: currentLevelData.info,
      level: currentLevelData.level,
      minPoints: pointsRange[0],
      maxPoints: pointsRange[1],
    };
  });
  for (let i = 0; i < levelsData.length; i++) {
    levelsData[i] = isNullOrEmpty(levelsData[i])
      ? {
          level: i + 1,
        }
      : levelsData[i];
  }
  return levelsData;
};

/**
 * This function for get level by points
 * @param {Object} points points
 * @param {Object} allLevelsData allLevelsData
 * @returns return a level
 */
const idetifyLevelsByPoints = (points = -1, allLevelsData = []) => {
  for (let i = 0; i < allLevelsData.length; i++) {
    if (
      points >= allLevelsData[i].minPoints &&
      points <= allLevelsData[i].maxPoints
    ) {
      return allLevelsData[i].level;
    }
  }
  return 0;
};

/**
 * This function for get progress in current level
 * @param {String} points points
 * @param {Array} allLevelsData  allLevelsData
 * @returns This will return item list
 */
const getProgressInCurrentLevel = (points, allLevelsData) => {
  try {
    const level = idetifyLevelsByPoints(points, allLevelsData);
    const currentLevelData = allLevelsData[level - 1];
    if (currentLevelData.level === MAX_LEVEL) {
      return 100;
    }
    return (
      ((points - currentLevelData.minPoints) /
        (currentLevelData.maxPoints - currentLevelData.minPoints)) *
      100
    );
  } catch (e) {
    return 0;
  }
};

/**
 * This function for get level
 * @param {String} level level
 * @returns this function will return level color
 */
const getLevelColor = level => {
  return LEVEL_COLORS[level] ? LEVEL_COLORS[level] : COLORS.DODGER_BLUE;
};

/**
 * This function will parse shop items
 * @param {Object} shopRawData  shopRawData
 * @returns  will parse shop items
 */
const parseShopItems = shopRawData => {
  let shopItems = {};
  let shopItemsOrder = {};
  shopRawData.forEach(currentShopItem => {
    const shopItemId = guidGenerator();
    shopItems = {
      ...shopItems,
      [shopItemId]: currentShopItem,
    };
    let currentOrder = shopItemsOrder[currentShopItem.type] || [];
    shopItemsOrder[currentShopItem.type] = [...currentOrder, shopItemId];
  });
  return {
    shopItems,
    order: shopItemsOrder,
  };
};

/**
 * This function for parse news response data
 * @param {Object} newsRawData newsRawData
 * @param {Object} type type
 * @returns this function will return parse data
 */
const parseNewsResponseData = (newsRawData, type = NEWS_TYPES.PRIMARY) => {
  let values = {};
  let order = [];
  newsRawData.forEach(currentNewsItem => {
    const id = guidGenerator();
    let newsId = currentNewsItem.advertisementID;
    if (!newsId) {
      newsId = currentNewsItem.socialNewsId;
    }
    if (!newsId) {
      newsId = currentNewsItem.communityNewsId;
    }
    values[id] = {
      id,
      newsId,
      type,
      ...currentNewsItem,
    };
    order.push(id);
  });
  return {
    values,
    order,
  };
};

/**
 * This function for parse news response data common
 * @param {Object} newsRawData newsRawData
 * @param {Object} typeTmp typeTmp
 * @returns this will return data as item list
 */
const parseNewsResponseDataCommon = (newsRawData, typeTmp) => {
  let order = [];
  try {
    newsRawData.forEach(currentNewsItem => {
      let newsId = currentNewsItem.advertisementID;
      let type = typeTmp;
      if (!newsId) {
        newsId = currentNewsItem.socialID;
      }
      if (!newsId) {
        newsId = currentNewsItem.communityNewsId;
      }
      if (isNullOrEmpty(type)) {
        type = currentNewsItem.newsCategory;
        console.log('type vlaue is : ', type);
      }
      const newsObj = {
        type,
        ...currentNewsItem,
      };
      if (newsId) {
        newsObj.newsId = newsId;
      }
      console.log('newsObj : ', newsObj);
      if (newsObj.heading) {
        order.push(newsObj);
      }
    });
  } catch (e) {
    console.log('error value is : ', e);
  }
  return order;
};

/**
 * This function for parse liked status
 * @param {Number} like like
 * @param {Number} dislike dislike
 * @returns will return true or false
 */
const parseLikedStatus = (like, dislike) =>
  like === 1 ? true : dislike === 1 ? false : null;

/**
 * This function for parse user points
 * @param {Object} rawUserPointsData rawUserPointsData
 * @returns will return formated data
 */
const parseUserPoints = (rawUserPointsData = {}) => ({
  monthlyRanking: rawUserPointsData.monthlyRanking || 0,
  points: rawUserPointsData.points || 0,
  yearlyRanking: rawUserPointsData.yearlyRanking || 0,
  yearlyPoints: rawUserPointsData.yearlyPoints || 0,
});

export {
  extractUserDataFromApiResposne,
  parseAllLevelsData,
  idetifyLevelsByPoints,
  getLevelColor,
  getProgressInCurrentLevel,
  parseShopItems,
  parseNewsResponseData,
  parseLikedStatus,
  parseUserPoints,
  parseNewsResponseDataCommon,
};
