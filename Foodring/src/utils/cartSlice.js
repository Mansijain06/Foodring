import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [

        ]
    },
    reducers: {
        addItem: (state, action) => {
            console.log('add item');
        },
        removeItem: (state, action) => {
            console.log('remove item');
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer;