import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import CheckBoxComponent from '../Components/CheckBoxComponent';
import {CMYK, lightGray} from '../Utils/theme';

const CartBottomComponent = ({
  image,
  title,
  handleDelte,
  id,
  item,
  removeCart,
  qty,
  handleQty,
  product_id,
  handleLessQty,
  price,
}) => {
  const [count, setCount] = useState(qty);
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.availablitemContainer}></View>
      <TouchableOpacity
        onPress={() => {
          setChecked(!checked), removeCart(item, checked, price);
        }}
        style={styles.imagemainConatiner}>
        <View style={styles.checkboxContainer}>
          <CheckBoxComponent
            removeCart={removeCart}
            setChecked={setChecked}
            checked={checked}
            item={item}
            id={id}
            price={price}
          />
          <Image
            style={styles.fourtypercentImage}
            source={{
              uri:
                image === undefined || image === null || image === ''
                  ? 'https://www.hpl-service.eu/content/images/thumbs/def/default-image_600.png'
                  : image,
            }}
          />
        </View>
        <View style={styles.quantitymainContainer}>
          <View style={styles.roundnecklineContainer}>
            <View style={{width: '100%'}}>
              <Text numberOfLines={1} style={styles.roundnecklineText}>
                {title}
              </Text>
              <Text numberOfLines={1} style={styles.roundnecklineTextPrice}>
                $ {price * qty}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                handleDelte(id),
                  checked ? removeCart(item, checked) : console.log();
              }}>
              <Icon name="trash-alt" size={18} />
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.dollernumberText}>$21.99</Text> */}
          <TouchableOpacity style={styles.mgraybottomContainer}>
            <Text style={styles.mgrayText}>M/ Gray</Text>
            <Icon name="angle-down" size={18} color={CMYK} />
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>Quantity:</Text>
            <TouchableOpacity
              style={{padding: 10}}
              disabled={qty < 1 ? true : false}
              onPress={() => {
                checked ? null : handleLessQty(product_id, 1);
              }}>
              <Icon name="minus" />
            </TouchableOpacity>
            <Text style={styles.oneText}>{qty}</Text>
            <TouchableOpacity
              style={{padding: 10}}
              onPress={() => {
                checked ? null : handleQty(product_id, 1);
              }}>
              <Icon name="plus" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
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

  fourtypercentImage: {
    height: '80@s',
    width: '80@s',
  },
  imagemainConatiner: {
    flexDirection: 'row',
    marginBottom: '10@s',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundnecklineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '72%',
    justifyContent: 'space-between',
  },
  quantitymainContainer: {
    marginLeft: '7@s',
  },
  roundnecklineText: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
    width: '70%',
  },
  roundnecklineTextPrice: {
    fontSize: '10@s',
    fontWeight: 'bold',
    lineHeight: '12@s',
    width: '70%',
    marginTop: '10@s',
  },
  dollernumberText: {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '15@s',
    marginTop: '10@s',
  },
  mgraybottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15@s',
  },
  mgrayText: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12@s',
    color: CMYK,
    marginRight: '5@s',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '17@s',
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
export default CartBottomComponent;
