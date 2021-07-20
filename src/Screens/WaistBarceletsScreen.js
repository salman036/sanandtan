import React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colorBlack, themeColor} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInputField from '../Components/SearchInputField';
import HandBraceletsComponent from '../Components/HandBraceletsComponent';
import FirstWaistBraceletImage from '../Images/Firstwaistbarcelet.png';
import SecondWaistBraceletImage from '../Images/Secondwaistbarcelet.png';
import ThirdWaistBraceletImage from '../Images/Thirdwaistbarcelet.png';
import FourthWaistBraceletImage from '../Images/Fourthwaistbarcelet.png';
import FifthWaistBraceletImage from '../Images/Fifthwaistbarcelet.png';
import SixthWaistBraceletImage from '../Images/Sixthwaistbarcelet.png';
import SeventhtWaistBraceletImage from '../Images/Seventhwaistbarcelet.png';

const WaistBarceletsScreen = ({navigate, goBack}) => {
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
          <Text style={styles.handbraceletText}>Waist Barcelets</Text>
          <View style={styles.handbraceletLineTwo}></View>
        </View>
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FirstWaistBraceletImage}
          imagetwo={SecondWaistBraceletImage}
          imagethree={ThirdWaistBraceletImage}
          textone="$22.11"
          texttwo="$11.25"
          textthree="$17.89"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={FourthWaistBraceletImage}
          imagetwo={FifthWaistBraceletImage}
          imagethree={SixthWaistBraceletImage}
          textone="$55.09"
          texttwo="$11.11"
          textthree="$23.87"
        />
        <HandBraceletsComponent
          navigate={navigate}
          imageone={SeventhtWaistBraceletImage}
          textone="$17.89"
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

export default WaistBarceletsScreen;
