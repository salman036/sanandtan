import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {useDispatch, useSelector} from 'react-redux';

import {
  getAllProducts,
  searchByName,
  addRecentProducts,
} from '../actions/products';
import {HandBraceletsScreen} from '../Screens';
import {white} from '../Utils/theme';

const HandBraceletsContainer = (props) => {
  const {params} = props.route;
  const dispatch = useDispatch();
  const {producctData, productLoading} = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts(params?.id));
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

  const searchProduct = (value) => {
    dispatch(searchByName(params?.id, value));
  };

  const handleRecent = (product_id) => {
    dispatch(addRecentProducts(product_id));
  };
  return (
    <SafeAreaView style={styles.container}>
      <HandBraceletsScreen
        productLoading={productLoading}
        producctData={producctData}
        params={params}
        navigate={navigate}
        goBack={goBack}
        searchProduct={searchProduct}
        handleRecent={handleRecent}
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

export default HandBraceletsContainer;
