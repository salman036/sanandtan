import React, {useState, useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';

import {createShippingAddress} from '../actions/auth';
import {CreateShippingScreen} from '../Screens';
import {white} from '../Utils/theme';

const CreateShippingContainer = (props) => {
  const dispatch = useDispatch();
  const {addressUpdateLoading} = useSelector((store) => store?.auth);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    State: '',
    City: '',
    Country: '',
    AddressLine: '',
    ZipCode: '',
  });
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
    const params = {
      AddressLine: data?.AddressLine,
      City: data?.City,
      Country: data?.Country,
      FirstName: data?.FirstName,
      LastName: data?.LastName,
      PhoneNumber: data?.PhoneNumber,
      State: data?.State,
      ZipCode: data?.ZipCode,
    };
    dispatch(createShippingAddress(params, navigate));
  };

  return (
    <SafeAreaView style={styles.container}>
      <CreateShippingScreen
        setChecked={setChecked}
        checked={checked}
        navigate={navigate}
        goBack={goBack}
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

export default CreateShippingContainer;
