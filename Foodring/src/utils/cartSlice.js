import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {}
    },
    reducers: {
        addItem: (state, action) => {
            if (state.items[action.payload.id]) {
                state.items[action.payload.id]["count"] = ++state.items[action.payload.id]["count"];
                console.log("Add multi item - " + state.items[action.payload.id]["count"]);
            } else {
                state.items[action.payload.id] = { ...action.payload, count: 1 };
                console.log("Add item - " + state.items[action.payload.id]["count"]);
            }
        },
        removeItem: (state, action) => {
            console.log(action);
            if (state.items[action.payload.id].count > 1) {
                state.items[action.payload.id]["count"] = --state.items[action.payload.id]["count"];
                console.log("delete multi item - " + state.items[action.payload.id]["count"]);
            } else {
                console.log("delete item - " + state.items[action.payload.id]["count"]);
                delete state.items[action.payload.id];
            }
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer;