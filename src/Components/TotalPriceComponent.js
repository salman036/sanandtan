import React, {useEffect} from 'react';

import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {SignUpButton} from '.';

import PriceTagImage from '../Images/Pricetag.png';
import {
  black,
  crayolaluorescentgreen,
  robotoMedium,
  white,
} from '../Utils/theme';

const TotalPriceComponent = ({
  totalAmmount,
  downloadImage,
  hatData,
  bikiniData,
  scarfData,
  bracelateData,
  tanningCreamData,
  flipFlopData,
  waistOfBundleData,
  sunBlockData,
  ankletsData,
  totalProPriceData,
  totalPrice,
  handleTotalPrice,
  necklesData,
  waistBraceletsDta,
}) => {
  let sum =
    bikiniData +
    hatData +
    scarfData +
    bracelateData +
    tanningCreamData +
    flipFlopData +
    waistOfBundleData +
    sunBlockData +
    ankletsData +
    necklesData +
    waistBraceletsDta;
  useEffect(() => {
    let sum =
      bikiniData +
      hatData +
      scarfData +
      bracelateData +
      tanningCreamData +
      flipFlopData +
      waistOfBundleData +
      sunBlockData +
      ankletsData +
      necklesData +
      waistBraceletsDta;

    handleTotalPrice(
      bikiniData +
        hatData +
        scarfData +
        bracelateData +
        tanningCreamData +
        flipFlopData +
        waistOfBundleData +
        sunBlockData +
        ankletsData +
        necklesData +
        waistBraceletsDta,
    );
  }, [totalProPriceData]);

  return (
    <View style={styles.Container}>
      <Text style={styles.priceText}>Total Price</Text>
      <TouchableOpacity style={styles.srButton}>
        <Image style={styles.PriceTagImage} source={PriceTagImage} />
        <Text style={styles.buttonText}>S.R </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.priceButton}>
        <Image style={styles.PriceTagImage} source={PriceTagImage} />
        <Text style={styles.buttonText}>${sum}</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        onPress={() => downloadImage()}
        style={styles.saveImageContainer}>
        <Text style={styles.imageText}>Save Image</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    marginRight: '10@s',
    backgroundColor: '#BEBCB7',
    width: '90@s',
    borderTopLeftRadius: '4@s',
    borderTopRightRadius: '4@s',
  },
  priceText: {
    color: white,
    textAlign: 'center',
    fontSize: '14@s',
    fontWeight: '500',
    padding: '4@s',
    fontFamily: robotoMedium,
  },
  srButton: {
    backgroundColor: white,
    borderColor: crayolaluorescentgreen,
    borderWidth: '2@s',
    borderRadius: '2@s',
    padding: '6@s',
    alignItems: 'center',
  },
  PriceTagImage: {
    position: 'absolute',
    top: '1@s',
    left: '0@s',
    width: '15@s',
    height: '12@s',
  },
  buttonText: {
    fontSize: '14@s',
    fontWeight: '400',
    fontFamily: robotoMedium,
  },
  priceButton: {
    backgroundColor: white,
    borderColor: crayolaluorescentgreen,
    borderWidth: '2@s',
    borderRadius: '2@s',
    padding: '6@s',
    alignItems: 'center',
    marginTop: '4@s',
  },
  saveImageContainer: {
    backgroundColor: white,
    padding: '10@s',
    marginTop: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: black,
    fontSize: '12@s',
    fontWeight: 'bold',
    fontFamily: robotoMedium,
  },
});

export default TotalPriceComponent;
