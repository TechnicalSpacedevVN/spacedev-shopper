import { cartService } from "@/services/cart";
import { getToken } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateCartItemAction = createAsyncThunk('cart/addCartItem', async (data, thunkApi) => {
    try {
        await cartService.addItem(data.productId, data.quantity)
        thunkApi.dispatch(getCartAction())
        if (data.showPopover) {
            thunkApi.dispatch(cartActions.togglePopover(true))

            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }

    } catch (err) {
        throw err.response.data
    }
})

export const getCartAction = createAsyncThunk('cart/getCart', async (_, thunkApi) => {
    try {
        if (getToken()) {
            const cart = await cartService.getCart()
            thunkApi.dispatch(cartActions.setCart(cart.data))
            return cart
        }

    } catch (err) {
        console.error(err)
    }
})


export const { reducer: cartReducer, actions: cartActions } = createSlice({
    name: 'cart',
    initialState: {
        cart: null,
        openCartOver: false
    },
    reducers: {
        setCart(state, action) {
            state.cart = action.payload
        },
        togglePopover(state, action) {
            state.openCartOver = action.payload
        }
    }
})