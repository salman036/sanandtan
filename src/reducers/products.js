import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  productLoading: false,
  specificProductLoading: false,
  commentLoading: false,
  recommendedLoading: false,
};
export const products = createReducer(INITIAL_STATE, {
  [types.PRODUCTS_DATA](state, action) {
    return {
      ...state,
      producctData: action.producctData,
    };
  },

  [types.RECOMMENDED_DATA](state, action) {
    return {
      ...state,
      recommendedData: action.recommendedData,
    };
  },

  [types.RECENT_DATA](state, action) {
    return {
      ...state,
      recentData: action.recentData,
    };
  },

  [types.SPECIFIC_PRODUCTS_DATA](state, action) {
    return {
      ...state,
      specificProductData: action.specificProductData,
    };
  },

  [types.ALL_PRODUCTS_DATA](state, action) {
    return {
      ...state,
      allProductsWithOutCategory: action.allProductsWithOutCategory,
    };
  },

  [types.PRODUCT_LOADING](state, action) {
    return {
      ...state,
      productLoading: action.productLoading,
    };
  },

  [types.SPECIFIC_PRODUCTS_LOADING](state, action) {
    return {
      ...state,
      specificProductLoading: action.specificProductLoading,
    };
  },

  [types.COMMENT_LOADING](state, action) {
    return {
      ...state,
      commentLoading: action.commentLoading,
    };
  },

  [types.RECOMMENDED_LOADING](state, action) {
    return {
      ...state,
      recommendedLoading: action.recommendedLoading,
    };
  },
});
