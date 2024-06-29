import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
const StaffListing = dynamic(() => import('../components/home/staff'),{ssr:false});
const page = () => {
  return (
    <Suspense fallback={<p>Loading....</p>}>
        <StaffListing />
    </Suspense>
  )
}

export default page
