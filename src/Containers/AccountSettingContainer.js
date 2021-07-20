import React, {useRef, useEffect, useState} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import {LoginManager} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';
import I18n from 'react-native-i18n';
import NetInfo from '@react-native-community/netinfo';

import en from '../Utils/Lang/en';
import fr from '../Utils/Lang/fr';
import {updateProfile} from '../actions/auth';
import Storage from '../lib/requests/storage';
import {AccountSettingScreen} from '../Screens';
import {internetStatus, white} from '../Utils/theme';

const AccountSettingContainer = (props) => {
  const [internet, setInternet] = useState(false);
  const dispatch = useDispatch();
  const {userData} = useSelector((store) => store.auth);
  const [lang, setLang] = useState(lang);
  const [modalVisible, setModalVisible] = useState(false);

  I18n.fallbacks = true;
  I18n.locale = lang;

  const refRbSheet = useRef();

  const navigate = (routeName) => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      internet ? navigation.openDrawer() : alert(internetStatus);
    } else {
      internet ? navigation.navigate(routeName) : alert(internetStatus);
    }
  };

  const navigateLogout = async (routeName) => {
    const {navigation} = props;
    await navigation.reset({
      index: 0,
      routes: [{name: routeName}],
    });
    LoginManager.logOut();
    GoogleSignin.signOut();
    Storage.removeData('access_token');
  };

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  useEffect(() => {
    Storage.retrieveData('lang').then((res) => {
      setLang(res);
    });
  }, [Storage.retrieveData('lang')]);

  useEffect(() => {
    NetInfo.fetch().then((status) => {
      setInternet(status.isConnected);
    });
  }, []);

  const handleCountry = (countryCode) => {
    dispatch(updateProfile({country: countryCode}, refRbSheet));
  };
  return (
    <SafeAreaView style={styles.container}>
      <RBSheet ref={refRbSheet} />
      <AccountSettingScreen
        navigateLogout={navigateLogout}
        navigate={navigate}
        goBack={goBack}
        handleCountry={handleCountry}
        userData={userData}
        languageChaneg={I18n}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        lang={lang}
        internet={internet}
      />
    </SafeAreaView>
  );
};

I18n.translations = {
  en,
  fr,
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default AccountSettingContainer;
