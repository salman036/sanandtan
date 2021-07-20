import React, {useState} from 'react';

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';

import {internetStatus, prettyColor} from '../Utils/theme';
import LanguageModal from '../Modals/LanguageModal';
import HeaderLogo from '../Images/sanandtanLogo.png';
import BorderButonOne from '../Components/BorderButtonOne';
import SignOutButton from '../Components/SignOutButton';
import {TabRouter} from 'react-navigation';

const AccountSettingScreen = ({
  navigate,
  goBack,
  navigateLogout,
  handleCountry,
  userData,

  languageChaneg,
  setModalVisible,
  modalVisible,
  lang,
  internet,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.Container}>
      <LanguageModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
        <Text style={styles.accountsettingText}>
          {languageChaneg.t('account_setting')}
        </Text>
        <CountryPicker
          {...{
            withFlag: TabRouter,
            withCurrency: true,
            withCountryNameButton: true,
          }}
          theme={DARK_THEME}
          visible={visible}
          onClose={() => setVisible(false)}
          onSelect={(value) => {
            internet ? handleCountry(value.cca2) : alert(internetStatus);
          }}
          withFilter={true}
        />
        <BorderButonOne
          onPress={() => {
            internet ? setVisible(true) : alert(internetStatus);
          }}
          textone={languageChaneg.t('country')}
          texttwo={
            userData?.country === null ||
            userData?.country === undefined ||
            userData?.country === false
              ? 'Select Country'
              : userData?.country
          }
        />
        <BorderButonOne
          onPress={() => {
            internetStatus ? null : alert(internetStatus);
          }}
          textone={languageChaneg.t('language')}
          texttwo={lang}
        />
        <BorderButonOne
          onPress={() => {
            internet ? navigate('ShippingAddress') : alert(internetStatus);
          }}
          textone={languageChaneg.t('shipping_address')}
        />
        <BorderButonOne
          onPress={() => {
            internet ? navigate('MyProfile') : alert(internetStatus);
          }}
          textone={languageChaneg.t('my_profile')}
        />
        <BorderButonOne
          onPress={() => {
            internet ? navigate('ChangePassword') : alert(internetStatus);
          }}
          textone={languageChaneg.t('change_password')}
        />
        <BorderButonOne textone={languageChaneg.t('notification_setting')} />
        {/* <BorderButonOne
          onPress={() => navigate('PaymentMethod')}
          textone="Payment Method"
        /> */}
        <BorderButonOne
          onPress={() => {
            internet
              ? Linking.openURL(
                  'market://details?id=com.creativewisdom.quotesandstatuses',
                )
              : alert(internetStatus);
          }}
          textone={languageChaneg.t('rate_app')}
        />
        <SignOutButton
          onPress={() => navigateLogout('AuthTabs')}
          text={languageChaneg.t('sign_out')}
        />
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    padding: '10@s',
  },
  braceletdrawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountsettingText: {
    textAlign: 'center',
    marginTop: '13@s',
    color: prettyColor,
    fontSize: '25@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '29@s',
  },
});

export default AccountSettingScreen;
