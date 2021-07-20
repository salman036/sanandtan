import * as types from './types';
import Api from '../lib/requests/api';

function setIsManniqueLoading(manniqueLoading) {
  return {
    type: types.MANNIQUE_LOADING,
    manniqueLoading,
  };
}

function getAllManniqueFunc(manniqueData) {
  return {
    type: types.MANNIQUE_DATA,
    manniqueData,
  };
}

function setBikini(bikiniData) {
  return {
    type: types.BIKNI_SHIRT,
    bikiniData,
  };
}

function setScarf(scarfData) {
  return {
    type: types.SCARF,
    scarfData,
  };
}

function setHandBraclat(bracelateData) {
  return {
    type: types.HAND_BRACELATE,
    bracelateData,
  };
}

function setHat(hatData) {
  return {
    type: types.HAT,
    hatData,
  };
}

function setNeckles(necklesData) {
  return {
    type: types.NECKLES_DATA,
    necklesData,
  };
}

function setFlipFlop(flipFlopData) {
  return {
    type: types.FLIP_FLOP_DATA,
    flipFlopData,
  };
}

function setAnklets(ankletsData) {
  return {
    type: types.ANKLESTS_DATA,
    ankletsData,
  };
}

function setWaitBracelts(waistBraceletsDta) {
  return {
    type: types.WAIST_BRACELETS_DATA,
    waistBraceletsDta,
  };
}

function setSunBlock(sunBlockData) {
  return {
    type: types.SUNBLOCK_DATA,
    sunBlockData,
  };
}

function setWaistofBundle(waistOfBundleData) {
  return {
    type: types.WAIST_OF_BUNDLE_DATA,
    waistOfBundleData,
  };
}

function setTanningCream(tanningCreamData) {
  return {
    type: types.TANNING_CREAM_DATA,
    tanningCreamData,
  };
}

function setProductTotalPrice(totalProPriceData) {
  return {
    type: types.PRODUCT_TOTAL_PRICE,
    totalProPriceData,
  };
}
export function getAllMannique(name) {
  return (dispatch) => {
    dispatch(setIsManniqueLoading(true));
    Api.get(`dummyProduct/${name}`)
      .then((resp) => {
        dispatch(getAllManniqueFunc(resp));
        dispatch(setIsManniqueLoading(false));
      })
      .catch((err) => {
        dispatch(setIsManniqueLoading(false));
      });
  };
}

export function manniqueCheckOut(body) {
  return (dispatch) => {
    dispatch(setIsManniqueLoading(true));
    Api.post(`active_orders`, body)
      .then((resp) => {
        dispatch(getAllManniqueFunc(resp));
        dispatch(setIsManniqueLoading(false));
      })
      .catch((err) => {
        dispatch(setIsManniqueLoading(false));
      });
  };
}

export function setBikniData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setBikini({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setScarfData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setScarf({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setHandBraclateData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setHandBraclat({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setHatData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setHat({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setNecklesData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setNeckles({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setFlipFlopData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setFlipFlop({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setAnkletsData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setAnklets({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setWaistBraceletsData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setWaitBracelts({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setSunBlockData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setSunBlock({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setWaistOfBundleData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setWaistofBundle({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function setTanningCreamData(qty, id, name, image, price) {
  return (dispatch) => {
    dispatch(
      setTanningCream({
        totalQuantity: qty,
        product: id,
        productName: name,
        productImage: image,
        price: price,
      }),
    );
  };
}

export function productTotalPrice(price) {
  return (dispatch) => {
    dispatch(setProductTotalPrice(price));
  };
}
