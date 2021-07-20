import React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colorBlack, themeColor} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
// import HeaderLogo from '.././assets/HeaderLogo';
import FirstTanningCreamImage from '../Images/Firsttanningcream.png';
import SecondTanningCreamImage from '../Images/Secondtanningcream.png';
import ThirdTanningCreamImage from '../Images/Thirdtanningcream.png';
import FourthTanningCreamImage from '../Images/Fourthtanningcream.png';
import FifthTanningCreamImage from '../Images/Fifithtanningcream.png';
import SixthTanningCreamImage from '../Images/Sixthtanningcream.png';
import SeventhTanningCreamImage from '../Images/Seventhtanningcream.png';
import EightTanningCreamImage from '../Images/Eighttanningcream.png';

const TanningCreamScreen = ({navigate, goBack}) => {
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
          <Text style={styles.handbraceletText}>Tanning Cream</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstTanningCreamImage}
          imagetwo={SecondTanningCreamImage}
          imagethree={ThirdTanningCreamImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourthTanningCreamImage}
          imagetwo={FifthTanningCreamImage}
          imagethree={SixthTanningCreamImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SeventhTanningCreamImage}
          imagetwo={EightTanningCreamImage}
          imagethree={SeventhTanningCreamImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
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
  },
});

export default TanningCreamScreen;
