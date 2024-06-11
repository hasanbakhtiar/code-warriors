import { configureStore } from '@reduxjs/toolkit'
import carSlice from '../slices/carSlice'
import brandSlice from '../slices/brandSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    car:carSlice,
    brand:brandSlice
  },
})

export default store

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = ()=>useDispatch<AppDispatch>(); 
export const useAppSelector:TypedUseSelectorHook<RootStore> = useSelector; 