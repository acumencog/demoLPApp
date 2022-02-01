const REGISTRATION_STATICS_DE = {
  CONTAINER: {
    CONTENT: {
      REGISTERING: 'Nutzer*in registrieren',
    },
  },

  WELCOME: {
    CONTENT: {
      HEADER: 'Willkommen bei Lifepoints',
      DESCRIPTION:
        'Schön, dass du da bist und wir nun gemeinsam die Welt ein kleines Stückchen besser machen können. Bevor es los geht, schau dir bitte die AGBs und Datenschutzrichtlinien an und bestätigen sie.',
    },
    ACTIONS: {
      NEXT: 'Weiter',
      BACK: 'Hast du bereits ein Konto? Zur Anmeldung',
    },
    DISCLAIMERS: {
      DISCLAMER_TEXT: 'Ich bin mit den AGBs einverstanden',
      TERMS_AND_CONDTIONS_TEXT:
        'Ich bin mit den Datenschutzrichtlinien einverstanden',
      CONDTIONS_LINK: 'Datenschutzrichtlinien',
      TERMS_LINK: 'AGBs',
      NOT_CHECKED_ALERT_TEXT:
        'Du musst den AGBs und Datenschutzrichtlinien für die Registrierung zustimmen',
    },
  },

  USERNAME: {
    CONTENT: {
      HEADER: 'Sag uns deinen Usernamen',
      DESCRIPTION:
        'Dein Username wird für andere Nutzer*innen sichtbar sein und du kannst ihn zum einloggen verwenden.',
      VALIDATING_USERNAME: 'Verfügbarkeit des Usernamens wird geprüft',
    },
    LABELS: {
      USERNAME: 'USERNAME',
    },
    ACTIONS: {
      NEXT: 'Weiter',
      BACK: 'Zurück',
    },
    INPUT_ERROR_MESSAGE: {
      USERNAME_NO_SPECIAL: 'Username darf kein @ oder Leerzeichen enthalten',
      USERNAME_MIN_LENGTH: 'Username muss mindestens 3 Zeichen lang sein',
      USERNAME_MANDATORY: 'Bitte Username eingeben',
    },
  },

  EMAIL: {
    CONTENT: {
      HEADER: 'Wie lautet deine E-Mail-Adresse?',
      DESCRIPTION:
        'Hi {userName}\n\nDeine E-Mail-Adresse ist für andere Nutzer*innen nicht sichtbar und dient der Verifizierung deines Accounts.',
      VALIDATING_EMAIL: 'Validierung der E-Mail-Adresse',
    },
    LABELS: {
      EMAIL: 'E-MAIL-ADRESSE',
      CONFIRM_EMAIL: 'E-MAIL-ADRESSE BESTÄTIGEN',
    },
    ACTIONS: {
      NEXT: 'Weiter',
      BACK: 'Zurück',
    },
    INPUT_ERROR_MESSAGE: {
      EMAIL_INVALID: 'Gebe eine gültige E-Mail-Adresse',
      EMAIL_MANDATORY: 'Gebe eine E-Mail-Adresse ein',
      EMAIL_MISMATCH: 'Eingegebene E-Mail-Adressen stimmen nicht überein',
    },
  },

  PASSWORD: {
    CONTENT: {
      HEADER: 'Erstelle dein Passwort',
      DESCRIPTION: 'Dieses brauchst du, um dich bei Lifepoints einzuloggen.',
    },
    LABELS: {
      PASSWORD: 'PASSWORT',
      CONFIRM_PASSWORD: 'PASSWORT BESTÄTIGEN',
    },
    ACTIONS: {
      NEXT: 'Weiter',
      BACK: 'Zurück',
    },
    INPUT_ERROR_MESSAGE: {
      PASSWORD_FORMAT:
        'Passwort sollte mindestens 8 Zeichen lang sein und Buchstaben, Zahlen und Sonderzeichen enthalten',
      PASSWORD_MANDATORY: 'Bitte Passwort eingeben',
      CONFIRM_PASSWORD_MATCH: 'Passwort stimmt nicht überein',
    },
    PASSWORD_VALIDATIONS_MESSAGES: {
      MIN_CHANRACTERS: 'Mindestens 8 Zeichen',
      MAX_CHANRACTERS: 'Maximal 15 Zeichen',
      SPECIAL_CHARS: 'Mindestens ein Sonderzeichen',
      CONTAINS_NUMBERS: 'Mindestens eine Ziffer',
    },
  },

  GENDER: {
    CONTENT: {
      HEADER: 'Welchem Geschlecht fühlst du dich zugehörig?',
      DESCRIPTION: 'Dies wird für andere Nutzer*innen nicht sichtbar sein.',
    },
    LABELS: {
      GENDER: 'Geschlecht auswählen',
    },
    ACTIONS: {
      NEXT: 'Weiter',
      BACK: 'Zurück',
    },
    INPUT_ERROR_MESSAGE: {
      GENDER_MANDATORY: 'Bitte Geschlecht auswählen',
    },
  },

  DOB: {
    CONTENT: {
      HEADER: 'Wann bist du geboren?',
      DESCRIPTION: 'Dies wird den anderen Nutzer*innen nicht angezeigt.',
    },
    LABELS: {
      DOB: 'GEBURTSDATUM',
    },
    ACTIONS: {
      NEXT: 'Weiter',
      BACK: 'Zurück',
    },
    INPUT_ERROR_MESSAGE: {
      DOB_MANDATORY: 'Geburtsdatum eingeben',
      MIN_AGE:
        'Du musst mindestens 18 Jahre alt sein, um dich bei Lifepoints zu registrieren.',
    },
  },

  ZIP_CODE: {
    CONTENT: {
      HEADER: 'Sag uns deine Postleitzahl',
      DESCRIPTION:
        'Um dir regionale Angebote zeigen zu können, benötigen wir deine Angabe.',
    },
    LABELS: {
      ZIP_CODE: 'POSTLEITZAHL',
    },
    ACTIONS: {
      NEXT: 'Weiter',
      BACK: 'Zurück',
    },
    INPUT_ERROR_MESSAGE: {
      ZIP_MANDATORY: 'Postleitzahl eingeben',
      INVALID_ZIP: 'Gebe deine gültige Postleitzahl ein',
    },
  },

  PROFILE_IMAGE: {
    CONTENT: {
      HEADER: 'Wähle dein Profilbild',
      DESCRIPTION:
        'Andere Nutzer*innen können dein Profilbild sehen. Du kannst zu jedem späteren Zeitpunkt ein anderes Profilbild wählen.',
    },
    LABELS: {},
    ACTIONS: {
      NEXT: 'Weiter',
      BACK: 'Zurück',
    },
    INPUT_ERROR_MESSAGE: {},
  },

  COMPLETED: {
    CONTENT: {
      HEADER: 'Willkommen bei Lifepoints',
      DESCRIPTION:
        'Wir freuen uns, dich in der Lifepoints-Community begrüßen zu dürfen :) Klicke jetzt auf "Los", schaue dir unser Erklärungsvideo zur Lifepoints App an und sammle dabei deine ersten Lifepoints.',
    },
    ACTIONS: {
      DASHBOARD: 'Los',
    },
  },
};

export default REGISTRATION_STATICS_DE;
