import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";

const HomeScreen = ({navigation}) => {

    const [userDetails,setUserDetails] = useState()
    useEffect(()=>{
        getUserDetails()
    },[])
    const getUserDetails = async()=>{
        const userData = await AsyncStorage.getItem('user')
        if(userData){
            setUserDetails(JSON.parse(userData))
        }
    }
    const logout = ()=>{
        AsyncStorage.setItem('user',JSON.stringify({...userDetails,loggedIn: false}))
        setUserDetails(null)
        navigation.navigate('LoginScreen')
    }

    return(
        <View style={{alignItems : 'center',flex : 1,justifyContent: 'center',paddingHorizontal : 40}}>
            <Text style={{fontSize : 25,fontWeight:'bold'}}>
                Welcome {userDetails?.fullname}
            </Text>
            <Button title='Logout' onPress={logout}/>
        </View>
    )
}

export default HomeScreen