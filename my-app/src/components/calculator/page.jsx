"use client"
import React, { useState } from 'react'

const Calculator = () => {
const[num,setnum]=useState("0")

const handelClick=(val)=>{

if(val==="AC"){
   setnum("0")
}
else if(val==="%"){
setnum(num/100)
}
else if(val==="+/-"){
    return setnum(-num)
}
else if(val==="⌫"){
    if(num.length==1){
        setnum("0")
    }
   else{ setnum(num.slice(0,-1))}
}
else if(val==="÷"){
    setnum(num+"/")
}
else if(val==="x"){
    setnum(num+"*")
}else if(val==="-"){
    setnum(num+"-")
}else if(val==="+"){
    setnum(num+"+")
}else if(val==="="){
    setnum(eval(num).toString())
}
 else if (num==="0"){
    setnum(val)
 }
 else {
    setnum(num+val)
 }
}

const digit =[["⌫","+/-","%"],
['7','8','9'],['4','5','6'],['1','2','3'],[ "AC",'0',"."]
]
const symbol=["÷","x","-","+","="]

const generateDigit=()=>{
      return digit.map((item,key)=>{
            return(<div  key={key} className='flex'>{item.map((val,key)=>{
                return <div key={key} onClick={()=>handelClick(val)} className='flex  justify-center cursor-pointer bg-gray-700 text-white rounded-3xl text-xl p-2 w-12 h-12 m-1 '>{val}</div>
            })}</div>)
        })
    
}
const generateSymbol=()=>{
            return symbol.map((val,key)=>{
                return <div key={key} onClick={()=>handelClick(val)} className='flex justify-center cursor-pointer bg-orange-400 text-white rounded-3xl text-xl m-2 p-2  w-12 h-12 '>{val}</div>
            })
    
}
  
  return (
    <div className="container flex justify-center items-center p-10">
    <div className='bg-black  p-2 w-1/6 rounded-4xl '>
       <div className='text-white text-3xl m-6 flex justify-end'><p>{num}</p></div> 
       <div className='flex'>
      <div className='min-w'>{generateDigit()}</div> 
       <div className=''>{generateSymbol()}</div></div>
    </div>
    </div>
    
  )
}

export default Calculator