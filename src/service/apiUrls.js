const API_URLS = {
  //auth url
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    GEN_OTP: '/mail/generateOTP',
    VERIFY_OTP: '/mail/validateOTP',
    UPDATE_PASS: '/forgotpassword',
    REFRESH_TOKEN: '/refreshtoken',
    VALIDATE_SESSION: '/user/login/validate/session',
    CHECK_USER_EXIST: '/isuserexists',
  },
  //user url
  USER_DATA: {
    POINTS: '/lifepoints/userPoints',
    UPDATE_PROFILE: '/user/update',
    UPDATE_PASS: '/user/updatepassword',
    DELETE_ACCOUNT: '/user/delete',
    CLEAR_PROFILE: '/user/clear/profile',
    LOGOUT: '/user/logout',
    GET_OTHER_USER: '/user/getotheruser',
    BLOCK_USER: '/block/contact',
    UNBLOCK_USER: '/unblock/contact',
    GET_BLOCKED_USERS: '/get/blocked',
  },
  //dashboard url
  DASHBOARD: {
    PRIMARY_NEWS: '/advertisement/getAllActiveAdvertisement',
    SECONDARY_NEWS: '/social/news/getAllActiveSocialNews',
    COMMUNITY_NEWS: '/community/news/getactive',
  },
  //new url
  NEWS: {
    STATUS: '/get/news/viewstatus',
    UPDATE_LIKE_STATUS: '/ledger/create',
    GET_BY_USERID: '/community/news/getbyuserid',
    SAVED_NEWS: '/saved/news/create',
    DELETE_NEWS: '/saved/news/delete',
    SAVED_NEWS_STATUS: '/saved/news/ispresent',
    GET_SAVED_NEWS: '/saved/news/getSavedNews',
    REPORT_COMMENT: '/community/news/report/comment',
    ADD_COMMENT: '/community/news/add/comment',
    GET_COMMENT: '/community/news/get/comments',
    DELETE_COMMUNITY_NEWS: '/community/news/delete',
    DELETE_COMMUNITY_NEWS_COMMENT: '/community/news/delete/comment',
    DELETE_COMMUNITY_NEWS_COMMENT_REPLY: '/community/news/reply/delete',
    REPLY_COMMUNITY_NEWS: '/community/news/reply/add',
    GET_REPLY: '/community/news/reply/get/active',
    CREATE_COMMUNITY_NEWS: '/community/news/create',
    ADD_CONTACT: '/add/contact',
  },
  //survey url
  SURVEY: {
    SURVEY_STATUS: '/survey/ispresent',
    SURVEY_CREATE: '/survey/create',
    SURVEY_DETAILS: '/survey/detailsfornews',
  },
  //stemple card url
  STEMPEL_CARD: {
    STEMPLER_CARD_BY_USER: '/stempel/card/byuser',
    STEMPLER_CARD_CREATE: '/stempel/card/create',
    STEMPLER_CARD_DELETE: '/stempel/card/delete',
  },
  // leaderboard url
  LEADERBOARD: {
    GET_ALL_LEVELS: '/levelinfo/getAlllevel',
    YEARLY_RANKINGS: '/lifepoints/yearlyranking',
    PRIZE: '/prize/getAllPrize',
  },
  //shop url
  SHOP: {
    ALL_ITEMS: '/shop/getactive',
    BUY_ITEM: '/ledger/create',
    ADD_DELIVERY_ADDRESS: '/physicalitem/delivery/create',
  },
  SETTINGS: {
    SHOW_BIRTHDAY: '/user/showbirthday',
  },
  CONTACTS: {
    RECENT: '/get/recent',
    BIRTH_DAY_COUNT: '/birthday/contact/list',
  },
  PRIORITYTICKET: {
    GET_PRIORITY_TICKET: '/ticket/get',
    DELETE_PRIORITY_TICKET: '/ticket/delete',
  },
};

export default API_URLS;
