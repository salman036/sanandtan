import React, {useEffect, useRef, useState} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Toast from 'react-native-toast-message';
import {useSelector, useDispatch} from 'react-redux';
import I18n from 'react-native-i18n';

import en from '../Utils/Lang/en';
import fr from '../Utils/Lang/fr';
import Storage from '../lib/requests/storage';

import {updateProfile} from '../actions/auth';
import {MyProfileScreen} from '../Screens';
import {white} from '../Utils/theme';

const MyProfileContainer = (props) => {
  const dispatch = useDispatch();
  const {userData, isLoading, loginType} = useSelector((store) => store.auth);
  const refRbSheet = useRef();
  const refRbSheetGender = useRef();
  const [data, setData] = useState({
    firstname: userData?.firstname,
    lastname: userData?.lastname,
  });
  const [lang, setLang] = useState();
  I18n.fallbacks = true;
  I18n.locale = lang;

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    Storage.retrieveData('lang').then((res) => {
      setLang(res);
    });
  }, [lang]);

  const navigate = (routeName, data) => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      navigation.navigate(routeName, data);
    }
  };

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const handleSubmit = () => {
    if (data?.firstname === '' || data?.firstname?.length === 0) {
      alert('Pleasse enter first name');
      return;
    }
    if (data?.lastname === '' || data?.lastname?.length === 0) {
      alert('Pleasse enter last name');
      return;
    } else {
      dispatch(updateProfile(data, refRbSheet));
    }
  };

  const handleGenderSubmit = (value) => {
    dispatch(updateProfile({gender: value}, refRbSheetGender));
  };
  return (
    <SafeAreaView style={styles.container}>
      <MyProfileScreen
        userData={userData}
        navigate={navigate}
        goBack={goBack}
        refRbSheet={refRbSheet}
        handleChange={handleChange}
        data={data}
        handleSubmit={handleSubmit}
        refRbSheetGender={refRbSheetGender}
        isLoading={isLoading}
        handleGenderSubmit={handleGenderSubmit}
        languageChange={I18n}
        loginType={loginType}
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

I18n.translations = {
  en,
  fr,
};

export default MyProfileContainer;
