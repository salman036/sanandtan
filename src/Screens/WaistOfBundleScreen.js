import React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colorBlack, themeColor} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import FirstWaistOfBundleImage from '../Images/Firstwaistofbundle.png';
import SecondWaistOfBundleImage from '../Images/Secondwaistofbundle.png';
import ThirdWaistOfBundleImage from '../Images/Thirdwaistofbundle.png';
import FourthWaistOfBundleImage from '../Images/Fourthwaistofbundle.png';
import FifthWaistOfBundleImage from '../Images/Fifthwaistofbundle.png';
import SixthWaistOfBundleImage from '../Images/Sixthwaistofbundle.png';
import SeventhWaistOfBundleImage from '../Images/Seventhwaistofbundle.png';
import EightOfBundleImage from '../Images/Eightwaistofbundle.png';
import NineOfBundleImage from '../Images/Ninewaistofbundle.png';

const WaistOfBundleScreen = ({navigate, goBack}) => {
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
      <SearchInputField placeholder="Search" />
      <ScrollView>
        <View style={styles.chandbraceletContainer}>
          <View style={styles.handbraceletLineOne}></View>
          <Text style={styles.handbraceletText}>The waist of the bundle</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstWaistOfBundleImage}
          imagetwo={SecondWaistOfBundleImage}
          imagethree={ThirdWaistOfBundleImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourthWaistOfBundleImage}
          imagetwo={FifthWaistOfBundleImage}
          imagethree={SixthWaistOfBundleImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SeventhWaistOfBundleImage}
          imagetwo={EightOfBundleImage}
          imagethree={NineOfBundleImage}
          textone="$17.89"
          texttwo="$33.75"
          textthree="$65.98"
        />
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
  chandbraceletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '20@s',
    marginBottom: '20@s',
  },
  handbraceletLineOne: {
    width: '43@s',
    backgroundColor: colorBlack,
    height: '1@s',
    marginLeft: '10@s',
  },
  handbraceletLineTwo: {
    width: '45@s',
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
  },
});

export default WaistOfBundleScreen;
