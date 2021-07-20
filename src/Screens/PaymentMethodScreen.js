import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import HeaderLogo from '../Images/sanandtanLogo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import VisaCardImage from '../Images/visacard.png';
import ApplepayCardImage from '../Images/Applepay.png';
import CarditCardImage from '../Images/Craditcard.png';
import AndroidPayCardImage from '../Images/androidpay.png';
import CheckBox from '../Components/CheckBoxComponent';
import {blackOne, lightGray} from '../Utils/theme';

const PaymentMethodScreen = ({navigate, goBack}) => {
  return (
    <View style={styles.Container}>
      <ScrollView>
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
          <Text style={styles.accountsettingText}>Payment Method</Text>
        </View>
        <View style={styles.applepaycardmainConatiner}>
          <View style={styles.applepaycardContainer}>
            <Image source={ApplepayCardImage} />
            <Text style={styles.applepayText}>Apple pay</Text>
          </View>
          <CheckBox />
        </View>
        <View style={styles.applepaycardmainConatiner}>
          <View style={styles.applepaycardContainer}>
            <Image source={CarditCardImage} />
            <Text style={styles.applepayText}>Credit Card</Text>
          </View>
          <CheckBox />
        </View>
        <View style={styles.applepaycardmainConatiner}>
          <View style={styles.applepaycardContainer}>
            <Image source={VisaCardImage} />
            <Text style={styles.applepayText}>Visa</Text>
          </View>
          <CheckBox />
        </View>
        <View style={styles.applepaycardmainConatiner}>
          <View style={styles.applepaycardContainer}>
            <Image source={AndroidPayCardImage} />
            <Text style={styles.applepayText}>
              Android pay ( google pay - Samsung pay)
            </Text>
          </View>
          <CheckBox />
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
  applepaycardmainConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10@s',
    marginTop: '5@s',
  },
  applepaycardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  applepayText: {
    marginLeft: '10@s',
    color: 'black',
    fontSize: '15@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18@s',
    width: '70%',
  },
});

export default PaymentMethodScreen;
