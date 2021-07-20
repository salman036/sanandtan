import React, {useRef} from 'react';
import {Text, View, Image, ActivityIndicator, Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {FlatGrid} from 'react-native-super-grid';

import {bottomTabColor, colorBlack, robotoBlack} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';

const HandBraceletsScreen = ({
  navigate,
  goBack,
  params,
  producctData,
  productLoading,
  searchProduct,
  handleRecent,
}) => {
  const flatListRef = useRef();
  const renderItem = ({item}) => (
    <HandBraceletsComponent
      navigate={navigate}
      imageone={item?.image}
      textone={item?.price}
      id={item?._id}
      handleRecent={handleRecent}
    />
  );
  const renderEmpty = ({item}) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>No item found</Text>
    </View>
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

      <SearchInputField
        onChangeText={(value) => searchProduct(value)}
        placeholder="Search"
      />

      <View style={styles.chandbraceletContainer}>
        <View style={styles.handbraceletLineOne}></View>
        <Text style={styles.handbraceletText}>{params?.text}</Text>
        <View style={styles.handbraceletLineTwo}></View>
      </View>
      {productLoading ? (
        <View style={styles.empty}>
          <ActivityIndicator color={bottomTabColor} size="large" />
        </View>
      ) : (
        <FlatGrid
          ref={flatListRef}
          itemDimension={Platform.OS === 'ios' ? 100 : 115}
          renderItem={renderItem}
          data={producctData}
          ListEmptyComponent={renderEmpty}
          keyExtractor={(item) => item?._id}
          initialNumToRender={
            producctData?.length > 8 ? 8 : producctData?.length
          }
          // scrollToIndex={1}
          // initialScrollIndex={producctData?.length > 5 ? 1 : 0}
          onScrollToIndexFailed={(error) => {
            flatListRef.current.scrollToOffset({
              offset: error.averageItemLength * error.index,
              animated: true,
            });
            setTimeout(() => {
              if (producctData.length !== 0 && flatListRef !== null) {
                flatListRef.current.scrollToIndex({
                  index: error.index,
                  animated: true,
                });
              }
            }, 1000);
          }}
        />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    padding: '10@s',
  },
  braceletdrawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chandbraceletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '20@s',
    marginBottom: '20@s',
  },
  handbraceletLineOne: {
    width: '74@s',
    backgroundColor: colorBlack,
    height: '1@s',
    marginLeft: '10@s',
  },
  handbraceletLineTwo: {
    width: '74@s',
    backgroundColor: colorBlack,
    height: '1@s',
    marginRight: '10@s',
  },
  handbraceletText: {
    fontSize: '20@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '23@s',
    textAlign: 'center',
    fontFamily: robotoBlack,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HandBraceletsScreen;
