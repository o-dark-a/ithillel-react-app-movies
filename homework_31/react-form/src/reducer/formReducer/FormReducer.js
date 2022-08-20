export const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    avatarImg: {
      src: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
      name: 'default-avatar'
    },
    email: ''
  },
  securityInfo: {
    password: '',
    confirmPassword: ''
  },
  registrationStep: 1
}

const STEP_CHANGE = 'STEP_CHANGE';
const UPDATE_PERSONAL_INFO = 'UPDATE_PERSONAL_INFO';
const UPDATE_SECURITY_INFO = 'UPDATE_SECURITY_INFO';
const UPDATE_AVATAR = 'UPDATE_AVATAR';

export const changeStep = (stepNumber) => ({
  type: STEP_CHANGE,
  payload: { stepNumber }
})

export const updatePersonalInfo = (personalInfo) => ({
  type: UPDATE_PERSONAL_INFO,
  payload: { personalInfo }
})

export const updateSecurityInfo = (securityInfo) => ({
  type: UPDATE_SECURITY_INFO,
  payload: { securityInfo }
})

export const updateAvatar = (newAvatar) => ({
    type: UPDATE_AVATAR,
    payload: { newAvatar }
})

export const FormReducer = (state=initialState, action) => {
  switch(action.type) {
    case UPDATE_AVATAR:
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          avatarImg: {
            src: action.payload.newAvatar.src,
            name: action.payload.newAvatar.name
          },
        }
      };
    case UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          firstName: action.payload.personalInfo.firstName,
          lastName: action.payload.personalInfo.lastName,
          email: action.payload.personalInfo.email
        }
      };
    case UPDATE_SECURITY_INFO:
      return {
        ...state,
        securityInfo: {
          ...state.securityInfo,
          password: action.payload.securityInfo.password,
          confirmPassword: action.payload.securityInfo.confirmPassword
        }
      };
    case STEP_CHANGE:
      if (action.payload.stepNumber < 1) {
        return state;
      }
      return {
        ...state,
        registrationStep: action.payload.stepNumber
      };
    default:
      return state;
  }
}
