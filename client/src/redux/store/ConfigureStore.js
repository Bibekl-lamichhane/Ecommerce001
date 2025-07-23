import { configureStore,Tuple} from "@reduxjs/toolkit"
import userSlice from "../reducerSlices/userSlice"
import productSlice from '../reducerSlices/productSlice'
import boxSlice from "../reducerSlices/boxSlice"
import logger from "redux-logger"
export   const store= configureStore({
  reducer: {
        user:userSlice,
        product:productSlice,
        box:boxSlice,
    },
      middleware: () => new Tuple( logger),
     
})