
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const saveData = async () => {
    try {
      // const saveName = await AsyncStorage.setItem('name',JSON.stringify(name))
      // const saveAge = await AsyncStorage.setItem('age',JSON.stringify(age))

      //multiset
      const names = ['name', JSON.stringify(name)]
      const ages = ['age', JSON.stringify(age)]
      const savedata = await AsyncStorage.multiSet([names,ages])
    } catch (error) {
      console.error('Error while saving data',error)
    }
  }
  const getData = async () => {
    try {
      // const getName = await AsyncStorage.getItem("name")
      // const name = JSON.parse(getName)
      // const getAge = await AsyncStorage.getItem('age')
      // const age = JSON.parse(getAge)

      // multiget
      const getdata = await AsyncStorage.multiGet(['name','age'])
      // console.log(name,':',age)
      console.log(getdata)
    } catch (error) {
      console.error('Error while getting data',error)
    }

  }
  const deleteData = async () => {
  //  const clear = await AsyncStorage.removeItem('name')
   const multireove  = await AsyncStorage.multiRemove(['name','age'])
  }
  const mergeData = async () =>{
    try {
      const merge = "ABHAY PRATAP RAJPUT"
      const agemerge = "1000"
      const mergeName = await AsyncStorage.mergeItem('name',JSON.stringify(merge))

      // multimerge
      // const firstData = ["places", JSON.stringify(merge)];
      // const secondData = ["food", JSON.stringify(age)];
      // const multimerge = await AsyncStorage.multiMerge([firstData, secondData]);
    } catch (error) {
      console.log('Error while merging data',error)
    }
  }
  const clearAllData = async ()=>{
    try {
      const clear = await AsyncStorage.clear();
    } catch (error) {
      console.error('Error while clearing',error)
    }
  }
  const getAllDataFromAsyncStorage = async () =>{
    try{
      const allKeys = await AsyncStorage.getAllKeys();
      const allData  = await AsyncStorage.multiGet(allKeys);

      allData.forEach((data)=>{
        const key = data[0];
        const value = data[1];
        console.log(`Key: ${key} : , Value: ${value}`)
    })
    }
    catch(error){
      console.error('Error retrieving data from AsyncStorage:', error)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 15 }}>UserName</Text>
      <TextInput onChangeText={text =>setName(text)} placeholder='Name' style={{ width: 140, height: 40, borderWidth: 1, borderColor: 'black', borderRadius: 5 }} />
      <Text style={{ fontSize: 15, marginTop: 15 }}>Age</Text>
      <TextInput onChangeText={text =>setAge(text)} placeholder='Age' style={{ width: 140, height: 40, borderWidth: 1, borderColor: 'black', borderRadius: 5 }} />
      <TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 5, width: 120, height: 30, alignItems: 'center', marginTop: 15, justifyContent: 'center' }}
        onPress={saveData}>
        <Text style={{ color: 'white' }}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 5, width: 120, height: 30, alignItems: 'center', marginTop: 15, justifyContent: 'center' }}
        onPress={getData}>
        <Text style={{ color: 'white' }}>View</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 5, width: 120, height: 30, alignItems: 'center', marginTop: 15, justifyContent: 'center' }}
        onPress={deleteData}>
        <Text style={{ color: 'white' }}>Remove</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 5, width: 120, height: 30, alignItems: 'center', marginTop: 15, justifyContent: 'center' }}
        onPress={mergeData}>
        <Text style={{ color: 'white' }}>Merge Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 5, width: 120, height: 30, alignItems: 'center', marginTop: 15, justifyContent: 'center' }}
        onPress={getAllDataFromAsyncStorage}>
        <Text style={{ color: 'white' }}>Get All Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 5, width: 120, height: 30, alignItems: 'center', marginTop: 15, justifyContent: 'center' }}
        onPress={clearAllData}>
        <Text style={{ color: 'white' }}>Clear All Data</Text>
      </TouchableOpacity>
    </View>
  )
}
export default App