const GENDER_OPTIONS = {
  MALE: {
    id: 'MALE',
    displayName: 'MÄNNLICH',
    iconName: 'male',
  },
  FEMALE: {
    id: 'FEMALE',
    displayName: 'WEIBLICH',
    iconName: 'female',
  },
  OTHERS: {
    id: 'OTHERS',
    displayName: 'GENDERUNABHÄNGIG',
    iconName: 'genderless',
  },
};

const IMAGE_PICKER_STATICS = {
  SELECTION_MODAL: {
    HEADER: 'Quelle auswählen',
    DESCRIPTION: 'Wähle eine Quelle für dein Profilbild aus',
    CAMERA: 'Foto aufnehmen',
    GALLERY: 'Aus Bibliothek auswählen',
    CANCEL: 'Abbrechen',
  },
};

const DATE_PICKER_STATICS = {
  BUTTONS: {
    SELECT: 'Auswählen',
  },
};
export {GENDER_OPTIONS, IMAGE_PICKER_STATICS, DATE_PICKER_STATICS};
