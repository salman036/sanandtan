import React from 'react';
import {Modal, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import Storage from '../lib/requests/storage';
import {black} from '../Utils/theme';

const LanguageModal = ({modalVisible, setModalVisible, setLang}) => {
  return (
    <View>
      <StatusBar backgroundColor="rgba(0,0,0,0.8)" barStyle="light-content" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredViewMain}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false), Storage.storeData('lang', 'en');
              }}
              style={styles.button}>
              <Text style={styles.langTitle}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false), Storage.storeData('lang', 'fr');
              }}
              style={styles.button}>
              <Text style={styles.langTitle}>French</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = ScaledSheet.create({
  centeredViewMain: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 2,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  centeredView: {
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 7,
    borderBottomColor: 'grey',
    borderBottomWidth: '0.5@s',
    alignItems: 'center',
    marginBottom: '10@s',
  },

  langTitle: {
    fontSize: '15@s',
    color: black,
    lineHeight: '18@s',
  },
});

export default LanguageModal;
