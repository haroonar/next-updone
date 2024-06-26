'use client'
import { Staff } from '@/app/types';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';

const page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [staff, setStaff] = useState<Staff>();

  useEffect(() => {
    const encodedStaff = searchParams.get('staff');
    if (encodedStaff) {
      try {
        const decodedStaff = JSON.parse(atob(encodedStaff));
        setStaff(decodedStaff);
      } catch (error) {
        console.error('Failed to decode staff data', error);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (staff) {
      console.log('Staff details:', staff);
    }
  }, [staff]);

  return (
    <>
      <div className='h-[200.9px] bg-[#f3f0ff]'></div>
      <div className="max-w-[1279px] mx-auto h-screen">
        <div className='absolute'>
          <GoDotFill className='text-[40px] absolute right-0 top-[-56px] z-[1] left-[-4px]  text-[#8C52FF]' />
          <img
            className="relative bottom-[83px] border-solid border-8 border-white object-cover w-34 h-34 mt-3 mr-3 rounded-full"
            src={staff?.img}
            alt={`${staff?.name}`}
          />
        </div>
        {staff ? (
          <div className="grid grid-cols-10 h-full">
            <div className="col-span-4 p-4 mt-16"> {/* Left side - 30% */}
              <h1 className="text-2xl font-[600] text-black">{staff?.name}</h1>
              <p className="text-[#6b6b6b] text-lg font-[500] mb-2">
                {staff?.services.map((service, index) => (
                  <span key={index}>
                    {service}
                    {index < staff?.services.length - 1 && " & "}
                  </span>
                ))}
              </p>
              <p className='flex gap-4'>
                <span className="flex items-center">
                  <span>
                    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_457_4209)">
                        <circle cx="42.5" cy="42.5" r="16.5" fill="#2C2240" />
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M40.219 44.7802C42.5098 47.071 44.6326 47.3219 45.2558 47.3451C46.0088 47.3725 46.7774 46.7576 47.1098 46.1279C46.5796 45.5059 45.8891 45.0233 45.133 44.5002C44.6868 44.9459 44.1369 45.774 43.4047 45.4773C42.9882 45.3099 41.9599 44.8362 41.0614 43.9372C40.1624 43.0388 39.6893 42.0104 39.5207 41.5946C39.224 40.8612 40.0546 40.3101 40.5008 39.8638C39.9777 39.0953 39.5035 38.3869 38.8826 37.8834C38.244 38.2171 37.6255 38.9797 37.6535 39.7429C37.6768 40.3661 37.9276 42.4889 40.219 44.7802ZM45.2117 48.5361C44.3537 48.5045 41.9223 48.1685 39.376 45.6227C36.8302 43.0763 36.4947 40.6455 36.4626 39.787C36.4149 38.4786 37.417 37.2078 38.5746 36.7115C38.714 36.6513 38.8667 36.6284 39.0176 36.645C39.1685 36.6616 39.3126 36.7172 39.4355 36.8063C40.3936 37.5051 41.0543 38.5638 41.6221 39.3932C41.7402 39.5656 41.7943 39.7739 41.775 39.9821C41.7558 40.1902 41.6644 40.385 41.5166 40.5329L40.7087 41.3414C40.8964 41.7554 41.2783 42.4692 41.9039 43.0948C42.5294 43.7203 43.2432 44.1022 43.6579 44.2899L44.4651 43.482C44.6136 43.334 44.8092 43.2427 45.018 43.2241C45.2269 43.2054 45.4356 43.2607 45.6079 43.3801C46.4539 43.9664 47.4476 44.6176 48.1721 45.5452C48.2684 45.6691 48.3297 45.8166 48.3495 45.9722C48.3693 46.1278 48.3469 46.2859 48.2847 46.43C47.7861 47.5935 46.5242 48.5843 45.2117 48.5361Z" fill="white" />
                      <path d="M43.8796 39.9163C44.0534 39.9998 44.2696 40.216 44.3745 40.3904C44.4093 40.6338 44.5831 39.6932 45.4339 39.1357M46.9645 39.6527C46.9645 40.2675 46.7203 40.8571 46.2855 41.2919C45.8508 41.7266 45.2611 41.9708 44.6463 41.9708C44.0315 41.9708 43.4418 41.7266 43.0071 41.2919C42.5724 40.8571 42.3281 40.2675 42.3281 39.6527C42.3281 39.0378 42.5724 38.4482 43.0071 38.0135C43.4418 37.5787 44.0315 37.3345 44.6463 37.3345C45.2611 37.3345 45.8508 37.5787 46.2855 38.0135C46.7203 38.4482 46.9645 39.0378 46.9645 39.6527Z" stroke="white" stroke-width="0.869319" stroke-linecap="round" stroke-linejoin="round" />
                      <defs>
                        <filter id="filter0_d_457_4209" x="0" y="0" width="85" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="13" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.796875 0 0 0 0 0.796875 0 0 0 0 0.796875 0 0 0 0.26 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_457_4209" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_457_4209" result="shape" />
                        </filter>
                      </defs>
                    </svg>


                  </span>
                  <span className="ml-1 text-md">phone number verified</span>
                </span>
                <span className="flex items-center">
                  <svg width="86" height="85" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_457_4210)">
                      <circle cx="42.5166" cy="42.5" r="16.5" fill="#2C2240" />
                    </g>
                    <g clip-path="url(#clip0_457_4210)">
                      <path d="M45.4121 45.8896C45.5864 45.9732 45.803 46.1898 45.9081 46.3646C45.943 46.6086 46.1172 45.666 46.9698 45.1073M48.5036 45.6253C48.5036 46.2414 48.2588 46.8323 47.8232 47.268C47.3875 47.7037 46.7966 47.9484 46.1805 47.9484C45.5644 47.9484 44.9735 47.7037 44.5378 47.268C44.1022 46.8323 43.8574 46.2414 43.8574 45.6253C43.8574 45.0092 44.1022 44.4183 44.5378 43.9827C44.9735 43.547 45.5644 43.3022 46.1805 43.3022C46.7966 43.3022 47.3875 43.547 47.8232 43.9827C48.2588 44.4183 48.5036 45.0092 48.5036 45.6253Z" stroke="white" stroke-width="0.871155" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M42.4096 43.3C43.0511 43.3 43.5711 42.78 43.5711 42.1385C43.5711 41.497 43.0511 40.9769 42.4096 40.9769C41.7681 40.9769 41.248 41.497 41.248 42.1385C41.248 42.78 41.7681 43.3 42.4096 43.3Z" stroke="white" stroke-width="0.871155" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M40.377 45.6227C40.9288 45.1 41.3934 44.8096 42.4243 44.7515M47.3463 41.8477C47.3463 41.3831 47.3608 39.9602 47.2882 39.3794C47.2446 38.9003 47.114 38.2469 46.5187 37.8694C46.1557 37.6806 45.8072 37.5064 44.1375 37.4919M40.6384 37.4919C39.3897 37.4919 38.4169 37.5935 37.9378 38.1888C37.5313 38.7446 37.5551 39.3794 37.5168 39.5827C37.4296 40.6716 37.4877 44.4757 37.4877 45.1145C37.4877 45.7824 37.4442 47.1396 38.3589 47.5973C39.1429 47.9893 39.956 47.9312 42.7146 47.9458M42.3226 36.3304C41.9742 36.3304 41.6838 36.3304 41.3934 36.6353C41.1466 36.8676 41.1843 37.0726 41.0885 37.4338C40.9526 37.942 40.8852 38.2103 41.074 38.4211C41.247 38.6476 41.538 38.6488 41.7953 38.6494H41.7999C42.0468 38.6668 42.8761 38.6587 43.1212 38.6494C43.3837 38.6389 43.5957 38.6244 43.7745 38.3921C43.9343 38.1848 43.8396 37.8392 43.7455 37.4774C43.6526 37.1208 43.6874 36.9402 43.4406 36.6353C43.0921 36.2868 42.6711 36.3304 42.3226 36.3304Z" stroke="white" stroke-width="0.871155" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <filter id="filter0_d_457_4210" x="0.0166016" y="0" width="85" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="13" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.796875 0 0 0 0 0.796875 0 0 0 0 0.796875 0 0 0 0.26 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_457_4210" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_457_4210" result="shape" />
                      </filter>
                      <clipPath id="clip0_457_4210">
                        <rect width="13.9385" height="13.9385" fill="white" transform="translate(36.0166 35.1707)" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="ml-1 text-md">id verified</span>
                </span>
              </p>
            </div>

            <div className="col-span-6 p-4 mt-16"> {/* Right side - 70% */}
              <h2 className="text-xl font-semibold">More Details</h2>
              {/* Add additional staff details here */}
              <p>Additional information can be placed here...</p>
            </div>
          </div>
        ) : (
          <p>Loading staff details...</p>
        )}
      </div>
    </>
  );
}

export default page;
