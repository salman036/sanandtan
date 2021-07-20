import React from 'react';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';

const ToastMessage = ({text1}) => {
  return (
    <View>
      <Toast type="error" visibilityTime={1000} />
    </View>
  );
};

export default ToastMessage;
