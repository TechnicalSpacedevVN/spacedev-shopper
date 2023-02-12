import { ENV } from '@/config'
import { configureStore } from '@reduxjs/toolkit'
import { authReducer, getUserAction } from './auth'
import { cartReducer, getCartAction } from './cart'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    },
    devTools: ENV === 'development',
    // middleware: []
})


store.dispatch(getUserAction())
store.dispatch(getCartAction())