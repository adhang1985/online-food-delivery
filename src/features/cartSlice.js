import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data:[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart : (state,action) => {
            state.data.push(action.payload);
            console.log(state.data);
        },
        removeFromCart(state,action){
            return state.filter(item => item._id !== action.payload);
        }
    }
})


export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;