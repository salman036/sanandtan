import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {white} from '../Utils/theme';

const SignUpButton = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.signInButton}>
        <Text style={styles.signInBtnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '10@s',
  },

  signInButton: {
    backgroundColor: '#EB3029',
    padding: '12@s',
    borderRadius: '30@s',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signInBtnText: {
    fontSize: '20@s',
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default SignUpButton;
