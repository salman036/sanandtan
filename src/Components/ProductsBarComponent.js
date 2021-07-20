import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import BikiniIcon from '../assets/BikiniIcon';
import Scarficon from '../assets/Scarficon';
import FlipFlopIcon from '../assets/flipFlopIcon';
import HatIcon from '../assets/HatIcon';
import NecklesIcon from '../assets/NecklesIcon';
import BraceletIcon from '../assets/BraceletIcon';
import AnkletIcon from '../assets/AnkletIcon';
import WaistBraceletIcon from '../assets/WaistBraceletIcon';
import SunBlockCreamIcon from '../assets/SunBlockCreamIcon';
import WaistBagIcon from '../assets/WaistBagIcon';
import TanningCreamIcon from '../assets/TanningCreamIcon';
import {robotoMedium, white} from '../Utils/theme';

const ProductsBarComponent = ({setFooterTitle, setFooterId}) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Bikni'), setFooterId('60cddda3396de2002211895c');
        }}
        style={styles.productBox}>
        <BikiniIcon />
        <Text numberOfLines={2} style={styles.productText}>
          Bikni
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Scarf'), setFooterId('60cddec9396de20022118961');
        }}
        style={styles.productBox}>
        <Scarficon />
        <Text numberOfLines={2} style={styles.productText}>
          Scarf
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Flip Flop'), setFooterId('60e3f38bcc1b5c0022b9cfd0');
        }}
        style={styles.productBox}>
        <FlipFlopIcon />
        <Text numberOfLines={2} style={styles.productText}>
          Flip Flop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Hats'), setFooterId('60ddeee6ac1af60022f30ae1');
        }}
        style={styles.productBox}>
        <HatIcon />
        <Text numberOfLines={2} style={styles.productText}>
          Hats
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Necklace'), setFooterId('60cddf92396de20022118964');
        }}
        style={styles.productBox}>
        <NecklesIcon />
        <Text numberOfLines={2} style={styles.productText}>
          Necklace
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Hand brecelet'),
            setFooterId('60cddf7e396de20022118963');
        }}
        style={styles.productBox}>
        <BraceletIcon />
        <Text numberOfLines={2} style={styles.productText}>
          Hand Bracelets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Anklets'), setFooterId('60e3f3a7cc1b5c0022b9cfd1');
        }}
        style={styles.productBox}>
        <AnkletIcon />
        <Text numberOfLines={2} style={styles.productText}>
          Anklets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Waist Bracelets'),
            setFooterId('60e3f3b6cc1b5c0022b9cfd2');
        }}
        style={styles.productBox}>
        <WaistBraceletIcon />
        <Text numberOfLines={2} style={styles.productText}>
          Waist Bracelets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Sunblock Cream'),
            setFooterId('60e3f3cbcc1b5c0022b9cfd3');
        }}
        style={styles.productBox}>
        <SunBlockCreamIcon />
        <Text numberOfLines={2} style={styles.productText}>
          Sunblock Cream
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('The waist of the bundle'),
            setFooterId('60e3f3e8cc1b5c0022b9cfd4');
        }}
        style={styles.productBox}>
        <WaistBagIcon />
        <Text numberOfLines={2} style={styles.productText}>
          The waist of the bundle
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooterTitle('Tanning cream'),
            setFooterId('60e3f3f1cc1b5c0022b9cfd5');
        }}
        style={styles.productBox}>
        <TanningCreamIcon />
        <Text numberOfLines={2} style={styles.productText}>
          Tanning cream
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    marginTop: '30@s',
    marginBottom: '30@s',
    marginLeft: '10@s',
    padding: '4@s',
    backgroundColor: white,
    width: '50@s',
    borderRadius: '3@s',
  },

  productBox: {
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: '3@s',
    backgroundColor: '#F2F2F2',
    paddingTop: '2@s',
    paddingBottom: '2@s',
    marginBottom: '3@s',
  },

  productText: {
    fontSize: '8@s',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: '1@s',
    fontFamily: robotoMedium,
  },
});
export default ProductsBarComponent;
