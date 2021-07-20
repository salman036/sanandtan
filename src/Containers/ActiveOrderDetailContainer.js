import React, {useEffect} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';

import {getSpecificActiveOrder} from '../actions/cart';
import {ActiveOrderDetailScreen} from '../Screens';
import {themeColor, white} from '../Utils/theme';

const ActiveOrderDetailContainer = (props) => {
  const {params} = props.route;

  const dispatch = useDispatch();
  const {spectificActiveOrderData, specificOrderLoading} = useSelector(
    (store) => store.cart,
  );

  const navigate = (routeName) => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      navigation.navigate(routeName);
    }
  };

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getSpecificActiveOrder(params));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFB928" barStyle="light-content" />
      {console.log(
        'spectificActiveOrderData',
        spectificActiveOrderData?.activeOrder[0]?.screenShot,
      )}
      <ActiveOrderDetailScreen
        spectificActiveOrderData={spectificActiveOrderData}
        navigate={navigate}
        goBack={goBack}
        specificOrderLoading={specificOrderLoading}
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

export default ActiveOrderDetailContainer;
