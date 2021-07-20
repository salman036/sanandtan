import React, {useEffect, useState} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import {getAllRecommndedProducts, addRecentProducts} from '../actions/products';
import {HomeScreen} from '../Screens';
import {internetStatus, white} from '../Utils/theme';

const HomeContainer = (props) => {
  const [internet, setInternet] = useState(true);
  const dispatch = useDispatch();
  const {recommendedData, recommendedLoading} = useSelector(
    (store) => store.products,
  );
  const navigate = (routeName, id) => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      internet ? navigation.openDrawer() : alert(internetStatus);
    } else {
      internet ? navigation.navigate(routeName, id) : alert(internetStatus);
    }
  };

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getAllRecommndedProducts());
    NetInfo.fetch().then((status) => {
      setInternet(status.isConnected);
    });
  }, []);

  const handleRecent = (product_id) => {
    internet ? dispatch(addRecentProducts(product_id)) : alert(internetStatus);
  };
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen
        navigate={navigate}
        recommendedData={recommendedData}
        recommendedLoading={recommendedLoading}
        handleRecent={handleRecent}
        internet={internet}
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

export default HomeContainer;
