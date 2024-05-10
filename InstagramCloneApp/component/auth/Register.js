import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { firebase } from '../../src/firebase/config';

const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignup = () => {
        /*
        going to save to the database , stoirng the details to firestore to user colloection
          .doc have the user id 
          firebase.auth().currentUser.uid  thse will we used to access the parameters
          .set to save the data
        */
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("user")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <View>
            <TextInput
                placeholder='name'
                onChangeText={(name) => setName(name)} />
            <TextInput
                placeholder='email'
                onChangeText={(email) => setEmail(email)} />
            <TextInput
                secureTextEntry={true}
                placeholder='password'
                onChangeText={(password) => setPassword(password)} />
            <Button
                title='Signup'
                onPress={() => onSignup()} />
        </View>
    );
}

export default Register;
