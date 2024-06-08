import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { carPayloadType } from "../../types/sliceType";
import supabase from "../../config/connect";



const brandSlice = createSlice({
  name: 'brand',
  initialState: [],
  reducers: {
    brandread: (state, action: PayloadAction<carPayloadType | any>) => {
      return action.payload;
    },
    add: (state, action: PayloadAction<carPayloadType | any>) => {
      const createbrand = async () => {
        const { data, error }: any = await supabase
          .from('brandofcar')
          .insert(action.payload)
        if (error) {
          console.log(error);

        } else {
          console.log(data);


        }

      }
      createbrand();
    }
  },
})


export default brandSlice.reducer;

export const { brandread, add } = brandSlice.actions;
