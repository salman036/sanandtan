import React from 'react';

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {gray78, whisper, veryLightGray} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import SignOutButton from '../Components/SignOutButton';
import HideButton from '../Components/HideButton';

const ChangePasswordScreen = ({
  navigate,
  goBack,
  setPassword,
  password,
  handleSubmit,
  handleChange,
  isLoading,
}) => {
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
        <Text style={styles.accountsettingText}>Change Password</Text>
        <View style={styles.imputfieldContainer}>
          <TextInput
            style={styles.inputfieldText}
            placeholder="Current Password"
            secureTextEntry={password}
            placeholderTextColor={gray78}
            onChangeText={(value) => handleChange('oldPassword', value)}
          />
        </View>
        <View style={styles.imputfieldContainer}>
          <TextInput
            style={styles.inputfieldText}
            placeholder="New Password"
            placeholderTextColor={gray78}
            secureTextEntry={password}
            onChangeText={(value) => handleChange('newPassword', value)}
          />
        </View>
        <View style={styles.imputfieldContainer}>
          <TextInput
            style={styles.inputfieldText}
            placeholder="Reenter new Password"
            placeholderTextColor={gray78}
            secureTextEntry={password}
            onChangeText={(value) => handleChange('confirm_password', value)}
          />
        </View>
        <View style={styles.hidebuttonContainer}>
          <Text style={styles.hideText}>Hide</Text>
          <HideButton setPassword={setPassword} password={password} />
        </View>

        <SignOutButton
          onPress={() => handleSubmit()}
          text={isLoading ? <ActivityIndicator color="white" /> : 'Save'}
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
  imputfieldContainer: {
    borderBottomColor: whisper,
    borderBottomWidth: 1,
    marginTop: '10@s',
  },
  inputfieldText: {
    paddingStart: -4,
    color: 'black',
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
    paddingBottom: '10@s',
    paddingTop: '10@s',
  },
  hidebuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '10@s',
  },
  hideText: {
    marginRight: '7@s',
    fontSize: '10@s',
    fontWeight: '400',
    lineHeight: '11.72@s',
    color: veryLightGray,
  },
});

export default ChangePasswordScreen;
