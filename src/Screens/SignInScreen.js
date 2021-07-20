import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {Tabs, NativeBaseProvider} from 'native-base';
import {ScaledSheet} from 'react-native-size-matters';
import {
  bottomTabColor,
  graySix,
  internetStatus,
  silver,
  suvaGrey,
  themeColor,
  white,
} from '../Utils/theme';
import InputField from '../Components/InputField';
import SignUpButton from '../Components/SignUpButton';
// import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FirstNameIcon from '../Images/firstnameIcon.png';
import EmailIcon from '../Images/emailIcon.png';
import PasswordIcon from '../Images/passwordIcon.png';
import SocialMediaIcons from '../Components/SocialMediaIcons';
import ClothesCardHome from '../Components/ClothesCardHome';
import CategooryButton from '../Components/CategoryButton';

const SignInScreen = ({
  navigate,
  handleChange,
  handleSubmit,
  loginLoading,
  data,
  onGoogleButtonPress,
  onFacebookButtonPress,
  navigateLogout,
  socialLoginLoading,
  internet,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.inputFeilds}>
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
        </View>
        <TouchableOpacity
          onPress={() => navigate('ResetPassword')}
          style={styles.forgetPassword}>
          <Text style={styles.forgotBtnText}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.signUpBtn}>
          <SignUpButton
            onPress={() => {
              internet ? handleSubmit() : alert(internetStatus);
            }}
            title={
              loginLoading ? <ActivityIndicator color="white" /> : 'Sign in'
            }
          />
          {/* <SignUpButton
            onPress={() => navigate('AuthMain')}
            title={'Sign Up'}
          /> */}
        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLineOne}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLineTwo}></View>
        </View>
        <View style={styles.socialMediaIcons}>
          <SocialMediaIcons
            onFacebookButtonPress={onFacebookButtonPress}
            onGoogleButtonPress={onGoogleButtonPress}
            navigateLogout={navigateLogout}
            internet={internet}
          />
        </View>
        <View style={styles.policyTextBar}>
          <Text style={styles.text}>By Joining you agree to our </Text>
          <Text style={styles.policyLink}>terms and services </Text>
          <Text style={styles.text}>policy</Text>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '30@s',
    marginBottom: '10@s',
  },
  inputFeilds: {
    marginTop: 20,
  },
  forgetPassword: {
    alignItems: 'flex-end',
    paddingRight: '10@s',
  },
  forgotBtnText: {
    fontSize: '13@s',
    color: graySix,
  },
  signUpBtn: {
    marginTop: '20@s',
    paddingLeft: '40@s',
    paddingRight: '40@s',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
    marginTop: '120@s',
  },
  text: {
    fontSize: '12@s',
  },
  policyLink: {
    fontSize: '12@s',
    color: 'blue',
  },
  upBack: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 2,
  },
});

export default SignInScreen;
