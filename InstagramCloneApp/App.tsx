import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { firebase } from './src/firebase/config';
import Landing from './component/auth/Landing';
import Register from './component/auth/Register';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './redux/reducers'
import thunk from 'redux-thunk';
import Main from './component/Main';
import Login from './component/auth/Login';
import Add from './component/main/Add';

const Store = createStore(rootReducers, applyMiddleware(thunk))
const Stack = createNativeStackNavigator()
const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        setLoggedIn(false)
        setLoaded(true)
      } else {
        setLoggedIn(true)
        setLoaded(true)
      }
    })
  }, [])
  if (!loaded) {
    console.log('loaded ->',loaded)
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Loading</Text>
      </View>
    )
  }
  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
          <Stack.Screen name='Add' component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App;
