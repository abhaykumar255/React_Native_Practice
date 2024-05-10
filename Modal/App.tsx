import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';


function App(): JSX.Element {

  const [showModal, setShowModal] = useState(false)

  return (
    <View style={styles.main}>
      <Modal
        transparent={true}
        visible={showModal}
        animationType = 'slide'>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello, This is Modal Section </Text>
            <Button title='Close Modal' onPress={() => setShowModal(false)}/>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title='Open Modal' onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end'

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 10
  },
  modalText: {
    fontSize: 15,
    margin: 10
  }
})


export default App;
