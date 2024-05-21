import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type todoType = {
    id:string,
    text:string
}
const initialState:todoType[] = []
const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add:(state,action:PayloadAction)=>{
                const newTodo:any = {id:crypto.randomUUID(),text:action.payload}
                state.push(newTodo);
        }
    }
})

export const {add} = todoSlice.actions;

export default todoSlice.reducer;