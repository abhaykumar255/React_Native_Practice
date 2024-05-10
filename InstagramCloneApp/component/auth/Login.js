import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { firebase } from '../../src/firebase/config';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((result)=>{
                console.log(result)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    return (
        <View>
            <TextInput
                placeholder='email' 
                onChangeText={(email) => setEmail(email)} />
            <TextInput
                secureTextEntry={true}
                placeholder='password'
                onChangeText={(password) => setPassword(password)} />
            <Button
                title='SignIn'
                onPress={() => onSignIn()} />
        </View>
    );
}

export default Login;
