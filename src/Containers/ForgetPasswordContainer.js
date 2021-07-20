import React, {useState} from 'react';

import {SafeAreaView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ForgetPasswordScreen} from '../Screens';
import {white} from '../Utils/theme';

const ForgetPasswordContainer = (props) => {
  const [data, setData] = useState({
    username: '',
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

  return (
    <SafeAreaView style={styles.container}>
      <ForgetPasswordScreen
        handleChange={handleChange}
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

export default ForgetPasswordContainer;
