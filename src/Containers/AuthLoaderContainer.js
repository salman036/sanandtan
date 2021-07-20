import React, {useEffect} from 'react';
import {View, ActivityIndicator, StatusBar, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {getUser} from '../actions/auth';
import Storage from '../lib/requests/storage';
import {StackActions} from '@react-navigation/native';
import {bottomTabColor, white} from '../Utils/theme';

const AuthLoaderContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    _bootstrapAsync();
    dispatch(getUser());
  }, []);

  const _bootstrapAsync = async () => {
    const userToken = await Storage.retrieveData('access_token');

    props.navigation.dispatch(
      StackActions.replace(userToken !== null ? 'Tabs' : 'AuthTabs'),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ActivityIndicator color={bottomTabColor} size="large" />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
});

export default AuthLoaderContainer;
