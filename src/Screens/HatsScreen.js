import React from 'react';

import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colorBlack} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import FirstHatImage from '../Images/Firsthat.png';
import SecondHatImage from '../Images/Secondhat.png';
import ThirdHatImage from '../Images/Thirdhat.png';
import FifthHatImage from '../Images/Fifthhat.png';
import SixthHatImage from '../Images/Sixthhat.png';
import SeventhHatImage from '../Images/Seventhhat.png';
import EightHatImage from '../Images/Eighthat.png';
import NineHatImage from '../Images/Ninehat.png';
import TenHatImage from '../Images/Tenhat.png';
import ElevenHatImage from '../Images/Elevenhat.png';
import TwelveHatImage from '../Images/Twelvehat.png';
import ThirteenHatImage from '../Images/Thirteenhat.png';
import FourteenHatImage from '../Images/Fourteenhat.png';
import FifteenHatImage from '../Images/Fifteenhat.png';

const HatsScreen = ({navigate, goBack}) => {
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
          <Text style={styles.handbraceletText}>Hats</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstHatImage}
          imagetwo={SecondHatImage}
          imagethree={ThirdHatImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourteenHatImage}
          imagetwo={FifthHatImage}
          imagethree={SixthHatImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SeventhHatImage}
          imagetwo={EightHatImage}
          imagethree={NineHatImage}
          textone="$17.89"
          texttwo="$33.75"
          textthree="$65.98"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={TenHatImage}
          imagetwo={ElevenHatImage}
          imagethree={TwelveHatImage}
          textone="$73.95"
          texttwo="$98.26"
          textthree="$27.09"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={ThirteenHatImage}
          imagetwo={FourteenHatImage}
          imagethree={FifteenHatImage}
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

export default HatsScreen;
