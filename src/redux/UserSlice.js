import { createSlice } from '@reduxjs/toolkit';





const UserSlice = createSlice({
  
    name:"userInfo",
    initialState:{
        items:[]
    },
    reducers:{
        
         userDetails : (state,action)=>{
          
            state.items = action.payload
          
         }
    }


})



export  const {userDetails} = UserSlice.actions
export default UserSlice.reducer 