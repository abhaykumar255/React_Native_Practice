import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './action';

const UserList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserList());
    });

    const userList = useSelector((state)=>state.reducer)

    // const cartData = useSelector((state) => state.reducer)
    // //console.warn(cartData)

    // const [cartitems, setCardItems] = useState(0)
    // useEffect(()=>{
    //     setCardItems(cartData.length)
    // },[cartData])

    return (
        <View style={styles.container}>
            <Text >User List Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})


export default UserList;
