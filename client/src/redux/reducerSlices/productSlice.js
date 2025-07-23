'use client'
const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    cartItems:[],
    wishListItems:[],
    setWishListColor:'grey'
}

const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        addProductInCart(state,actions){
            state.cartItems.push(actions.payload)
        },
         addProductInWishList(state,actions){
            const product=actions.payload
            const exist=state.wishListItems.find(item=>item.id==product.id)
           
            if(!exist){
                 state.wishListItems.push(actions.payload)
            }
            else{
                state.wishListItems= state.wishListItems.filter(item=>item.id!=product.id)
                }
            }
           
        }
    }
)
export const { addProductInCart,addProductInWishList } = productSlice.actions
export default productSlice.reducer