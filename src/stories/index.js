import { ENV } from '@/config'
import { configureStore } from '@reduxjs/toolkit'
import { authReducer, getUserAction } from './auth'
import { cartReducer, cartSaga, getCartAction } from './cart'
import createSagaMiddleware from 'redux-saga'





const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    },
    devTools: ENV === 'development',
    middleware: getMiddleware => getMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(cartSaga)


store.dispatch(getUserAction())
store.dispatch(getCartAction())