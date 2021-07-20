import React, {useState, useEffect} from 'react';

import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import {GoogleSignin} from '@react-native-community/google-signin';

import Routes from './src/Utils/Routes';
import store from './src/store/configureStore';

const App = () => {
  const [storee, setStoree] = useState(store);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1032854227324-5fnm1lhgkvf48i74qr3siujme47q2rhh.apps.googleusercontent.com',
      // scopes: ['email'],
      offlineAccess: true,
    });
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={storee}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFB928" barStyle="light-content" />
        <NavigationContainer>
          <Routes />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
