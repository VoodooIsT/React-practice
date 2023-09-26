import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items:[]
    },
    reducers: {
        addItem : (state, action) => {

            //vanila Redux => DON'T MUTATE STATE, returnung was mandatory
            // const newState = {...state};
            // newState.items.push(action.payload);
            // return newState;


            //IMMER LIBRARY -> It find the difference between the origional state, the mutated state and that gives us back the new state which is an immutable state which is the new copy of the state redux toolkit usese immer as this
            
            //Redux Toolkit uses IMMER BTS
            //We HAVE To Mutate the State
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
            //OR
            // return{ items: [] };
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;