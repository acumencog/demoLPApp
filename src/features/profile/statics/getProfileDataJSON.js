const getProfileDataJSON = {
  UPDATE_PROFILE: {
    responseStatus: 'SUCCESS', // FAILED
    responseMessage: '', // Username or password invalid
    errorMessage: '',
    messageBody: {
      users: [{}],
    },
  },

  UPDATE_PASS: {
    responseStatus: 'SUCCESS', // FAILED
    responseMessage: '', // old password mismatch
    errorMessage: '',
    messageBody: {},
  },

  USER_POINTS: {
    responseStatus: 'SUCCESS', // FAILED
    responseMessage: '', // Username or password invalid
    errorMessage: '',
    messageBody: {
      ranking: [
        {
          monthlyRanking: 20,
          points: 1000,
          yearlyRanking: 50,
          yearlyPoints: 120,

          userID: '97a8b073-c78e-41e6-a6d6-bd92dab5162a',
          pointsID: 0,
        },
      ],
    },
  },

  DELETE_ACCOUNT: {
    responseStatus: 'SUCCESS',
    responseMessage: '',
    errorMessage: '',
    messageBody: {},
  },

  LOGOUT: {
    responseStatus: 'SUCCESS',
    responseMessage: '',
    errorMessage: '',
    messageBody: {},
  },
};

export default getProfileDataJSON;
