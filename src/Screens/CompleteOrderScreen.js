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
import Icon from 'react-native-vector-icons/FontAwesome5';

import {blackOne, bottomTabColor, lightGray} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {CompleteOrderBottomcomponent} from '../Components';

const CompleteOrderScreen = ({
  navigate,
  goBack,
  activeOrdesData,
  cartLoading,
}) => {
  const renderItem = ({item}) => (
    <CompleteOrderBottomcomponent
      title={item?._id}
      navigate={navigate}
      item={item}
      orderStatus={item?.orderStatus}
      // image={item?.productImage}
    />
  );
  return (
    <View style={styles.Container}>
      <View style={styles.braceletdrawerContainer}>
        <TouchableOpacity onPress={() => navigate('drawer')}>
          <Icon name="bars" size={25} color="black" />
        </TouchableOpacity>
        <Image source={HeaderLogo} />
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name="chevron-left" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.shippingaddressContainer}>
        <Text style={styles.accountsettingText}>
          Complete Order {activeOrdesData?.products?.length}
        </Text>
      </View>
      <View style={{flex: 1}}>
        {cartLoading ? (
          <View style={styles.empty}>
            <ActivityIndicator color={bottomTabColor} size="large" />
          </View>
        ) : (
          <FlatList
            ListEmptyComponent={
              <View style={styles.empty}>
                <Text style={styles.noText}>No item in list</Text>
              </View>
            }
            renderItem={renderItem}
            data={activeOrdesData?.activeOrders}
            keyExtractor={(item) => item?._id}
          />
        )}
      </View>
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
    padding: '10@s',
  },
  accountsettingText: {
    textAlign: 'center',
    marginTop: '13@s',
    color: 'black',
    fontSize: '25@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '29@s',
    marginBottom: '7@s',
  },
  shippingaddressContainer: {
    borderBottomColor: lightGray,
    borderBottomWidth: '6@s',
  },
  shippingbuttonContainer: {
    padding: '10@s',
  },
  inputfieldsContainer: {
    padding: '10@s',
  },
  setdefaultaddressContainer: {
    padding: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
  },
  setdefaultaddressText: {
    marginLeft: '3@s',
    color: blackOne,
    fontSize: '17@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20@s',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noText: {
    fontSize: '22@s',
    color: blackOne,
    marginTop: '70%',
    fontWeight: 'bold',
  },
});

export default CompleteOrderScreen;
