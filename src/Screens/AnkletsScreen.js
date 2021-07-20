import React from 'react';

import {Text, View, Image, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colorBlack} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import FirstAnkletImage from '../Images/Firstanklet.png';
import SecondAnkletImage from '../Images/Secondanklet.png';
import ThirdAnkletImage from '../Images/Thirdanklet.png';
import FourthAnkletImage from '../Images/Fourthanklet.png';
import FifthAnkletImage from '../Images/Fifthanklet.png';
import SixthAnkletImage from '../Images/Sixthanklet.png';
import SeventhAnkletImage from '../Images/Seventhanklet.png';
import EightAnkletImage from '../Images/Eightanklet.png';
import NineAnkletImage from '../Images/Nineanklet.png';
import TenAnkletImage from '../Images/Tenanklet.png';
import ElevenAnkletImage from '../Images/Elevenanklet.png';
import TwelveAnkletImage from '../Images/Twelveanklet.png';
import ThirteenAnkletImage from '../Images/Thirteenanklet.png';
import FourteenAnkletImage from '../Images/Fourteenanklet.png';
import FifteenAnkletImage from '../Images/Fifteenanklet.png';

const AnkletsScreen = ({navigate, goBack}) => {
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
          <Text style={styles.handbraceletText}>Anklets</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstAnkletImage}
          imagetwo={SecondAnkletImage}
          imagethree={ThirdAnkletImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourthAnkletImage}
          imagetwo={FifthAnkletImage}
          imagethree={SixthAnkletImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SeventhAnkletImage}
          imagetwo={EightAnkletImage}
          imagethree={NineAnkletImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={TenAnkletImage}
          imagetwo={ElevenAnkletImage}
          imagethree={TwelveAnkletImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={ThirteenAnkletImage}
          imagetwo={FourteenAnkletImage}
          imagethree={FifteenAnkletImage}
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

export default AnkletsScreen;
