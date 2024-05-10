import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from "react-native";
import colors from "../assets/colors/colors";

const Height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backgroundImage: {
        height: Height * 0.6,
        justifyContent: 'space-between'
    },
    descriptionWrapper: {
        // height: Height * 0.4,
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginBottom: 40
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 40
    },
    titleWrapper: {
        marginLeft: 20,
        marginBottom: 40
    },
    itemTitle: {
        fontSize: 32,
        color: colors.white
    },
    locationWrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5
    },
    loactionText: {
        fontSize: 16,
        color: colors.white
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        backgroundColor: colors.white,
        height: 64,
        width: 64,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 64,
        shadowColor: colors.black,
        elevation: 15
    },
    discriptionWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    discriptionTitle: {
        fontSize: 24,
        color: colors.black,
        fontWeight: '600'
    },
    discriptionText: {
        marginTop: 20,
        fontSize: 15,
        color: colors.darkgrey,
    },
    infoWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    infoItem: {},
    infoTitle: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.grey
    },
    infoTextWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5
    },
    infoText: {
        fontSize: 24,
        color: colors.orange
    },
    infoSubText: {
        fontSize: 14,
        color: colors.grey
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginVertical: 30,
        backgroundColor: colors.orange,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
    },

})
export default styles