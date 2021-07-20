import React from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderLogo from '../Images/sanandtanLogo.png';
import {SearchInputField, HomeDresses} from '../Components';

const AllProductsScreen = ({
  navigate,
  allProductsWithOutCategory,
  handleSearch,
  goBack,
}) => {
  const renderItem = ({item}) => (
    <HomeDresses
      id={item?._id}
      title={item.title}
      image={item?.image}
      navigate={navigate}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.drawerContainer}>
        <TouchableOpacity style={{marginTop: 10}} onPress={() => goBack()}>
          <Icon name="chevron-left" size={25} color="black" />
        </TouchableOpacity>
        <View style={{width: '90%'}}>
          <SearchInputField
            onChangeText={(value) => handleSearch(value)}
            placeholder="Search Products"
          />
        </View>
      </View>

      {allProductsWithOutCategory?.data?.product?.length === 0 ? (
        <View style={styles.empty}>
          <Text>No products found</Text>
        </View>
      ) : (
        <FlatList
          data={allProductsWithOutCategory?.data?.product}
          renderItem={renderItem}
          keyExtractor={(item) => item?._id}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '10@s',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: '5@s',
    marginTop: '2@s',
  },
  drawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '12@s',
    marginBottom: '20@s',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AllProductsScreen;
