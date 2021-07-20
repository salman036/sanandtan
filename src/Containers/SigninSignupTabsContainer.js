import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {SigninSignupTabsScreen} from '../Screens';
import {white} from '../Utils/theme';

const SigninSignupTabsContainer = (props) => {
  const navigate = (routeName) => {
    const {navigation} = props;
    navigation.navigate(routeName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SigninSignupTabsScreen navigate={navigate} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default SigninSignupTabsContainer;
