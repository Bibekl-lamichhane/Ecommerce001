import Calculator from '@/components/calculator/page'
import Lottery from '@/components/lottery/Lottery'
import NavBar from '@/components/navbar/navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <NavBar />
        <Calculator/>
    </div>
  )
}

export default page