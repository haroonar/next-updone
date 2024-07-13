import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
import Loading from './loading';
import Loader from '../components/ui/loader';
const Home = dynamic(() => import('../components/home'), {
  loading: () => <Loader />, // Display loader while loading
  ssr: false, // Do not SSR for this component
});
const page = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Home />
    </Suspense>
  )
}

export default page
