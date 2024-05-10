import React from 'react';
import { ScrollView, StyleSheet, Text, View,Image, Button } from 'react-native';
import Header from './Header';
import Product from './product'; 
  

const ProductWrapper = ({navigation}) => {
 
  const product = [
    {
      name: 'Samsung Mobile',
      color: 'black',
      price: 30000,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkwR9gAw7yxjCHbX5n4deRT5ijC-Z09SkWA&usqp=CAU'
    },
    {
      name: 'Apple Mobile',
      color: 'blue',
      price: 30000,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkwR9gAw7yxjCHbX5n4deRT5ijC-Z09SkWA&usqp=CAU'
    },
    {
      name: 'Vivo Mobile',
      color: 'white',
      price: 30000,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkwR9gAw7yxjCHbX5n4deRT5ijC-Z09SkWA&usqp=CAU'
    },
    {
      name: 'Realme Mobile',
      color: 'white',
      price: 30000,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkwR9gAw7yxjCHbX5n4deRT5ijC-Z09SkWA&usqp=CAU'
    }
  ]

  return (
    <View style={styles.container}>
      <Button title='GO TO USER LIST' onPress={()=>navigation.navigate('User')}/>
      <Header />
      <ScrollView>
      {
        product.map((item,index) => <Product item={item} index={index} />  )
      }
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default ProductWrapper;
