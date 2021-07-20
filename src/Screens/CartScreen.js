import React from 'react';

import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {bottomTabColor, lightGray, robotoBlack} from '../Utils/theme';
import PaymentCardModal from '../Modals/PaymentCardModal';
import CartBottomComponent from '../Components/CartBottomComponent';
import CheckoutComponent from '../Components/CheckoutComponent';
import sanandtanLogo from '../Images/sanandtanLogo.png';

const CartScreen = ({
  navigate,
  allCarts,
  cartLoading,
  handleDelte,
  removeCart,
  selectCart,
  handleActiveOrder,
  activeCartLoading,
  handleQty,
  quantityLoadingData,
  handleLessQty,
  cartDelteLoading,
  totalPrice,
  setModalVisible,
  modalVisible,
  handleChange,
}) => {
  const renderItem = ({item}) => (
    <CartBottomComponent
      title={item?.productName}
      image={item?.productImage}
      handleDelte={handleDelte}
      id={item?.product}
      removeCart={removeCart}
      item={item}
      qty={item?.qty}
      product_id={item?.product}
      handleQty={handleQty}
      handleLessQty={handleLessQty}
      price={item?.price}
    />
  );

  return (
    <View style={styles.Container}>
      <PaymentCardModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        handleChange={handleChange}
        handleActiveOrder={handleActiveOrder}
        activeCartLoading={activeCartLoading}
      />
      {quantityLoadingData || cartDelteLoading ? (
        <View style={styles.loadinBlackContainer}>
          <StatusBar
            backgroundColor="rgba(0,0,0,0.5)"
            barStyle="light-content"
          />
          <ActivityIndicator color={bottomTabColor} size="large" />
        </View>
      ) : null}

      <View style={styles.braceletdrawerContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <TouchableOpacity onPress={() => navigate('drawer')}>
            <Icon name="bars" size={25} color="black" />
          </TouchableOpacity>
          <Image source={sanandtanLogo} />
        </View>
        <Image
          source={{
            uri: allCarts?.productImage
              ? allCarts?.productImage
              : 'https://www.hpl-service.eu/content/images/thumbs/def/default-image_600.png',
          }}
        />
      </View>
      <View style={styles.carttextContainer}>
        <Text style={styles.cartText}>
          Cart {allCarts?.user_cart?.products?.length}
        </Text>
      </View>

      {cartLoading ? (
        <View style={styles.empty}>
          <ActivityIndicator color={bottomTabColor} size="large" />
        </View>
      ) : (
        <FlatList
          data={allCarts?.user_cart?.products}
          renderItem={renderItem}
          keyExtractor={(item) => item?._id}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No items in cart</Text>
            </View>
          }
        />
      )}

      <CheckoutComponent
        onPress={() => setModalVisible(true)}
        selectCart={selectCart}
        count={selectCart?.length}
        activeCartLoading={activeCartLoading}
        totalPrice={totalPrice}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
  },
  braceletdrawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    padding: '10@s',
  },
  cartText: {
    textAlign: 'center',
    marginTop: '10@s',
    fontSize: '20@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '23@s',
    fontFamily: robotoBlack,
    marginBottom: '5@s',
  },
  carttextContainer: {
    borderBottomColor: lightGray,
    borderBottomWidth: '6@s',
  },
  availableitemText: {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14@s',
    color: 'black',
    marginLeft: '3@s',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: '18@s',
    marginTop: '60%',
    fontFamily: robotoBlack,
  },
  loadinBlackContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
  },
});

export default CartScreen;
