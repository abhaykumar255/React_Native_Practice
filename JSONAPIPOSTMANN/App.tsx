import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {

  const [data, setData] = useState([])

  // const getAPIDATA = async () => {
  //   const url = "http://10.0.2.2:3000/user"
  //   let result = await fetch(url)
  //   result = await result.json()
  //   // console.warn(result) 
  //   setData(result)
  // }

  // const saveAPIData = async () =>{
  //   const sendData ={
  //     name : "Dev Gautam",
  //     age : 55
  //   }
  //   const url = "http://10.0.2.2:3000/user"
  //   let resultt = await fetch(url,{
  //     method : "POST",
  //     headers : { "Content-Type": "application/json" },
  //     body : JSON.stringify(data)
  //   })
  //   resultt = await resultt.json() 
  //   console.warn(resultt)
  // }
  // useEffect(() => {
  //   getAPIDATA()
  // }, [])

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const saveData = async () => {
    console.warn(name)
    console.warn(age)
    console.warn(email)

    const URL = "http://10.0.2.2:3000/user"
    let results = await fetch(URL , {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({name,age,email})
    })
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', padding: 5 }}>
      <View style={{ flex: 1, borderWidth: 2, marginBottom: 5 }}>
        <Text>Call Json Server API</Text>
        {/* {
          data.length ?
            data.map((item) =>
              <View>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
              </View>)
            : null
        } */}
      </View>
      <View style={{ flex: 3, borderWidth: 2 , padding : 5}}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Post API with Input Fields</Text>
        <TextInput placeholder='enter name' style={style.input} onChangeText={(text)=>setName(text)} value={name} />
        <TextInput placeholder='enter age' style={style.input} onChangeText={(text)=>setAge(text)} value={age}/>
        <TextInput placeholder='enter email' style={style.input} onChangeText={(text)=>setEmail(text)} value={email} />
        <Button title='Save Data' onPress={saveData} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'skyblue',
    margin: 20
  }
})



export default App;
