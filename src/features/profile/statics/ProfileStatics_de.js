const PROFILE_STATICS_DE = {
  HOME: {
    // profile details
    LABELS: {
      BACK: 'ZURÜCK',
      STATS_LEVELS: 'LEVEL',
      STATS_POINTS: 'POINTS',
      MEMBERCARD: 'MEMBERCARD',
      STATS_M_RANK: 'MONATS RANKING',
      STATS_Y_RANK: 'JAHRES RANKING',
      LOGOUT: 'AUSLOGGEN',
      DATE_OF_BIRTH: 'Geburtsdatum: ',
      About: 'Über mich',
      Posting: 'Beiträge',
      Saved: 'Gespeichert',
      Stempelkarte: 'Stempelkarte',
      ADD_A_SUPERPOWER: 'Was ist deine Superkraft?',
      Priority_Ticket: 'TICKETS',
    },
    //logout
    MESSAGES: {
      LOGGING_OUT: 'Ausloggen...',
    },
  },
  //edit
  EDIT_PROFILE_STATICS: {
    LABELS: {
      BACK: 'ZURÜCK',
      INPUT_FIRST_NAME: 'VORNAME',
      INPUT_LAST_NAME: 'NACHNAME',
      INPUT_USER_NAME: 'USERNAME',
      INPUT_EMAIL: 'E-MAIL-ADRESSE',
      INPUT_PHONE: 'TELEFONNUMMER',
      INPUT_ADDRESS_1: 'STRAßE UND HAUSNUMMER',
      Superpower: 'SuperPower',
      About_Me: 'Über mich',
      INPUT_ADDRESS_2: 'ORT/STADT',
      ZIP_CODE: 'POSTLEITZAHL',
    },
    //actions
    ACTIONS: {
      UPDATE_PASS: 'PASSWORT ÄNDERN',
      DELETE_ACC: 'KONTO LÖSCHEN',
      SUBMIT: 'SPEICHERN',
    },
    //account delete
    DELETE_ACCOUNT_ALERT: {
      HEADER: 'Konto löschen',
      DESCRIPTION:
        'Bist du dir sicher, dass du dein Konto löschen möchtest? Alle deine Kontodaten einschließlich deiner Lifepoints werden gelöscht.',
      ACTION_CANCEL: 'Abrechen',
      ACTION_DELETE: 'Konto löschen',
    },
    TOASTS: {
      PROFILE_UPDATED: 'Profil aktualisiert',
      PROFILE_IMAGE_UPDATED: 'Profilbild aktualisiert',
      // ACCOUNT_DELETED: 'Your account is deleted',
    },
    //error message
    INPUT_ERROR_MESSAGE: {
      INVALID_PHONE: 'Ungülitge Telefonnummer',
      INVALID_ZIP_CODE: 'Ungülitge Postleitzahl',
    },
  },
  //update password
  PROFILE_UPDATE_PASS_STATICS: {
    LABELS: {
      BACK: 'ZURÜCK',
      HEADER: 'Passwort aktualisieren',
      SUB_HEADER:
        'Gebe dein aktuelles Passwort ein und vergebe ein neues Passwort',
      INPUT_CURR_PASSWORD: 'AKTUELLES PASSWORT',
      INPUT_NEW_PASSWORD: 'NEUES PASSWORT',
      INPUT_CONFIRM_PASSWORD: 'PASSWORT BESTÄTIGEN',
    },
    ACTIONS: {
      SUBMIT: 'PASSWORT AKTUALISIEREN',
    },
    INPUT_ERROR_MESSAGE: {
      MANDATORY_OLD_PASS: 'Bitte gebe dein aktuelles Passwort ein',
      PASSWORD_FORMAT:
        'Das Passwort sollte mindestens 8 Zeichen lang sein und Buchstaben, Zahlen und Sonderzeichen enthalten',
      CONFIRM_PASSWORD_MATCH: 'Passwort stimmt nicht überein',
    },
    TOASTS: {
      PASS_UPDATED: 'Passwort aktualisiert',
    },
  },
};

export default PROFILE_STATICS_DE;
