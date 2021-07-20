import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  loginLoading: false,
  userLoading: false,
  isImageUploading: false,
  addressUpdateLoading: false,
  socialLoginLoading: false,
};
export const auth = createReducer(INITIAL_STATE, {
  [types.USER_DATA](state, action) {
    return {
      ...state,
      userData: action.userData,
    };
  },

  [types.CHANGE_PASSWORD_DATA](state, action) {
    return {
      ...state,
      changePwdData: action.changePwdData,
    };
  },

  [types.IMAGE_UPLOAD_DATA](state, action) {
    return {
      ...state,
      imageUploadData: action.imageUploadData,
    };
  },

  [types.SHIPPING_ADDRESS](state, action) {
    return {
      ...state,
      shippingAddress: action.shippingAddress,
    };
  },

  [types.SPECIFIC_SHIP_ADDRESS](state, action) {
    return {
      ...state,
      specificShippingAddress: action.specificShippingAddress,
    };
  },

  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  },

  [types.IS_IMAGE_UPLOAD_LOADING](state, action) {
    return {
      ...state,
      isImageUploading: action.isImageUploading,
    };
  },

  [types.LOGIN_LOADING](state, action) {
    return {
      ...state,
      loginLoading: action.loginLoading,
    };
  },

  [types.USER_LOADING](state, action) {
    return {
      ...state,
      userLoading: action.userLoading,
    };
  },

  [types.SOCIAL_LOGIN_LOADING](state, action) {
    return {
      ...state,
      socialLoginLoading: action.socialLoginLoading,
    };
  },

  [types.LOGIN_TYPE](state, action) {
    return {
      ...state,
      loginType: action.loginType,
    };
  },

  [types.ADDRESS_UPDATE_LOADING](state, action) {
    return {
      ...state,
      addressUpdateLoading: action.addressUpdateLoading,
    };
  },

  [types.USER_INFO](state, action) {
    return {
      ...state,
      user: action.user,
    };
  },
});
