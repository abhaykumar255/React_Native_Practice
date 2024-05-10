import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import { addToCart ,removeFromCart} from './action';
import { useDispatch,useSelector } from 'react-redux';


const Product = (props) => {
    const item = props.item
    const dispatch = useDispatch()
    const cartItems = useSelector((state)=>state.reducer) 

    const handleaddToCart = (item) => {
        // console.warn(item) 
        dispatch(addToCart(item))
    }
    const handleRemoveToCart = (item) => {
        dispatch(removeFromCart(item.name))
    }

    const [isAdded,setIsAdded] = useState(false)

    useEffect(()=>{
        let result = cartItems.filter((element)=>{
            return  element.name === item.name
        })
        if(result.length){
            setIsAdded(true)
        }else{
            setIsAdded(false)
        }
        // if(cartItems && cartItems.length){
        //     cartItems.forEach((element)=>{ 
        //         // console.warn(element)
        //         if(element.name === item.name){
        //             setIsAdded(true)
        //         }
        //     })
        // }
    },[cartItems])
    return (
        <View style={{ alignItems: 'center', borderColor: 'orange', borderWidth: 2, padding: 10 }} >
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
            {
                isAdded ? <Button title='Remove to Cart' onPress={() => handleRemoveToCart(item)} /> :
                <Button title='Add to Cart' onPress={() => handleaddToCart(item)} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    } 
})


export default Product;
