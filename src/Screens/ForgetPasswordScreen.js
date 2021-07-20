import React from 'react';

import {Text, View, ScrollView, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {gray78, veryLightGray, whisper} from '../Utils/theme';
import SignOutButton from '../Components/SignOutButton';

const ForgetPasswordScreen = ({navigate, goBack, handleChange}) => {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Text style={styles.accountsettingText}>Change Password</Text>
        <View style={styles.imputfieldContainer}>
          <TextInput
            style={styles.inputfieldText}
            placeholder="New Password"
            placeholderTextColor={gray78}
          />
        </View>
        <View style={styles.imputfieldContainer}>
          <TextInput
            style={styles.inputfieldText}
            placeholder="Confirm Password"
            placeholderTextColor={gray78}
          />
        </View>

        <SignOutButton text="Save" />
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    padding: '10@s',
  },
  braceletdrawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountsettingText: {
    textAlign: 'center',
    marginTop: '13@s',
    color: 'black',
    fontSize: '25@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '29@s',
  },
  imputfieldContainer: {
    borderBottomColor: whisper,
    borderBottomWidth: 1,
    marginTop: '10@s',
  },
  inputfieldText: {
    paddingStart: -4,
    color: 'black',
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
  },
  hidebuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '10@s',
  },
  hideText: {
    marginRight: '7@s',
    fontSize: '10@s',
    fontWeight: '400',
    lineHeight: '11.72@s',
    color: veryLightGray,
  },
});

export default ForgetPasswordScreen;
