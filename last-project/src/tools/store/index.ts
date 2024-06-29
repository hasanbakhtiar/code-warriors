import { configureStore } from '@reduxjs/toolkit'
import carSlice from '../slices/carSlice'
import brandSlice from '../slices/brandSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import userSlice from '../slices/userSlice'

const store = configureStore({
  reducer: {
    car:carSlice,
    brand:brandSlice,
    user:userSlice
  },
})

export default store

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = ()=>useDispatch<AppDispatch>(); 
export const useAppSelector:TypedUseSelectorHook<RootStore> = useSelector; 