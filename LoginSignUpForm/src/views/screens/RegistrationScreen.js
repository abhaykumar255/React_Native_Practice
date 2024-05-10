import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Alert, Keyboard, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../../conts/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader";


const RegistrationScreen = ({ navigation }) => {
    const [input, setInput] = useState({
        email: '',
        fullname: '',
        phone: '',
        password: ''
    })
    const [loader,setLoader] = useState(false)
    const [errors, setErrors] = useState({})
    const validate = () => {
        Keyboard.dismiss()
        let valid = true
        if (!input.email) {
            handleError('Please input Email', 'email')
            valid = false
        } else if(!input.email.match(/\S+@\S+\.\S+/)){
            handleError('Please input valid Email', 'email')
            valid = false
        }
        if (!input.fullname) {
            handleError('Please input Full Name', 'fullname')
            valid = false
        }
        if (!input.phone) {
            handleError('Please input Phone No.', 'phone')
        }
        if (!input.password) {
            handleError('Please input Password', 'password')
            valid = false
        }else if(input.password.length < 5){
            handleError('Min Password length 5', 'password')
            valid=false
        }

        console.log("Valid",valid)
        if(valid){
            register()
        }
    }

    const register = () =>{
        console.log('register called')
        setLoader(true)
        setTimeout(()=>{
            setLoader(false)
            try {
                AsyncStorage.setItem('user',JSON.stringify(input))
                console.log(input)
                navigation.navigate("LoginScreen")
            } catch (error) {
                Alert.alert('Error',"SOmething went wrong...")
            }

        },3000 )
    }
    const handleonchange = (text, input) => {
        setInput(presState => ({ ...presState, [input]: text }))
    }
    const handleError = (errorMessage, input) => {
        setErrors(presState => ({ ...presState, [input]: errorMessage }))
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }} >
            <Loader visible={loader}/>
            <ScrollView contentContainerStyle={{
                paddingTop: 50,
                paddingHorizontal: 20
            }}>
                <Text style={{
                    color: COLORS.black,
                    fontSize: 40,
                    fontWeight: 'bold'
                }}>Register</Text>
                <Text style={{
                    color: COLORS.grey,
                    fontSize: 18,
                    marginVertical: 10
                }}>Enter Your Details to Register</Text>
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
                        placeholder="Enter your Full Name"
                        iconName="account-outline"
                        label="Full Name"
                        error={errors.fullname}
                        onFocus={() => {
                            handleError(null, 'fullname')
                        }}
                        onChangeText={(text) => handleonchange(text, 'fullname')} />
                    <Input
                        keyboardType='numeric'
                        placeholder="Enter your Phone no "
                        iconName="account-outline"
                        label="Phone Number"
                        error={errors.phone}
                        onFocus={() => {
                            handleError(null, 'phone')
                        }}
                        onChangeText={(text) => handleonchange(text, 'phone')} />
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
                    <Button title='Register' onPress={validate} />
                    <Text onPress={() => navigation.navigate('LoginScreen')} style={{
                        color: COLORS.black,
                        textAlign: 'center',
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 14
                    }}>Already have account ?Login</Text>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default RegistrationScreen

