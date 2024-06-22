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
        const createcar = async () => {
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
        createcar();
      },
      cardelete:(state,action: PayloadAction<carPayloadType | any>)=>{
        const deletecar = async () => {
          const { data, error }: any = await supabase
            .from('cars')
            .delete()
            .eq('id',action.payload)
            
          if (error) {
            console.log(error);
  
          } else {
            swal("Car has been deleted ","","warning");
            setTimeout(() => {
              window.location.assign("http://localhost:5173/dashboard/car/read")
            }, 2000);
          }
  
        }
        deletecar();
      },
      caredit:(state,action: PayloadAction<carPayloadType | any>)=>{
        const editcar = async () => {
          const { data, error }: any = await supabase
            .from('cars')
            .update(action.payload.data)
            .eq('id',action.payload.id)
            
          if (error) {
            console.log(error);
  
          } else {
            swal("Car has been edited ","","success");
            setTimeout(() => {
              window.location.assign("http://localhost:5173/dashboard/car/read")
            }, 2000);
          }
  
        }
        editcar();
      }
    },
      
  })


  export default carSlice.reducer;

  export const {carread,caradd,cardelete,caredit} = carSlice.actions;
