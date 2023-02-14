import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from 'redux-saga/effects';
import { loginSuccessAction, logoutAction } from "../auth";
import { clearCart, fetchCart, fetchCartItem, fetchRemoveItem, setCartSaga } from "./saga";
import { getCart } from "@/utils";




export const { reducer: cartReducer, actions: cartActions, name, getInitialState } = createSlice({
    name: 'cart',
    initialState: () => {
        return {
            cart: getCart(),
            openCartOver: false,
            loading: {
                // 234234: true
            }
        }
    },
    reducers: {
        setCart(state, action) {
            state.cart = action.payload
        },
        togglePopover(state, action) {
            state.openCartOver = action.payload
        },
        toggleProductLoading(state, action) {
            state.loading[action.payload.productId] = action.payload.loading
        }
    }
})

export const updateCartItemAction = createAction(`${name}/addCartItem`)
export const removeCartItemAction = createAction(`${name}/removeItem`)
export const getCartAction = createAction(`${name}/getCart`)



export function* cartSaga() {
    console.log('cartSaga')
    // yield takeLatest('cart/getCart/pending', getCart)
    yield takeLatest(updateCartItemAction, fetchCartItem)
    yield takeLatest(removeCartItemAction, fetchRemoveItem)
    yield takeLatest([getCartAction, loginSuccessAction], fetchCart)
    yield takeLatest(logoutAction, clearCart)
    yield takeLatest(cartActions.setCart, setCartSaga)
}
