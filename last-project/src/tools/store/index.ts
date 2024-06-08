import { configureStore } from '@reduxjs/toolkit'
import carSlice from '../slices/carSlice'
import brandSlice from '../slices/brandSlice'

const store = configureStore({
  reducer: {
    car:carSlice,
    brand:brandSlice
  },
})

export default store