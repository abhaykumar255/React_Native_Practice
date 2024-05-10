/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App() {
  const [show, setShow] = useState(true)

  return (
    <View style={styles.container}>
      <Button title='Show Bottom Sheet' />
      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container : { 
    flex : 1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center'
  }
});

export default App;
