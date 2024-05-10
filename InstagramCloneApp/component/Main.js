import React, { Component, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchUser from '../redux/actions/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; 
import Feed from './main/Feed';
import Profile from './main/Profile';
// import Add from './main/Add';

const Tab = createBottomTabNavigator()
const EmptyScreen = () => {
    return (null)
}
const Main = (props) => {

    useEffect(() => {
        props.fetchUser()
    }, [])

    console.log('Main-> emial and name', props.currentUser)
    // if(props.currentUser == undefined){
    //     return(
    //         <View></View> 
    //     )
    // }
    
    return (
        // <View>
        //     <Text>{props.currentUser.name} is Logged In</Text>
        // </View>
        <Tab.Navigator initialRouteName='Feed' labeled={false}
        screenOptions={{tabBarLabelStyle : {display : 'none'}}}
        barStyle={{ backgroundColor: 'skyblue'}}>
            <Tab.Screen name='Feed' component={Feed} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name='home' color={color} size={26} />
                )
            }} />
            <Tab.Screen name='MainAdd' component={EmptyScreen}
                // prevent the default actions from occuring 
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault()
                        navigation.navigate('Add')
                    }
                })}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='plus-box-outline' color={color} size={26} />
                    )
                }} />
            <Tab.Screen name='Profile' component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name='account-circle' color={color} size={26} />
                )
            }} />
        </Tab.Navigator>
    );
}

// this function directed to reducer
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
// passing all the functions actionCreator  and use 
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main);