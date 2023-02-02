import { ENV } from '@/config'
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth'


export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: ENV === 'development',
    // middleware: []
})