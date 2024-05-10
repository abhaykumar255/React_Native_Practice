import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView, Image, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import colors from "../assets/colors/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white
    },
    menuWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuIcon: {

    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    discoverWrapper: {
        marginTop: 20,
        // marginHorizontal: 20
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 35,
        color: colors.black
    },
    discoverCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20
    },
    discoverCategoriesTextWrapper: {
        marginRight: 30,
        fontSize: 16,
        color: colors.grey
    },
    discoverItemWrapper: {
        marginTop: 20

    },
    discoverItem: {
        height: 250,
        width: 170,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,

    },
    discoverItemImage: {
        borderRadius: 20
    },
    discoverItemTitle: {
        fontSize: 18,
        color: colors.white,
        fontWeight: '600'
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center'
    },
    discoverItemLocationText: {
        fontSize: 10,
        marginLeft: 5,
        color: colors.white
    },
    activitiesWrapper: {
        marginTop: 20
    },
    activitiesItemWrapper: {
        marginVertical: 20
    },
    activitiesTtile: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.black
    },
    activityItemWrapper: {
        justifyContent: 'flex-end',
        marginRight: 20,
        alignItems: 'center'
    },
    activityItemImage: {
        width: 36
    },
    activityItemText: {
        marginTop: 5,
        fontSize: 14,
        color: colors.grey
    },
    learnMoreWrapper: {
        marginTop: 10
    },
    learnMoreText: {
        marginHorizontal: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black
    },
    learnMoreItemWrapper: {
        marginVertical: 20 
    },
    learnMoreItem: {
        width : 170,
        height : 180,
        justifyContent : 'flex-end',
        marginRight : 20
    },
    learnMoreItemImage: {
        borderRadius : 20
    },
    learnMoreItemText: {
        fontSize : 18,
        fontWeight : '600',
        color : colors.white,
        marginHorizontal : 10,
        marginVertical : 20
    },
})

export default styles