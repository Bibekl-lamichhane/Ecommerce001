'userclient'
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    userName:'',
    isLoggedIn:false,
    token:''
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
       setisLoggedIn(state){
        state.isLoggedIn=!state.isLoggedIn
       }
       
    }

})
export const { setisLoggedIn } = userSlice.actions
export default userSlice.reducer