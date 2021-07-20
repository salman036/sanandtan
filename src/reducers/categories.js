import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  categoryLoading: false,
};
export const categories = createReducer(INITIAL_STATE, {
  [types.CATEGORY_DATA](state, action) {
    return {
      ...state,
      categoriesData: action.categoriesData,
    };
  },

  [types.CATEGORY_DATA_DRAWER](state, action) {
    return {
      ...state,
      categoriesDataDrawer: action.categoriesDataDrawer,
    };
  },

  [types.CATEGORY_LOADING](state, action) {
    return {
      ...state,
      categoryLoading: action.categoryLoading,
    };
  },
});
