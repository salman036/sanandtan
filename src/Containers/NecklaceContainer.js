import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {NecklaceScreen} from '../Screens';
import {white} from '../Utils/theme';

const NecklaceContainer = (props) => {
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
  return (
    <SafeAreaView style={styles.container}>
      <Text>salman</Text>
      <NecklaceScreen navigate={navigate} goBack={goBack} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default NecklaceContainer;
