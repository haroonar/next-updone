'use client'
import React, { ReactNode } from 'react'
interface MainWrapperProps{
  children:ReactNode;
}
const MainWrapper = ({children}:MainWrapperProps) => {
  return (
    <div className='mt-[80px] '>
      {children}
    </div>
  )
}

export default MainWrapper
