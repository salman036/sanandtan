import React, {useEffect, useState} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Stripe from 'react-native-stripe-api';

import {
  allCartItems,
  deleteCartItem,
  addCartsToActiveOrders,
  updateProductQuantity,
  updateLessCartItem,
  addPrdocutToCart,
  addPrdocutQuantityIncrese,
  addPrdocutQuantityDecrease,
} from '../actions/cart';
import {CartScreen} from '../Screens';
import {stripeKey, white} from '../Utils/theme';

function useForceUpdate() {
  const [value, setValue] = useState(0);

  return () => setValue((value) => ++value);
}

const CartContainer = (props) => {
  const dispatch = useDispatch();
  const [selectCart, setSelectCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [cardError, setCardErroe] = useState('');
  const [data, setData] = useState({
    number: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const forceUpdate = useForceUpdate();
  let sum = null;

  const {
    allCarts,
    cartLoading,
    activeCartLoading,
    quantityLoadingData,
    cartDelteLoading,
  } = useSelector((store) => store.cart);

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const genToken = async () => {
    const apiKey = stripeKey;
    const client = new Stripe(apiKey);

    try {
      const token = await client.createToken({
        number: data?.number,
        exp_month: data?.exp_month,
        exp_year: data?.exp_year,
        cvc: data?.cvc,
      });

      setModalVisible(false);
      const paramsBody = {
        source: token.id,
        price: totalPrice,
        items: selectCart,
      };

      if (token.id) {
        dispatch(
          addCartsToActiveOrders(
            paramsBody,
            allCarts?.user_cart?._id,
            navigate,
            setModalVisible,
            setSelectCart,
            setTotalPrice,
          ),
        );
      } else {
        alert(token.error.message);
      }
    } catch (e) {
      setCardErroe(e);
      // alert(e.error.code);
    }
  };

  const navigate = (routeName) => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      navigation.navigate(routeName);
    }
  };

  useEffect(() => {
    dispatch(allCartItems());
    setSelectCart([]);
    setTotalPrice('');
  }, []);

  const handleDelte = (id) => {
    dispatch(deleteCartItem(id));
  };

  const removeCart = async (id, check) => {
    let arr = selectCart;
    if (check) {
      const index = arr.findIndex((item) => item?.product === id?.product);
      if (index > -1) {
        sum = totalPrice - id?.price * id?.qty;
        setTotalPrice(sum);
        arr.splice(index, 1);
      }
    } else {
      arr.push(id);
      selectCart.forEach(function (value, index, array) {
        sum += parseInt(value?.price * value?.qty);
      });
      setTotalPrice(sum);
    }
    await setSelectCart(arr);
    forceUpdate();
  };

  const checkEmpty = (value, message) => {
    if (value === '') {
      alert(`Please enter ${message}`);
    }
  };

  const handleActiveOrder = () => {
    if (data?.number === '') {
      alert('Please enter card number');
      return;
    }
    if (data?.number.length < 16) {
      alert('Card Number is too short');
      return;
    }
    if (data?.number.length > 16) {
      alert('Card Number is too large');
      return;
    }
    if (data?.exp_month === '') {
      alert('Please enter exp month');
      return;
    }
    if (data?.exp_month.length < 2 || data?.exp_month.length > 2) {
      alert('Expire month should be two digits');
      return;
    }

    if (data?.exp_year === '') {
      alert('Please enter exp year');
      return;
    }
    if (data?.exp_year.length < 2 || data?.exp_year.length > 2) {
      alert('Expire year should be two digits');
      return;
    }
    if (data?.cvc === '') {
      alert('Please enter CVC');
      return;
    }
    if (data?.cvc.length < 3 || data?.cvc.length > 3) {
      alert('CVC should be three digits');
      return;
    } else {
      genToken();
      // dispatch(addCartsToActiveOrders(selectCart, navigate));
    }
  };

  const handleQty = (product_id, qty) => {
    dispatch(addPrdocutQuantityIncrese(product_id, qty));
  };

  const handleLessQty = (product_id, qty) => {
    dispatch(addPrdocutQuantityDecrease(product_id, qty, 'false'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CartScreen
        allCarts={allCarts}
        navigate={navigate}
        cartLoading={cartLoading}
        handleDelte={handleDelte}
        removeCart={removeCart}
        selectCart={selectCart}
        handleActiveOrder={handleActiveOrder}
        activeCartLoading={activeCartLoading}
        handleQty={handleQty}
        quantityLoadingData={quantityLoadingData}
        handleLessQty={handleLessQty}
        cartDelteLoading={cartDelteLoading}
        totalPrice={totalPrice}
        genToken={genToken}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        handleChange={handleChange}
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

export default CartContainer;
