'use client'
import Services from './components/services';
import HowWork from './components/how-work';
import OurSponsors from './components/sponsors';
import Security from './components/security';
import Accordion from './components/accordian';
import Hero from './components/hero';
import Testimonials from './components/testimonials';
import HOME_TESTIMONINAL_CONTENT from './components/testimonials/constants';
import GalleryContent from './components/gallery';

const Home = () => {

  return (
    <>
     
      <div className='overflow-hidden'>
        <Hero/>
        <Services />
        <OurSponsors />
        <HowWork />
        <Security />
        <GalleryContent/>
        <Testimonials testimonials={HOME_TESTIMONINAL_CONTENT} />
        <Accordion/>

      </div>
    </>

  );
};

export default Home;
