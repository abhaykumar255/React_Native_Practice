import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';
export const Work = (props) => {
    return (
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 30, margin: 5 }}>LOGIN SCREEN </Text>
        <Button title='GO TO Home' onPress={() => props.navigation.navigate('Home')} />
        <Button title='GO TO Login' onPress={() => props.navigation.navigate('Login')} />
      </View>
    )
  }