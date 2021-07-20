import React, {useState, useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import NetInfo from '@react-native-community/netinfo';

import {signUp, facebookLogin, googleLogin} from '../actions/auth';
import {AuthScreen} from '../Screens';
import {white} from '../Utils/theme';

const AuthContainer = ({props}) => {
  const [internet, setInternet] = useState(true);
  const dispatch = useDispatch();
  const {isLoading} = useSelector((store) => store.auth);

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    username: '',
    confirn_password: '',
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    setData({
      firstname: '',
      lastname: '',
      password: '',
      username: '',
      confirn_password: '',
    });
  }, []);

  useEffect(() => {
    NetInfo.fetch().then((status) => {
      setInternet(status.isConnected);
    });
  }, []);

  const navigate = (routeName) => {
    const {navigation} = props;
    navigation.navigate(routeName);
  };

  const otherNavigate = (routeName) => {
    const {navigation} = props;
    navigation.reset({
      index: 0,
      routes: [{name: routeName}],
    });
  };

  async function onGoogleButtonPress() {
    const {idToken, user} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    if (idToken) {
      dispatch(
        googleLogin(
          {
            username: user?.email,
            firstName: user?.givenName,
            lastName: user.familyName,
            image: user?.photo,
          },
          otherNavigate,
        ),
      );
      // otherNavigate('Tabs');
    } else {
    }
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    dispatch(facebookLogin(data?.accessToken, otherNavigate));

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const handleSubmit = () => {
    if (data === undefined) {
      Toast.show({
        text1: 'Please Enter First Name',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (data?.firstname === '' || data?.firstname.length < 0) {
      Toast.show({
        text1: 'Please Enter First Name',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (data?.lastname === '' || data?.lastname.length < 0) {
      Toast.show({
        text1: 'Please Enter Last Name',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (data?.username === '' || data?.username.length < 0) {
      Toast.show({
        text1: 'Please Enter Email',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });

      return;
    }

    // if (!data?.username?.match(/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/)) {
    //   Toast.show({
    //     text1: 'Please Enter valid email address',
    //     type: 'error',
    //     visibilityTime: 2000,
    //     position: 'bottom',
    //   });
    //   return;
    // }
    if (data?.password === '') {
      Toast.show({
        text1: 'Please Enter password',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (data?.password?.length < 6) {
      Toast.show({
        text1: 'Password must be 6 characters',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      return;
    }
    if (data?.password === data?.confirn_password) {
      dispatch(signUp(data, setData));
      return;
    } else {
      Toast.show({
        text1: 'Password and confirm password are not matched',
        type: 'error',
        visibilityTime: 2000,
        position: 'bottom',
      });
      // alert("Password and confirm password are not matched")
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <AuthScreen
        isLoading={isLoading}
        data={data}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        navigate={navigate}
        onGoogleButtonPress={onGoogleButtonPress}
        onFacebookButtonPress={onFacebookButtonPress}
        internet={internet}
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

export default AuthContainer;
