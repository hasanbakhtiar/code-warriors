import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { carPayloadType } from "../../types/sliceType";



const userSlice = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
      userread: (state, action:PayloadAction<carPayloadType | any>) => {
        return action.payload;
      },


    },
      
  })


  export default userSlice.reducer;

  export const {userread} = userSlice.actions;
