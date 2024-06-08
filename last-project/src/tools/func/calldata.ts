import supabase from "../../config/connect"
import { brandread } from "../slices/brandSlice";
import { carread } from "../slices/carSlice";
import store from "../store";

export const cardata= async()=>{
    const {data,error}:any = await supabase.from('cars').select();
    if (error) {
        console.log(error);
        
    }else{
        store.dispatch(carread(data));
        
    }
}

export const branddata= async()=>{
    const {data,error}:any = await supabase.from('brandofcar').select();
    if (error) {
        console.log(error);
        
    }else{
        store.dispatch(brandread(data));
        
    }
}


