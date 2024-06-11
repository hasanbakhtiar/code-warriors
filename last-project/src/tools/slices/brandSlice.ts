import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { carPayloadType } from "../../types/sliceType";
import supabase from "../../config/connect";
import swal from "sweetalert";



const brandSlice = createSlice({
  name: 'brand',
  initialState: [],
  reducers: {
    brandread: (state, action: PayloadAction<carPayloadType | any>) => {
      return action.payload;
    },
    brandadd: (state, action: PayloadAction<carPayloadType | any>) => {
      const createbrand = async () => {
        const { data, error }: any = await supabase
          .from('brandofcar')
          .insert(action.payload)
        if (error) {
          console.log(error);

        } else {
          swal("Brand add successfully","","success");
          setTimeout(() => {
            window.location.assign("http://localhost:5173/dashboard/brand/read")
          }, 2000);


        }

      }
      createbrand();
    }
  },
})


export default brandSlice.reducer;

export const { brandread, brandadd } = brandSlice.actions;
