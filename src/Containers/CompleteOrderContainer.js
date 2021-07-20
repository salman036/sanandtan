import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';

import {getActiveOrders} from '../actions/cart';
import {CompleteOrderScreen} from '../Screens';
import {white} from '../Utils/theme';

const CompleteOrderContainer = (props) => {
  const dispatch = useDispatch();
  const {activeOrdesData, cartLoading} = useSelector((store) => store.cart);
  const {userData} = useSelector((store) => store.auth);

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

  useEffect(() => {
    dispatch(getActiveOrders(userData?._id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CompleteOrderScreen
        activeOrdesData={activeOrdesData}
        navigate={navigate}
        goBack={goBack}
        cartLoading={cartLoading}
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

export default CompleteOrderContainer;
