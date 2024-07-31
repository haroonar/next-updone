import React from 'react'

const LeftArrow = () => {
  return (
    <div className='absolute bottom-[490px] left-[406px] z-10'>
    <svg height="40" width='260' viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="260" height="70" transform="matrix(1 0 0 -1 0 40)" fill="url(#paint0_linear_483_1294)" />
      <rect width="260" height="70" transform="matrix(1 0 0 -1 0 40)" fill="url(#paint1_linear_483_1294)" />
      <defs>
        <linearGradient id="paint0_linear_483_1294" x1="74" y1="0" x2="74" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_483_1294" x1="74" y1="0" x2="74" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  )
}

export default LeftArrow
