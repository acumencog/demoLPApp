const AuthStatics_EN = {
  LOGIN_STATICS: {
    LABEL: {
      USERNAME: 'EMAIL / USERNAME',
      PASSWORD: 'PASSWORD',
      LOGGIN_IN: 'Loading...',
    },

    ACTION_TEXT: {
      SAVE_CREDS: 'Save username and password',
      FORGOT_PASSWORD: 'Forgot Password?',
      LOG_IN: 'LOG IN',
      CREATE_ACCOUNT: "Don't have an account? Create one",
    },

    INPUT_ERROR_MESSAGE: {
      USER_NAME_NO_SPECIAL: 'Username cannot contain @',
      USER_NAME_MANDATORY: 'Please enter username',
      PASSWORD_MANDATORY: 'Please enter password',
    },
  },

  CREATE_ACCOUNT_STATICS: {
    LABEL: {
      PROFILE_PIC: 'PROFILE PICTURE',
      USERNAME: 'USERNAME',
      FIRST_NAME: 'FIRST NAME',
      LAST_NAME: 'LAST NAME',
      EMAIL: 'EMAIL',
      PASSWORD: 'PASSWORD',
      CONFIRM_PASSWORD: 'CONFIRM PASSWORD',
    },
    BUTTONS: {
      MALE: {id: 'male', label: 'MALE', iconName: 'male'},
      FEMALE: {id: 'female', label: 'FEMALE', iconName: 'female'},
      OTHERS: {id: 'others', label: 'OTHERS', iconName: 'genderless'},
      CREATE_ACCOUNT: {label: 'CREATE ACCOUNT'},
      LOG_IN: {id: 'login', label: 'Have an account? Log in'},
    },
    INPUT_ERROR_MESSAGE: {
      USERNAME_NO_SPECIAL: 'Username cannot contain @',
      USERNAME_MIN_LENGTH: 'Username must be atleast 5 characters long',
      USERNAME_MANDATORY: 'Please enter username',
      GENDER_MANDATORY: 'Please select gender',
      EMAIL_INVALID: 'Email ID is invalid',
      EMAIL_MANDATORY: 'Please enter email ID',
      FIRST_NAME_MANDATORY: 'Please enter your first name',
      LAST_NAME_MANDATORY: 'Please enter your last name',
      PASSWORD_FORMAT:
        'Password should be minimum 8 characters including alphabets, numbers and special characters',
      PASSWORD_MANDATORY: 'Please enter password',
      CONFIRM_PASSWORD_MATCH: 'Password doesnt match',
    },
    DISCLAIMERS: {
      DISCLAMER_TEXT: 'I agree to the disclaimer text',
      TERMS_AND_CONDTIONS_TEXT: 'I have read the terms and condtions',
      TERMS_AND_CONDTIONS_LINK: 'Terms & Conditions',
      NOT_CHECKED_ALERT_TEXT:
        'You must agree to the terms and conditons to register',
    },
  },
  OTP_STATICS: {
    LABEL: {
      HEADER: 'Verification',
      DESCRIPTION:
        'We have sent you verification code to your email ID {email}',
    },
    BUTTONS: {
      RESEND_OTP: {id: 'resentOtp', label: "Didn't get a code? Tap to resend"},
      SUBMIT: {id: 'submit', label: 'VERIFY'},
      LOG_IN: {id: 'login', label: 'Go back to Login'},
    },
    MESSAGES: {
      OTP_SENT: 'We have sent an OTP',
      OTP_RESENT: 'We have sent the OTP again',
      OTP_WAITING_PERIOD:
        'Please wait for sometime before you can resend your OTP',
      OTP_MAX_LIMIT_REACHED:
        'You have reached the maximum number of resends. Please try again after sometime',
      INVALID_OTP: 'Please enter a valid OTP',
      OTP_VERIFIED: 'Email verified',
    },
  },
  FORGOT_PASS_STATICS: {
    LABEL: {
      HEADER: 'Forgot Password?',
      DESCRIPTION:
        "Give us your registered email address and we'l send you the link to reset your password",
      EMAIL: 'EMAIL',
    },
    BUTTONS: {
      SUBMIT: {id: 'submit', label: 'SUBMIT'},
      LOG_IN: {id: 'login', label: 'Have an account? Log in'},
    },
    INPUT_ERROR_MESSAGE: {
      EMAIL_INVALID: 'Email ID is invalid',
      EMAIL_MANDATORY: 'Please enter email ID',
    },
  },
  UPDATE_PASS_STATICS: {
    LABEL: {
      HEADER: 'Reset Password',
      DESCRIPTION: 'Email address verified. Enter new password',
      PASSWORD: 'NEW PASSWORD',
      CONFIRM_PASSWORD: 'RE-ENTER PASSWORD',
    },
    BUTTONS: {
      SUBMIT: {id: 'submit', label: 'RESET PASSWORD'},
      LOG_IN: {id: 'login', label: 'Have an account? Log in'},
    },
    INPUT_ERROR_MESSAGE: {
      PASSWORD_FORMAT:
        'Password should be minimum 8 characters including alphabets, numbers and special characters',
      PASSWORD_MANDATORY: 'Please enter password',
      CONFIRM_PASSWORD_MATCH: 'Password doesnt match',
    },
    TOAST_MESSAGES: {
      PASSWRORD_UPDATED: 'Password successfully updated. Please login again',
    },
  },
  API_STATICS: {
    SESSION_EXPIRED: {
      HEADER: 'Session Expired',
      DESCRIPTION: 'Please continue to login back again',
      POSITIVE_BUTTON_TEXT: 'Login',
    },
    GENERIC_ERROR_MESSAGE: 'Sorry, Somethig went wrong',
  },
};

export default AuthStatics_EN;
