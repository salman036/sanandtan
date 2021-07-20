import React, {useState, useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {getSpecificAddress, updateSpecificAddress} from '../actions/auth';
import {AddressScreen} from '../Screens';
import {white} from '../Utils/theme';

const AddressContainer = (props) => {
  const dispatch = useDispatch();
  const {params} = props.route;
  const {
    specificShippingAddress,
    isLoading,
    addressUpdateLoading,
  } = useSelector((store) => store.auth);

  const [data, setData] = useState({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(getSpecificAddress(params, setData));
  }, []);

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

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(updateSpecificAddress(data, params, setData, goBack));
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddressScreen
        setChecked={setChecked}
        checked={checked}
        navigate={navigate}
        goBack={goBack}
        specificShippingAddress={specificShippingAddress?.shippingAddress}
        isLoading={isLoading}
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        addressUpdateLoading={addressUpdateLoading}
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

export default AddressContainer;
