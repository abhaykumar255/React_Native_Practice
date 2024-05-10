import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, } from 'react-native';


const App = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  const [show, setShow] = useState(true)

  //using useEffect on specific state (did update)
   useEffect(()=>{
    console.warn(count)
   },[count])
   
   // this is for didMount 
  // useEffect(()=>{
  //   console.warn('Hello')
  // },[])
  return ( 
    <View style={{margin : 5}}>
    <View style = {{borderWidth : 2, borderRadius :5, marginBottom : 5, padding : 5}}>
      <Text style={{fontSize: 30 }}>Lifecyle with useEffect</Text>
      <Text style={{fontSize: 30 }}>{data} useEffect as componentDidUpdate : {count}</Text>
      <Button title='Update Counter'  onPress={()=>{setCount(count+1)}}/>
      <Button title='Update Data'  onPress={()=>{setData(data+1)}}/>
      <User info ={{data,count} }/>
    </View>
    <View style= {{marginTop : 5, borderWidth : 2, padding : 5}}>
      <Text style={{fontSize : 25, textAlign : 'center'}}>Show/Hide Component</Text>
      <Button title='Hide Component' onPress={() => setShow(false)} />
      <Button title='Toggle Component' onPress={() => setShow(!show)} />
      {
        show  ? <Showhide />  : null
      }
    </View>
    </View>
  );
}

// Using useEffect on props
const User = ({info}) => {
  useEffect(()=>{
    console.warn('Run this when data probs is updated',info)
  },[info.data])
  return (
    <View>
      <Text style={{fontSize: 25 , color : 'green' }}>Data : {info.data} </Text>
  
    </View>
  );
}


const Showhide = () =>{

  // let timer = setInterval(()=>{
  //   console.warn("Timer called")
  // },2000)

  // useEffect(()=>{
  //   return ()=> clearInterval(timer)
  // })

  //for useeffect unmount
  useEffect(()=>{
    return() => {console.warn('useeffect called on unmount')}
  })
  return(
    <View>
      <Text style={{fontSize : 25, color : "blue"}}> User Component </Text>
    </View>
  );
}


export default App;



// import React, {Component} from 'react';
// import {Alert, Button, StyleSheet, View} from 'react-native';

// const ButtonBasics = () => {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button title="Press Me" />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
          
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button  title="This looks great!" />
//           <Button  title="OK!" color="#841584" />
//         </View>
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20,
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',

    
//   },
// });

// export default ButtonBasics;
