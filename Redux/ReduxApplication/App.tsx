import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './component/ProductWrapper';
import UserList from './component/UserList';

const Stack = createNativeStackNavigator()

const App = () => {


  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = 'Home' component={ProductWrapper} />
        <Stack.Screen name = 'User' component={UserList} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}



export default App;
