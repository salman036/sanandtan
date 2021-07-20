import * as types from './types';
import Api from '../lib/requests/api';
import Toast from 'react-native-toast-message';

function setIsCartLoading(cartLoading) {
  return {
    type: types.CART_LOADING,
    cartLoading,
  };
}

function setActiveOrderCartLoading(activeCartLoading) {
  return {
    type: types.ACTIVE_ORDER_LOADING,
    activeCartLoading,
  };
}

function setDeleteCartLoading(cartDelteLoading) {
  return {
    type: types.DELETE_CART_LOADING,
    cartDelteLoading,
  };
}

function setQuaitityLoading(quantityLoadingData) {
  return {
    type: types.QUANTITY_LOADING,
    quantityLoadingData,
  };
}

function addCartFun(addCartData) {
  return {
    type: types.ADD_CART_DATA,
    addCartData,
  };
}

function allCartDataFunc(allCarts) {
  return {
    type: types.ALL_CART_DATA,
    allCarts,
  };
}

function activeOrderFun(activeOrdesData) {
  return {
    type: types.ACTIVE_ORDERS,
    activeOrdesData,
  };
}

function completeOrderFun(completeOrderData) {
  return {
    type: types.COMPLETE_ORDERS,
    completeOrderData,
  };
}

function setSpecificActiveOrderLoading(specificOrderLoading) {
  return {
    type: types.SPECIFIC_ORDER_LOADING,
    specificOrderLoading,
  };
}

function getSpecificActiveOrderFunc(spectificActiveOrderData) {
  return {
    type: types.SPECIFIC_ACTIVE_ORDER_DATA,
    spectificActiveOrderData,
  };
}

export function addPrdocutToCart(product_id, qty, navigate) {
  return (dispatch) => {
    dispatch(setIsCartLoading(true));
    Api.post(`cart`, {idd: product_id, productQuantity: parseInt(qty)})
      .then((resp) => {
        dispatch(addCartFun(resp));
        dispatch(setIsCartLoading(false));
        dispatch(allCartItems());
        navigate('Cart');
        Toast.show({
          text1: resp?.message,
          position: 'bottom',
          visibilityTime: 2000,
          type: 'success',
        });
      })
      .catch((err) => {
        Toast.show({
          text1: err?.message,
          position: 'bottom',
          visibilityTime: 2000,
          type: 'error',
        });
        dispatch(setIsCartLoading(false));
      });
  };
}

export function addPrdocutQuantityIncrese(product_id, qty) {
  return (dispatch) => {
    dispatch(setQuaitityLoading(true));
    Api.post(`cart`, {idd: product_id, productQuantity: qty})
      .then((resp) => {
        dispatch(addCartFun(resp));
        dispatch(setQuaitityLoading(false));

        dispatch(allCartItemsAgain());
      })
      .catch((err) => {
        // Toast.show({
        //   text1: err?.message,
        //   position: 'bottom',
        //   visibilityTime: 2000,
        //   type: 'error',
        // });
        dispatch(setQuaitityLoading(false));
      });
  };
}

export function addPrdocutQuantityDecrease(product_id, qty) {
  return (dispatch) => {
    dispatch(setQuaitityLoading(true));
    Api.post(`cart`, {idd: product_id, productQuantity: qty, flag: 'false'})
      .then((resp) => {
        dispatch(addCartFun(resp));
        dispatch(setQuaitityLoading(false));

        dispatch(allCartItemsAgain());
      })
      .catch((err) => {
        // Toast.show({
        //   text1: err?.message,
        //   position: 'bottom',
        //   visibilityTime: 2000,
        //   type: 'error',
        // });
        dispatch(setQuaitityLoading(false));
      });
  };
}

export function allCartItems() {
  return (dispatch) => {
    dispatch(setIsCartLoading(true));
    Api.get(`cart`)
      .then((resp) => {
        dispatch(allCartDataFunc(resp));
        dispatch(setIsCartLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setIsCartLoading(false));
      });
  };
}

export function allCartItemsAgain() {
  return (dispatch) => {
    Api.get(`cart`)
      .then((resp) => {
        dispatch(allCartDataFunc(resp));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteCartItem(product_id) {
  return (dispatch) => {
    dispatch(setDeleteCartLoading(true));
    Api.delete(`cart/${product_id}`)
      .then((resp) => {
        // dispatch(allCartDataFunc(resp));
        dispatch(setDeleteCartLoading(false));
        dispatch(allCartItemsAgain());
        Toast.show({
          text1: resp?.message,
          type: 'success',
          visibilityTime: 1000,
          position: 'bottom',
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(setDeleteCartLoading(false));
      });
  };
}

export function getActiveOrders(user_id) {
  return (dispatch) => {
    dispatch(setIsCartLoading(true));
    Api.get(`active_orders/user_active_orders/${user_id}`)
      .then((resp) => {
        dispatch(activeOrderFun(resp));
        dispatch(setIsCartLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setIsCartLoading(false));
      });
  };
}

export function getCompleteOrders() {
  return (dispatch) => {
    dispatch(setIsCartLoading(true));
    Api.get(`complete_order`)
      .then((resp) => {
        dispatch(completeOrderFun(resp));
        dispatch(setIsCartLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setIsCartLoading(false));
      });
  };
}

export function addCartsToActiveOrders(
  body,
  cart_id,
  navigate,
  setModalVisible,
  setSelectCart,
  setTotalPrice,
) {
  return (dispatch) => {
    dispatch(setActiveOrderCartLoading(true));
    Api.post(`active_orders/${cart_id}`, body)
      .then((resp) => {
        dispatch(setActiveOrderCartLoading(false));
        setModalVisible(false);
        navigate('ActiveOrder');
        setSelectCart([]);
        setTotalPrice([]);
        dispatch(allCartItemsAgain());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setActiveOrderCartLoading(false));
        setModalVisible(false);
        setSelectCart([]);
        setTotalPrice([]);
      });
  };
}

export function updateProductQuantity(
  productId,
  qty,
  setTotalPrice,
  sum,
  totalPrice,
) {
  return (dispatch) => {
    dispatch(setQuaitityLoading(true));
    Api.put(`cart/updateCartItem/${productId}`, {new_quantity: qty})
      .then((resp) => {
        const onlyRequirePeoduct = resp?.specificCartItem[0]?.products.filter(
          (singleProduct) => {
            if (singleProduct.product === productId) {
              return singleProduct;
            }
          },
        )[0];

        dispatch(allCartItemsAgain());
        dispatch(setQuaitityLoading(false));
        // dispatch(getSpecificProductsAgain(productId));
        // sum = totalPrice + resp?.productRealPrice;
        // setTotalPrice(sum);
      })
      .catch((err) => {
        Toast.show({
          text1: err?.message,
          type: 'error',
          visibilityTime: 2000,
          position: 'bottom',
        });
        dispatch(setQuaitityLoading(false));
      });
  };
}

export function updateLessCartItem(
  productId,
  qty,
  setTotalPrice,
  sum,
  totalPrice,
) {
  return (dispatch) => {
    dispatch(setQuaitityLoading(true));
    Api.put(`cart/lessCartItem/${productId}`, {new_quantity: qty})
      .then((resp) => {
        dispatch(allCartItemsAgain());
        dispatch(setQuaitityLoading(false));
        // sum = totalPrice - resp?.productRealPrice;
        // setTotalPrice(sum);
      })
      .catch((err) => {
        Toast.show({
          text1: err?.message,
          type: 'error',
          visibilityTime: 2000,
          position: 'bottom',
        });
        dispatch(setQuaitityLoading(false));
      });
  };
}

export function getSpecificActiveOrder(order_id) {
  return (dispatch) => {
    dispatch(setSpecificActiveOrderLoading(true));
    Api.get(`active_orders/specific_active_order/${order_id}`)
      .then((resp) => {
        console.log('resp', resp);
        dispatch(getSpecificActiveOrderFunc(resp));
        dispatch(setSpecificActiveOrderLoading(false));
      })
      .catch((err) => {
        dispatch(setSpecificActiveOrderLoading(false));
        // dispatch(setForgotValidationError(err.errors));
      });
  };
}

export function addMarquineToCart(
  items,
  stripToken,
  totalPrice,
  screenShot,
  setHatData,
  setBikniData,
  setScarfData,
  setFlipFlopData,
  setNecklesData,
  setHandBraclateData,
  setAnkletsData,
  setWaistBraceletsData,
  setSunBlockData,
  setWaistOfBundleData,
  setTanningCreamData,
  navigate,
) {
  return (dispatch) => {
    dispatch(setSpecificActiveOrderLoading(true));
    Api.post(`active_orders/directCheckout`, {
      source: stripToken,
      screenShot: screenShot,
      totalPrice: totalPrice,
      items: items,
    })
      .then((resp) => {
        navigate('ActiveOrder');
        dispatch(setHatData());
        dispatch(setBikniData());
        dispatch(setScarfData());
        dispatch(setFlipFlopData());
        dispatch(setNecklesData());
        dispatch(setHandBraclateData());
        dispatch(setAnkletsData());
        dispatch(setWaistBraceletsData());
        dispatch(setSunBlockData());
        dispatch(setWaistOfBundleData());
        dispatch(setTanningCreamData());
        dispatch(setSpecificActiveOrderLoading(false));
      })
      .catch((err) => {
        dispatch(setSpecificActiveOrderLoading(false));
        // dispatch(setForgotValidationError(err.errors));
      });
  };
}
