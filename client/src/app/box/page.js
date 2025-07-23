'use client'
import { changeColor, changeColor2, changeHeight, changeShape, changeWidth, shiftBottom, shiftLeft, shiftRight, shiftTop } from '@/redux/reducerSlices/boxSlice'
import { Input } from '@mui/joy';
import Button from '@mui/joy/Button';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
changeHeight
const page = () => {
    const{height,width,backgroundColor,borderRadius,height2,width2,backgroundColor2,borderRadius2,top,right,left,bottom}=useSelector(state=>state.box)
    const dispatch=useDispatch()
   
  return (<div className='flex justify-center items-center flex-col gap-6 '>
    <div style={{height,width,backgroundColor,borderRadius,position:'relative',top,right,left,bottom}} className='flex justify-center items-center'>
      <div style={{height:height2,width:width2,backgroundColor:backgroundColor2,borderRadius:borderRadius2}}>
      
    </div>
    </div>
    
     <Button onClick={()=>dispatch(changeHeight())} >Height+</Button>
     <Button onClick={()=>dispatch(changeWidth())} >Width+</Button>
     Change Color<Input type='text' placeholder='Enter the color for BackgroundColor' onKeyUp={(e)=>dispatch(changeColor(e.target.value))}/>
     Change Color<Input type='text' placeholder='Enter the color for BackgroundColor2' onChange={(e)=>dispatch(changeColor2(e.target.value))}/>
     <Button onClick={()=>dispatch(changeShape())} >Make it Circle</Button>
     <Button onClick={()=>dispatch(shiftTop())}>Top</Button>
     <Button onClick={()=>dispatch(shiftBottom())}>Bottom</Button>
     <Button onClick={()=>dispatch(shiftRight())}>Right</Button>
     <Button onClick={()=>dispatch(shiftLeft())}>Left</Button>
     </div>
  )
}

export default page