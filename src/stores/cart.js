import { cartService } from "@/services/cart";
import { getToken } from "@/utils";
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { takeLatest, call, put, takeEvery, delay } from 'redux-saga/effects'
import { loginSuccessAction, logoutAction } from "./auth";

export const updateCartItemAction = createAction('cart/addCartItem')
export const removeCartItemAction = createAction('cart/removeItem')
export const getCartAction = createAction('cart/getCart')


export const { reducer: cartReducer, actions: cartActions } = createSlice({
    name: 'cart',
    initialState: {
        cart: null,
        openCartOver: false,
        loading: {
            // 234234: true
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


function* fetchCartItem(action) {
    try {
        yield delay(300)
        if (action.payload.quantity >= 1) {
            yield call(cartService.addItem, action.payload.productId, action.payload.quantity)

            // thunkApi.dispatch(getCartAction())
            yield put(getCartAction())

            if (action.payload.showPopover) {
                yield put(cartActions.togglePopover(true))

                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        } else {
            yield put(removeCartItemAction(action.payload.productId))
        }

    } catch (err) {
        console.error(err)
    }
}


function* fetchRemoveItem(action) {
    try {
        yield put(cartActions.toggleProductLoading({ productId: action.payload, loading: true }))
        yield call(cartService.removeItem, action.payload)
        yield put(getCartAction())
        yield put(cartActions.toggleProductLoading({ productId: action.payload, loading: false }))

    } catch (err) {
        console.error(err)
    }
}

function* fetchCart() {
    if (getToken()) {
        const cart = yield call(cartService.getCart)
        yield put(cartActions.setCart(cart.data))
        // thunkApi.dispatch(cartActions.setCart(cart.data))
        return cart
    }
}

function* clearCart() {
    yield put(cartActions.setCart(null))
}



export function* cartSaga() {
    console.log('cartSaga')
    // yield takeLatest('cart/getCart/pending', getCart)
    yield takeLatest(updateCartItemAction, fetchCartItem)
    yield takeLatest(removeCartItemAction, fetchRemoveItem)
    yield takeLatest([getCartAction, loginSuccessAction], fetchCart)
    yield takeLatest(logoutAction, clearCart)
}
