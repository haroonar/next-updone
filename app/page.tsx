'use client'
import Services from './components/Services';
import HowWork from './components/HowWork';
import OurSponsors from './components/sponsors';
import Security from './components/security';
import Accordion from './components/accordian';
import Hero from './components/hero';

const Home = () => {

  return (
    <>
     
      <div className='overflow-hidden'>
        <Hero/>
        <Services />
        <OurSponsors />
        <HowWork />
        <Security />
        <Accordion/>
      </div>
    </>

  );
};

export default Home;
