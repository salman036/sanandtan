import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colorBlack} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import FirstFlipFlopImage from '../Images/Firstflipflop.png';
import SecondFlipFlopImage from '../Images/Secondflipflop.png';
import ThirdFlipFlopImage from '../Images/Thirdflipflop.png';
import FourthFlipFlopImage from '../Images/Fourthflipflop.png';
import FifthFlipFlopImage from '../Images/Fifthflipflop.png';
import SixthFlipFlopImage from '../Images/Sixthflipflop.png';
import SeventhFlipFlopImage from '../Images/Seventhflipflop.png';
import EightFlipFlopImage from '../Images/Eightflipflop.png';
import NineFlipFlopImage from '../Images/Nineflipflop.png';
import TenFlipFlopImage from '../Images/Tenflipflop.png';
import ElevenFlipFlopImage from '../Images/Elevenflipflop.png';
import TwelveFlipFlopImage from '../Images/twelveflipflop.png';

const FlipFlopScreen = ({navigate, goBack}) => {
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
          <Text style={styles.handbraceletText}>Flip Flop</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstFlipFlopImage}
          imagetwo={SecondFlipFlopImage}
          imagethree={ThirdFlipFlopImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourthFlipFlopImage}
          imagetwo={FifthFlipFlopImage}
          imagethree={SixthFlipFlopImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SeventhFlipFlopImage}
          imagetwo={EightFlipFlopImage}
          imagethree={NineFlipFlopImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={TenFlipFlopImage}
          imagetwo={ElevenFlipFlopImage}
          imagethree={TwelveFlipFlopImage}
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

export default FlipFlopScreen;
