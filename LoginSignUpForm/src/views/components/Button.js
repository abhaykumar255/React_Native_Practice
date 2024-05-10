import React from "react";
import { Text, TouchableOpacity } from "react-native";
import COLORS from "../../conts/colors";

const Button = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height: 50,
                width: '100%',
                backgroundColor: COLORS.blue,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginVertical: 10,

            }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: COLORS.white }}>{title}</Text>

        </TouchableOpacity>
    )
}

export default Button
