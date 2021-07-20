import React, {useEffect, useRef, useState} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

import {
  getSpecificProducts,
  addComment,
  updateComment,
} from '../actions/products';

import {addPrdocutToCart} from '../actions/cart';
import {
  setBikniData,
  setScarfData,
  setHandBraclateData,
  setHatData,
  setNecklesData,
  setFlipFlopData,
  setAnkletsData,
  setWaistBraceletsData,
  setSunBlockData,
  setWaistOfBundleData,
  setTanningCreamData,
} from '../actions/mannique';
import {HandBraceletSecondScreen} from '../Screens';
import {white} from '../Utils/theme';

const HandBraceletSecondContainer = (props) => {
  const {params} = props.route;
  const [startCount, setStarCount] = useState(1);
  const [starUpdateCount, setUpdateStarCount] = useState(1);
  const [commentId, setCommentId] = useState();
  const [data, setData] = useState({
    comment: '',
    productQuantity: 1,
  });
  const [comment, setComment] = useState('');

  const refRbSheet = useRef();
  const updateCommentRBRef = useRef();
  const flatListRef = useRef();

  const dispatch = useDispatch();
  const {specificProductData, specificProductLoading, commentLoading} =
    useSelector((store) => store.products);
  const {userData} = useSelector((store) => store.auth);

  const {cartLoading} = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(getSpecificProducts(params));
  }, []);

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const navigate = (routeName, id) => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      navigation.navigate(routeName, id);
    }
  };

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const finishRating = (rating) => {};

  const handleComment = () => {
    if (data?.comment?.length === 0 || data?.comment === '') {
      alert('Please write comment');
    } else {
      const body = {
        rating: startCount,
        comment: data?.comment,
      };
      dispatch(addComment(body, params, refRbSheet, flatListRef, setStarCount));
    }
  };

  const handleUpdateComment = () => {
    if (data?.comment?.length === 0 || data?.comment === '') {
      alert('Please write comment');
    } else {
      const body = {
        rating: starUpdateCount,
        comment: data?.comment,
      };
      dispatch(
        updateComment(body, params, commentId, updateCommentRBRef, flatListRef),
      );
    }
  };

  const handleAddCart = () => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (data.productQuantity.length < 1) {
      Toast.show({
        text1: 'Please Enter some stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(addPrdocutToCart(params, data?.productQuantity, navigate));
    }
  };

  const setDummyStoredata = (title, image) => {
    // if (title === 'Bikni') {
    //   dispatch(setBikniData(image));
    //   return;
    // }
    if (title === 'Scarf') {
      dispatch(setScarfData(image));

      return;
    }
  };

  const handleSetBikni = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setBikniData(qty, id, name, image, price));
    }
  };

  const handleSetScarf = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setScarfData(qty, id, name, image, price));
    }
  };

  const handleSetHandBracelate = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setHandBraclateData(qty, id, name, image, price));
    }
  };

  const handleNeckles = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setNecklesData(qty, id, name, image, price));
    }
  };

  const handleHat = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setHatData(qty, id, name, image, price));
    }
  };

  const hanldeFlipFlop = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setFlipFlopData(qty, id, name, image, price));
    }
  };

  const handleAnklets = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setAnkletsData(qty, id, name, image, price));
    }
  };
  const handleWaistBracelts = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setWaistBraceletsData(qty, id, name, image, price));
    }
  };

  const handleSunBlock = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setSunBlockData(qty, id, name, image, price));
    }
  };

  const handleWaistOfBundle = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setWaistOfBundleData(qty, id, name, image, price));
    }
  };
  const handleTanningCream = (qty, id, name, image, price) => {
    if (!specificProductData?.data?.category?.quantity) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (specificProductData?.data?.category?.quantity === 0) {
      Toast.show({
        text1: 'Out of stock',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    } else {
      dispatch(setTanningCreamData(qty, id, name, image, price));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HandBraceletSecondScreen
        specificProductLoading={specificProductLoading}
        specificProductData={specificProductData}
        navigate={navigate}
        goBack={goBack}
        finishRating={finishRating}
        refRbSheet={refRbSheet}
        startCount={startCount}
        setStarCount={setStarCount}
        handleChange={handleChange}
        commentLoading={commentLoading}
        handleComment={handleComment}
        flatListRef={flatListRef}
        updateCommentRBRef={updateCommentRBRef}
        setComment={setComment}
        comment={comment}
        setUpdateStarCount={setUpdateStarCount}
        starUpdateCount={starUpdateCount}
        handleUpdateComment={handleUpdateComment}
        setCommentId={setCommentId}
        handleAddCart={handleAddCart}
        cartLoading={cartLoading}
        userData={userData}
        data={data}
        //
        handleSetBikni={handleSetBikni}
        handleSetScarf={handleSetScarf}
        handleSetHandBracelate={handleSetHandBracelate}
        handleHat={handleHat}
        handleNeckles={handleNeckles}
        hanldeFlipFlop={hanldeFlipFlop}
        handleAnklets={handleAnklets}
        handleSunBlock={handleSunBlock}
        handleWaistBracelts={handleWaistBracelts}
        handleWaistOfBundle={handleWaistOfBundle}
        handleTanningCream={handleTanningCream}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default HandBraceletSecondContainer;
