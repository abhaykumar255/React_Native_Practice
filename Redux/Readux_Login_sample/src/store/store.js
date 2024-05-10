import {combineReducers, createStore} from 'redux';
import { countReducers } from '../reducer/countReduers';

const rootReducer = combineReducers({
    count : countReducers
})

export default store = createStore(rootReducer)