import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.cartItems.find(i => i.id === item.id);
            if(existing) {
                existing.quantity++
            } else {
                state.cartItems.push({...item, quantity:1});
            }
            state.totalQuantity++;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find(i => i.id === id);
            if(item){
                state.totalQuantity -=item.quantity;
            }
            state.cartItems = state.cartItems.filter(i => i.id !== id);
            // state.totalQuantity -= item.quantity;
            // state.cartItems = state.cartItems.find(i => i.id !== id);
        },
        increaseQty: (state,action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            item.quantity++;
            state.totalQuantity++;
        },
        decreaseQty: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if(item.quantity > 1){
                item.quantity--;
                state.totalQuantity--;
            } else {
                state.cartItems = state.cartItems.filter(i => i.id !== item.id);
                state.totalQuantity--;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;

        }
    }
})

export const {addToCart, removeFromCart, increaseQty, decreaseQty, clearCart} = cartSlice.actions;
export default cartSlice.reducer;