import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './component/Home';
import { Work } from './component/Work';
import { Login } from './component/Login';

// createstack function
const Stack = createNativeStackNavigator();

const App = () => {

  const btnPressed = () => {
    console.warn('Button pressed')
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'blue' },
          headerTintColor: 'white',
          headerTitleStyle: { fontSize: 25 }
        }}>
        <Stack.Screen name='Login' component={Login}
          options={{
            headerTitle : ()=><Button title='left' onPress={btnPressed}/>,
            headerRight : ()=> <HeaderRight />,
            title: 'User Login',
            headerStyle: { backgroundColor: 'skyblue' },
            headerTintColor: 'white',
            headerTitleStyle: { fontSize: 25 }
          }} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Work' component={Work} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const HeaderRight =()=> {
  return(
    <TextInput placeholder='Input' />
  )
}




export default App;
