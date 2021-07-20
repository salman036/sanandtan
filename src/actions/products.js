import * as types from './types';
import Api from '../lib/requests/api';

function setIsProductLoading(productLoading) {
  return {
    type: types.PRODUCT_LOADING,
    productLoading,
  };
}

function setIsSpecificProductLoading(specificProductLoading) {
  return {
    type: types.SPECIFIC_PRODUCTS_LOADING,
    specificProductLoading,
  };
}

function setIsCommentLoadin(commentLoading) {
  return {
    type: types.COMMENT_LOADING,
    commentLoading,
  };
}

function allProducts(producctData) {
  return {
    type: types.PRODUCTS_DATA,
    producctData,
  };
}

function allProductsWithoutCategoryData(allProductsWithOutCategory) {
  return {
    type: types.ALL_PRODUCTS_DATA,
    allProductsWithOutCategory,
  };
}

function specificProductFun(specificProductData) {
  return {
    type: types.SPECIFIC_PRODUCTS_DATA,
    specificProductData,
  };
}

function addCommentFunc(commentData) {
  return {
    type: types.COMMENT_DATA,
    commentData,
  };
}

function updateCommentFunc(updateCommentData) {
  return {
    type: types.COMMENT_UPDATE_DATA,
    updateCommentData,
  };
}

function setRecommendedLoading(recommendedLoading) {
  return {
    type: types.RECOMMENDED_LOADING,
    recommendedLoading,
  };
}

function recommendedDataFunc(recommendedData) {
  return {
    type: types.RECOMMENDED_DATA,
    recommendedData,
  };
}

function fethRecentData(recentData) {
  return {
    type: types.RECENT_DATA,
    recentData,
  };
}
export function getAllProducts(category_id) {
  return (dispatch) => {
    dispatch(setIsProductLoading(true));
    Api.get(`product/category/${category_id}`)
      .then((resp) => {
        dispatch(allProducts(resp));
        dispatch(setIsProductLoading(false));
      })
      .catch((err) => {
        dispatch(setIsProductLoading(false));
      });
  };
}

export function addRecentProducts(product_id) {
  return (dispatch) => {
    Api.post(`recentVeiw`, {products: [product_id]})
      .then((resp) => {})
      .catch((err) => {});
  };
}

export function getAllRecentProducts(user_id) {
  return (dispatch) => {
    Api.get(`recentVeiw/${user_id}`)
      .then((resp) => {
        dispatch(fethRecentData(resp?.data));
      })
      .catch((err) => {});
  };
}

export function getAllRecommndedProducts() {
  return (dispatch) => {
    dispatch(setRecommendedLoading(true));
    Api.get(`product/recomanded_products`)
      .then((resp) => {
        dispatch(recommendedDataFunc(resp));
        dispatch(setRecommendedLoading(false));
      })
      .catch((err) => {
        dispatch(setRecommendedLoading(false));
      });
  };
}

export function searchByName(category_id, value) {
  return (dispatch) => {
    dispatch(setIsProductLoading(true));
    Api.get(`product/category/${category_id}?title=${value}`)
      .then((resp) => {
        dispatch(allProducts(resp));
        dispatch(setIsProductLoading(false));
      })
      .catch((err) => {
        dispatch(setIsProductLoading(false));
      });
  };
}

export function getSpecificProducts(product_id) {
  return (dispatch) => {
    dispatch(setIsSpecificProductLoading(true));
    Api.get(`product/${product_id}`)
      .then((resp) => {
        dispatch(specificProductFun(resp));
        dispatch(setIsSpecificProductLoading(false));
      })
      .catch((err) => {
        dispatch(setIsSpecificProductLoading(false));
      });
  };
}

export function getSpecificProductsAgain(product_id) {
  return (dispatch) => {
    Api.get(`product/${product_id}`)
      .then((resp) => {
        dispatch(specificProductFun(resp));
      })
      .catch((err) => {});
  };
}

export function addComment(
  body,
  product_id,
  refRbSheet,
  flatListRef,
  setStarCount,
) {
  return (dispatch) => {
    dispatch(setIsCommentLoadin(true));
    Api.post(`product/${product_id}/comments`, body)
      .then((resp) => {
        dispatch(getSpecificProductsAgain(product_id));
        dispatch(addCommentFunc(resp));
        dispatch(setIsCommentLoadin(false));
        refRbSheet.current.close();
        flatListRef.current.scrollToOffset({animated: true, offset: 1});
        setStarCount(1);
      })
      .catch((err) => {
        dispatch(setIsCommentLoadin(false));
        refRbSheet.current.close();
      });
  };
}

export function updateComment(
  body,
  product_id,
  commentId,
  refRbSheet,
  flatListRef,
) {
  return (dispatch) => {
    dispatch(setIsCommentLoadin(true));
    Api.put(`product/${product_id}/comments/${commentId}`, body)
      .then((resp) => {
        dispatch(getSpecificProductsAgain(product_id));
        dispatch(updateCommentFunc(resp));
        dispatch(setIsCommentLoadin(false));
        refRbSheet.current.close();
        flatListRef.current.scrollToOffset({animated: true, offset: 1});
      })
      .catch((err) => {
        dispatch(setIsCommentLoadin(false));
        refRbSheet.current.close();
      });
  };
}

export function getAllProductsWithoutCategory(productName) {
  return (dispatch) => {
    dispatch(setIsProductLoading(true));
    Api.get(`product?title=${productName}`)
      .then((resp) => {
        dispatch(allProductsWithoutCategoryData(resp));
        dispatch(setIsProductLoading(false));
      })
      .catch((err) => {
        dispatch(setIsProductLoading(false));
      });
  };
}
