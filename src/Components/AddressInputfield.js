import React from 'react';

import {View, TextInput, Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {grayTextColor} from '../Utils/theme';

const AddressInputfield = ({text, defaultValue, onChangeText, keyboardType}) => {
  return (
    <View style={styles.imputfieldContainer}>
      <TextInput
        style={styles.inputfieldText}
        placeholder={text}
        placeholderTextColor="#ABABAB"
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  imputfieldContainer: {
    borderBottomColor: grayTextColor,
    borderBottomWidth: 1,
    marginTop: Platform.OS === 'android' ? '10@s' : '20@s',
  },
  inputfieldText: {
    paddingStart: -4,
    color: 'black',
    fontSize: '17@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '19@s',
    textTransform: 'capitalize',
  },
});
export default AddressInputfield;
