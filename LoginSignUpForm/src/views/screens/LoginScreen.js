import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Alert, Keyboard, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import COLORS from "../../conts/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader";


const LoginScreen = ({ navigation }) => {

    const [input, setInput] = useState({
        email: '',
        fullname: '',
        phone: '',
        password: ''
    })
    const [loader, setLoader] = useState(false)
    const [errors, setErrors] = useState({})
    const validate = () => {
        Keyboard.dismiss()
        let valid = true
        if (!input.email) {
            handleError('Please input Email', 'email')
            valid = false
        }
        if (!input.password) {
            handleError('Please input Password', 'password')
            valid = false
        }
        console.log("Valid", valid)
        if (valid) {
            login()
            
        }
    }

    const login = () => {
        setLoader(true)
        setTimeout(async () => {
            setLoader(false)

            let userData = await AsyncStorage.getItem('user')
            if (userData) {
                userData = JSON.parse(userData)
                if (input.email == userData.email && input.password == userData.password) {
                    AsyncStorage.setItem({ ...userData, loggedIn: true })
                    setInput({email : '',password : ''})
                    navigation.navigate('HomeScreen')
                } else {
                    Alert.alert('Error', 'Invalid Details')
                }
            }
            else {
                Alert.alert('Error', 'User does not exist')
            }
        }, 2000)
    }
    const handleonchange = (text, input) => {
        setInput(presState => ({ ...presState, [input]: text }))
    }
    const handleError = (errorMessage, input) => {
        setErrors(presState => ({ ...presState, [input]: errorMessage }))
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }} >
            <Loader visible={loader} />
            <ScrollView contentContainerStyle={{
                paddingTop: 50,
                paddingHorizontal: 20
            }}>
                <Text style={{
                    color: COLORS.black,
                    fontSize: 40,
                    fontWeight: 'bold'
                }}>Login</Text>
                <Text style={{
                    color: COLORS.grey,
                    fontSize: 18,
                    marginVertical: 10
                }}>Enter Your Details to Login</Text>
                <View style={{ marginVertical: 20 }}>
                    <Input
                        placeholder="Enter your email address"
                        iconName="email-outline"
                        label="Email"
                        error={errors.email}
                        onFocus={() => {
                            handleError(null, 'email')
                        }}
                        onChangeText={(text) => handleonchange(text, 'email')} />
                    <Input
                        placeholder="Enter your password"
                        iconName="lock-outline"
                        label="Password"
                        error={errors.password}
                        onFocus={() => {
                            handleError(null, 'password')
                        }}
                        password
                        onChangeText={(text) => handleonchange(text, 'password')} />
                    <Button title='Login' onPress={validate} />
                    <Text onPress={() => navigation.navigate('RegistrationScreen')} style={{
                        color: COLORS.black,
                        textAlign: 'center',
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 14
                    }}>Don't have account ?Register</Text>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default LoginScreen

