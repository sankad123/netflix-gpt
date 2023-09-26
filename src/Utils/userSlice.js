import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState:null,
    reducers:{
        AddUser:(state, action)=>{
            return action.payload;
        },
        removeUser:(state, action)=>{
           return null;
        },
    }
})

export const{AddUser, removeUser} = userSlice.actions;
export default userSlice.reducer;