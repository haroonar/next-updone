import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
import RenderLoader from '../components/ui/loader';
import Loading from './loading';
const Home = dynamic(() => import('../components/home'),{ssr:false});
const page = () => {
  return (
        <Home />
  )
}

export default page
