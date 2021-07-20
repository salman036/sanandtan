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

import {blackOne, lightGray} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import SignOutButton from '../Components/SignOutButton';
import AddressInputfield from '../Components/AddressInputfield';
import CheckBox from '../Components/CheckBoxComponent';

const CreateShippingScreen = ({
  navigate,
  goBack,
  checked,
  setChecked,
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

          <View style={styles.inputfieldsContainer}>
            <AddressInputfield
              text="*First Name"
              onChangeText={(value) => handleChange('FirstName', value)}
            />
            <AddressInputfield
              text="*Last Name"
              onChangeText={(value) => handleChange('LastName', value)}
            />
            <AddressInputfield
              text="*Phone Number"
              onChangeText={(value) => handleChange('PhoneNumber', value)}
              keyboardType="phone-pad"
            />
            <AddressInputfield
              text="*Country"
              onChangeText={(value) => handleChange('Country', value)}
            />
            <AddressInputfield
              text="*State/Region"
              onChangeText={(value) => handleChange('State', value)}
            />
            <AddressInputfield
              text="*City"
              onChangeText={(value) => handleChange('City', value)}
            />
            <AddressInputfield
              text="*Address Line 1"
              onChangeText={(value) => handleChange('AddressLine', value)}
            />
            {/* <AddressInputfield
              
              onChangeText={(value) => handleChange('AddressLineSecond', value)}
              text="Address Line 2"
            /> */}
            <AddressInputfield
              text="*ZIP/Post code"
              onChangeText={(value) => handleChange('ZipCode', value)}
              keyboardType="phone-pad"
            />
          </View>

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

export default CreateShippingScreen;
