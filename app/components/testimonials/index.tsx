'use client'
import React, { useEffect } from 'react';
import SwiperCore, { } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import './index.css'
import { Montserrat } from 'next/font/google';
// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination]);

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination]);

interface TestimonialCardProps {
  avatarSrc?: string;
  name: string;
  content: string;
  isDetailTestonial?: boolean;
}
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});
const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, content, avatarSrc, isDetailTestonial }) => {
  return (
    <>
      {isDetailTestonial ?
           <div className="h-[248px] justify-center items-center text-center relative overflow-hidden backdrop-blur-sm testi-style rounded-md group p-6 flex gap-4 flex-col transition-all duration-500 container">
           {/* Background blur */}
           <div className="absolute inset-0 bg-opacity-20  border-[1px] border-[#e5e7eb78]  rounded-md"></div>
 
           {/* Content */}
           <div className="relative z-10 max-w-[calc(100%-2rem)] mx-auto">
             <div className="flex items-center">
               <div className="flex-shrink-0">
                 <img className="w-12 h-12 rounded-full" src={avatarSrc} alt="Neil image" />
               </div>
               <div className="flex-1 min-w-0 ms-4 text-left">
                 <p className="text-[20px] leading-[24px] tracking-[-2%] font-medium text-[#2C2240]  ">
                   {name}
                 </p>
                 <p className="text-[16px] text-[#6B6B6B] font-medium leading-[24px]">
                   email@windster.com
                 </p>
               </div>
             </div>
 
             <div className='h-full flex justify-center items-center text-start'>
               <p className="text-[#0B0B0B] pb-2 text-[14px] font-semibold translate-[-2%] leading-[24px]">{content}</p>
             </div>
           </div>
         </div>
        :
        <div className="h-[248px] text-center justify-center items-center relative overflow-hidden testi-style rounded-md group p-6 flex gap-4 flex-col transition-all duration-500 container">
          {/* Background blur */}
          <div className="absolute inset-0 bg-opacity-20 backdrop-filter border-[1px] border-white backdrop-blur-5xl rounded-md"></div>

          {/* Content */}
          <div className="relative z-10 max-w-[calc(100%-2rem)] mx-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={avatarSrc} alt="Neil image" />
              </div>
              <div className="flex-1 min-w-0 ms-4 text-left">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
            </div>

           <div className='h-full flex justify-center items-center text-start'>
              <p className="text-black pb-2 text-paragraph leading-[24px]">{content}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
};


interface Testimonial {
  avatarSrc: string;
  name: string;
  content: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  isDetailTestonial?: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, isDetailTestonial }) => {
  useEffect(() => {
    const swiper = new SwiperCore('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          spaceBetween: 32,
        },
        768: {
          spaceBetween: 32,
        },
        1024: {
          spaceBetween: 32,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      {isDetailTestonial ?
            <section >  
            {/* Testimonials Slider */}
                     {/* Testimonials heading and description */}
          <div>
            <h1 className={`${montserrat.className} text-center font-semibold text-[#000000] text-[32px] tracking-[-1%] mb-4`}>Testimonials</h1>
          </div>
            <div >
              <div className="mx-auto mb-14 flex justify-center items-center">
                <div className="px-[30px] swiper mySwiper">
                  <div className="swiper-wrapper w-max">
                    {testimonials?.map((testimonial, index) => (
                      <div key={index} className="swiper-slide">
                        <TestimonialCard
                        isDetailTestonial={isDetailTestonial}
                          name={testimonial.name}
                          content={testimonial.content}
                          avatarSrc={testimonial.avatarSrc}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>
  
            {/* Pagination outside Testimonials Slider */}
            <div className="swiper-pagination absolute top-4 left-0 right-0 flex justify-center z-10"></div>
          </section> :
        <section className="relative py-[100px]" style={{ background: "radial-gradient(#eeecec85, transparent)" }}>
          <div className="absolute top-[0px]  z-[-1] right-0">
            <svg width="274" height="295" viewBox="0 0 574 595" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M1096 47C1096 349.652 850.652 595 548 595C245.348 595 0 349.652 0 47C0 -255.652 245.348 -501 548 -501C850.652 -501 1096 -255.652 1096 47ZM3.99622 47C3.99622 347.445 247.555 591.004 548 591.004C848.445 591.004 1092 347.445 1092 47C1092 -253.445 848.445 -497.004 548 -497.004C247.555 -497.004 3.99622 -253.445 3.99622 47Z" fill="#350ABC" />
            </svg>


          </div>
          <div className="absolute bottom-[-97px] left-[-9px]">
            <svg width="258" height="269" viewBox="0 0 498 269" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M498 256C498 397.385 383.385 512 242 512C100.615 512 -14 397.385 -14 256C-14 114.615 100.615 0 242 0C383.385 0 498 114.615 498 256ZM-3.71143 256C-3.71143 391.703 106.297 501.711 242 501.711C377.703 501.711 487.711 391.703 487.711 256C487.711 120.297 377.703 10.2886 242 10.2886C106.297 10.2886 -3.71143 120.297 -3.71143 256Z" fill="#350ABC" />
            </svg>

          </div>
          {/* Testimonials heading and description */}
          <div>
            <h1 className="testiHeading">Testimonials</h1>
            <p className='testiDesc'>At Updone we are committed to pushing the <br /> boundaries of what’s possible.</p>
          </div>

          {/* Testimonials Slider */}
          <div className='mx-40'>
            <div className="mx-auto h-[50vh] flex justify-center items-center">
              <div className="px-[30px] swiper mySwiper">
                <div className="swiper-wrapper w-max">
                  {testimonials?.map((testimonial, index) => (
                    <div key={index} className="swiper-slide">
                      <TestimonialCard
                        name={testimonial.name}
                        content={testimonial.content}
                        avatarSrc={testimonial.avatarSrc}
                      />
                    </div>
                  ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>

          {/* Pagination outside Testimonials Slider */}
          <div className="swiper-pagination absolute top-4 left-0 right-0 flex justify-center z-10"></div>
        </section>
      }
    </>
  );
};

export default Testimonials;
