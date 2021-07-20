import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colorBlack} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import FirstBikiniImage from '../Images/firstbikini.png';
import SecondBikiniImage from '../Images/secondbikini.png';
import ThirdBikiniImage from '../Images/thirdbikini.png';
import FourBikiniImage from '../Images/fourbikini.png';
import FiveBikiniImage from '../Images/fivebikini.png';
import SixBikiniImage from '../Images/sixbikini.png';
import SevenBikiniImage from '../Images/sevenbikini.png';
import EightBikiniImage from '../Images/eightbikini.png';
import NineBikiniImage from '../Images/ninebikini.png';
import TenBikiniImage from '../Images/tenbikini.png';
import ElevenBikiniImage from '../Images/elevenbikini.png';
import TweleveBikiniImage from '../Images/twelvebikini.png';
import ThirteenBikiniImage from '../Images/thirteenbikini.png';
import FourteenBikiniImage from '../Images/fourteenbikini.png';
import FifteenBikiniImage from '../Images/fifteenbikini.png';

const BikiniScreen = ({navigate, goBack}) => {
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
          <Text style={styles.handbraceletText}>Bikini</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstBikiniImage}
          imagetwo={SecondBikiniImage}
          imagethree={ThirdBikiniImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourBikiniImage}
          imagetwo={FiveBikiniImage}
          imagethree={SixBikiniImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SevenBikiniImage}
          imagetwo={EightBikiniImage}
          imagethree={NineBikiniImage}
          textone="$17.89"
          texttwo="$33.75"
          textthree="$65.98"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={TenBikiniImage}
          imagetwo={ElevenBikiniImage}
          imagethree={TweleveBikiniImage}
          textone="$73.95"
          texttwo="$98.26"
          textthree="$27.09"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={ThirteenBikiniImage}
          imagetwo={FourteenBikiniImage}
          imagethree={FifteenBikiniImage}
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

export default BikiniScreen;
