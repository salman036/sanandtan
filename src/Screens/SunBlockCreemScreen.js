import React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colorBlack, themeColor} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import FirstCreamImage from '../Images/Firstcream.png';
import SecondCreamImage from '../Images/Secondcream.png';
import ThirdCreamImage from '../Images/Thirdcream.png';
import FourthCreamImage from '../Images/Fourthcream.png';
import FifthCreamImage from '../Images/Fifthcream.png';
import SixthCreamImage from '../Images/Sixthcream.png';
import SeventhCreamImage from '../Images/Seventhcream.png';
import EightCreamImage from '../Images/Eightcream.png';
import NineCreamImage from '../Images/Ninecream.png';
import TenCreamImage from '../Images/Tencream.png';
import ElevenCreamImage from '../Images/Elevencream.png';
import TwelveCreamImage from '../Images/Twelvecream.png';
import ThirteenCreamImage from '../Images/Thirteencream.png';
import FourteenCreamImage from '../Images/Fourteencream.png';
import FifteenCreamImage from '../Images/Thirteencream.png';

const SunBlockCreamScreen = ({navigate, goBack}) => {
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
          <Text style={styles.handbraceletText}>Sunblock Cream</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstCreamImage}
          imagetwo={SecondCreamImage}
          imagethree={ThirdCreamImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourthCreamImage}
          imagetwo={FifthCreamImage}
          imagethree={SixthCreamImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SeventhCreamImage}
          imagetwo={EightCreamImage}
          imagethree={NineCreamImage}
          textone="$17.89"
          texttwo="$33.75"
          textthree="$65.98"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={TenCreamImage}
          imagetwo={ElevenCreamImage}
          imagethree={TwelveCreamImage}
          textone="$73.95"
          texttwo="$98.26"
          textthree="$27.09"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={ThirteenCreamImage}
          imagetwo={FourteenCreamImage}
          imagethree={FifteenCreamImage}
          textone="$73.95"
          texttwo="$98.26"
          textthree="$27.09"
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

export default SunBlockCreamScreen;
