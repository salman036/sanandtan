import React from 'react';

import {Text, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {black, graySix} from '../Utils/theme';

const ClothesCardHome = ({
  title,
  orignalPrice,
  image,
  navigate,
  id,
  handleRecent,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        navigate('HandBraceletSecond', id), handleRecent(id);
      }}
      style={styles.container}>
      <Image
        style={styles.pinkTopImage}
        source={{
          uri: image
            ? image
            : 'https://www.hpl-service.eu/content/images/thumbs/def/default-image_600.png',
        }}
      />
      <Text style={styles.discountClothePrice}>{title}</Text>
      <Text style={styles.clothePrice}>{orignalPrice}</Text>
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '10@s',
    alignItems: 'center',
  },

  pinkTopImage: {
    borderRadius: '5@s',
    height: '90@s',
    width: '100%',
  },

  discountClothePrice: {
    marginTop: '4@s',
    fontSize: '11@s',
    color: black,
    fontWeight: '400',
  },

  clothePrice: {
    marginTop: '10@s',
    fontSize: '8@s',
    color: graySix,
    fontWeight: '400',
    textDecorationLine: 'line-through',
  },
});
export default ClothesCardHome;
