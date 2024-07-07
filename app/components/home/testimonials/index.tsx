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
           <div className={`testiminial_styles h-[248px] text-center justify-center items-center relative overflow-hidden  group py-6 flex gap-4 flex-col transition-all duration-500 container`}>
          
 
           {/* Content */}
           <div className="relative z-10 max-w-[calc(100%-2rem)] mx-auto">
             <div className="flex items-center">
               <div className="flex-shrink-0">
                 <img className="w-12 h-12 rounded-full" src={avatarSrc} alt="Neil image" />
               </div>
               <div className="flex-1 min-w-0 ms-4 text-left">
                 <p className="text-[20px] leading-[24px] tracking-[-0.4px] font-[500] text-[#2C2240]  ">
                   {name}
                 </p>
                 <p className="text-[16px] text-[#6B6B6B] font-[500] leading-[24px]">
                   email@windster.com
                 </p>
               </div>
             </div>
 
             <div className='h-full flex justify-center items-center text-start'>
               <p className="text-[#0B0B0B] pb-2 text-[16px] font-[400] translate-[-0.32px] leading-[24px]">{content}</p>
             </div>
           </div>
         </div>
        :
        
        <div className={`testiminial_styles h-[248px] text-center justify-center items-center relative overflow-hidden  group p-6 flex gap-4 flex-col transition-all duration-500 container`} >

          {/* Content */}
          <div className="relative z-10 max-w-[calc(100%-2rem)] mx-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={avatarSrc} alt="Neil image" />
              </div>
              <div className="flex-1 min-w-0 ms-4 text-left">
              <p className="text-[20px] leading-[24px] tracking-[-0.4px] mb-[8px] font-[500] text-[#2C2240]  ">
                   {name}
                 </p>
                <p className="text-[16px] text-[#6B6B6B] font-[500] leading-[24px]">
                   email@windster.com
                 </p>
              </div>
            </div>

           <div className='h-full flex justify-center items-center text-start'>
           <p className="text-[#0B0B0B] pb-2 text-[16px] font-[400] translate-[-0.32px] leading-[24px]">{content}</p>
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
        delay: 500000,
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
            <section> 

            {/* Testimonials Slider */}
                     {/* Testimonials heading and description */}
          <div>
            <h1 className={`${montserrat.className} mt-[110px] text-center font-semibold text-[#000000] text-[32px] tracking-[-1%] mb-[140px]`}>Testimonials</h1>
          </div>

           <div className='px-[100px] pb-[87px] bg-[#F3F0FF] relative top-[12px] w-[90%] m-auto'>
           <div  className='relative bottom-[85px]'>
              <div className="mx-auto flex justify-center items-center">
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
           </div>
  
            {/* Pagination outside Testimonials Slider */}
            <div className="swiper-pagination absolute top-4 left-0 right-0 flex justify-center z-10 " style={{bottom:'100px'}}></div>
          </section> :
      <section className="relative py-[100px]">
      <div  className="absolute top-[0px]  z-[999] right-0">
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
        <h1 className={`${montserrat.className} text-[60px] font-[600] leading-normal tracking-[-1.2px] text-[#000000] text-center`}>Testimonials</h1>
        <p className={`${montserrat.className} text-[20px] font-[400] leading-normal text-[#6B6B6B] text-center`}>At Updone we are committed to pushing the <br /> boundaries of what’s possible.</p>
      </div>

      {/* Testimonials Slider */}
      <div className='max-w-[1279px] m-auto'>
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
      <div className="swiper-pagination absolute top-4 left-0 right-0 flex justify-center z-10 mt-[41px]"></div>

      {/* Random colored circles with blur */}
      <div className="absolute inset-0 flex justify-end items-center space-x-4 space-y-4  z-[-1]">
        <div className="absolute top-0 right-[395px] w-32 h-32 rounded-full">
          <svg width="518" height="495" viewBox="0 0 718 695" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.14" filter="url(#filter0_f_35_3168)">
              <path d="M618 336C618 479.042 502.042 595 359 595C215.958 595 100 479.042 100 336C100 192.958 215.958 77 359 77C502.042 77 618 192.958 618 336ZM209.091 336C209.091 418.792 276.208 485.909 359 485.909C441.792 485.909 508.909 418.792 508.909 336C508.909 253.208 441.792 186.091 359 186.091C276.208 186.091 209.091 253.208 209.091 336Z" fill="#350ABC" />
            </g>
            <defs>
              <filter id="filter0_f_35_3168" x="0" y="-23" width="718" height="718" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_35_3168" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute left-[35%] -translate-x-1/2 top-[60%] transform -translate-y-1/2 w-32 h-32 rounded-full">
          <svg width="572" height="434" viewBox="0 0 772 534" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1" filter="url(#filter0_f_35_3170)">
              <path d="M434.599 303.692C528.317 376.833 642.172 387.587 567.176 483.682C492.18 579.776 355.41 598.384 261.692 525.243C167.974 452.101 152.796 314.908 227.792 218.814C302.788 122.719 340.88 230.55 434.599 303.692Z" fill="#BC0AB5" />
            </g>
            <defs>
              <filter id="filter0_f_35_3170" x="0.140137" y="0.818359" width="771.359" height="749.104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_35_3170" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-[682px] left-0 w-32 h-32 rounded-full">
          <svg width="573" height="583" viewBox="0 0 673 683" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_f_35_3166)">
              <circle cx="331.5" cy="341.5" r="91.5" fill="#B292F7" />
            </g>
            <defs>
              <filter id="filter0_f_35_3166" x="-10" y="0" width="683" height="683" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_35_3166" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
      }
    </>
  );
};

export default Testimonials;
