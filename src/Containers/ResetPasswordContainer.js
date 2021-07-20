import React, {useState} from 'react';

import {SafeAreaView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';

import {resetPassword} from '../actions/auth';
import {ResetPasswordScreen} from '../Screens';
import {white} from '../Utils/theme';

const ResetPasswordContainer = (props) => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((store) => store.auth);

  const [data, setData] = useState({
    username: '',
    password: '',
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
    if (data?.username === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter email',
        position: 'bottom',
        visibilityTime: 2000,
      });
      return;
    }
    if (data?.password === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter email',
        position: 'bottom',
        visibilityTime: 2000,
      });
    } else {
      dispatch(resetPassword(data, navigate, setData));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ResetPasswordScreen
        handleChange={handleChange}
        navigate={navigate}
        goBack={goBack}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
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

export default ResetPasswordContainer;
