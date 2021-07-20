import React from 'react';

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {blackOne, bottomTabColor, lightGray} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import SignOutButton from '../Components/SignOutButton';
import AddressInputfield from '../Components/AddressInputfield';
import CheckBox from '../Components/CheckBoxComponent';

const AddressScreen = ({
  navigate,
  goBack,
  setChecked,
  checked,
  specificShippingAddress,
  isLoading,
  handleChange,
  handleSubmit,
  addressUpdateLoading,
}) => {
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
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={styles.shippingaddressContainer}>
            <Text style={styles.accountsettingText}>Address</Text>
          </View>
          {isLoading ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator color={bottomTabColor} size="large" />
            </View>
          ) : (
            <View style={styles.inputfieldsContainer}>
              <AddressInputfield
                defaultValue={specificShippingAddress?.FirstName}
                text="*First Name"
                onChangeText={(value) => handleChange('FirstName', value)}
              />
              <AddressInputfield
                defaultValue={specificShippingAddress?.LastName}
                text="*Last Name"
                onChangeText={(value) => handleChange('LastName', value)}
              />
              <AddressInputfield
                defaultValue={specificShippingAddress?.PhoneNumber}
                text="*Phone Number"
                onChangeText={(value) => handleChange('PhoneNumber', value)}
                keyboardType="numeric"
              />
              <AddressInputfield
                defaultValue={specificShippingAddress?.Country}
                text="*Country"
                onChangeText={(value) => handleChange('Country', value)}
              />
              <AddressInputfield
                defaultValue={specificShippingAddress?.State}
                text="*State/Region"
                onChangeText={(value) => handleChange('State', value)}
              />
              <AddressInputfield
                defaultValue={specificShippingAddress?.City}
                text="*City"
                onChangeText={(value) => handleChange('City', value)}
              />
              <AddressInputfield
                defaultValue={specificShippingAddress?.AddressLine}
                text="*Address Line 1"
                onChangeText={(value) => handleChange('AddressLine', value)}
              />
              {/* <AddressInputfield text="*Address Line 2" /> */}
              <AddressInputfield
                defaultValue={`${specificShippingAddress?.ZipCode}`}
                text="*ZIP/Post code"
                onChangeText={(value) => handleChange('ZipCode', value)}
              />
            </View>
          )}

          <View style={styles.setdefaultaddressContainer}>
            <CheckBox setChecked={setChecked} checked={checked} func={true} />
            <Text style={styles.setdefaultaddressText}>
              Set as default address
            </Text>
          </View>
          <View style={styles.shippingbuttonContainer}>
            <SignOutButton
              onPress={() => handleSubmit()}
              text={
                addressUpdateLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  'Save'
                )
              }
            />
          </View>
        </View>
      </ScrollView>
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
  inputfieldsContainer: {
    padding: '10@s',
    flex: 1,
  },
  setdefaultaddressContainer: {
    padding: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
  },
  setdefaultaddressText: {
    marginLeft: '3@s',
    color: blackOne,
    fontSize: '17@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20@s',
  },
});

export default AddressScreen;
