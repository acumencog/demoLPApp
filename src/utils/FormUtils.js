const VALIDATIONS = {
  MANDATORY: 'MANDATORY',
};

const validateMandatory = value => {
  return !!value;
};

const validateField = (inputObject, validations) => {
  let isValid = true;
  let errMsg = [];
  validations.forEach(validationItem => {
    switch (validationItem.type) {
      case VALIDATIONS.MANDATORY:
        const validCheck = validateMandatory(inputObject.value);
        if (!validCheck) {
          isValid = false;
          errMsg.push(validationItem.errMsg);
        }
        break;

      default:
      // nothing
    }
  });
  return {
    ...inputObject,
    isValid,
    errMsg,
  };
};

const getInitialValueObject = (initialValue, validations) => {
  let initialObject = {
    value: initialValue,
    isUsed: false,
    isValid: true,
    errMsg: [],
  };
  initialObject = validateField(initialObject, validations);
  return initialObject;
};

const isInputValid = inputObject => {
  return inputObject.isValid;
};

const markInputUsed = inputObject => {
  return {
    ...inputObject,
    isUsed: true,
  };
};

const getFormValuesForApi = formObject => formObject.value;

export {
  VALIDATIONS,
  validateField,
  getInitialValueObject,
  isInputValid,
  markInputUsed,
  getFormValuesForApi,
};
