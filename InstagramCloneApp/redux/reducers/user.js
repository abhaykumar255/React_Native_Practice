// have everything related to user and can we done implement in index.js of reducer
import React from 'react';
import { View, Text } from 'react-native';

const initialState = {
    currentUser: null
}

export default user = (state = initialState, action) => {
    return {
        ...state,
        currentUser: action.currentUser
    }
}
