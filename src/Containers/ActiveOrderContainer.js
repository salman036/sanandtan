import React, {useEffect} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';

import {getActiveOrders} from '../actions/cart';
import {ActiveOrderScreen} from '../Screens';
import {bottomTabColor, themeColor, white} from '../Utils/theme';

const ActiveOrderContainer = (props) => {
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
      <StatusBar backgroundColor="#FFB928" barStyle="light-content" />
      <ActiveOrderScreen
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

export default ActiveOrderContainer;
