import React, { useEffect } from 'react'

const Spinner = () => {
    const[randomNum,setRandomNum]=useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            setRandomNum(Math.random()*10)
        },1000)
    },[randomNum])
  return (
    <div>
        {randomNum}
    </div>
  )
}

export default Spinner