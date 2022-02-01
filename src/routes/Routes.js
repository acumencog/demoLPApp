const ROUTES = {
  // AUTH
  AUTH_NAVIGATOR: {
    id: 'authNavigator',
  },
  AUTH_LOGIN: {
    id: 'authLogin',
  },
  AUTH_REGISTRATION: {
    id: 'authRegistration',
  },
  AUTH_REGISTRATION_COMPLETED: {
    id: 'authRegistrationCompleted',
  },
  AUTH_OTP: {
    id: 'authOtp',
  },
  AUTH_UPDATE_PASS: {
    id: 'authUpdatePass',
  },

  // DAHSBOARD
  DASHBORD: {
    id: 'dashboard',
    displayName: 'Dashboard',
    iconName: 'view-dashboard',
  },
  NEWS_DETAILS: {
    id: 'newsDetails',
    displayName: 'News Details',
    iconName: '',
  },
  NEWS_DETAILS_WITHOUT_BOTTOM: {
    id: 'newsDetailswBottom',
    displayName: 'News Details',
    iconName: '',
  },

  // ROOTS NAVS
  ROOT_STACK_NAV: {
    id: 'rootStackNavigator',
    displayName: 'Root',
    iconName: '',
  },
  APP_NAV: {
    id: 'appNavigator',
    displayName: 'App',
    iconName: '',
  },
  PROFILE: {
    id: 'profile',
    displayName: 'Profile',
    iconName: '',
  },
  PROFILE_SHOAP_TAB: {
    id: 'shoapTab',
    displayName: 'Profile',
    iconName: '',
  },
  PROFILE_CHAT_TAB: {
    id: 'chatTabProfile',
    displayName: 'Profile',
    iconName: '',
  },
  PROFILE_COMMUNITY_NEWS_TAB: {
    id: 'communityTabProfile',
    displayName: 'Profile',
    iconName: '',
  },

  PROFILE_LEADER_BOARD_TAB: {
    id: 'leaderBoardProfile',
    displayName: 'Profile',
    iconName: '',
  },
  ADD_USER: {
    id: 'addUser',
    displayName: 'Add User',
    iconName: '',
  },
  PROFILE_EDIT: {
    id: 'profileEdit',
    displayName: 'Edit Profile',
    iconName: '',
  },
  PROFILE_EDIT_SHOAP_TAB: {
    id: 'profileEdit',
    displayName: 'Edit Profile',
    iconName: '',
  },
  PROFILE_EDIT_CHAT_TAB: {
    id: 'profileEdit',
    displayName: 'Edit Profile',
    iconName: '',
  },
  PROFILE_EDIT_COMMUNITY_NEWS_TAB: {
    id: 'profileEdit',
    displayName: 'Edit Profile',
    iconName: '',
  },
  PROFILE_EDIT_LEADER_BOARD_TAB: {
    id: 'profileEdit',
    displayName: 'Edit Profile',
    iconName: '',
  },

  PROFILE_UPDATE_PASS: {
    id: 'profileUpdatePass',
    displayName: 'Update Password',
    iconName: '',
  },
  DELECTE_ACCOUNT: {
    id: 'DeleteAccount',
    displayName: 'Delete Account',
    iconName: '',
  },
  DELECTE_PROFILE: {
    id: 'DeleteProfile',
    displayName: 'Delete Profile',
    iconName: '',
  },
  APP_TAB_NAV: {
    id: 'appTabNavigator',
    displayName: 'App',
    iconName: '',
  },

  // TAB NAVS
  DASHBORD_STACK_NAVIGATOR: {
    id: 'dashboardStackNavigator',
    displayName: 'Dashboard',
    iconName: 'view-dashboard',
  },
  QR: {
    id: 'qr',
    displayName: 'QR',
    iconName: 'qrcode-scan',
  },
  QR_SHOAP_TAB: {
    id: 'qrShoapTab',
    displayName: 'QR',
    iconName: 'qrcode-scan',
  },
  QR_CHAT_TAB: {
    id: 'qrChatTab',
    displayName: 'QR',
    iconName: 'qrcode-scan',
  },
  QR_COMMUNITY_NEWS_TAB: {
    id: 'qrChatTab',
    displayName: 'QR',
    iconName: 'qrcode-scan',
  },
  QR_LEADER_BOARD_TAB: {
    id: 'qrChatTab',
    displayName: 'QR',
    iconName: 'qrcode-scan',
  },
  SETTING: {
    id: 'setting',
    displayName: 'Settings',
    iconName: '',
  },
  SETTING_SHOAP_TAB: {
    id: 'settingShop',
    displayName: 'Settings',
    iconName: '',
  },
  SETTING_CHAT_TAB: {
    id: 'settingChatTab',
    displayName: 'Settings',
    iconName: '',
  },
  SETTING_COMMUNITY_NEWS_TAB: {
    id: 'settingCommunityNT',
    displayName: 'Settings',
    iconName: '',
  },
  SETTING_LEADER_BOARD_TAB: {
    id: 'settingLeaderBoard',
    displayName: 'Settings',
    iconName: '',
  },

  PRIVACY_CHAT_TAB: {
    id: 'privacyChatTab',
    displayName: 'Privacy',
    iconName: '',
  },
  PRIVACY_SHOAP_TAB: {
    id: 'privacyShoapTab',
    displayName: 'Privacy',
    iconName: '',
  },
  PRIVACY_COMMUNITY_NEWS_TAB: {
    id: 'privacyCommNewsTab',
    displayName: 'Privacy',
    iconName: '',
  },
  PRIVACY_LEADER_BOARD_TAB: {
    id: 'privacyLeaderboardTab',
    displayName: 'Privacy',
    iconName: '',
  },
  PRIVACY: {
    id: 'privacy',
    displayName: 'Privacy',
    iconName: '',
  },
  BLOCKLIST: {
    id: 'blocklist',
    displayName: 'Blocklist',
    iconName: '',
  },
  BLOCKLIST_CHAT_TAB: {
    id: 'blocklistChatTab',
    displayName: 'Blocklist',
    iconName: '',
  },
  BLOCKLIST_COMMUNITY_NEWS_TAB: {
    id: 'blocklistCommTab',
    displayName: 'Blocklist',
    iconName: '',
  },
  BLOCKLIST_LEADER_BOARD_TAB: {
    id: 'blocklistLeaderBoard',
    displayName: 'Blocklist',
    iconName: '',
  },
  BLOCKLIST_SHOAP_TAB: {
    id: 'blocklistShoapTab',
    displayName: 'Blocklist',
    iconName: '',
  },
  STEMPLER_CARD: {
    id: 'templerCard',
    displayName: 'Stempler Card',
    iconName: '',
  },
  STEMPLER_CARD_SHOAP_TAB: {
    id: 'templerCardShoapTab',
    displayName: 'Stempler Card',
    iconName: '',
  },
  STEMPLER_CARD_CHAT_TAB: {
    id: 'templerCardChatTab',
    displayName: 'Stempler Card',
    iconName: '',
  },
  STEMPLER_CARD_COMMUNITY_NEWS_TAB: {
    id: 'templerCardCommunityTab',
    displayName: 'Stempler Card',
    iconName: '',
  },
  STEMPLER_CARD_LEADER_BOARD_TAB: {
    id: 'templerCardLeaderBoardT',
    displayName: 'Stempler Card',
    iconName: '',
  },

  PRIORITY_TICKET: {
    id: 'priorityTicket',
    displayName: 'Priority Ticket',
    iconName: '',
  },
  PRIORITY_TICKET_SHOAP_TAB: {
    id: 'priorityTicketShopTab',
    displayName: 'Priority Ticket',
    iconName: '',
  },
  PRIORITY_TICKET_CHAT_TAB: {
    id: 'priorityTicketChatTab',
    displayName: 'Priority Ticket',
    iconName: '',
  },
  PRIORITY_TICKET_COMMUNITY_NEWS_TAB: {
    id: 'priorityTicketCommunityTab',
    displayName: 'Priority Ticket',
    iconName: '',
  },
  PRIORITY_TICKET_LEADER_BOARD_TAB: {
    id: 'priorityTicketLeaderTab',
    displayName: 'Priority Ticket',
    iconName: '',
  },
  PRIORITY_TICKET_DETAILS: {
    id: 'priorityTicketDetails',
    displayName: 'Priority Ticket Details',
    iconName: '',
  },
  PRIORITY_TICKET_DETAILS_SHOAP_TAB: {
    id: 'priorityTicketDetailsShoapTab',
    displayName: 'Priority Ticket Details',
    iconName: '',
  },
  PRIORITY_TICKET_DETAILS_CHAT_TAB: {
    id: 'priorityTicketDetailsChatTab',
    displayName: 'Priority Ticket Details',
    iconName: '',
  },
  PRIORITY_TICKET_DETAILS_COMMUNITY_NEWS_TAB: {
    id: 'priorityTicketDetailsCommunityTab',
    displayName: 'Priority Ticket Details',
    iconName: '',
  },
  PRIORITY_TICKET_DETAILS_LEADER_BOARD_TAB: {
    id: 'priorityTicketDetailsLeaderTab',
    displayName: 'Priority Ticket Details',
    iconName: '',
  },
  POST_MELDUNG: {
    id: 'postmeldung',
    displayName: 'Post Meldung',
    iconName: '',
  },

  POST_MELDUNG_1: {
    id: 'postmeldung1',
    displayName: 'Post Meldung1',
    iconName: '',
  },

  CHAT_STACK_NAVIGATOR: {
    id: 'chatStackNavigator',
    displayName: 'CHAT',
    iconName: 'chat',
  },

  CHAT: {
    id: 'chat',
    displayName: 'CHAT',
    iconName: 'chat',
  },
  PLUS: {
    id: 'plus',
    displayName: 'PLUS',
    iconName: 'plus',
  },
  LEADERBOARD: {
    id: 'leaderboard',
    displayName: 'Leaderboard',
    iconName: 'trophy-outline',
  },
  SHOP_NAVIGATOR: {
    id: 'shopNavigator',
    displayName: 'Shop Navigator',
    iconName: 'cart',
  },

  LEADER_NAVIGATOR: {
    id: 'leaderNavigator',
    displayName: 'Leader Navigator',
    iconName: 'cart',
  },

  //chat

  CHATTING: {
    id: 'chatting',
    displayName: 'Chatting',
    iconName: '',
  },

  ADD_PARTICIPANT: {
    id: 'add_participants',
    displayName: 'Add Participant ',
    iconName: '',
  },
  CREATE_GROUP: {
    id: 'create_group',
    displayName: 'New Group ',
    iconName: '',
  },

  // SHOP NAVIGATOR
  SHOP_HOME: {
    id: 'shopHome',
    displayName: 'Shop',
    iconName: '',
  },
  SHOP_BUY_DETAILS: {
    id: 'shopBuyDetails',
    displayName: 'Buy Details',
    iconName: '',
  },
  SHOP_CONFIRMATION: {
    id: 'shopConfirmation',
    displayName: 'Shop Confirmation',
    iconName: '',
  },
  // ADD COMMUNITY NEWS NAVIGATOR
  PICK_IMAGE: {
    id: 'pickimage',
    displayName: 'PICK IMAGE',
    iconName: '',
  },
  CONTACTS: {
    id: 'contacts',
    displayName: 'CONTACT',
  },
  BIRTHDAY: {
    id: 'birthday',
    displayName: 'BIRTHDAY',
  },

  CONTACT_MANAGE: {
    id: 'contact_manage',
    displayName: 'CONTACTS',
  },

  CHAT_SETTINGS: {
    id: 'chatSettings',
    displayName: 'Chat Settings',
  },
  CHAT_SETTINGS_SHOAP_TAB: {
    id: 'chatSettingsShoapTab',
    displayName: 'Chat Settings',
  },
  CHAT_SETTINGS_HOME_TAB: {
    id: 'chatSettingsHomeTab',
    displayName: 'Chat Settings',
  },
  CHAT_SETTINGS_COMMUNITY_NEWS_TAB: {
    id: 'chatSettingsCommunityTab',
    displayName: 'Chat Settings',
  },
  CHAT_SETTINGS_LEADER_BOARD_TAB: {
    id: 'chatSettingsLeaderBoardTab',
    displayName: 'Chat Settings',
  },
};

// used for logging
const ROUTES_NAME_MAPPING = {
  dashboardStackNavigator: 'Dashboard',
  qr: 'QR',
  leaderboard: 'Leaderboard',
  shopNavigator: 'Shop',
  chat: 'CHAT',
  plus: 'PLUS',
  chatting: 'Chatting',
  chat_notification: 'Chat Notification',
};

export {ROUTES, ROUTES_NAME_MAPPING};
