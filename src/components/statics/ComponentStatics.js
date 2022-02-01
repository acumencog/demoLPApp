import Config from 'react-native-config';

import {LOCALE} from '../../statics/Enums';
import * as ComponentStaticsDE from './ComponentStatics_de';
import * as ComponentStaticsEN from './ComponentStatics_en';

const lang = Config.LOCALE || LOCALE.ENGLISH;

const COMPONENT_STATICS =
  lang === LOCALE.GERMAN ? ComponentStaticsDE : ComponentStaticsEN;

export {COMPONENT_STATICS};
