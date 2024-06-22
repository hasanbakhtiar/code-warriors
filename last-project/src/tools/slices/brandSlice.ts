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
    },
    branddelete:(state,action: PayloadAction<carPayloadType | any>)=>{
      const deletebrand = async () => {
        const { data, error }: any = await supabase
          .from('brandofcar')
          .delete()
          .eq('id',action.payload)
          
        if (error) {
          console.log(error);

        } else {
          swal("Brand has been deleted ","","warning");
          setTimeout(() => {
            window.location.assign("http://localhost:5173/dashboard/brand/read")
          }, 2000);
        }

      }
      deletebrand();
    },
    brandedit:(state,action: PayloadAction<carPayloadType | any>)=>{
      const editbrand = async () => {
        const { data, error }: any = await supabase
          .from('brandofcar')
          .update(action.payload.data)
          .eq('id',action.payload.id)
          
        if (error) {
          console.log(error);

        } else {
          swal("Brand has been edited ","","success");
          setTimeout(() => {
            window.location.assign("http://localhost:5173/dashboard/brand/read")
          }, 2000);
        }

      }
      editbrand();
    }
  },
})


export default brandSlice.reducer;

export const { brandread, brandadd, branddelete ,brandedit } = brandSlice.actions;
