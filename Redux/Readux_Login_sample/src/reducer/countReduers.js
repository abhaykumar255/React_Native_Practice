import React from 'react';
import {COUNT_DECREASE, COUNT_INCREASE} from '../constants';

const initialState = {
  count: 0,
};

export const countReducers = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT_DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
