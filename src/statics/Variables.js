const FULL_LOGO = require('../assets/images/Full_Logo.png');
const LOGO_ONLY = require('../assets/images/LogoMain.png');
const LOGO_ORBIT = require('../assets/images/LogoOrbit.png');
const DEFAULT_GALERY_IMAGE = require('../assets/images/defaultGaleryImage.png');
const DOUBLE_LEFT_ARROWS = require('../assets/images/double_left_arrows.png');

const LEVEL_LOGOS = [
  null,
  require('../assets/images/LP_Level_1.png'),
  require('../assets/images/LP_Level_2.png'),
  require('../assets/images/LP_Level_3.png'),
  require('../assets/images/LP_Level_4.png'),
  require('../assets/images/LP_Level_5.png'),
];

const LEVEL_COLORS = [
  null,
  '#32C5FF',
  '#D93069',
  '#CB25CB',
  '#F85100',
  '#FFE630',
];

const MAX_LEVEL = 5;

const PHONE_REGEX = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const USERNAME_REGEXP = /^((?![@ ]).)*$/;

const TERMS_LINK = 'https://lifepoints.de/agb';
const COND_LINK = 'https://lifepoints.de/datenschutz';

const MIN_AGE_REQUIRED = 18;

export {
  FULL_LOGO,
  LOGO_ONLY,
  LOGO_ORBIT,
  LEVEL_LOGOS,
  PHONE_REGEX,
  USERNAME_REGEXP,
  LEVEL_COLORS,
  MAX_LEVEL,
  TERMS_LINK,
  COND_LINK,
  MIN_AGE_REQUIRED,
  DEFAULT_GALERY_IMAGE,
  DOUBLE_LEFT_ARROWS,
};
