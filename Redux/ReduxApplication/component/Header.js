import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {

    const cartData = useSelector((state) => state.reducer)
    //console.warn(cartData)

    const [cartitems, setCardItems] = useState(0)
    useEffect(()=>{
        setCardItems(cartData.length)
    },[cartData]) 

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, textAlign: 'right', padding: 5, backgroundColor: 'skyblue' }}>{cartitems} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})


export default Header;
