import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {internetStatus, robotoBlack} from '../Utils/theme';

const CategoryButton = ({text, navigate, id, internet}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        internet
          ? navigate('HandBracelets', {id: id, text: text})
          : alert(internetStatus);
      }}
      style={styles.categoryButton}>
      <Text style={styles.categoryButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  dressesImage: {
    borderRadius: '5@s',
  },

  categoryButton: {
    backgroundColor: '#FFB928',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12@s',
    width: '97%',
    height: '60@s',
    // margin: '7@s',
    marginHorizontal: '7@s',
    marginVertical: '7@s',
  },

  categoryButtonText: {
    fontSize: '15@s',
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    fontFamily: robotoBlack,
  },
});
export default CategoryButton;
