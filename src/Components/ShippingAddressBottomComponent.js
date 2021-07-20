import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import DefaultAdressIcon from '../assets/DefaultAddressIcon';
import {gray78, lightGray, prettyColor} from '../Utils/theme';

const ShippingAddressBottomComponent = ({
  navigate,
  title,
  ZipCode,
  id,
  item,
}) => {
  return (
    <View style={styles.prettymainContainer}>
      <View style={styles.prettyContainer}>
        <Text numberOfLines={2} style={styles.prettyTextt}>
          {title}
        </Text>
        <Text style={styles.numbersText}>{ZipCode}</Text>
      </View>
      <View style={styles.codetextContainer}>
        <Text style={styles.firstcodeText}>{item?.City}</Text>
        <Text style={styles.secondcodeText}>{item?.PhoneNumber}</Text>
      </View>
      <View style={styles.defaultaddressmainContainer}>
        <TouchableOpacity
          disabled={true}
          style={styles.defaultaddressContainer}>
          <Text style={styles.defaultaddressText}>Default Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 5}}
          onPress={() => navigate('Address', id)}>
          <DefaultAdressIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  prettymainContainer: {
    borderBottomColor: lightGray,
    borderBottomWidth: 6,
  },
  prettyContainer: {
    paddingHorizontal: '10@s',
    marginTop: '10@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prettyTextt: {
    fontSize: '15@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '18@s',
    color: prettyColor,
    width: '280@s',
  },
  numbersText: {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '15@s',
    color: 'black',
  },
  codetextContainer: {
    paddingHorizontal: '10@s',
    marginTop: '10@s',
  },
  firstcodeText: {
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14@s',
    color: gray78,
  },
  secondcodeText: {
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14@s',
    color: gray78,
  },
  defaultaddressmainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10@s',
    marginTop: '5@s',
  },
  defaultaddressContainer: {
    borderWidth: 1,
    borderColor: '#51FF35',
    borderRadius: '2@s',
    padding: '1@s',
  },
  defaultaddressText: {
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14@s',
    color: '#51FF35',
  },
});
export default ShippingAddressBottomComponent;
