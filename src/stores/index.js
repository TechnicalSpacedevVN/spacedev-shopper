import { ENV } from '@/config'
import { configureStore } from '@reduxjs/toolkit'
import { authReducer, authSaga, getUserAction } from './auth'
import { cartReducer, cartSaga, getCartAction } from './cart'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { abcSaga } from './abc'

function* rootSaga(){
    yield all([
        cartSaga(),
        authSaga(),
        abcSaga()
    ])
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    },
    devTools: ENV === 'development',
    middleware: getMiddleware => getMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)


store.dispatch(getUserAction())
store.dispatch(getCartAction())