import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabsComponent from '../Components/TabsComponent';

const SigninSignupTabsScreen = ({navigate}) => {

  
  return (
    <View style={styles.Container}>
      <TabsComponent navigate={navigate} />
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
  },
});

export default SigninSignupTabsScreen;
