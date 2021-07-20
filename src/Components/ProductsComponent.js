import React from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {getAllProducts} from '../actions/products';
import {
  bottomTabColor,
  fluorescentyellow,
  robotoMedium,
  white,
} from '../Utils/theme';

const ProductsComponent = ({
  navigate,
  footerTitle,
  manniqueLoading,
  manniqueData,
  handleChange,
  handleChangePrice,
  handleHatImage,
  handleDressImage,
  setModalVisible,
  setSelectCart,
  downloadImage,
  //
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
  productTotalPrice,
  handleTotalPrice,
  specificOrderLoading,
}) => {
  const setImage = (image, price, item) => {
    if (footerTitle === 'Bikni') {
      handleDressImage(
        item?.qty,
        item?._id,
        item?.title,
        item?.mani_image,
        price,
      );
      return;
    }
    if (footerTitle === 'Hats') {
      let data = {
        product: item?._id,
        productImage: item?.image,
        productName: item?.title,
        price: item?.price,
      };
      handleHatImage(
        item?.qty,
        item?._id,
        item?.title,
        item?.mani_image,
        price,
      );
      handleChange('hatImage', data);
      handleChangePrice('hatPrice', price);
      // setSelectCart(item);
      return;
    }

    if (footerTitle === 'Scarf') {
      handleScarfImage(
        item?.qty,
        item?._id,
        item?.title,
        item?.mani_image,
        price,
      );
      handleChange('scarfImage', image);
      handleChangePrice('scarfPrice', price);
      return;
    }

    if (footerTitle === 'Flip Flop') {
      handleFlipFlopImage(
        item?.quantity,
        item?._id,
        item?.title,
        item?.mani_image,
        item?.price,
      );
      return;
    }

    if (footerTitle === 'Necklace') {
      handleNeckles(
        item?.quantity,
        item?._id,
        item?.title,
        item?.mani_image,
        item?.price,
      );
      return;
    }

    if (footerTitle === 'Hand brecelet') {
      handleSetHandBracelate(
        item?.quantity,
        item?._id,
        item?.title,
        item?.mani_image,
        price,
      );
      return;
    }

    if (footerTitle === 'Anklets') {
      handlAnklests(
        item?.qty,
        item?._id,
        item?.title,
        item?.mani_image,
        item?.price,
      );
      return;
    }
    if (footerTitle === 'Waist Bracelets') {
      handleWaistBracelts(
        item?.qty,
        item?._id,
        item?.title,
        item?.mani_image,
        item?.price,
      );
      return;
    }
    if (footerTitle === 'Sunblock Cream') {
      handleSunBlock(
        item?.qty,
        item?._id,
        item?.title,
        item?.mani_image,
        item?.price,
      );
      return;
    }
    if (footerTitle === 'The waist of the bundle') {
      handleWaistOfBundle(
        item?.qty,
        item?._id,
        item?.title,
        item?.mani_image,
        item?.price,
      );
      return;
    }

    if (footerTitle === 'Tanning cream') {
      handleTanningCream(
        item?.qty,
        item?._id,
        item?.title,
        item?.mani_image,
        item?.price,
      );
      return;
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setImage(item?.image, item?.price, item), handleTotalPrice(item?.price);
      }}
      style={styles.product}>
      <Image style={styles.image} source={{uri: item?.image}} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.Container}>
      {/* <Image style={styles.dressImage} source={pinkdressImage} /> */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.productNameBtn}>
          <Text numberOfLines={1} style={styles.productName}>
            {footerTitle ? footerTitle : 'Select Category'}
          </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true), downloadImage();
            }}
            style={styles.proceedBtn}>
            <Text style={styles.proceedBtnText}>
              {specificOrderLoading ? (
                <ActivityIndicator color={white} />
              ) : (
                'Proceed To Checkout'
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productList}>
        {manniqueLoading ? (
          <View style={styles.empty}>
            <ActivityIndicator color={bottomTabColor} size="large" />
          </View>
        ) : manniqueData?.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No products</Text>
          </View>
        ) : footerTitle === '' ? null : (
          <FlatList
            horizontal
            keyExtractor={(item) => item?._id}
            renderItem={renderItem}
            data={manniqueData}
          />
        )}
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  Container: {
    backgroundColor: white,
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  productNameBtn: {
    backgroundColor: fluorescentyellow,
    justifyContent: 'center',
    paddingTop: '4@s',
    paddingBottom: '7@s',
    paddingLeft: '7@s',
    paddingRight: '4@s',
    alignItems: 'center',
    marginLeft: '8@s',
  },
  productName: {
    fontSize: '17@s',
    fontWeight: '700',
    color: 'black',
    maxWidth: '170@s',
    fontFamily: robotoMedium,
  },
  proceedBtn: {
    backgroundColor: '#FF4640',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '6@s',
    paddingBottom: '6@s',
    paddingLeft: '10@s',
    paddingRight: '10@s',
    borderRadius: '2@s',
    marginRight: '8@s',
  },
  proceedBtnText: {
    fontSize: '11@s',
    fontWeight: '500',
    color: white,
    fontFamily: robotoMedium,
  },
  productList: {
    backgroundColor: fluorescentyellow,
    padding: '10@s',
    flexDirection: 'row',
    flex: 1,
  },
  product: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '6@s',
    paddingBottom: '1@s',
    width: '80@s',
    backgroundColor: white,
    borderRadius: '10@s',
    marginRight: '10@s',
  },
  dressImage: {
    position: 'absolute',
    left: '50%',
    height: '200@s',
    width: '100@s',
    top: '0%',
    transform: [{translateX: '-50@s'}, {translateY: '-430@s'}],
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',

    flex: 1,
  },
  image: {
    height: '70@s',
    width: '70@s',
  },
  emptyText: {
    fontSize: '16@s',
    lineHeight: '22@s',
    fontWeight: '700',
  },
});
export default ProductsComponent;
