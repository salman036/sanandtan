import React, {useRef} from 'react';
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {
  bottomTabColor,
  colorBlack,
  robotoBlack,
  robotoMedium,
} from '../Utils/theme';

import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import {ClothesCardHome} from '../Components';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RecentProductScreen = ({navigate, recentData, goBack}) => {
  const handleRecent = () => {
    console.log();
  };
  const renderItem = ({item}) => (
    <ClothesCardHome
      title={item.title}
      image={item?.image}
      orignalPrice={item.orignalPrice}
      navigate={navigate}
      id={item?._id}
      disabled={true}
      handleRecent={handleRecent}
    />
  );

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.header}>
        <Icon size={18} name="arrow-left" />
        <Text style={styles.recentText}>Recent View</Text>
      </TouchableOpacity>
      <FlatList
        numColumns={3}
        data={recentData?.products}
        renderItem={renderItem}
        keyExtractor={(item) => item?._id}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    padding: '10@s',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentText: {
    fontSize: '14@s',
    fontFamily: robotoMedium,
    marginLeft: '10@s',
  },
});

export default RecentProductScreen;
