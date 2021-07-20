import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {
  CMYK,
  lightGray,
  lightGreen,
  robotoBlack,
  robotoMedium,
} from '../Utils/theme';

const CompleteOrderBottomcomponent = ({
  title,
  image,
  navigate,
  item,
  orderStatus,
}) => {
  return (
    <View>
      {orderStatus === 'Complete' ? (
        <View style={styles.container}>
          <View style={styles.imagemainConatiner}>
            <View style={styles.quantitymainContainer}>
              <View style={styles.roundnecklineContainer}>
                <Text style={{fontFamily: robotoBlack, fontSize: 12}}>
                  Order Id Active
                </Text>
                <Text numberOfLines={11} style={styles.roundnecklineText}>
                  {title}
                </Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => navigate('ActiveOrderDetail', title)}
              style={styles.viewBtn}>
              <Text style={{color: 'white'}}>View items</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    borderBottomColor: lightGray,
    borderBottomWidth: 6,
    marginTop: '10@s',
    paddingHorizontal: '20@s',
    paddingVertical: '10@s',
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
  },
  roundnecklineText: {
    fontSize: '16@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22@s',
    fontFamily: robotoMedium,
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
    marginTop: '50@s',
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
  viewBtn: {
    backgroundColor: lightGreen,
    padding: '7@s',
    paddingLeft: '10@s',
    paddingRight: '10@s',
  },
});
export default CompleteOrderBottomcomponent;
