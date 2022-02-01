// REQUEST_BODY: {userName: 'john.doe', password: 'userPassword'},
// POST
const ON_LOGIN = {
  responseStatus: 'SUCCESS', // FAILED
  responseMessage: '', // Username or password invalid
  errorMessage: '',
  messageBody: {
    userResponse: [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        addressLine1: '9th St James Street',
        addressLine2: 'Chicago NY 10001',
        emailVerified: 1,
        dateOfBirth: '1990-08-31T16:16:18.521Z',
        zipCode: '12345',
        gender: 'MALE',
        phoneNo: '+1-123-213-2342',
        profilePic: 'https://i.ibb.co/hKNKv9y/DP-3.jpg',
        userID: '97a8b073-c78e-41e6-a6d6-bd92dab5162a',
        userName: 'john1.doe',

        countryCode: 'NY',
        createdDate: '2020-06-09T17:23:20.261Z',
        invitationRequired: 0,
        updatedDate: '2020-06-09T17:23:20.261Z',
        accessToken: 'ACCESS_TOKEN',
        refreshToken: 'REFRESH_TOKEN',
      },
    ],
  },
};

// REQUEST_BODY: {
//   email: 'email@id.com',
//   userName: 'john.doe',
//   password: 'userPassword',
//   gender: 'MALE', // FEMALE, OTHERS
//   profilePic: "base64String",  // only string
// },
// POST
const ON_REGISTER = {
  responseStatus: 'SUCCESS', // FAILED(Username already exist, email already regitered)
  responseMessage: '', // 'Username already exist', email already regitered
  errorMessage: '',
  messageBody: {
    userResponse: [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        addressLine1: '9th St James Street',
        addressLine2: 'Chicago NY 10001',
        emailVerified: 0,
        dateOfBirth: '1990-08-31T16:16:18.521Z',
        zipCode: '12345',
        gender: 'MALE',
        phoneNo: '+1-123-213-2342',
        profilePic: 'https://i.ibb.co/hKNKv9y/DP-3.jpg',
        userID: '97a8b073-c78e-41e6-a6d6-bd92dab5162a',
        userName: 'john.doe',

        countryCode: 'NY',
        createdDate: '2020-06-09T17:23:20.261Z',
        invitationRequired: 0,
        updatedDate: '2020-06-09T17:23:20.261Z',
        accessToken: 'ACCESS_TOKEN',
        refreshToken: 'REFRESH_TOKEN',
      },
    ],
  },
};

// REQUEST_BODY: {
//   email: 'john.doe@gmail.com',
// },
// GET/POST
const GEN_OTP = {
  responseStatus: 'SUCCESS', // FAILED
  responseMessage: 'any message', // email not found
  errorMessage: '',
  messageBody: {},
};

// REQUEST_BODY: {
//   email: 'john.doe@gmail.com',
//   otp: '1234',
// },
// POST
const VERIFY_OTP = {
  responseStatus: 'SUCCESS', // FAILED
  responseMessage: '', // OTP is invalid, Please try again
  errorMessage: '',
  messageBody: {
    // userId: 'userUUID', // optional (discuss requirement)
    // accessToken: 'ACCESS_TOKEN',
    // refreshToken: 'REFRESH_TOKEN',
  },
};

// REQUEST_BODY: {
//   email: 'john.doe@gmail.com',
//   password: 'newPassword',
//   opt: "123",
// },
// POST
const UPDATE_PASS = {
  responseStatus: 'SUCCESS',
  responseMessage: '',
  errorMessage: '',
  messageBody: {},
};

// REFRESH TOKEN
// REQUEST_BODY: {
//   refreshToken: 'tokenValue',
// },
// POST
const REFRESH_TOKEN = {
  responseStatus: 'SUCCESS', // FAILED
  responseMessage: '',
  errorMessage: '',
  messageBody: {
    access_token: 'NEW_TOKEN_VALUE',
    refresh_token: 'NEW_REFRESH_TOKEN',
    //
  },
};

const VALIDATE_SESSION = {
  responseStatus: 'SUCCESS',
  responseMessage: '',
  errorMessage: '',
  messageBody: {},
};

const CHECK_USER_EXIST = {
  responseStatus: 'SUCCESS',
  responseMessage: '',
  errorMessage: '',
  messageBody: {},
};

export {
  ON_LOGIN,
  ON_REGISTER,
  GEN_OTP,
  VERIFY_OTP,
  UPDATE_PASS,
  REFRESH_TOKEN,
  VALIDATE_SESSION,
  CHECK_USER_EXIST,
};
