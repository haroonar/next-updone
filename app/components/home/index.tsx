import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
const LazyHero = dynamic(() => import('./hero'), { ssr: false });
const LazyServices = dynamic(() => import('./services'), { ssr: false });
const LazyOurSponsors = dynamic(() => import('./sponsors'), { ssr: false });
const LazyHowWork = dynamic(() => import('./how-work'), { ssr: false });
const LazySecurity = dynamic(() => import('./security'), { ssr: false });
const LazyGalleryContent = dynamic(() => import('./gallery'), { ssr: false });
const LazyTestimonials = dynamic(() => import('./testimonials'), { ssr: false });
const LazyAccordion = dynamic(() => import('./faqs'), { ssr: false });
import HOME_TESTIMONINAL_CONTENT from './testimonials/constants';
import Loader from '../ui/loader';

const Home = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <Suspense fallback={<><Loader/></>}>
          <LazyHero />
          <LazyServices />
          <LazyOurSponsors />
          <LazyHowWork />
          <LazySecurity />
          <LazyGalleryContent />
          <LazyTestimonials testimonials={HOME_TESTIMONINAL_CONTENT} />
          <LazyAccordion />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
