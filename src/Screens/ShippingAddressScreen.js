import React from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import HeaderLogo from '../Images/sanandtanLogo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignOutButton from '../Components/SignOutButton';
import ShippingAddressBottomComponent from '../Components/ShippingAddressBottomComponent';
import {bottomTabColor, lightGray} from '../Utils/theme';

const ShippingAddressScreen = ({
  goBack,
  isLoading,
  navigate,
  shippingAddress,
}) => {
  const renderItem = ({item}) => (
    <ShippingAddressBottomComponent
      navigate={navigate}
      title={item?.AddressLine}
      ZipCode={item?.ZipCode}
      id={item?._id}
      item={item}
    />
  );
  return (
    <View style={styles.Container}>
      <View style={styles.braceletdrawerContainer}>
        <TouchableOpacity onPress={() => navigate('drawer')}>
          <Icon name="bars" size={25} color="black" />
        </TouchableOpacity>
        <Image source={HeaderLogo} />
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name="chevron-left" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.shippingaddressContainer}>
        <Text style={styles.accountsettingText}>Shipping Address</Text>
      </View>
      <View style={{flex: 1}}>
        {isLoading ? (
          <View style={styles.empty}>
            <ActivityIndicator color={bottomTabColor} size="large" />
          </View>
        ) : (
          <FlatList
            renderItem={renderItem}
            data={shippingAddress?.user_address?.shipping_address?.reverse()}
            keyExtractor={(item) => item?._id}
          />
        )}
      </View>

      <View style={styles.shippingbuttonContainer}>
        <SignOutButton
          onPress={() => navigate('CreateShipping')}
          text="Add Shipping Address"
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
  },
  braceletdrawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@s',
  },
  accountsettingText: {
    textAlign: 'center',
    marginTop: '13@s',
    color: 'black',
    fontSize: '25@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '29@s',
    marginBottom: '7@s',
  },
  shippingaddressContainer: {
    borderBottomColor: lightGray,
    borderBottomWidth: '6@s',
  },
  shippingbuttonContainer: {
    padding: '10@s',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShippingAddressScreen;
