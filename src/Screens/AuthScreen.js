import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {internetStatus, silver, suvaGrey, white} from '../Utils/theme';
import InputField from '../Components/InputField';
import SignUpButton from '../Components/SignUpButton';
import FirstNameIcon from '../Images/firstnameIcon.png';
import EmailIcon from '../Images/emailIcon.png';
import PasswordIcon from '../Images/passwordIcon.png';
import SocialMediaIcons from '../Components/SocialMediaIcons';

const AuthScreen = ({
  navigate,
  handleChange,
  handleSubmit,
  data,
  isLoading,
  onGoogleButtonPress,
  onFacebookButtonPress,
  internet,
}) => {
  return (
    <View style={{flex: 1, marginBottom: 10}}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.buttons}></View>
          <InputField
            value={data?.firstname ? data?.firstname : ''}
            onChangeText={(value) => handleChange('firstname', value)}
            image={FirstNameIcon}
            placeholder={'First Name'}
          />
          <InputField
            value={data?.lastname ? data?.lastname : ''}
            onChangeText={(value) => handleChange('lastname', value)}
            image={FirstNameIcon}
            placeholder={'Last Name'}
          />
          <InputField
            value={data?.username ? data?.username : ''}
            onChangeText={(value) => handleChange('username', value)}
            image={EmailIcon}
            placeholder={'Email'}
          />
          <InputField
            secureTextEntry={true}
            value={data?.password ? data?.password : ''}
            onChangeText={(value) => handleChange('password', value)}
            image={PasswordIcon}
            placeholder={'Password'}
          />
          <InputField
            secureTextEntry={true}
            value={data?.confirn_password ? data?.confirn_password : ''}
            onChangeText={(value) => handleChange('confirn_password', value)}
            image={PasswordIcon}
            placeholder={'Confirm password'}
          />

          <View style={styles.signUpBtn}>
            <SignUpButton
              onPress={() => {
                internet ? handleSubmit() : alert(internetStatus);
              }}
              title={
                isLoading ? <ActivityIndicator color="white" /> : 'Sign up'
              }
            />
          </View>

          <View style={styles.signUpBtn}>
            {/* <SignUpButton onPress={() => navigate('SignIn')} title="Sign In" /> */}
          </View>
          <Text style={styles.instructionText} numberOfLines={3}>
            Note: Please use your usual email address to register, and remember
            the registered email address for subsequent receipt and inquiries
            about order information, etc.
          </Text>

          <View style={styles.divider}>
            <View style={styles.dividerLineOne}></View>
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLineTwo}></View>
          </View>
          <View style={styles.socialMediaIcons}>
            <SocialMediaIcons
              onGoogleButtonPress={onGoogleButtonPress}
              onFacebookButtonPress={onFacebookButtonPress}
              navigateLogout={navigate}
              internet={internet}
            />
          </View>
          <View style={styles.policyTextBar}>
            <Text style={styles.text}>By Joining you agree to our </Text>
            <Text style={styles.policyLink}>terms and services </Text>
            <Text style={styles.text}>policy</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  buttons: {
    marginTop: '20@s',
  },
  signUp: {
    fontSize: '20@s',
    fontWeight: 'bold',
    borderBottomColor: '#FF0900',
    borderBottomWidth: '4@s',
    textTransform: 'uppercase',
    borderRadius: '2@s',
  },
  instructionText: {
    color: '#8C8C8C',
    fontSize: '12@s',
    padding: '10@s',
    marginTop: '10@s',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20@s',
  },
  dividerLineOne: {
    width: '30%',
    backgroundColor: silver,
    height: '2@s',
    marginLeft: '50@s',
  },
  dividerLineTwo: {
    width: '30%',
    backgroundColor: silver,
    height: '2@s',
    marginRight: '50@s',
  },
  dividerText: {
    color: suvaGrey,
    fontSize: '15@s',
  },
  socialMediaIcons: {
    marginTop: '20@s',
  },
  policyTextBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '12@s',
  },
  policyLink: {
    fontSize: '12@s',
    color: 'blue',
  },
});

export default AuthScreen;
