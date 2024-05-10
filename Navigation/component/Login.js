import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';
export const Login = (props) => {
  const name = 'ABHAY RAJPUT'
  const [inputName , setInputName] = useState("")
  const age = 23
    return (
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 30, margin: 5 }}>LOGIN SCREEN </Text>
        <TextInput style={{margin : 5, fontSize : 20}} 
        onChangeText = {(text)=>setInputName(text)} placeholder = 'Enter name'/>
        <Button title='GO TO Home' onPress={() => props.navigation.navigate('Home',{name,age,inputName})} />
        <Button title='GO TO Work' onPress={() => props.navigation.navigate('Work')} />
      </View>
    )
  }