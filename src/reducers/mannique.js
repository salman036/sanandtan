import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  manniqueLoading: false,
};

export const mannique = createReducer(INITIAL_STATE, {
  [types.MANNIQUE_DATA](state, action) {
    return {
      ...state,
      manniqueData: action.manniqueData,
    };
  },

  [types.BIKNI_SHIRT](state, action) {
    return {
      ...state,
      bikiniData: action.bikiniData,
    };
  },

  [types.SCARF](state, action) {
    return {
      ...state,
      scarfData: action.scarfData,
    };
  },

  [types.HAND_BRACELATE](state, action) {
    return {
      ...state,
      bracelateData: action.bracelateData,
    };
  },

  [types.HAT](state, action) {
    return {
      ...state,
      hatData: action.hatData,
    };
  },

  [types.NECKLES_DATA](state, action) {
    return {
      ...state,
      necklesData: action.necklesData,
    };
  },

  [types.FLIP_FLOP_DATA](state, action) {
    return {
      ...state,
      flipFlopData: action.flipFlopData,
    };
  },

  [types.ANKLESTS_DATA](state, action) {
    return {
      ...state,
      ankletsData: action.ankletsData,
    };
  },

  [types.WAIST_BRACELETS_DATA](state, action) {
    return {
      ...state,
      waistBraceletsDta: action.waistBraceletsDta,
    };
  },

  [types.SUNBLOCK_DATA](state, action) {
    return {
      ...state,
      sunBlockData: action.sunBlockData,
    };
  },
  [types.WAIST_OF_BUNDLE_DATA](state, action) {
    return {
      ...state,
      waistOfBundleData: action.waistOfBundleData,
    };
  },

  [types.TANNING_CREAM_DATA](state, action) {
    return {
      ...state,
      tanningCreamData: action.tanningCreamData,
    };
  },

  [types.PRODUCT_TOTAL_PRICE](state, action) {
    return {
      ...state,
      totalProPriceData: action.totalProPriceData,
    };
  },

  [types.MANNIQUE_LOADING](state, action) {
    return {
      ...state,
      manniqueLoading: action.manniqueLoading,
    };
  },
});
