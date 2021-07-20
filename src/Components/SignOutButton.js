import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {robotoMedium, white} from '../Utils/theme';

const SignOutButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.signoutbuttonContainer}>
      <Text style={styles.signoutText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  signoutbuttonContainer: {
    backgroundColor: '#F80900',
    padding: '12@s',
    borderRadius: '21@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10@s',
  },

  signoutText: {
    fontSize: '16@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '19@s',
    color: white,
    fontFamily: robotoMedium,
  },
});

export default SignOutButton;
