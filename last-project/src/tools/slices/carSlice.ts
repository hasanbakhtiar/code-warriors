import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { carPayloadType } from "../../types/sliceType";



const carSlice = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
      carread: (state, action:PayloadAction<carPayloadType | any>) => {
        return action.payload;
      },
    },
  })


  export default carSlice.reducer;

  export const {carread} = carSlice.actions;
