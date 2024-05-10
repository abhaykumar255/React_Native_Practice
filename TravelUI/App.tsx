import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './components/Home';
import Profile from './components/Profile';
import Details from './components/Details';
import Liked from './components/Liked';
import colors from './assets/colors/colors';
import DrawerNavigator from './components/DrawerMenu';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.orange,
      tabBarInactiveTintColor : colors.grey,
      tabBarShowLabel : false,
      tabBarStyle:{borderTopLeftRadius : 20,borderTopRightRadius:20,backgroundColor:colors.white}}}>
    <Tab.Screen name='Home' component={Home}  options={{headerShown : false,tabBarIcon : ({color})=><Entypo name='home' size={25} color={color}/>}}/> 
    <Tab.Screen name='Liked' component={Liked} options={{headerShown : false,tabBarIcon : ({color})=><Entypo name='heart' size={25} color={color}/>}}/>
    <Tab.Screen name='Profile' component={Profile} options={{headerShown : false,tabBarIcon : ({color})=><MaterialCommunityIcons name='account' size={25} color={color}/>}}/>
  </Tab.Navigator>
  )
}


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{headerShown : false}}/>
        <Stack.Screen name='Details' component={Details}  options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar : {
    backgroundColor : colors.white,
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20
  }
})



export default App;
