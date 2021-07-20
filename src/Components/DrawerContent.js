import React, {useEffect} from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {getAllCategories} from '../actions/categories';
import {getAllProducts} from '../actions/products';
import {
  bottomTabColor,
  lightBlack,
  platinum,
  robotoBlack,
  robotoMedium,
} from '../Utils/theme';
import JhonSmithSmallImage from '../Images/jhonsmallimage.png';
import SettingIcon from '../assets/SettingIcon';
import BikiniIcon from '../assets/BikiniIcon';

const DrawerContent = ({navigation}) => {
  const {userData} = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const {categoriesData, categoryLoading} = useSelector(
    (store) => store.categories,
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        {
          navigation.navigate('HandBracelets', {
            id: item?._id,
            text: item?.title,
          }),
            dispatch(getAllProducts(item?._id));
        }
      }}
      style={styles.mainContainer}>
      <Text style={styles.textStyling}>{item?.title}</Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    dispatch(getAllCategories(''));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftarrowiconContainer}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Icon name="angle-left" size={36} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.jhondrawerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyProfile')}
          style={styles.jhonsmithContainer}>
          <Image
            style={styles.image}
            source={{
              uri: userData?.image
                ? userData?.image
                : 'https://www.centrik.in/wp-content/uploads/2017/02/user-image-.png',
            }}
          />
          <Text
            numberOfLines={2}
            style={styles.jhonsmithText}>{`${userData?.firstname}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => navigation.navigate('AccountSetting')}>
          <SettingIcon />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 1}}>
          {categoryLoading ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator color={bottomTabColor} size="large" />
            </View>
          ) : (
            <FlatList
              renderItem={renderItem}
              data={categoriesData}
              initialNumToRender={15}
              keyExtractor={(item) => item?._id}
            />
          )}
        </View>

        {/* <TouchableOpacity
          onPress={() => navigation.navigate('Mannequin')}
          style={styles.mainContainer}>
          <View style={styles.iconContainer}>
            <BikiniIcon />
          </View>
          <Text style={styles.textStyling}>Mannequin Screen</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  leftarrowiconContainer: {
    borderBottomColor: platinum,
    borderBottomWidth: 1,
    padding: '5@s',
  },
  jhondrawerContainer: {
    borderBottomColor: platinum,
    borderBottomWidth: 1,
    padding: '5@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jhonsmithContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '12@s',
    marginBottom: '12@s',
    paddingRight: '10@s',
  },
  jhonsmithText: {
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '14@s',
    color: lightBlack,
    marginLeft: '16@s',
    textTransform: 'capitalize',
    width: '140@s',
    fontFamily: robotoBlack,
  },
  mainContainer: {
    padding: '10@s',
    borderBottomColor: platinum,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2@s',
    marginBottom: '2@s',
  },
  textStyling: {
    marginLeft: '10@s',
    color: lightBlack,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: robotoMedium,
  },
  iconContainer: {
    width: '30@s',
  },
  image: {
    height: '30@s',
    width: '30@s',
    borderRadius: '60@s',
  },
});

export default DrawerContent;
