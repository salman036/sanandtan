import React, {useEffect} from 'react';

import {SafeAreaView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {getAllRecentProducts} from '../actions/products';
import {getUser} from '../actions/auth';
import Storage from '../lib/requests/storage';
import {RecentProductScreen} from '../Screens';
import {white} from '../Utils/theme';

const RecentProductContainer = (props) => {
  const dispatch = useDispatch();
  const {recentData} = useSelector((store) => store.products);
  const {userData} = useSelector((store) => store.auth);
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
    getUser();
    // Storage.retrieveData('access_token').then((res) => {
    //   getAllRecentProducts();
    // });
    dispatch(getAllRecentProducts(userData?._id));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <RecentProductScreen
        recentData={recentData}
        navigate={navigate}
        goBack={goBack}
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

export default RecentProductContainer;
