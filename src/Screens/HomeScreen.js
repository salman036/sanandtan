import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {
  bottomTabColor,
  graySix,
  robotoBlack,
  robotoMedium,
  white,
} from '../Utils/theme';
import ClothesCardHome from '../Components/ClothesCardHome';
import HomeDresses from '../Components/HomeDresses';

import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderLogo from '../Images/sanandtanLogo.png';

const HomeScreen = ({
  navigate,
  recommendedData,
  recommendedLoading,
  handleRecent,
  internet,
}) => {
  const renderItem = ({item}) => (
    <ClothesCardHome
      title={item.title}
      image={item?.image}
      orignalPrice={item.orignalPrice}
      navigate={navigate}
      id={item?._id}
      handleRecent={handleRecent}
      internet={internet}
    />
  );
  const renderItemOne = ({item}) => (
    <HomeDresses
      onPress={() => navigate('HandBraceletSecond')}
      id={item?._id}
      title={item.title}
      image={item?.image}
      navigate={navigate}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.drawerContainer}>
        <TouchableOpacity onPress={() => navigate('drawer')}>
          <Icon name="bars" size={25} color="black" />
        </TouchableOpacity>
        <Image style={{marginTop: 2}} source={HeaderLogo} />
        <TouchableOpacity onPress={() => navigate('AllProducts')}>
          <Icon name="search" size={20} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.5}}>
        {recommendedLoading ? (
          <View style={styles.empty}>
            <ActivityIndicator color={bottomTabColor} size="large" />
          </View>
        ) : (
          <FlatList
            numColumns={3}
            data={recommendedData?.products}
            renderItem={renderItem}
            keyExtractor={(item) => item?._id}
          />
        )}
      </View>
      <Text style={styles.heading}>Daily Recommendation</Text>
      <Text style={styles.subHeading}>Find the Best Fashion Inspiration</Text>
      <View style={{flex: 0.5, backgroundColor: '#F4F4F4', padding: 10}}>
        {recommendedLoading ? (
          <View style={styles.empty}>
            <ActivityIndicator color={bottomTabColor} size="large" />
          </View>
        ) : (
          <FlatList
            // itemDimension={130}
            numColumns={2}
            data={recommendedData?.products}
            renderItem={renderItemOne}
            keyExtractor={(item) => item?._id}
          />
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingLeft: '4@s',
    paddingRight: '4@s',
    paddingTop: '10@s',
  },
  heading: {
    fontSize: '20@s',
    paddingLeft: '10@s',
    fontFamily: robotoMedium,
  },
  subHeading: {
    fontSize: '12@s',
    color: graySix,
    paddingLeft: '10@s',
    marginBottom: '10@s',
    fontFamily: robotoMedium,
  },
  drawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '12@s',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
