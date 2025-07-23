'use client'
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    height2:50,
    width2:50,
    borderRadius2:null,
    backgroundColor2:'blue',
    height:100,
    width:100,
    borderRadius:null,
    backgroundColor:'green',
    top:0,
    left:0,
    
}
 const boxSlice=createSlice({
    name:'box',
    initialState,
    reducers:{
        changeHeight(state){
            if(state.borderRadius==null){
            state.height=state.height+5
            }
            else{
                state.height=state.height+5
                state.width=state.width+5
            }
        },
        changeWidth(state){
            if(state.borderRadius==null){state.width=state.width+5}
            else{
                state.height=state.height+5
                state.width=state.width+5
            }
            
        },
    changeColor(state,action){
        state.backgroundColor=action.payload
    },
    changeColor2(state,action){
       
        state.backgroundColor2=action.payload
    },
    shiftLeft(state,action){
        state.left=state.left-100
    },
    shiftRight(state,action){
        state.left=state.left+100
    },
    shiftTop(state,action){
        state.top=state.top-100
    },
    shiftBottom(state,action){
        state.top=state.top+100
    },

    changeShape(state){
        if(state.borderRadius=='100%'){
            state.borderRadius=null
        }
        else{ state.borderRadius="100%"}
       
    }
    }
 })
 export const { changeHeight,changeWidth,changeColor,changeColor2,changeShape,shiftBottom,shiftLeft,shiftRight,shiftTop } = boxSlice.actions
export default boxSlice.reducer