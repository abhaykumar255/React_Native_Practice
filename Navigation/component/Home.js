
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';
export const Home = (props) => {
  const { name, age, inputName} = props.route.params
  return (
    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>HOME SCREEN </Text>
      <Text style={{ fontSize: 20, margin: 10 }}>{name}</Text>
      <Text style={{ fontSize: 20, margin: 10 }}>{age}</Text>
      <Text style={{ fontSize: 20, margin: 10 }}>Input Name : {inputName}</Text>
      <Button title='GO TO Login' onPress={() => props.navigation.navigate('Login')} />
      <Button title='GO TO Work' onPress={() => props.navigation.navigate('Work')} />
    </View>
  )
}
