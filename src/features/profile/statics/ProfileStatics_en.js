const PROFILE_STATICS_EN = {
  HOME: {
    //profile details
    LABELS: {
      BACK: 'BACK',
      STATS_LEVELS: 'LEVEL',
      STATS_POINTS: 'POINTS',
      MEMBERCARD: 'MEMBERCARD',
      STATS_M_RANK: 'MONTHLY RANKING',
      STATS_Y_RANK: 'YEARLY RANKING',
      LOGOUT: 'LOGOUT',
      DATE_OF_BIRTH: 'Date of Birth: ',
      About: 'About',
      Posting: 'Posting',
      Stempelkarte: 'Stempelkarte',
      Saved: 'Saved',
      ADD_A_SUPERPOWER: 'Add a Superpower',
      Priority_Ticket: 'TICKETS',
    },
    //logout
    MESSAGES: {
      LOGGING_OUT: 'Logging out...',
    },
  },
  //edit
  EDIT_PROFILE_STATICS: {
    LABELS: {
      BACK: 'BACK',
      INPUT_FIRST_NAME: 'FIRST NAME',
      INPUT_LAST_NAME: 'LAST NAME',
      INPUT_USER_NAME: 'USERNAME',
      INPUT_EMAIL: 'EMAIL',
      INPUT_PHONE: 'PHONE NUMBER',
      INPUT_ADDRESS_1: 'ADDRESS LINE 1',
      INPUT_ADDRESS_2: 'ADDRESS LINE 2',
      ZIP_CODE: 'ZIP CODE',
      Superpower: 'SuperPower',
      About_Me: 'Über mich',
    },
    //actions on profile
    ACTIONS: {
      UPDATE_PASS: 'UPDATE PASSWORD',
      DELETE_ACC: 'DELETE ACCOUNT',
      SUBMIT: 'SUBMIT',
    },
    //delete account
    DELETE_ACCOUNT_ALERT: {
      HEADER: 'Delete Account',
      DESCRIPTION:
        'Are you sure you want to delete the account? All your account data including your points will be deleted.',
      ACTION_CANCEL: 'Cancel',
      ACTION_DELETE: 'Delete Account',
    },
    //profile update
    TOASTS: {
      PROFILE_UPDATED: 'Profile updated',
      PROFILE_IMAGE_UPDATED: 'Profile image updated',
    },
    //error message
    INPUT_ERROR_MESSAGE: {
      INVALID_PHONE: 'Invalid Phone number',
      INVALID_ZIP_CODE: 'Invalid Zipcode',
    },
  },
  //update password
  PROFILE_UPDATE_PASS_STATICS: {
    LABELS: {
      BACK: 'BACK',
      HEADER: 'Update Password',
      SUB_HEADER: 'Enter your current password and new password',
      INPUT_CURR_PASSWORD: 'CURRENT PASSWORD',
      INPUT_NEW_PASSWORD: 'NEW PASSWORD',
      INPUT_CONFIRM_PASSWORD: 'CONFIRM PASSWORD',
    },
    ACTIONS: {
      SUBMIT: 'UPDATE PASSWORD',
    },
    INPUT_ERROR_MESSAGE: {
      MANDATORY_OLD_PASS: 'Please enter your current password',
      PASSWORD_FORMAT:
        'Password should be minimum 8 characters including alphabets, numbers and special characters',
      CONFIRM_PASSWORD_MATCH: 'Password doesnt match',
    },
    TOASTS: {
      PASS_UPDATED: 'Password updated',
    },
  },
};

export default PROFILE_STATICS_EN;
