import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {bottomTabColor, themeColor} from '../Utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TestingBodyImage from '../Images/testingBody.png';
import pinkdressImage from '../Images/pinkdress.png';
import hat from '../Images/hat.png';
import neckLess from '../Images/neckLess.png';
import handBresslet from '../Images/handBresslet.png';
import bra from '../Images/bra.png';
import underware from '../Images/underware.png';
import rightFoot from '../Images/rightFoot.png';
import leftFoot from '../Images/leftFoot.png';
import {
  ProductsBarComponent,
  ProductsComponent,
  TotalPriceComponent,
} from '../Components';

const SingleManniqueScreen = ({
  navigate,
  setFooterTitle,
  footerTitle,
  manniqueLoading,
  manniqueData,
  imagessm,
  handleChange,
  handleChangePrice,
  totalAmmount,
  downloadImage,
  viewRef,
  bikiniData,
  scarfData,
  bracelateData,
  necklesData,
  hatData,
}) => {
  return (
    // <ScrollView>
    <View style={styles.Container}>
      <ImageBackground
        ref={viewRef}
        style={styles.TestingBodyImage}
        source={TestingBodyImage}>
        {bikiniData?.image ? (
          <Image
            style={styles.Bikini}
            source={{
              uri: bikiniData?.image,
            }}
          />
        ) : null}

        {hatData ? (
          <Image
            style={styles.Hats}
            source={{
              uri: hatData,
            }}
          />
        ) : null}

        {/* {imagessm.scarfImage ? (
            <Image style={styles.Scarf} source={{uri: imagessm.scarfImage}} />
          ) : null} */}
        {necklesData ? (
          <Image style={styles.neckles} source={{uri: necklesData}} />
        ) : null}
        {bracelateData ? (
          <Image
            style={styles.rightHandBresslet}
            source={{uri: bracelateData}}
          />
        ) : null}

        {/* <Image style={styles.leftHandBresslet} source={handBresslet} /> */}
        {/* <Image style={styles.bra} source={bra} /> */}
        {/* <Image style={styles.underware} source={underware} />
          <Image style={styles.rightFoot} source={rightFoot} />
          <Image style={styles.leftFoot} source={leftFoot} /> */}

        {imagessm?.tanningProduct ? (
          <Image
            style={styles.teasingProduct}
            source={{uri: imagessm?.tanningProduct}}
          />
        ) : null}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View></View>
          {/* <View style={{height: '100%', marginTop: 20}}>
            <TotalPriceComponent
              downloadImage={downloadImage}
              totalAmmount={totalAmmount}
            />
          </View> */}
        </View>
      </ImageBackground>
    </View>
    // </ScrollView>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  TestingBodyImage: {
    width: '100%',
    flex: 1,
  },
  Bikini: {
    position: 'absolute',
    left: '170@s',
    height: '250@s',
    width: '110@s',
    top: '315@s',
    transform: [{translateX: '-50@s'}, {translateY: '-172@s'}],
    zIndex: 1,
  },
  Hats: {
    height: '108@s',
    width: '108@s',
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2,
    left: '175@s',
    top: '-10@s',
    transform: [{translateX: '-50@s'}],
  },
  neckles: {
    position: 'absolute',
    top: '14%',
    left: '50%',
    transform: [{translateX: '-29@s'}],
    zIndex: 1,
    height: '80@s',
    width: '60@s',
  },
  rightHandBresslet: {
    position: 'absolute',
    top: '350@s',
    left: '160@s',
    transform: [{translateX: '-74@s'}, {translateY: '-24@s'}],
    height: '30@s',
    width: '30@s',
  },
  leftHandBresslet: {
    position: 'absolute',
    top: '50%',
    right: '48%',
    transform: [{translateX: '72@s'}, {translateY: '-24@s'}],
  },
  bra: {
    // height: '100@s',
    resizeMode: 'contain',
    // width: '70@s',
    position: 'absolute',
    left: '50%',
    top: '17%',
    transform: [{translateX: '-40@s'}, {translateY: '20@s'}],
  },
  underware: {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: [{translateX: '-50@s'}, {translateY: '-50@s'}],
    height: '100@s',
    resizeMode: 'contain',
    width: '100@s',
  },
  rightFoot: {
    position: 'absolute',
    bottom: '6%',
    zIndex: 1,
    left: '50%',
    transform: [{translateX: '-66@s'}, {translateY: '4@s'}],
    height: '70@s',
    width: '60@s',
  },
  leftFoot: {
    position: 'absolute',
    bottom: '6%',
    zIndex: 1,
    right: '50%',
    transform: [{translateX: '66@s'}, {translateY: '4@s'}],
    height: '70@s',
    width: '60@s',
  },

  teasingProduct: {
    position: 'absolute',
    bottom: '6%',
    zIndex: 1,
    right: '25%',
    transform: [{translateX: '66@s'}, {translateY: '4@s'}],
    height: '100@s',
    width: '100@s',

    borderRadius: '200@s',
  },
});

export default SingleManniqueScreen;
