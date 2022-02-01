import Config from 'react-native-config';
import {LOCALE} from '../../../statics/Enums';
import LEADERBOARD_STATICS_DE from './LeaderboardStatics_de';
import LEADERBOARD_STATICS_EN from './LeaderboardStatics_en';

const lang = Config.LOCALE || LOCALE.ENGLISH;

const LEADERBOARD_STATICS =
  lang === LOCALE.GERMAN ? LEADERBOARD_STATICS_DE : LEADERBOARD_STATICS_EN;

const LEADERBOARD_COMPONENTS = {
  ALL_LEVELS: {
    id: 'leaderboard__allLevels',
  },
  YEARLY_RANKINGS: {
    id: 'leaderboard_yearlyRankings',
  },
  PRIZE: {
    id: 'leaderboard_prize',
  },
};

const LEADERBOARD_PAGES = {
  PRIZE: {
    id: 'leaderboard_prize',
  },
  RANKINGS: {
    id: 'leaderboard_rankings',
  },
};

export {LEADERBOARD_STATICS, LEADERBOARD_COMPONENTS, LEADERBOARD_PAGES};
