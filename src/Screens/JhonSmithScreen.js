import React, {useRef} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {
  black,
  graySix,
  internetStatus,
  robotoBlack,
  robotoMedium,
  themeColor,
} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SettingIcon from '../assets/SettingIcon';
import JhonSmithImage from '../Images/Jhonsmith.png';
import ActiveOrderIcon from '../assets/ActiveOrderIcon';
import CompleteOrderIcon from '../assets/CompleteOrderIcon';
import RecentlyViewedIcon from '../assets/RecentlyViewIcon';
import HelpIcon from '../assets/HelpIcon';
import RightArrowIcon from '../assets/RightArrowIcon';

const JhonSmithScreen = ({
  navigate,
  goBack,
  params,
  userData,
  imageUpload,
  localImage,
  languageChange,
  loginType,
  internet,
  removeImage,
  refRbImageSheet,
}) => {
  return (
    <View style={styles.Container}>
      <RBSheet
        ref={refRbImageSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: black,
          },
        }}>
        <View style={styles.updateImageContainer}>
          <TouchableOpacity
            onPress={() => {
              removeImage();
            }}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.optionText}>Remove Image</Text>
            <Icon style={{marginTop: -7}} size={18} name="trash-alt" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => imageUpload()}>
            <Text style={styles.optionText}>Change Image</Text>
            <Icon style={{marginTop: -7}} size={18} name="marker" />
          </TouchableOpacity>
        </View>
      </RBSheet>
      <ScrollView>
        <View style={styles.braceletdrawerContainer}>
          <TouchableOpacity onPress={() => navigate('drawer')}>
            <Icon name="bars" size={25} color="black" />
          </TouchableOpacity>
          <Image source={HeaderLogo} />
          <TouchableOpacity onPress={() => navigate('AccountSetting')}>
            <SettingIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.jhonsmithCotainer}>
          {userData?.image ? (
            <TouchableOpacity
              disabled={loginType === 'social' ? true : false}
              style={{height: 60, width: 60, marginRight: 40}}
              onPress={() => {
                internet
                  ? refRbImageSheet.current.open()
                  : alert(internetStatus);
              }}>
              <View style={{height: 30, width: 30}}>
                {localImage ? (
                  <Image
                    style={styles.jhonsmithImage}
                    source={{uri: localImage}}
                  />
                ) : (
                  <Image
                    style={styles.jhonsmithImage}
                    source={{
                      uri: userData?.image,
                    }}
                  />
                )}
                {/* <Image style={styles.jhonsmithImage} source={{uri: localImage}} /> */}
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled={loginType === 'social' ? true : false}
              style={{height: 60, width: 60, marginRight: 40}}
              onPress={() => {
                internet ? imageUpload() : alert(internetStatus);
              }}>
              <View style={{height: 30, width: 30}}>
                {localImage ? (
                  <Image
                    style={styles.jhonsmithImage}
                    source={{uri: localImage}}
                  />
                ) : (
                  <Image
                    style={styles.jhonsmithImage}
                    source={{
                      uri:
                        'https://www.centrik.in/wp-content/uploads/2017/02/user-image-.png',
                    }}
                  />
                )}
                {/* <Image style={styles.jhonsmithImage} source={{uri: localImage}} /> */}
              </View>
            </TouchableOpacity>
          )}

          {internet ? (
            <Text
              style={
                styles.jhonsmithText
              }>{`${userData?.firstname} ${userData?.lastname}`}</Text>
          ) : (
            <Text style={styles.jhonsmithText}>No Internet</Text>
          )}
        </View>
        <TouchableOpacity style={styles.allorderContainer}>
          <Text style={styles.allorderrText}>
            {languageChange.t('all_orders')}
          </Text>

          <RightArrowIcon />
        </TouchableOpacity>
        <View style={styles.paddingContainer}>
          <View style={styles.ordermainConatiner}>
            <View style={styles.activeandcompleteContainer}>
              <TouchableOpacity
                onPress={() => {
                  internet ? navigate('ActiveOrder') : alert(internetStatus);
                }}
                style={styles.avtiveorderConatiner}>
                <ActiveOrderIcon />
                <Text style={styles.activeorderText}>
                  {languageChange.t('active_order')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  internet ? navigate('CompleteOrder') : alert(internetStatus);
                }}
                style={styles.completeorderContainer}>
                <CompleteOrderIcon />
                <Text style={styles.completeorderText}>
                  {languageChange.t('complete_order')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            internet ? navigate('RecentProducts') : alert(internetStatus);
          }}
          style={styles.recentlyviewmainConatiner}>
          <View style={styles.recentlyContainer}>
            <RecentlyViewedIcon />
            <Text style={styles.recentlyviewedText}>Recently Viewed</Text>
          </View>

          <RightArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpmainConatiner}>
          <View style={styles.recentlyContainer}>
            <HelpIcon />
            <Text style={styles.recentlyviewedText}>
              {languageChange.t('help')}
            </Text>
          </View>

          <RightArrowIcon />
        </TouchableOpacity>
      </ScrollView>
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
  jhonsmithCotainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20@s',
  },
  jhonsmithImage: {
    marginRight: '30@s',
    height: '60@s',
    width: '60@s',

    borderRadius: '120@s',
  },
  jhonsmithText: {
    fontSize: '16@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '19@s',
    textTransform: 'capitalize',
    fontFamily: robotoMedium,
  },
  allorderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '30@s',
  },
  allorderrText: {
    color: graySix,
    fontSize: '20@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '23@s',
    fontFamily: robotoBlack,
  },

  paddingContainer: {
    paddingHorizontal: '15@s',
    marginTop: '20@s',
  },
  ordermainConatiner: {
    borderBottomColor: '#BABABA',
    borderBottomWidth: 1,
    padding: '10@s',
  },
  activeandcompleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '20@s',
  },
  activeorderText: {
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14@s',
    color: 'black',
    marginTop: '5@s',
    fontFamily: robotoMedium,
  },
  completeorderText: {
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14@s',
    color: 'black',
    marginTop: '5@s',
    fontFamily: robotoMedium,
  },
  avtiveorderConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeorderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentlyviewmainConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '15@s',
  },
  recentlyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentlyviewedText: {
    marginLeft: '10@s',
    color: 'black',
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14@s',
    fontFamily: robotoMedium,
  },
  helpmainConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '25@s',
  },
  updateImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  optionText: {
    fontSize: '16@s',
    marginRight: '10@s',
    marginBottom: '10@s',
  },
});

export default JhonSmithScreen;
