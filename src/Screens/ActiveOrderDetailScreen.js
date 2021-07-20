import React from 'react';

import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderLogo from '../Images/sanandtanLogo.png';
import {bottomTabColor, gray78, white} from '../Utils/theme';
import {ActiveOederDetailComp} from '../Components';

const ActiveOrderDetailScreen = ({
  navigate,
  goBack,
  spectificActiveOrderData,
  specificOrderLoading,
}) => {
  const renderItem = ({item}) => (
    <ActiveOederDetailComp
      title={item?.productName}
      image={item?.productImage}
      qty={item?.qty}
      price={item?.price}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.braceletdrawerContainer}>
        <TouchableOpacity onPress={() => navigate('drawer')}>
          <Icon name="bars" size={25} color="black" />
        </TouchableOpacity>
        <Image source={HeaderLogo} />
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name="chevron-left" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        {specificOrderLoading ? (
          <View style={styles.empty}>
            <ActivityIndicator size="large" color={bottomTabColor} />
          </View>
        ) : (
          <View style={styles.body}>
            {spectificActiveOrderData?.activeOrder[0]?.screenShot ? (
              <Image
                // resizeMode="contain"
                style={{height: '100%', width: '100%', position: 'absolute'}}
                source={{
                  uri: spectificActiveOrderData?.activeOrder[0]?.screenShot,
                }}
              />
            ) : (
              <FlatList
                renderItem={renderItem}
                data={spectificActiveOrderData?.activeOrder[0]?.products}
                keyExtractor={(item) => item?._id}
              />
            )}
            {/* <View style={styles.totalContainer}>
              <Text style={styles.totalText}>
                Total: ${' '}
                {spectificActiveOrderData?.activeOrder[0]?.payment_amount}
              </Text>
            </View> */}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  braceletdrawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@s',
    borderBottomColor: gray78,
    borderBottomWidth: 1,
    paddingBottom: '10@s',
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: '18@s',
    fontWeight: 'bold',
  },
  totalContainer: {
    backgroundColor: bottomTabColor,
    padding: '10@s',
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ActiveOrderDetailScreen;
