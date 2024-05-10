import React from "react";
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView, Image, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Liked from "./Liked";
import Profile from "./Profile";

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{
    return (
        // <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name='Home' component={Home}/>
                <Drawer.Screen name='Liked' component={Liked}/>
                <Drawer.Screen name='Profile' component={Profile}/>
            </Drawer.Navigator>
        // </NavigationContainer>
    )
}

export default DrawerNavigator

