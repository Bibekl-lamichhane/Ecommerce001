import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    categoryList:'',
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addToCategoryList(state){

    }
    
  },
})

export const {  } = adminSlice.actions
export default adminSlice.reducer