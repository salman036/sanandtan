import React from 'react';
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
import {gray78, themeColor, veryLightGray, whisper} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignOutButton from '../Components/SignOutButton';
import HideButton from '../Components/HideButton';

const ResetPasswordScreen = ({
  navigate,
  goBack,
  handleChange,
  handleSubmit,
  isLoading,
}) => {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Text style={styles.accountsettingText}>Reset Password</Text>
        <View style={styles.imputfieldContainer}>
          <TextInput
            style={styles.inputfieldText}
            placeholder="Email"
            placeholderTextColor={gray78}
            onChangeText={(value) => handleChange('username', value)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.imputfieldContainer}>
          <TextInput
            style={styles.inputfieldText}
            placeholder="New Password"
            placeholderTextColor={gray78}
            onChangeText={(value) => handleChange('password', value)}
            secureTextEntry={true}
          />
        </View>

        <SignOutButton
          onPress={handleSubmit}
          text={isLoading ? <ActivityIndicator color="white" /> : 'Next'}
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
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18@s',
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

export default ResetPasswordScreen;
