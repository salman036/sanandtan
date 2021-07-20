import React, {useState, useRef, useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {ScaledSheet} from 'react-native-size-matters';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import I18n from 'react-native-i18n';
import NetInfo from '@react-native-community/netinfo';

import en from '../Utils/Lang/en';
import fr from '../Utils/Lang/fr';
import Storage from '../lib/requests/storage';
import {uploadImage, updateProfile} from '../actions/auth';
import {JhonSmithScreen} from '../Screens';
import {black, white} from '../Utils/theme';

const JhonSmithContainer = (props) => {
  const [internet, setInternet] = useState(false);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const refRbSheet = useRef();
  const refRbImageSheet = useRef();
  const [lang, setLang] = useState();
  const {userData, loginType} = useSelector((store) => store.auth);

  const [localImage, setLoacalImage] = useState('');

  I18n.fallbacks = true;
  I18n.locale = lang;

  const {params} = props.route;
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

  const imageUpload = () => {
    const fd = new FormData();
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const file = {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        };
        setLoacalImage(file.uri);
        fd.append('image', file);
        await dispatch(uploadImage(fd, refRbSheet));
        // if (file.uri) {
        //   setImage(imageUploadData[0]);
        // }
      }
    });
  };

  useEffect(() => {
    Storage.retrieveData('lang').then((res) => {
      setLang(res);
    });
  }, [lang]);

  useEffect(() => {
    NetInfo.fetch().then((status) => {
      setInternet(status.isConnected);
    });
  }, []);

  const removeImage = () => {
    dispatch(updateProfile({image: null}, refRbImageSheet));
  };

  return (
    <SafeAreaView style={styles.container}>
      <RBSheet
        ref={refRbSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: black,
          },
        }}></RBSheet>
      <JhonSmithScreen
        userData={userData}
        params={params}
        navigate={navigate}
        goBack={goBack}
        imageUpload={imageUpload}
        localImage={localImage}
        languageChange={I18n}
        loginType={loginType}
        internet={internet}
        removeImage={removeImage}
        refRbImageSheet={refRbImageSheet}
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

export default JhonSmithContainer;
