import React from 'react';

import {Text, View, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {borderColor, grayLight} from '../Utils/theme';

const EmailTextInputFeild = () => {
  return (
    <View style={styles.emailContainer}>
      <TextInput
        style={styles.emailInput}
        placeholder="Email"
        placeholderTextColor="black"
      />
      <Text style={styles.jhonsmithText}>Johnsmith1234@gmail.com</Text>
    </View>
  );
};
const styles = ScaledSheet.create({
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    marginTop: '7@s',
  },
  emailInput: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
    color: 'black',
    width: '60%',
  },
  jhonsmithText: {
    color: grayLight,
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
  },
});
export default EmailTextInputFeild;
