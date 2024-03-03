import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/produts";

interface CartState{
    cart: Product[]
}

const initialState:CartState = {
    cart: []
}

export const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addProduct: (state, action)=>{

            state.cart = [
                ...state.cart,
                action.payload
            ];
            
        },
        removeProduct: (state, action)=>{

            const productToRemove = action.payload
            state.cart =  state.cart
                .filter(product => product.id !== productToRemove.id);

        }
    }
})

export const {addProduct, removeProduct} = cartSlice.actions