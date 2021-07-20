import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  cartLoading: false,
  activeCartLoading: false,
  quantityLoadingData: false,
  cartDelteLoading: false,
  specificOrderLoading: false,
};
export const cart = createReducer(INITIAL_STATE, {
  [types.ADD_CART_DATA](state, action) {
    return {
      ...state,
      addCartData: action.addCartData,
    };
  },

  [types.ACTIVE_ORDERS](state, action) {
    return {
      ...state,
      activeOrdesData: action.activeOrdesData,
    };
  },

  [types.COMPLETE_ORDERS](state, action) {
    return {
      ...state,
      completeOrderData: action.completeOrderData,
    };
  },

  [types.ALL_CART_DATA](state, action) {
    return {
      ...state,
      allCarts: action.allCarts,
    };
  },

  [types.SPECIFIC_ACTIVE_ORDER_DATA](state, action) {
    return {
      ...state,
      spectificActiveOrderData: action.spectificActiveOrderData,
    };
  },

  [types.CART_LOADING](state, action) {
    return {
      ...state,
      cartLoading: action.cartLoading,
    };
  },

  [types.DELETE_CART_LOADING](state, action) {
    return {
      ...state,
      cartDelteLoading: action.cartDelteLoading,
    };
  },

  [types.QUANTITY_LOADING](state, action) {
    return {
      ...state,
      quantityLoadingData: action.quantityLoadingData,
    };
  },

  [types.ACTIVE_ORDER_LOADING](state, action) {
    return {
      ...state,
      activeCartLoading: action.activeCartLoading,
    };
  },

  [types.SPECIFIC_ORDER_LOADING](state, action) {
    return {
      ...state,
      specificOrderLoading: action.specificOrderLoading,
    };
  },
});
