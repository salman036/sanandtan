import React, {useState} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';

import {changePassword} from '../actions/auth';
import {ChangePasswordScreen} from '../Screens';
import { white } from '../Utils/theme';

const ChangePasswordContainer = (props) => {
  const [password, setPassword] = useState(true);
  const dispatch = useDispatch();
  const {isLoading} = useSelector((store) => store.auth);
  const [data, setData] = useState({
    oldPassword: '',
    newPassword: '',
    confirm_password: '',
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
    if (data?.oldPassword === data?.newPassword) {
      Toast.show({
        text1: 'Please choose another password',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (data?.oldPassword === '') {
      Toast.show({
        text1: 'Please enter current password',
        type: 'error',
        position: 'bottom',
      });
      return;
    }
    if (data?.newPassword !== data?.confirm_password) {
      Toast.show({
        text1: 'Password and current password are not matched',
        type: 'error',
        position: 'bottom',
      });
      return;
    }
    if (data?.newPassword === '') {
      Toast.show({
        text1: 'Please enter new password',
        type: 'error',
        position: 'bottom',
      });
      return;
    }
    if (data?.confirm_password === '') {
      Toast.show({
        text1: 'Please enter confirm password',
        type: 'error',
        position: 'bottom',
      });
      return;
    } else {
      dispatch(changePassword(data, navigate));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChangePasswordScreen
        setPassword={setPassword}
        navigate={navigate}
        goBack={goBack}
        password={password}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
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

export default ChangePasswordContainer;
