import React, {useState, useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import NetInfo from '@react-native-community/netinfo';

import {login, facebookLogin, googleLogin} from '../actions/auth';
import {SignInScreen} from '../Screens';
import {white} from '../Utils/theme';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

const SignInContainer = ({props}) => {
  const [internet, setInternet] = useState(true);
  const dispatch = useDispatch();
  const {loginLoading, socialLoginLoading} = useSelector((store) => store.auth);
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

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

  useEffect(() => {
    NetInfo.fetch().then((status) => {
      setInternet(status.isConnected);
    });
  }, []);

  async function onGoogleButtonPress() {
    const {idToken, user, serverAuthCode} = await GoogleSignin.signIn();

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
    if (data?.username === '' || data?.username.length < 0) {
      Toast.show({
        text1: 'Please Enter Email',
        position: 'bottom',
        visibilityTime: 2000,
        type: 'error',
      });
      return;
    }
    if (data?.password === '') {
      Toast.show({
        text1: 'Please Enter password',
        position: 'bottom',
        visibilityTime: 2000,
        type: 'error',
      });
      return;
    }
    if (data?.password.length < 6) {
      Toast.show({
        text1: 'Password must be 6 characters',
        position: 'bottom',
        visibilityTime: 2000,
        type: 'error',
      });
      return;
    } else {
      dispatch(login(data, otherNavigate, setData));
    }
  };

  const navigateLogout = async (routeName) => {
    const {navigation} = props;
    await navigation.reset({
      index: 0,
      routes: [{name: routeName}],
    });
    // await navigation.dispatch(StackActions.replace(routeName));

    GoogleSignin.signOut();
    LoginManager.logOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen
        data={data}
        loginLoading={loginLoading}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        navigate={navigate}
        onGoogleButtonPress={onGoogleButtonPress}
        onFacebookButtonPress={onFacebookButtonPress}
        navigateLogout={navigateLogout}
        socialLoginLoading={socialLoginLoading}
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

export default SignInContainer;
