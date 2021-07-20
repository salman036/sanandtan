import React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colorBlack, themeColor} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import FirstScarfImage from '../Images/Firstscarf.png';
import SecondScarfImage from '../Images/Secondscarf.png';
import ThirdScarfImage from '../Images/Thirdscarf.png';
import FourthScarfImage from '../Images/Fourthscarf.png';
import FifthScarfImage from '../Images/Fifthscarf.png';
import SixthScarfImage from '../Images/Sixthscarf.png';
import SeventhScarfImage from '../Images/Seventhscarf.png';
import EightScarfImage from '../Images/Eightscarf.png';
import NineScarfImage from '../Images/Ninescarf.png';
import TenScarfImage from '../Images/Tenscarf.png';

const ScarfScreen = ({navigate, goBack}) => {
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
          <Text style={styles.handbraceletText}>Scarf</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstScarfImage}
          imagetwo={SecondScarfImage}
          imagethree={ThirdScarfImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourthScarfImage}
          imagetwo={FifthScarfImage}
          imagethree={SixthScarfImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SeventhScarfImage}
          imagetwo={EightScarfImage}
          imagethree={NineScarfImage}
          textone="$17.89"
          texttwo="$33.75"
          textthree="$65.98"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={TenScarfImage}
          textone="$73.95"
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

export default ScarfScreen;
