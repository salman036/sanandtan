import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import RightArrowIcon from '../assets/RightArrowIcon';
import {borderColor, grayLight} from '../Utils/theme';

const BorderButonOne = ({textone, texttwo, onPress, loginType}) => {
  return (
    <TouchableOpacity
      disabled={loginType === 'social' ? true : false}
      onPress={onPress}
      style={styles.borderbuttonContainer}>
      <View style={styles.countryContainer}>
        <Text style={styles.countryText}>{textone}</Text>
        <View style={styles.usdConatiner}>
          <View>
            <Text style={styles.usdText}>{texttwo}</Text>
          </View>
          <View>
            <RightArrowIcon />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  borderbuttonContainer: {
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    marginTop: '20@s',
  },
  countryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10@s',
  },
  usdConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '55@s',
    // justifyContent: 'space-between',
  },
  usdText: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
    color: grayLight,
    marginRight: '10@s',
  },
  countryText: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
    color: 'black',
  },
});
export default BorderButonOne;
