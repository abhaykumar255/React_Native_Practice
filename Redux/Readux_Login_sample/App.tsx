import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
 import {Provider} from 'react-redux'

import Home from './src/screen/Home';
import store from './src/store/store';

const  App = () =>{


  return(
    <Provider store={store}>
      <Home />
    </Provider>
    
  )
}

export default App;
