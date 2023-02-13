import { authService } from "@/services/auth"
import { userService } from "@/services/user"
import { clearToken, clearUser, getToken, getUser, setToken, setUser } from "@/utils/token"
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cartActions, getCartAction } from "./cart"
import { call, put, takeLatest } from "redux-saga/effects"
import { handleError } from "@/utils"

const initialState = {
    user: getUser(),
    status: 'idle',
    loginLoading: false
}

export const loginAction = createAction('auth/login')
export const logoutAction = createAction('auth/actionLogout')
export const setUserAction = createAction('auth/setUserAction')
export const loginByCodeAction = createAction('auth/loginByCode')
export const getUserAction = createAction('auth/getUser')
export const loginSuccessAction = createAction('auth/loginSuccess')

// export const loginAction = createAsyncThunk('auth/login', async (data, thunkApi) => {
// try {
//     const res = await authService.login(data)
//     setToken(res.data)
//     const user = await userService.getUser()
//     setUser(user.data)

//     thunkApi.dispatch(getCartAction())
//     return user.data
// } catch (err) {
//     console.log(err)
//     throw err.response.data
// }
// })

// export const loginByCodeAction = createAsyncThunk('auth/loginByCodeAction', async (code, thunkApi) => {
//     try {
//         const res = await authService.loginByCode({ code })
//         setToken(res.data)
//         const user = await userService.getUser()
//         setUser(user.data)
//         return user.data
//     } catch (err) {
//         console.log(err)
//         throw err.response.data
//     }
// })

// export const getUserAction = createAsyncThunk('auth/getUser', async (_, thunkApi) => {
// try {
//     if (getToken()) {
//         const user = await userService.getUser()
//         setUser(user.data)
//         thunkApi.dispatch(authActions.setUser(user.data))
//     }
// } catch (err) {

// }
// })

// export const setUserAction = createAsyncThunk('auth/setUser', (user, thunkApi) => {
//     setUser(user)
//     thunkApi.dispatch(authActions.setUser(user))
// })


// export const logoutAction = createAsyncThunk('auth/logout', (_, thunkApi) => {
// thunkApi.dispatch(authActions.logout())
// thunkApi.dispatch(cartActions.setCart(null))
// clearUser()
// clearToken()
// })


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
    // extraReducers: (builder) => {
    //     builder.addCase(loginAction.pending, (state) => {
    //         state.loginLoading = true
    //     })

    //     builder.addCase(loginAction.fulfilled, (state, action) => {
    //         state.user = action.payload
    //         state.loginLoading = false
    //     })

    //     builder.addCase(loginAction.rejected, (state) => {
    //         state.loginLoading = false
    //     })

    //     builder.addCase(loginByCodeAction.fulfilled, (state, action) => {
    //         state.user = action.payload
    //     })
    // }
})


function* fetchLogin(action) {
    try {
        const res = yield call(authService.login, action.payload)
        setToken(res.data)
        const user = yield call(userService.getUser)
        setUser(user.data)

        // yield put(getCartAction())
        yield put(authActions.setUser(user.data))
        yield put(loginSuccessAction())

        // thunkApi.dispatch(getCartAction())
        // return user.data
    } catch (err) {
        console.log(err)
        handleError(err)
        // throw err.response.data
    }
}

function* logout() {
    yield put(authActions.logout())
    // yield put(cartActions.setCart(null))
    // thunkApi.dispatch(authActions.logout())
    // thunkApi.dispatch(cartActions.setCart(null))
    clearUser()
    clearToken()
}

function* fetchUser() {
    try {
        if (getToken()) {
            const user = yield call(userService.getUser)
            setUser(user.data)
            // thunkApi.dispatch(authActions.setUser(user.data))
            yield put(authActions.setUser(user.data))
        }
    } catch (err) {

    }
}

function* setUserSaga(action) {
    setUser(action.payload)
    // thunkApi.dispatch(authActions.setUser(user))
    yield put(authActions.setUser(user))
}


function* fetchLoginByCode(action) {
    try {
        const res = yield call(authService.loginByCode, { code })
        setToken(res.data)
        const user = yield call(userService.getUser)
        setUser(user.data)
        yield put(authActions.setUser(user.data))
        // return user.data
    } catch (err) {
        handleError(err)
    }
}
export function* authSaga() {
    yield takeLatest(loginAction, fetchLogin)
    yield takeLatest(logoutAction, logout)
    yield takeLatest(getUserAction, fetchUser)
    yield takeLatest(setUserAction, setUserSaga)
    yield takeLatest(loginByCodeAction, fetchLoginByCode)
}