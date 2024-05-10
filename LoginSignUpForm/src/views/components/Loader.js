import React from "react";
import { ActivityIndicator, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import COLORS from "../../conts/colors";
import {UIActivityIndicator,} from 'react-native-indicators'


const Loader = ({ visible = false  }) => {
    const { height, width } = useWindowDimensions()
    return (visible && (<View style={[style.container, { height, width }]}>
        <View style={style.loader} >
            <ActivityIndicator size='large' color={COLORS.blue} />
            <Text style={{fontSize : 15,marginRight : 10}}>Loading...</Text>
        </View>
    </View>))
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },
    loader: {
        height: 70,
        backgroundColor: COLORS.white,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal : 20 
    }
})
export default Loader