const MIN_LENGTH = 8;
const MAX_LENGTH = 15;

const SPECIAL_CHARS_REGEXP = /[_~`!@#$%^&*()-,.?":{}|<>\/:;„‘=\\\|<>£€¥•]/;

const NUMBERS_REGEXP = /[1-9]/;

const PASSWORD_REGEXP = /^(?=.*[A-Za-zäöüßÄÖÜẞ])(?=.*\d)(?=.*[.,:@$!%^*#?&`_~()-\/:;„‘=\\\|<>£€¥•])[A-Za-zäöüßÄÖÜẞ\d@$!%^*#()-?&_`~\/:;„‘=\\\|<>£€¥•]{8,}$/;

const checkMinCharacters = password => password.length >= MIN_LENGTH;

const checkMaxCharacters = password => password.length <= MAX_LENGTH;

const checkSpecialCharacters = password => SPECIAL_CHARS_REGEXP.test(password);

const checkNumbers = password => NUMBERS_REGEXP.test(password);

const checkFullPassword = password => PASSWORD_REGEXP.test(password);

export default {
  checkMinCharacters,
  checkMaxCharacters,
  checkSpecialCharacters,
  checkNumbers,
  checkFullPassword,
};
