import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const SearchInputField = ({placeholder, onChangeText, search}) => {
  return (
    <View style={styles.searchinputField}>
      <Icon style={{marginLeft: 7}} name="search" size={20} color="#979393" />
      {search ? (
        <TextInput
          style={styles.searchinputFieldPlaceHolder}
          placeholder={placeholder}
          placeholderTextColor="#979393"
        />
      ) : (
        <TextInput
          style={styles.searchinputFieldPlaceHolder}
          placeholder={placeholder}
          placeholderTextColor="#979393"
          onChangeText={onChangeText}
        />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  searchinputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: '2@s',
    borderRadius: '5@s',
    marginTop: '10@s',
  },

  searchinputFieldPlaceHolder: {
    fontSize: '20@s',
    paddingLeft: '5@s',
    padding: '4@s',
    width: '90%',
  },
});
export default SearchInputField;
