import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';


const reducer = {
    user:userReducer
}

const store = configureStore({
    reducer
});

export default store;
