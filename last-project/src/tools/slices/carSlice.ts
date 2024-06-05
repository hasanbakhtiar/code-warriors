import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface productType{
    id:string | number;
    img:string;
    title:string;
    price:number;

}
const initialState:productType[] = [
    {
        id:1,
        img:"1.jpg",
        title:"Nissan",
        price:30000
    }
]
const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{
        add:(state,action:PayloadAction)=>{
                const newTodo:any = {id:crypto.randomUUID(),text:action.payload}
                state.push(newTodo);
        }
    }
})


export default carSlice.reducer;