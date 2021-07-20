import React from 'react';

import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {graySix, robotoMedium} from '../Utils/theme';

const HandBraceletscomponent = ({
  imageone,
  textone,
  id,
  navigate,
  handleRecent,
}) => {
  return (
    <View style={styles.handbraceletmainConatiner}>
      <TouchableOpacity
        onPress={() => {
          navigate('HandBraceletSecond', id), handleRecent(id);
        }}
        style={styles.firstimgContainer}>
        <Image
          style={styles.imageStyling}
          source={
            imageone
              ? {uri: imageone}
              : {
                  uri: 'https://www.hpl-service.eu/content/images/thumbs/def/default-image_600.png',
                }
          }
        />
        <Text style={styles.textStyling}>$ {textone}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  imageStyling: {
    resizeMode: 'contain',
    height: '100@s',
    width: '100@s',
  },
  handbraceletmainConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3@s',
    marginBottom: '5@s',
  },
  textStyling: {
    textAlign: 'center',
    marginTop: '5@s',
    color: graySix,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14@s',
    fontFamily: robotoMedium,
  },
});

export default HandBraceletscomponent;
