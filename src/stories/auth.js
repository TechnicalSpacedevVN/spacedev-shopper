import { getUser } from "@/utils/token"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: getUser(),
    status: 'idle'
}


export const { reducer: authReducer, actions: authActions } = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        logout: (state) => {
            state.user = null
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        
    }
})
