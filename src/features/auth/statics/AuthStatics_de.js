const AuthStatics_DE = {
  LOGIN_STATICS: {
    LABEL: {
      USERNAME: 'E-MAIL-ADRESSE / USERNAME',
      PASSWORD: 'PASSWORT',
      LOGGIN_IN: 'Laden...',
    },

    ACTION_TEXT: {
      SAVE_CREDS: 'Username und Passwort speichern',
      FORGOT_PASSWORD: 'Passwort vergessen?',
      LOG_IN: 'Anmelden',
      CREATE_ACCOUNT: 'Neu bei Lifepoints? Jetzt registrieren!',
    },

    INPUT_ERROR_MESSAGE: {
      USER_NAME_NO_SPECIAL: 'Username darf kein @ enthalten',
      USER_NAME_MANDATORY: 'Username eingeben',
      PASSWORD_MANDATORY: 'Passwort eingeben',
    },
  },

  CREATE_ACCOUNT_STATICS: {
    LABEL: {
      PROFILE_PIC: 'PROFILBILD',
      USERNAME: 'USERNAME',
      FIRST_NAME: 'VORNAME',
      LAST_NAME: 'NACHNAME',
      EMAIL: 'EMAIL ADRESSE',
      PASSWORD: 'PASSWORT',
      CONFIRM_PASSWORD: 'PASSWORT BESTÄTIGEN',
    },
    BUTTONS: {
      MALE: {id: 'mann', label: 'MÄNNLICH', iconName: 'mann'},
      FEMALE: {id: 'frau', label: 'WEIBLICH', iconName: 'frau'},
      OTHERS: {id: 'divers', label: 'DIVERS', iconName: 'divers'},
      CREATE_ACCOUNT: {label: 'JETZT REGISTRIEREN'},
      LOG_IN: {
        id: 'anmelden',
        label: 'Hast du bereits ein Konto? Zur Anmeldung',
      },
    },
    INPUT_ERROR_MESSAGE: {
      USERNAME_NO_SPECIAL: 'Username darf keine Sonderzeichen enthalten',
      USERNAME_MIN_LENGTH: 'Username muss mindestens 3 Zeichen enthalten',
      USERNAME_MANDATORY: 'Username eingeben',
      GENDER_MANDATORY: 'Bitte Geschlecht auswählen',
      EMAIL_INVALID: 'Gebe eine gültige E-Mail-Adresse ein',
      EMAIL_MANDATORY: 'Gebe eine E-Mail-Adresse ein',
      FIRST_NAME_MANDATORY: 'Vorname eingeben',
      LAST_NAME_MANDATORY: 'Nachname eingeben',
      PASSWORD_FORMAT:
        'Passwort sollte mindestens 8 Zeichen lang sein und Buchstaben, Zahlen und Sonderzeichen enthalten',
      PASSWORD_MANDATORY: 'Bitte Passwort eingeben',
      CONFIRM_PASSWORD_MATCH: 'Passwort stimmt nicht überein',
    },
    DISCLAIMERS: {
      DISCLAMER_TEXT: 'Ich bin mit den AGBs einverstanden',
      TERMS_AND_CONDTIONS_TEXT:
        'Ich bin mit den Datenschutzrichtlinien einverstanden',
      TERMS_AND_CONDTIONS_LINK: 'AGBs & Datenschutzrichtlinien',
      NOT_CHECKED_ALERT_TEXT:
        'Du musst den AGBs und Datenschutzrichtlinien für die Registrierung zustimmen',
    },
  },
  OTP_STATICS: {
    LABEL: {
      HEADER: 'Verifizierung',
      DESCRIPTION:
        'Wir haben dir einen Verifizierungs-Code an {email} gesendet.',
    },
    BUTTONS: {
      RESEND_OTP: {
        id: 'Verifizierungscode erneut geschickt',
        label:
          'Du hast keinen Code erhalten? Drücke hier für einen neuen Code!',
      },
      SUBMIT: {id: 'verifizieren', label: 'VERIFIZIEREN'},
      LOG_IN: {id: 'anmelden', label: 'Zurück zur Anmeldung'},
    },
    MESSAGES: {
      OTP_SENT: 'Wir haben dir einen Verifizierungscode per E-Mail zugeschickt',
      OTP_RESENT:
        'Wir haben dir einen Verifizierungscode per E-Mail zugeschickt',
      OTP_WAITING_PERIOD: 'Bitte warte einen Moment',
      OTP_MAX_LIMIT_REACHED: 'Bitte versuche es nach einiger Zeit erneut',
      INVALID_OTP: 'Bitte gebe den gültigen Verifizierungscode ein',
      OTP_VERIFIED: 'E-Mail verifiziert',
    },
  },
  FORGOT_PASS_STATICS: {
    LABEL: {
      HEADER: 'Passwort vergessen?',
      DESCRIPTION: 'Bitte registrierte E-Mail-Adresse eingeben.',
      EMAIL: 'EMAIL',
    },
    BUTTONS: {
      SUBMIT: {id: 'abschicken', label: 'ABSCHICKEN'},
      LOG_IN: {id: 'anmelden', label: 'Hast du ein Konto? Zur Anmeldung'},
    },
    INPUT_ERROR_MESSAGE: {
      PASSWORD_FORMAT:
        'Password should be minimum 8 characters including alphabets, numbers and special characters',
      EMAIL_INVALID: 'Gebe eine gültige E-Mail-Adresse ein',
      EMAIL_MANDATORY: 'Gebe eine E-Mail-Adresse ein',
    },
  },
  UPDATE_PASS_STATICS: {
    LABEL: {
      HEADER: 'Passwort zurücksetzen',
      DESCRIPTION: 'E-Mail-Adresse verifiziert. Neues Passwort eingeben',
      PASSWORD: 'NEUES PASSWORT',
      CONFIRM_PASSWORD: 'PASSWORT WIEDERHOLEN',
    },
    BUTTONS: {
      SUBMIT: {id: 'abschicken', label: 'Passwort zurücksetzen'},
      LOG_IN: {id: 'anmelden', label: 'Hast du ein Konto? Zur Anmeldung'},
    },
    INPUT_ERROR_MESSAGE: {
      PASSWORD_FORMAT:
        'Passwort sollte mindestens 8 Zeichen lang sein und Buchstaben, Zahlen und Sonderzeichen enthalten',
      PASSWORD_MANDATORY: 'Bitte Passwort eingeben',
      CONFIRM_PASSWORD_MATCH: 'Passwort stimmt nicht überein',
    },
    TOAST_MESSAGES: {
      PASSWRORD_UPDATED: 'Passwort erfolgreich aktualisiert. Jetzt anmelden',
    },
  },
  API_STATICS: {
    SESSION_EXPIRED: {
      HEADER: 'Session abgelaufen',
      DESCRIPTION: 'Bitte nochmal anmelden',
      POSITIVE_BUTTON_TEXT: 'Anmelden',
    },
    GENERIC_ERROR_MESSAGE: 'Upps, etwas ist schief gelaufen',
  },
};

export default AuthStatics_DE;
