const REGISTRATION_STATICS_EN = {
  CONTAINER: {
    CONTENT: {
      REGISTERING: 'Registering user...',
    },
  },

  WELCOME: {
    CONTENT: {
      HEADER: 'Welcome to LifePoints',
      DESCRIPTION:
        'Welcome to Lifepoints. We look forward you to enjoy this ecosystem.',
    },
    ACTIONS: {
      NEXT: 'Next',
      BACK: 'Already have an account? Click to Login',
    },
    DISCLAIMERS: {
      DISCLAMER_TEXT: 'I agree to the disclaimer text',
      TERMS_AND_CONDTIONS_TEXT: 'I have read the terms and condtions',
      CONDTIONS_LINK: 'Conditions',
      TERMS_LINK: 'Terms',
      NOT_CHECKED_ALERT_TEXT:
        'You must agree to the terms and conditons to register',
    },
  },

  USERNAME: {
    CONTENT: {
      HEADER: 'Choose your username',
      DESCRIPTION:
        'This will be visible to other users and can be used to login to LifePoints',
      VALIDATING_USERNAME: 'Checking username availibility',
    },
    LABELS: {
      USERNAME: 'USERNAME',
    },
    ACTIONS: {
      NEXT: 'Next',
      BACK: 'Back',
    },
    INPUT_ERROR_MESSAGE: {
      USERNAME_NO_SPECIAL: 'Username cannot contain @ or space',
      USERNAME_MIN_LENGTH: 'Username must be atleast 5 characters long',
      USERNAME_MANDATORY: 'Please enter username',
    },
  },

  EMAIL: {
    CONTENT: {
      HEADER: 'Enter your email',
      DESCRIPTION:
        'Hi {userName}\n\nThis will be not be visible to other users and can be used to login to LifePoints',
      VALIDATING_EMAIL: 'Validating email ID',
    },
    LABELS: {
      EMAIL: 'EMAIL',
      CONFIRM_EMAIL: 'CONFIRM EMAIL',
    },
    ACTIONS: {
      NEXT: 'Next',
      BACK: 'Back',
    },
    INPUT_ERROR_MESSAGE: {
      EMAIL_INVALID: 'Enter a valid email ID',
      EMAIL_MANDATORY: 'Please enter email ID',
      EMAIL_MISMATCH: 'Entered email ID is not same as above',
    },
  },

  PASSWORD: {
    CONTENT: {
      HEADER: 'Enter a password',
      DESCRIPTION:
        'This will be used to login to LifePoints. You can opt to save username and password while logging in',
    },
    LABELS: {
      PASSWORD: 'PASSWORD',
      CONFIRM_PASSWORD: 'CONFIRM PASSWORD',
    },
    ACTIONS: {
      NEXT: 'Next',
      BACK: 'Back',
    },
    INPUT_ERROR_MESSAGE: {
      PASSWORD_FORMAT:
        'Password should be minimum 8 characters including alphabets, numbers and special characters',
      PASSWORD_MANDATORY: 'Please enter password',
      CONFIRM_PASSWORD_MATCH: 'Password doesnt match',
    },
    PASSWORD_VALIDATIONS_MESSAGES: {
      MIN_CHANRACTERS: 'Minimum 8 characters',
      MAX_CHANRACTERS: 'Maximum 15 characters',
      SPECIAL_CHARS: 'Contains special characters',
      CONTAINS_NUMBERS: 'Contains numbers',
    },
  },

  GENDER: {
    CONTENT: {
      HEADER: 'Select your gender',
      DESCRIPTION: 'This will be visible to other users',
    },
    LABELS: {
      GENDER: 'Select a gender',
    },
    ACTIONS: {
      NEXT: 'Next',
      BACK: 'Back',
    },
    INPUT_ERROR_MESSAGE: {
      GENDER_MANDATORY: 'Please select gender',
    },
  },

  DOB: {
    CONTENT: {
      HEADER: 'Select your Date of Birth',
      DESCRIPTION: 'This will not be visible to other users',
    },
    LABELS: {
      DOB: 'DATE OF BIRTH',
    },
    ACTIONS: {
      NEXT: 'Next',
      BACK: 'Back',
    },
    INPUT_ERROR_MESSAGE: {
      DOB_MANDATORY: 'Enter Date of Birth',
      MIN_AGE: 'You need to be atleast 18 years old to register for LifePoints',
    },
  },

  ZIP_CODE: {
    CONTENT: {
      HEADER: 'Enter your zipcode',
      DESCRIPTION: 'This will not be visible to other users',
    },
    LABELS: {
      ZIP_CODE: 'ZIP CODE',
    },
    ACTIONS: {
      NEXT: 'Next',
      BACK: 'Back',
    },
    INPUT_ERROR_MESSAGE: {
      ZIP_MANDATORY: 'Enter Zipcode',
      INVALID_ZIP: 'Enter a valid zipcode',
    },
  },

  PROFILE_IMAGE: {
    CONTENT: {
      HEADER: 'Give a profile image',
      DESCRIPTION: 'This will be visible to other users',
    },
    LABELS: {},
    ACTIONS: {
      NEXT: 'Next',
      BACK: 'Back',
    },
    INPUT_ERROR_MESSAGE: {},
  },

  COMPLETED: {
    CONTENT: {
      HEADER: 'You are all set',
      DESCRIPTION:
        'Click on next to explore all the possibilities of lifePoints, and dont forget to check out your ranking from time to time. Exiciting prizes awaits you if are in the top 10.',
    },
    ACTIONS: {
      DASHBOARD: 'Go to Dashboard',
    },
  },
};

export default REGISTRATION_STATICS_EN;
