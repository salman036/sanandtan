import React, {useEffect, useState} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import {getAllCategories} from '../actions/categories';
import {CategoriesScreen} from '../Screens';
import {internetStatus, white} from '../Utils/theme';

const CategoriesContainer = (props) => {
  const [internet, setInternet] = useState(false);
  const dispatch = useDispatch();
  const {categoriesData, categoryLoading} = useSelector(
    (store) => store.categories,
  );

  const navigate = (routeName, id) => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      navigation.navigate(routeName, id);
    }
  };

  useEffect(() => {
    dispatch(getAllCategories(''));

    NetInfo.fetch().then((status) => {
      setInternet(status.isConnected);
    });
  }, []);

  const handleSearch = (value) => {
    dispatch(getAllCategories(value));
  };

  return (
    <SafeAreaView style={styles.container}>
      <CategoriesScreen
        categoryLoading={categoryLoading}
        categoriesData={categoriesData}
        navigate={navigate}
        internet={internet}
        handleSearch={handleSearch}
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

export default CategoriesContainer;
