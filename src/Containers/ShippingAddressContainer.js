import React, {useEffect} from 'react';

import {SafeAreaView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {getShippingAddress} from '../actions/auth';
import {ShippingAddressScreen} from '../Screens';
import {white} from '../Utils/theme';

const ShippingAddressContainer = (props) => {
  const dispatch = useDispatch();
  const {shippingAddress, isLoading} = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getShippingAddress());
  }, []);

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

  return (
    <SafeAreaView style={styles.container}>
      <ShippingAddressScreen
        navigate={navigate}
        goBack={goBack}
        isLoading={isLoading}
        shippingAddress={shippingAddress}
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

export default ShippingAddressContainer;
