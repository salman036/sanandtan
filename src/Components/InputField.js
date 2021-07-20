import React from 'react';

import {View, Image, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {grayTextColor} from '../Utils/theme';

const InputField = ({
  placeholder,
  image,
  onChangeText,
  value,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputField}>
        <Image style={styles.placeholderImage} source={image} />
        <TextInput
          style={styles.inputFieldPlaceHolder}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor="gray"
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    padding: '10@s',
  },

  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: grayTextColor,
  },

  inputFieldPlaceHolder: {
    fontSize: '17@s',
    padding: '5@s',
    marginLeft: '10@s',
    width: '90%',
  },
});
export default InputField;
