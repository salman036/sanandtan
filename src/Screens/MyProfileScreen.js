import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import RBSheet from 'react-native-raw-bottom-sheet';
import {RadioButton} from 'react-native-paper';

import {black, grayLight, lightGray, themeColor, white} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyPictureBorderButton from '../Components/MyPictureBorderButton';
import SignOutButton from '../Components/SignOutButton';

import BorderButonOne from '../Components/BorderButtonOne';

const MyProfileScreen = ({
  navigate,
  goBack,
  userData,
  refRbSheet,
  handleChange,

  handleSubmit,
  refRbSheetGender,
  isLoading,
  handleGenderSubmit,
  languageChange,
  loginType,
}) => {
  const [check, setCheck] = useState(
    userData?.gender ? userData?.gender : 'Male',
  );
  return (
    <View style={styles.Container}>
      <RBSheet
        ref={refRbSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: black,
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor={grayLight}
          defaultValue={userData?.firstname}
          onChangeText={(value) => handleChange('firstname', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor={grayLight}
          defaultValue={userData?.lastname}
          onChangeText={(value) => {
            handleChange('lastname', value);
          }}
        />
        <View style={styles.btnContainer}>
          <SignOutButton
            onPress={() => handleSubmit()}
            text={isLoading ? <ActivityIndicator color={white} /> : 'Save'}
          />
        </View>
      </RBSheet>

      <RBSheet
        ref={refRbSheetGender}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: black,
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <View style={styles.checkContainer}>
          <View style={styles.checkBoxContainer}>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value="first"
                status={check === 'Male' ? 'checked' : 'unchecked'}
                onPress={() => setCheck('Male')}
              />
            </View>

            <Text>{languageChange.t('male')}</Text>
          </View>

          <View style={styles.checkBoxContainer}>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value="first"
                status={check !== 'Male' ? 'checked' : 'unchecked'}
                onPress={() => setCheck('Female')}
              />
            </View>
            <Text>{languageChange.t('female')}</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <SignOutButton
            onPress={() => handleGenderSubmit(check)}
            text={isLoading ? <ActivityIndicator color={white} /> : 'Save'}
          />
        </View>
      </RBSheet>
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
        <Text style={styles.accountsettingText}>My Profile</Text>
        <TouchableOpacity onPress={() => navigate('JhonSmith', userData)}>
          <MyPictureBorderButton
            textone={languageChange.t('my_picture')}
            image={userData?.image}
            loginType={loginType}
          />
        </TouchableOpacity>
        {/* <EmailTextInputFeild  /> */}
        <BorderButonOne
          textone={languageChange.t('email')}
          texttwo={`${userData?.username}`}
          loginType={loginType}
        />
        <BorderButonOne
          onPress={() => refRbSheet.current.open()}
          textone={languageChange.t('name')}
          texttwo={`${userData?.firstname} ${userData?.lastname}`}
          loginType={loginType}
        />
        <BorderButonOne
          onPress={() => refRbSheetGender.current.open()}
          textone={languageChange.t('gender')}
          texttwo={userData?.gender}
          loginType={loginType}
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
    color: 'black',
    fontSize: '25@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '29@s',
  },
  input: {
    borderColor: black,
    borderWidth: '0.5@s',
    borderRadius: '10@s',
    padding: '10@s',
    margin: '10@s',
  },
  btnContainer: {
    margin: '10@s',
  },
  checkContainer: {
    margin: '10@s',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10@s',
  },
  radioBtnContainer: {
    borderColor: 'aqua',
    borderWidth: '0.5@s',
    borderRadius: '10@s',
    marginRight: '20@s',
  },
});

export default MyProfileScreen;
