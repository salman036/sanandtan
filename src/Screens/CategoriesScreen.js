import React from 'react';
import {Text, View, Image, FlatList, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderLogo from '../Images/sanandtanLogo.png';
import CategoriesButton from '../Components/CategoryButton';
import {SearchInputField} from '../Components';
import {bottomTabColor, colorBlack, robotoBlack} from '../Utils/theme';

const CategoriesScreen = ({
  navigate,
  categoriesData,
  categoryLoading,
  internet,
  handleSearch,
}) => {
  let arr;
  const renderItem = ({item, index}) => {
    arr = index;
    return (
      <View style={{flex: 1}}>
        <CategoriesButton
          navigate={navigate}
          text={item?.title}
          id={item?._id}
          internet={internet}
        />
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      <View style={styles.categorydrawerContainer}>
        <TouchableOpacity onPress={() => navigate('drawer')}>
          <Icon name="bars" size={25} color="black" />
        </TouchableOpacity>
        <Image style={styles.headerImage} source={HeaderLogo} />
      </View>
      <SearchInputField
        onChangeText={(value) => handleSearch(value)}
        placeholder="Search"
      />
      <View style={styles.categoryContainer}>
        <View style={styles.categoryLineOne}></View>
        <Text style={styles.categoryText}>Categories</Text>
        <View style={styles.dcategoryLineTwo}></View>
      </View>
      {categoryLoading ? (
        <View style={styles.emptyContainer}>
          <ActivityIndicator color={bottomTabColor} size="large" />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          renderItem={renderItem}
          data={categoriesData}
          keyExtractor={(item) => item?._id}
        />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingTop: '10@s',
  },
  headerImage: {
    resizeMode: 'contain',
  },
  categorydrawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '55%',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '20@s',
  },
  categoryLineOne: {
    width: '74@s',
    backgroundColor: colorBlack,
    height: '1@s',
    marginLeft: '10@s',
  },
  dcategoryLineTwo: {
    width: '74@s',
    backgroundColor: colorBlack,
    height: '1@s',
    marginRight: '10@s',
  },
  categoryText: {
    fontSize: '20@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '23@s',
    textAlign: 'center',
    fontFamily: robotoBlack,
  },
  buttonsContainer: {
    marginTop: '25@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonsContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25@s',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
