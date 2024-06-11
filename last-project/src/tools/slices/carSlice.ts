import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { carPayloadType } from "../../types/sliceType";
import supabase from "../../config/connect";
import swal from "sweetalert";



const carSlice = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
      carread: (state, action:PayloadAction<carPayloadType | any>) => {
        return action.payload;
      },
      caradd: (state, action: PayloadAction<carPayloadType | any>) => {
        const createbrand = async () => {
          const { data, error }: any = await supabase
            .from('cars')
            .insert(action.payload)
          if (error) {
            console.log(error);
  
          } else {
            swal("Car add successfully","","success");
            setTimeout(() => {
              window.location.assign("http://localhost:5173/dashboard/car/read")
            }, 2000);
  
  
          }
  
        }
        createbrand();
      }
    },
  })


  export default carSlice.reducer;

  export const {carread,caradd} = carSlice.actions;
