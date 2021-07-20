import React from 'react';

import {Text, Image, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import dressesImage from '../Images/dresses.png';
import {black, robotoMedium} from '../Utils/theme';

const HomeDresses = ({onPress, image, title, navigate, id}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('HandBraceletSecond', id)}
      style={styles.container}>
      <Image
        // resizeMode="contain"
        style={styles.dressesImage}
        source={{
          uri: image
            ? image
            : 'https://www.hpl-service.eu/content/images/thumbs/def/default-image_600.png',
        }}
      />
      <TouchableOpacity
        onPress={() => navigate('HandBraceletSecond', id)}
        style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '5@s',
    // borderColor: black,
    // borderWidth: '0.5@s',
    marginBottom: '5@s',
    marginHorizontal: '5@s',
  },
  dressesImage: {
    borderRadius: '5@s',

    height: '200@s',
  },
  title: {
    backgroundColor: '#FF7E35',
    width: '100%',
    marginTop: '-20@s',
    padding: '4@s',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '10@s',
    textAlign: 'center',
    fontFamily: robotoMedium,
    fontWeight: 'normal',
  },
});

export default HomeDresses;
