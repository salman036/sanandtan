import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {SignUpButton} from '../Components';
import {black, white} from '../Utils/theme';

const PaymentCardModal = ({
  modalVisible,
  setModalVisible,
  handleChange,
  handleActiveOrder,
  activeCartLoading,
}) => {
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
            <Text style={styles.enterCard}>Enter card detail</Text>
            <TextInput
              onChangeText={(value) => handleChange('number', value)}
              style={styles.input}
              placeholder="Card Number"
              keyboardType="number-pad"
              maxLength={16}
            />
            <TextInput
              onChangeText={(value) => handleChange('exp_month', value)}
              style={styles.input}
              placeholder="Exp Month"
              keyboardType="number-pad"
              maxLength={2}
            />
            <TextInput
              onChangeText={(value) => handleChange('exp_year', value)}
              style={styles.input}
              placeholder="Exp Year"
              keyboardType="number-pad"
              maxLength={2}
            />
            <TextInput
              onChangeText={(value) => handleChange('cvc', value)}
              style={styles.input}
              placeholder="CVC"
              keyboardType="number-pad"
              maxLength={3}
            />
            <View style={{height: 70, marginTop: 20}}>
              <SignUpButton
                onPress={() => handleActiveOrder()}
                title={
                  activeCartLoading ? (
                    <ActivityIndicator color={white} />
                  ) : (
                    'Pay Now'
                  )
                }
              />
            </View>
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderColor: black,
    borderWidth: 1,
    borderRadius: '7@s',
    padding: '4@s',
    paddingLeft: '10@s',
    marginBottom: '14@s',
    color: black,
    fontSize: '14@s',
  },
  enterCard: {
    fontSize: '18@s',
    marginBottom: '10@s',
    fontWeight: 'bold',
  },
});

export default PaymentCardModal;
