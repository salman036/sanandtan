import React from 'react';

import {TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {PayPalIcon, GoogleIcon, FacebookIcon} from '../assets';
import {internetStatus} from '../Utils/theme';

const SocialMediaIcons = ({
  onGoogleButtonPress,
  onFacebookButtonPress,
  navigateLogout,
  internet,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          internet ? onGoogleButtonPress() : alert(internetStatus);
        }}>
        <GoogleIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          internet ? onFacebookButtonPress() : alert(internetStatus);
        }}>
        <FacebookIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '10@s',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default SocialMediaIcons;
