import React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colorBlack, themeColor} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import FirstNecklaceImage from '../Images/Necklaceone.png';
import SecondNecklaceImage from '../Images/Necklacetwo.png';
import ThirdNecklaceImage from '../Images/Necklacethree.png';
import FourthNecklaceImage from '../Images/Necklacefour.png';
import FifthNecklaceImage from '../Images/Necklacefive.png';
import SixthNecklaceImage from '../Images/Necklacesix.png';
import SeventhNecklaceImage from '../Images/Necklaceseven.png';
import EightNecklaceImage from '../Images/Necklaceeight.png';
import NineNecklaceImage from '../Images/Necklacenine.png';
import TenNecklaceImage from '../Images/Necklaceten.png';
import ElevenNecklaceImage from '../Images/Necklaceeleven.png';
import TwelveNecklaceImage from '../Images/Necklacetwelve.png';
import ThirteenNecklaceImage from '../Images/Necklacethirteen.png';
import FourteenNecklaceImage from '../Images/Necklacefourteen.png';
import FifteenNecklaceImage from '../Images/Necklacefifteen.png';

const NecklaceScreen = ({navigate, goBack}) => {
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
          <Text style={styles.handbraceletText}>Necklace</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstNecklaceImage}
          imagetwo={SecondNecklaceImage}
          imagethree={ThirdNecklaceImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourthNecklaceImage}
          imagetwo={FifthNecklaceImage}
          imagethree={SixthNecklaceImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SeventhNecklaceImage}
          imagetwo={EightNecklaceImage}
          imagethree={NineNecklaceImage}
          textone="$17.89"
          texttwo="$33.75"
          textthree="$65.98"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={TenNecklaceImage}
          imagetwo={ElevenNecklaceImage}
          imagethree={TwelveNecklaceImage}
          textone="$73.95"
          texttwo="$98.26"
          textthree="$27.09"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={ThirteenNecklaceImage}
          imagetwo={FourteenNecklaceImage}
          imagethree={FifteenNecklaceImage}
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

export default NecklaceScreen;
