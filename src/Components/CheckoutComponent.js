import React from 'react';

import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {
  black,
  lightGreen,
  robotoBlack,
  robotoMedium,
  white,
} from '../Utils/theme';

const CheckoutComponent = ({count, onPress, activeCartLoading, totalPrice}) => {
  return (
    <View style={styles.container}>
      <View style={styles.totalConatoner}>
        <Text style={styles.totalText}>Total:</Text>
        <TouchableOpacity>
          <Text style={styles.secondpriceText}>${totalPrice}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={count === 0 ? true : false}
        onPress={onPress}
        style={styles.checkoutContainer}>
        <Text style={styles.checkoutText}>
          {activeCartLoading ? (
            <ActivityIndicator color={white} size="small" />
          ) : (
            `CHECKOUT ${count}`
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    padding: '20@s',
  },
  firstpriceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Line: {
    width: '50@s',
    height: '1@s',
    backgroundColor: '#888888',
    position: 'absolute',
    right: -3,
    top: 8,
  },
  fisrtpriceText: {
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '16@s',
    color: '#888888',
  },
  totalConatoner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5@s',
  },
  totalText: {
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '16@s',
    color: black,
    fontFamily: robotoBlack,
  },
  secondpriceText: {
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '16@s',
    color: black,
    fontFamily: robotoBlack,
  },
  checkoutContainer: {
    backgroundColor: lightGreen,
    padding: '8@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '3@s',
    marginTop: '10@s',
  },
  checkoutText: {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '15@s',
    color: white,
    fontFamily: robotoBlack,
  },
});
export default CheckoutComponent;
