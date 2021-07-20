import React, {useState} from 'react';
import {Tabs, NativeBaseProvider, Center} from 'native-base';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import {SignInContainer, AuthContainer} from '../Containers';
import {useSelector} from 'react-redux';
import {themeColor, white} from '../Utils/theme';
import sanandtanLogo from '../Images/sanandtanLogo.png';

import {ScaledSheet} from 'react-native-size-matters';

const AuthTabsContainer = (props) => {
  const [tabActive, setTabActive] = useState(false);
  const {socialLoginLoading} = useSelector((store) => store.auth);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}}>
      {socialLoginLoading ? (
        <View style={styles.absoluteView}>
          <ActivityIndicator color={themeColor} size="large" />
        </View>
      ) : null}
      <ScrollView>
        <NativeBaseProvider>
          <View style={{alignItems: 'center', marginTop: 20, marginBottom: 0}}>
            <Image style={{width: 70, height: 50}} source={sanandtanLogo} />
          </View>
          <Tabs
            size="lg"
            borderBottomColor="red"
            colorScheme="danger"
            style={{flex: 1, backgroundColor: 'white', marginTop: 30}}>
            <Tabs.Bar style={{justifyContent: 'space-evenly'}}>
              <Tabs.Tab borderBottomWidth={5}>Sign Up</Tabs.Tab>
              <Tabs.Tab borderBottomWidth={5}>Sign In</Tabs.Tab>
            </Tabs.Bar>
            <Tabs.Views style={{flex: 1}}>
              <Tabs.View style={{flex: 1, backgroundColor: 'white'}}>
                <AuthContainer
                  socialLoginLoading={socialLoginLoading}
                  props={props}
                />
              </Tabs.View>
              <Tabs.View style={{flex: 1, backgroundColor: 'white'}}>
                <SignInContainer props={props} />
              </Tabs.View>
            </Tabs.Views>
          </Tabs>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthTabsContainer;
const styles = ScaledSheet.create({
  absoluteView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
