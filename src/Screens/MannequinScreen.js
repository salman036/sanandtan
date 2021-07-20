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
import ViewShot from 'react-native-view-shot';

import TestingBodyImage from '../Images/testingBody.png';

import {
  ProductsBarComponent,
  ProductsComponent,
  TotalPriceComponent,
} from '../Components';
import PaymentCardModal from '../Modals/PaymentCardModal';

const MannequinScreen = ({
  setModalVisible,
  modalVisible,
  handleStripChange,
  handleManniqueOrder,
  setSelectCart,
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
  hatData,
  bikiniData,
  scarfData,
  bracelateData,
  sunBlockData,
  tanningCreamData,
  waistBraceletsDta,
  flipFlopData,
  necklesData,
  ankletsData,
  waistOfBundleData,
  handleHatImage,
  handleDressImage,
  handleScarfImage,
  handleFlipFlopImage,
  handleNeckles,
  handleSetHandBracelate,
  handlAnklests,
  handleWaistBracelts,
  handleSunBlock,
  handleWaistOfBundle,
  handleTanningCream,
  handleProducts,
  setFooterId,
  setTotalPrice,
  totalPrice,
  handleTotalPrice,
  totalProPriceData,
  specificOrderLoading,
}) => {
  return (
    <ScrollView>
      <PaymentCardModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        handleChange={handleStripChange}
        handleActiveOrder={handleManniqueOrder}
      />
      <View style={styles.Container}>
        <ViewShot ref={viewRef} options={{format: 'jpg', quality: 0.8}}>
          <ImageBackground
            style={styles.TestingBodyImage}
            source={TestingBodyImage}>
            {bikiniData?.productImage ? (
              <Image
                style={styles.Bikini}
                source={{
                  uri: bikiniData?.productImage,
                }}
              />
            ) : null}

            {waistBraceletsDta?.productImage ? (
              <Image
                style={styles.WaistBraclet}
                source={{
                  uri: waistBraceletsDta?.productImage,
                }}
              />
            ) : null}

            {hatData?.productImage ? (
              <Image
                style={styles.Hats}
                source={{
                  uri: hatData?.productImage,
                }}
              />
            ) : null}
            {ankletsData?.productImage ? (
              <Image
                style={styles.ankles}
                source={{
                  uri: ankletsData?.productImage,
                }}
              />
            ) : null}

            {scarfData?.productImage ? (
              <Image
                style={styles.Scarf}
                source={{uri: scarfData?.productImage}}
              />
            ) : null}
            {necklesData?.productImage ? (
              <Image
                style={styles.neckles}
                source={{uri: necklesData?.productImage}}
              />
            ) : null}

            {bracelateData?.productImage ? (
              <Image
                style={styles.rightHandBresslet}
                source={{uri: bracelateData?.productImage}}
              />
            ) : null}

            {flipFlopData?.productImage ? (
              <Image
                style={styles.rightFoot}
                source={{uri: flipFlopData?.productImage}}
              />
            ) : null}

            {sunBlockData?.productImage ? (
              <Image
                style={styles.sunBlockProduct}
                source={{uri: sunBlockData?.productImage}}
              />
            ) : null}

            {tanningCreamData?.productImage ? (
              <Image
                style={styles.teasingProduct}
                source={{uri: tanningCreamData?.productImage}}
              />
            ) : null}

            {waistOfBundleData?.productImage ? (
              <Image
                style={styles.waistOfBundleProduct}
                source={{uri: waistOfBundleData?.productImage}}
              />
            ) : null}

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <ProductsBarComponent
                  setFooterId={setFooterId}
                  setFooterTitle={setFooterTitle}
                />
              </View>
              <View style={{height: '100%', marginTop: 20}}>
                <TotalPriceComponent
                  downloadImage={downloadImage}
                  totalAmmount={totalAmmount}
                  handleTotalPrice={handleTotalPrice}
                  totalPrice={totalPrice}
                  totalProPriceData={totalProPriceData}
                  hatData={hatData?.price === undefined ? 0 : hatData?.price}
                  bikiniData={
                    bikiniData?.price === undefined ? 0 : bikiniData?.price
                  }
                  scarfData={
                    scarfData?.price === undefined ? 0 : scarfData?.price
                  }
                  bracelateData={
                    bracelateData?.price === undefined
                      ? 0
                      : bracelateData?.price
                  }
                  tanningCreamData={
                    tanningCreamData?.price === undefined
                      ? 0
                      : tanningCreamData?.price
                  }
                  flipFlopData={
                    flipFlopData?.price === undefined ? 0 : flipFlopData?.price
                  }
                  waistOfBundleData={
                    waistOfBundleData?.price === undefined
                      ? 0
                      : waistOfBundleData?.price
                  }
                  sunBlockData={
                    sunBlockData?.price === undefined ? 0 : sunBlockData?.price
                  }
                  ankletsData={
                    ankletsData?.price === undefined ? 0 : ankletsData?.price
                  }
                  necklesData={
                    necklesData?.price === undefined ? 0 : necklesData?.price
                  }
                  waistBraceletsDta={
                    waistBraceletsDta?.price === undefined
                      ? 0
                      : waistBraceletsDta?.price
                  }
                />
              </View>
            </View>
          </ImageBackground>
        </ViewShot>
        <View>
          <ProductsComponent
            footerTitle={footerTitle}
            navigate={navigate}
            manniqueLoading={manniqueLoading}
            manniqueData={manniqueData}
            handleChange={handleChange}
            handleChangePrice={handleChangePrice}
            handleHatImage={handleHatImage}
            handleDressImage={handleDressImage}
            setModalVisible={setModalVisible}
            setSelectCart={setSelectCart}
            downloadImage={downloadImage}
            //
            handleScarfImage={handleScarfImage}
            handleFlipFlopImage={handleFlipFlopImage}
            handleNeckles={handleNeckles}
            handleSetHandBracelate={handleSetHandBracelate}
            handlAnklests={handlAnklests}
            handleWaistBracelts={handleWaistBracelts}
            handleSunBlock={handleSunBlock}
            handleWaistOfBundle={handleWaistOfBundle}
            handleTanningCream={handleTanningCream}
            handleProducts={handleProducts}
            handleTotalPrice={handleTotalPrice}
            specificOrderLoading={specificOrderLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  TestingBodyImage: {
    width: '100%',
  },
  Bikini: {
    position: 'absolute',
    left: '152@s',
    height: '200@s',
    width: '150@s',
    top: '51%',
    transform: [{translateX: '-52@s'}, {translateY: '-172@s'}],
    zIndex: 1,
  },
  WaistBraclet: {
    position: 'absolute',
    left: '190@s',
    height: '210@s',
    width: '70@s',
    top: '55%',
    transform: [{translateX: '-52@s'}, {translateY: '-172@s'}],
    zIndex: 3,
  },
  Hats: {
    height: '90@s',
    width: '90@s',
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2,
    left: '170@s',
    top: '-20@s',
    transform: [{translateX: '-40@s'}],
  },
  ankles: {
    height: '40@s',
    width: '30@s',
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2,
    left: '165@s',
    bottom: '15%',
    transform: [{translateX: '-38@s'}],
  },
  neckles: {
    position: 'absolute',
    top: '90@s',
    left: '180@s',
    transform: [{translateX: '-25@s'}],
    zIndex: 5,
    height: '80@s',
    width: '42@s',
  },
  rightHandBresslet: {
    position: 'absolute',
    top: '275@s',
    left: '177@s',
    transform: [{translateX: '-74@s'}, {translateY: '-24@s'}],
    height: '30@s',
    width: '30@s',
    zIndex: 2,
  },
  leftHandBresslet: {
    position: 'absolute',
    top: '275@s',
    right: '175@s',
    zIndex: 2,
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
    height: '50@s',
    width: '50@s',

    borderRadius: '200@s',
  },

  waistOfBundleProduct: {
    position: 'absolute',
    bottom: '25%',
    zIndex: 4,
    right: '25%',
    transform: [{translateX: '66@s'}, {translateY: '4@s'}],
    height: '50@s',
    width: '50@s',

    borderRadius: '200@s',
  },

  sunBlockProduct: {
    position: 'absolute',
    bottom: '45%',
    zIndex: 1,
    right: '25%',
    transform: [{translateX: '66@s'}, {translateY: '4@s'}],
    height: '50@s',
    width: '50@s',

    borderRadius: '200@s',
  },
  Scarf: {
    position: 'absolute',
    top: '15%',
    zIndex: 4,
    right: '50%',
    transform: [{translateX: '74@s'}, {translateY: '4@s'}],
    height: '80@s',
    width: '145@s',
  },
});

export default MannequinScreen;
