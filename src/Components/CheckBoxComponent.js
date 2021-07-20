import * as React from 'react';

import {View, Platform} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';

import {lightGreen, white} from '../Utils/theme';

const CheckBoxComponent = ({
  setChecked,
  checked,
  removeCart,
  item,
  func,
  price,
}) => {
  return (
    <View style={checked ? styles.container : styles.containerGray}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        color={lightGreen}
        onPress={() => {
          setChecked(!checked);
          func ? null : removeCart(item, checked, price);
        }}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderColor: Platform.OS === 'ios' ? lightGreen : white,
    borderWidth: 1,
    marginRight: '10@s',
  },

  containerGray: {
    borderColor: Platform.OS === 'ios' ? 'gray' : white,
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
    marginRight: '10@s',
  },
});

export default CheckBoxComponent;
