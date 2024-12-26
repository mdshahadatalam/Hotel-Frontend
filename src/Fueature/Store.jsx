import { configureStore } from "@reduxjs/toolkit";
import Login from './Slice/Login'

const store = configureStore({
    reducer:{
        login:Login
    }
})

export default store