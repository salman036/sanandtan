import * as types from './types';
import Api from '../lib/requests/api';

function setIsCategoryLoading(categoryLoading) {
  return {
    type: types.CATEGORY_LOADING,
    categoryLoading,
  };
}

function allCategories(categoriesData) {
  return {
    type: types.CATEGORY_DATA,
    categoriesData,
  };
}

function allCategoriesDrawer(categoriesDataDrawer) {
  return {
    type: types.CATEGORY_DATA_DRAWER,
    categoriesDataDrawer,
  };
}

export function getAllCategories(name) {
  return (dispatch) => {
    dispatch(setIsCategoryLoading(true));
    Api.get(`category?categoryName=${name}`)
      .then((resp) => {
        dispatch(allCategories(resp.data));
        dispatch(setIsCategoryLoading(false));
      })
      .catch((err) => {
        // dispatch(setForgotValidationError(err.errors));
        dispatch(setIsCategoryLoading(false));
      });
  };
}

export function getAllCategoriesDrawer() {
  return (dispatch) => {
    dispatch(setIsCategoryLoading(true));
    Api.get(`category`)
      .then((resp) => {
        dispatch(allCategoriesDrawer(resp.data));
        dispatch(setIsCategoryLoading(false));
      })
      .catch((err) => {
        // dispatch(setForgotValidationError(err.errors));
        dispatch(setIsCategoryLoading(false));
      });
  };
}
