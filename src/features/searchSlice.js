import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchData: ""
}

export const searchDetails = createSlice({
    name:'search',
    initialState,
    reducers:{
        searchProduct : (state,action) => {
            state.searchData = action.payload;
        }
    }
})

export const {searchProduct} = searchDetails.actions;
export default searchDetails.reducer;