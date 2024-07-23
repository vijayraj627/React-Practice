import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },

    reducers : {
        addItem : (state, action) =>{
            state.items.push(action.payload)
        },
        clearItem : (state) =>{
            state.items.length = 0;
        },
    }
})

export const {addItem, clearItem} = CartSlice.actions;
export default CartSlice.reducer;