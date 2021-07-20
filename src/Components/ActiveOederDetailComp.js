import React from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {CMYK, lightGray} from '../Utils/theme';

const ActiveOederDetailComp = ({title, image, qty, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagemainConatiner}>
        <View style={styles.checkboxContainer}>
          <Image
            style={styles.fourtypercentImage}
            source={{
              uri: image
                ? image
                : 'https://www.hpl-service.eu/content/images/thumbs/def/default-image_600.png',
            }}
          />
        </View>
        <View style={styles.quantitymainContainer}>
          <View style={styles.roundnecklineContainer}>
            <Text numberOfLines={11} style={styles.roundnecklineText}>
              {title}
            </Text>
          </View>
          <View>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityText}>Price:</Text>
              <Text style={styles.oneText}>$ {price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityText}>Quantity:</Text>
              <Text style={styles.oneText}>{qty}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    borderBottomColor: lightGray,
    borderBottomWidth: 6,
    marginTop: '10@s',
    paddingHorizontal: '10@s',
  },
  availablitemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availableitemText: {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14@s',
    color: 'black',
    marginLeft: '3@s',
  },
  fourtypercentImage: {
    resizeMode: 'contain',
    marginLeft: '3@s',
    height: '100@s',
    width: '90@s',
  },
  imagemainConatiner: {
    flexDirection: 'row',
    marginBottom: '10@s',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundnecklineContainer: {
    width: '100%',
  },
  quantitymainContainer: {
    marginLeft: '7@s',
    justifyContent: 'space-between',
  },
  roundnecklineText: {
    fontSize: '16@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22@s',
  },
  dollernumberText: {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '15@s',
    marginTop: '10@s',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
    color: CMYK,
    marginRight: '7@s',
  },
  oneText: {
    marginLeft: '5@s',
    marginRight: '5@s',
    fontSize: '16@s',
  },
});
export default ActiveOederDetailComp;
