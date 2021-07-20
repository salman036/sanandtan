import * as types from './types';
import Api from '../lib/requests/api';
import Storage from '../lib/requests/storage';
import Toast from 'react-native-toast-message';

function setIsLoading(isLoading) {
  return {
    type: types.IS_LOADING,
    isLoading,
  };
}

function setLoginLoading(loginLoading) {
  return {
    type: types.LOGIN_LOADING,
    loginLoading,
  };
}

function setSocialLoginLoading(socialLoginLoading) {
  return {
    type: types.SOCIAL_LOGIN_LOADING,
    socialLoginLoading,
  };
}

function setaddressUpdateLoading(addressUpdateLoading) {
  return {
    type: types.ADDRESS_UPDATE_LOADING,
    addressUpdateLoading,
  };
}

function setUserLoading(userLoading) {
  return {
    type: types.USER_LOADING,
    userLoading,
  };
}

function userFun(userData) {
  return {
    type: types.USER_DATA,
    userData,
  };
}

function shippAddresFun(shippingAddress) {
  return {
    type: types.SHIPPING_ADDRESS,
    shippingAddress,
  };
}

function specificShippAddresFun(specificShippingAddress) {
  return {
    type: types.SPECIFIC_SHIP_ADDRESS,
    specificShippingAddress,
  };
}

function changePasswordFun(changePwdData) {
  return {
    type: types.CHANGE_PASSWORD_DATA,
    changePwdData,
  };
}

function imageUploadFun(imageUploadData) {
  return {
    type: types.IMAGE_UPLOAD_DATA,
    imageUploadData,
  };
}

function setImageUploadLoading(isImageUploading) {
  return {
    type: types.IS_IMAGE_UPLOAD_LOADING,
    isImageUploading,
  };
}

function setLoginType(loginType) {
  return {
    type: types.LOGIN_TYPE,
    loginType,
  };
}
export function login(params, navigate, setData) {
  return (dispatch) => {
    dispatch(setLoginLoading(true));

    Api.post('user/login', params)
      .then((resp) => {
        // Storage.storeData("currentUser", resp.user)
        Storage.storeData('access_token', resp.token);
        // Storage.storeData('userDetails', resp.data);
        dispatch(setLoginType('login'));

        dispatch(setLoginLoading(false));

        setData();
        dispatch(getUser());

        navigate('Tabs');
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Login Successfully',
          visibilityTime: 1000,
        });
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err.message,
          visibilityTime: 1000,
        });
        setData();
        // dispatch(setForgotValidationError(err.errors));
        dispatch(setLoginLoading(false));
      });
  };
}

export function facebookLogin(access_token, navigate) {
  return (dispatch) => {
    dispatch(setLoginLoading(true));

    Api.get(`user/facebook/token?access_token=${access_token}`)
      .then((resp) => {
        Storage.storeData('access_token', resp.token);
        dispatch(setLoginLoading(false));
        dispatch(getUser());
        dispatch(setLoginType('social'));

        navigate('Tabs');
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Login Successfully',
          visibilityTime: 1000,
        });
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err.message,
          visibilityTime: 1000,
        });
        dispatch(setLoginLoading(false));
      });
  };
}

export function googleLogin(body, navigate) {
  return (dispatch) => {
    dispatch(setSocialLoginLoading(true));

    Api.post(`user/google/logIn`, body)
      .then((resp) => {
        Storage.storeData('access_token', resp.token);
        dispatch(setSocialLoginLoading(false));
        dispatch(getUser());
        dispatch(setLoginType('social'));
        navigate('Tabs');
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Login Successfully',
          visibilityTime: 1000,
        });
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err.message,
          visibilityTime: 1000,
        });
        dispatch(setSocialLoginLoading(false));
      });
  };
}

export function signUp(params, setData) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    Api.post('user/signup', params)
      .then((resp) => {
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Account Created Sign In To Continue',
          visibilityTime: 2000,
        });
        setData();

        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(setIsLoading(false));

        err?.status
          ? Toast.show({
              type: 'error',
              position: 'bottom',
              text1: err.status,

              visibilityTime: 2000,
            })
          : Toast.show({
              type: 'error',
              position: 'bottom',
              text1: err.err.message.message
                ? err.err.message.message
                : err.err.message,
              visibilityTime: 2000,
            });

        // Toast.show({
        //   type: 'error',
        //   position: 'bottom',
        //   text1: err.err.message.message
        //     ? err.err.message.message
        //     : err.err.message,
        //   visibilityTime: 2000,
        // });

        // dispatch(setForgotValidationError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function resetPassword(params, navigate, setData) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    Api.put('user/reset-password', params)
      .then((resp) => {
        dispatch(setIsLoading(false));
        navigate('AuthTabs');
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Password changed successfully',
          visibilityTime: 1000,
        });
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err?.message,
          visibilityTime: 2000,
        });
        dispatch(setIsLoading(false));
      });
  };
}

export function verifyCode(params, navigate, value) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    Api.post(`users/pinCompare`, params)
      .then((resp) => {
        dispatch(setIsLoading(false));
        navigate('SetNewPassword', value);
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: resp.message,
          visibilityTime: 1000,
        });
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err.message,
        });

        dispatch(setIsLoading(false));
      });
  };
}

// export function resetPassword(params, navigate, pinId, setData) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.post(`users/resetPassword/${pinId}`, params)
//       .then((resp) => {
//         setData();
//         dispatch(setIsLoading(false));
//         navigate('SetNewPasswordSuccess');
//         Toast.show({
//           type: 'success',
//           position: 'bottom',
//           text1: resp.message,
//           visibilityTime: 1000,
//         });
//       })
//       .catch((err) => {
//         Toast.show({
//           type: 'error',
//           position: 'bottom',
//           text1: err.message,
//         });

//         dispatch(setIsLoading(false));
//       });
//   };
// }

export function getUser() {
  return (dispatch) => {
    dispatch(setUserLoading(true));
    Api.get(`user/my_profile`)
      .then((resp) => {
        dispatch(userFun(resp));

        dispatch(setUserLoading(false));
      })
      .catch((err) => {
        dispatch(setUserLoading(false));
      });
  };
}

export function getUserAgain() {
  return (dispatch) => {
    Api.get(`user/my_profile`)
      .then((resp) => {
        dispatch(userFun(resp));
      })
      .catch((err) => {});
  };
}

export function changePassword(params, navigate) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    Api.post(`user/change_password/`, params)
      .then((resp) => {
        dispatch(changePasswordFun(resp));
        dispatch(setIsLoading(false));
        navigate('Account');

        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: resp?.Message,
          visibilityTime: 1000,
        });
      })
      .catch((err) => {
        err?.err?.name === 'IncorrectPasswordError'
          ? Toast.show({
              type: 'error',
              position: 'bottom',
              text1: 'Old password is not correct',
            })
          : Toast.show({
              type: 'error',
              position: 'bottom',
              text1: err?.message,
            });

        // Toast.show({
        //   type: 'error',
        //   position: 'bottom',
        //   text1: err?.message,
        // });
        dispatch(setIsLoading(false));
      });
  };
}

export function updateProfile(params, refRbSheet) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    Api.put(`user/my_profile`, params)
      .then((resp) => {
        dispatch(setIsLoading(false));
        dispatch(getUserAgain());
        refRbSheet.current.close();
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'User information updated successfully',
          visibilityTime: 1000,
        });
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err?.message,
        });
        dispatch(setIsLoading(false));
      });
  };
}

export function uploadImage(image, refRbSheet) {
  return (dispatch) => {
    dispatch(setImageUploadLoading(true));
    Api.postMultiForm(`uploadFile`, image)
      .then((resp) => {
        dispatch(imageUploadFun(resp?.data[0]));
        dispatch(updateProfile({image: resp?.data[0]}, refRbSheet));
        dispatch(setImageUploadLoading(false));
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err.message,
        });
        dispatch(setImageUploadLoading(false));
      });
  };
}

export function uploadManniquinImage(image) {
  return (dispatch) => {
    dispatch(setImageUploadLoading(true));
    Api.postMultiForm(`uploadFile`, image)
      .then((resp) => {
        dispatch(imageUploadFun(resp?.data[0]));
        dispatch(setImageUploadLoading(false));
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err.message,
        });
        dispatch(setImageUploadLoading(false));
      });
  };
}

export function getShippingAddress() {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    Api.get(`shipping_address`)
      .then((resp) => {
        dispatch(shippAddresFun(resp));

        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(setIsLoading(false));
      });
  };
}

export function getShippingAddressAgain() {
  return (dispatch) => {
    Api.get(`shipping_address`)
      .then((resp) => {
        dispatch(shippAddresFun(resp));
      })
      .catch((err) => {});
  };
}

export function getSpecificAddress(address_id, setData) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    Api.get(`shipping_address/${address_id}`)
      .then((resp) => {
        dispatch(specificShippAddresFun(resp));

        setData(resp.shippingAddress);

        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(setIsLoading(false));
      });
  };
}

export function getSpecificAddressAgain(address_id) {
  return (dispatch) => {
    Api.get(`shipping_address/${address_id}`)
      .then((resp) => {
        dispatch(specificShippAddresFun(resp));
      })
      .catch((err) => {});
  };
}

export function updateSpecificAddress(body, address_id, setData, goBack) {
  return (dispatch) => {
    dispatch(setaddressUpdateLoading(true));
    Api.patch(`shipping_address/${address_id}`, body)
      .then((resp) => {
        dispatch(getSpecificAddressAgain(address_id));
        dispatch(setaddressUpdateLoading(false));
        setData();
        goBack();
        Toast.show({
          text1: 'Address information updates successfully',
          type: 'success',
          visibilityTime: 2000,
          position: 'bottom',
        });
      })
      .catch((err) => {
        Toast.show({
          text1: err,
          type: 'error',
          visibilityTime: 2000,
          position: 'bottom',
        });
        dispatch(setaddressUpdateLoading(false));
      });
  };
}

export function createShippingAddress(body, navigate) {
  return (dispatch) => {
    dispatch(setaddressUpdateLoading(true));
    Api.post(`shipping_address/add_new_shipping_address`, body)
      .then((resp) => {
        navigate('ShippingAddress');
        dispatch(getShippingAddressAgain());
        dispatch(setaddressUpdateLoading(false));
        Toast.show({
          text1: 'Address created successfully',
          type: 'success',
          visibilityTime: 2000,
          position: 'bottom',
        });
      })
      .catch((err) => {
        dispatch(setaddressUpdateLoading(false));
      });
  };
}
