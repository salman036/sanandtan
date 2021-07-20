import React from 'react';

import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import RightArrowIcon from '../assets/RightArrowIcon';
import {black, borderColor, grayLight} from '../Utils/theme';

const MyPictureBorderButton = ({textone, image}) => {
  return (
    <View style={styles.borderbuttonContainer}>
      <View style={styles.countryContainer}>
        <Text style={styles.countryText}>{textone}</Text>
        <View style={styles.usdConatiner}>
          <TouchableOpacity>
            <Image style={styles.image} source={{uri: image}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <RightArrowIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    marginBottom: '2@s',
  },
  usdConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50@s',
    justifyContent: 'space-between',
  },
  usdText: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
    color: grayLight,
  },
  countryText: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
    color: black,
  },
  image: {
    height: '27@s',
    width: '27@s',
    borderRadius: '60@s',
  },
});
export default MyPictureBorderButton;
