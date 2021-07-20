import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';

import {getAllProductsWithoutCategory} from '../actions/products';
import {AllProductsScreen} from '../Screens';
import {white} from '../Utils/theme';

const AllProductsContainer = (props) => {
  const dispatch = useDispatch();
  const {allProductsWithOutCategory} = useSelector((store) => store.products);

  const navigate = (routeName, id) => {
    const {navigation} = props;
    navigation.navigate(routeName, id);
  };

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getAllProductsWithoutCategory(''));
  }, []);

  const handleSearch = (value) => {
    dispatch(getAllProductsWithoutCategory(value));
  };

  return (
    <View style={styles.container}>
      <AllProductsScreen
        allProductsWithOutCategory={allProductsWithOutCategory}
        handleSearch={handleSearch}
        navigate={navigate}
        goBack={goBack}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default AllProductsContainer;
