import { configureStore } from '@reduxjs/toolkit'
import  searchDetails  from '../features/searchSlice'
import  cartSlice  from '../features/cartSlice'

export const store = configureStore({
  reducer: {
     search : searchDetails,
     cart: cartSlice
  }
})