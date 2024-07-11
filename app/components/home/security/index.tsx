'use client'
import React from 'react';

const Security = () => {
  return (
    <div className='security-bg bg-[#FFFFFF]' >
      {/* You can place your content here */}
      <div className='content relative z-[999] max-w-[1279px] m-auto right-4'>
        <div className='flex  h-[70vh] relative left-[15px]'>
          <div className='py-28 w-[30%] text-white'>
            <h2 className='why-choose mb-4'>Why <br /> Choose Updone?</h2>
            <p className='text-[20px] font-[400] leading-[31.25px] text-left'>Plan your event with ease and confidence, we have you covered!</p>
          </div>
          <div className=' w-[70%] text-white'>
            <div className='h-[100%]  ml-20 flex'>

              <div className='h-full w-1/2 mt-20'>
                <div className='flex flex-col justify-evenly items-center m-auto h-full space-y-6' >
                  <div>
                    <div className="relative flex items-start gap-4 pt-0 mx-0 mt-4 overflow-hidde bg-transparent shadow-none rounded-xl bg-clip-border">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_211_651)">
                          <path d="M33.8398 12.5475L31.9618 10.269C31.7039 9.95624 31.5471 9.57782 31.5086 9.17468L31.2254 6.23555C31.0783 4.70846 29.8631 3.49325 28.336 3.34616L25.3969 3.06326C24.9937 3.02451 24.6153 2.86765 24.3025 2.61008L22.0241 0.731732C20.8403 -0.243911 19.1219 -0.243911 17.9381 0.731732L15.6597 2.61008C15.3472 2.86765 14.9688 3.02451 14.5653 3.06326L11.6262 3.34616C10.0991 3.49325 8.88419 4.70846 8.73679 6.23555L8.45389 9.17468C8.41513 9.57782 8.25827 9.95624 8.00071 10.269L6.12236 12.5475C5.14671 13.7312 5.14671 15.4497 6.12236 16.6334L8.00071 18.9119C8.25827 19.2247 8.41513 19.6031 8.45389 20.0062L8.73679 22.9454C8.88388 24.4725 10.0991 25.6874 11.6262 25.8348L13.4227 26.0078L9.15427 36.2076C9.0386 36.4853 9.09079 36.7978 9.29068 37.0231C9.49057 37.248 9.79422 37.3371 10.0829 37.255L13.7862 36.2095C13.8024 36.2049 13.8179 36.2119 13.8253 36.225L15.6798 39.5972C15.8178 39.8484 16.0756 39.9997 16.3594 39.9997C16.3729 39.9997 16.3863 39.9994 16.4 39.9988C16.7 39.9836 16.9594 39.8023 17.0781 39.5227L21.5846 28.7531C21.7375 28.6653 21.8846 28.5642 22.0244 28.4492L24.3028 26.5711C24.5912 26.3331 24.9364 26.1827 25.3047 26.1302L29.3864 35.8832L26.4979 35.0678C25.9486 34.9131 25.3734 35.1539 25.0978 35.6534L23.6516 38.2831L21.7354 33.704C21.6087 33.4016 21.2615 33.2593 20.959 33.3857C20.6569 33.512 20.5144 33.8596 20.641 34.1617L22.8856 39.5258C23.0031 39.8023 23.2622 39.9836 23.5625 39.9988C23.5762 39.9994 23.5896 40 23.6031 40C23.8869 40 24.1447 39.8484 24.2827 39.5972L26.1369 36.2256C26.1446 36.2119 26.1604 36.2055 26.176 36.2095L29.8787 37.255C30.168 37.3368 30.4719 37.248 30.6715 37.0231C30.8714 36.7978 30.9236 36.4856 30.8076 36.207L26.5394 26.0075L28.336 25.8345C29.8631 25.6874 31.0783 24.4725 31.2254 22.9454L31.5086 20.0059C31.5471 19.6028 31.7039 19.2247 31.9618 18.9119L33.8398 16.6334C34.8158 15.4497 34.8158 13.7312 33.8398 12.5475ZM16.3109 38.2831L14.8644 35.6528C14.5891 35.1536 14.0133 34.9128 13.4642 35.0678L10.5761 35.8829L14.6575 26.1302C15.0261 26.1827 15.3713 26.3331 15.6597 26.5708L17.9381 28.4492C18.5301 28.9372 19.2555 29.181 19.9812 29.181C20.0279 29.181 20.0743 29.1798 20.121 29.1776L16.3109 38.2831ZM32.9246 15.8791L31.0466 18.1575C30.6376 18.6531 30.3892 19.2531 30.3276 19.8924L30.0447 22.8315C29.9519 23.7947 29.1856 24.561 28.2225 24.6537L25.6407 24.9025C25.6306 24.9031 25.6203 24.904 25.6102 24.9055L25.2833 24.9369C24.6437 24.9986 24.0437 25.247 23.5481 25.6556L21.2697 27.5337C20.5232 28.1492 19.4393 28.1492 18.6928 27.5337L16.4144 25.6556C15.9188 25.247 15.3188 24.9983 14.6791 24.9369L14.3508 24.9052C14.3416 24.904 14.3328 24.9034 14.3236 24.9028L11.74 24.6537C10.7769 24.561 10.0106 23.7947 9.91781 22.8315L9.63492 19.8927C9.57327 19.2531 9.32486 18.6531 8.91592 18.1575L7.03788 15.8791C6.42234 15.1323 6.42234 14.0483 7.03788 13.3019L8.91592 11.0234C9.32486 10.5278 9.57327 9.92785 9.63492 9.28821L9.91781 6.34908C10.0106 5.38595 10.7769 4.61965 11.74 4.52688L14.6791 4.24398C15.3188 4.18234 15.9188 3.93393 16.4144 3.5253L18.6928 1.64725C19.066 1.33964 19.5238 1.18553 19.9812 1.18553C20.4387 1.18553 20.8965 1.33933 21.2697 1.64725L23.5481 3.5253C24.0437 3.93393 24.6437 4.18264 25.2833 4.24398L28.2225 4.52688C29.1856 4.61965 29.9519 5.38595 30.0447 6.34908L30.3276 9.28821C30.3892 9.92785 30.6376 10.5278 31.0466 11.0234L32.9246 13.3019C33.5398 14.0486 33.5398 15.1323 32.9246 15.8791Z" fill="#F3F0FF" />
                          <path d="M19.9809 5.32422C19.5847 5.32422 19.1862 5.34924 18.7956 5.39929C18.4709 5.4408 18.2411 5.73804 18.2826 6.06274C18.3241 6.38775 18.6216 6.61724 18.946 6.57604C19.2866 6.5324 19.6348 6.51043 19.9809 6.51043C24.4361 6.51043 28.0607 10.135 28.0607 14.5902C28.0607 19.0455 24.4358 22.6697 19.9809 22.6697C15.5256 22.6697 11.9011 19.0452 11.9011 14.5899C11.9011 11.4121 13.7748 8.51756 16.6746 7.21538C16.9734 7.08141 17.107 6.73016 16.9728 6.43139C16.8385 6.13232 16.4872 5.99896 16.1888 6.13324C12.8633 7.62646 10.7148 10.9458 10.7148 14.5899C10.7148 19.6995 14.8716 23.8559 19.9809 23.8559C25.0901 23.8559 29.2469 19.6995 29.2469 14.5899C29.2469 9.4807 25.0901 5.32422 19.9809 5.32422Z" fill="#F3F0FF" />
                          <path d="M14.0904 13.9038C13.3833 14.6109 13.3833 15.7617 14.0904 16.4688L16.681 19.0597C17.0237 19.4021 17.479 19.5907 17.9637 19.5907C18.448 19.5907 18.9036 19.4021 19.2463 19.0597L24.9015 13.4042C25.6086 12.6968 25.6086 11.5463 24.9015 10.8389C24.1944 10.1318 23.0436 10.1318 22.3362 10.8389L17.9637 15.2118L16.6554 13.9038C15.9483 13.1967 14.7975 13.1967 14.0904 13.9038ZM17.9637 16.6439C18.1208 16.6439 18.2716 16.5814 18.383 16.47L23.1751 11.6778C23.4199 11.4331 23.8178 11.4334 24.0626 11.6778C24.3073 11.9226 24.3073 12.3208 24.0626 12.5653L18.4074 18.2208C18.289 18.3392 18.1312 18.4045 17.9637 18.4045C17.7958 18.4045 17.6383 18.3392 17.5199 18.2208L14.929 15.6301C14.6846 15.3854 14.6846 14.9871 14.929 14.7427C15.0514 14.6203 15.2122 14.559 15.373 14.559C15.5335 14.559 15.6944 14.6203 15.8164 14.7424L17.544 16.47C17.6554 16.5814 17.8062 16.6439 17.9637 16.6439Z" fill="#F3F0FF" />
                        </g>
                        <defs>
                          <clipPath id="clip0_211_651">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>


                      <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <h3 className="block security-head">
                            Pre-vetted, Qualified Staff
                          </h3>
                        </div>
                        <p className="block security-body">
                          Updone ensures consistent quality by thoroughly vetting all staff for skills, experience, and professionalism.
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg width="350" height="1" viewBox="0 0 394 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.5L393 0.500034" stroke="white" stroke-linecap="round" />
                  </svg>

                  <div>
                    <div className="relative flex items-start gap-4 pt-0 mx-0 mt-4 overflow-hidde bg-transparent shadow-none rounded-xl bg-clip-border">
                      <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clipRule="evenodd" d="M36.5344 41.4961H39.3084C39.6901 41.4961 40 41.8061 40 42.1877C40 42.5694 39.6901 42.8793 39.3084 42.8793H0.691602C0.309924 42.8793 0 42.5694 0 42.1877C0 41.8061 0.309924 41.4961 0.691602 41.4961H3.46562V25.9731H3.46795C3.4664 25.9451 3.46562 25.917 3.46562 25.8889C3.46562 25.3099 3.79231 24.7418 4.43248 24.3078C5.14673 23.8235 6.29435 23.4888 7.5937 23.4888C8.89305 23.4888 10.0407 23.8235 10.7549 24.3078C11.3951 24.7418 11.7218 25.3099 11.7218 25.8889C11.7218 25.917 11.721 25.9451 11.7195 25.9731H11.7218V41.4961H15.8719V18.4336C15.8719 17.8547 16.1986 17.2865 16.8388 16.8525C17.553 16.3682 18.7007 16.0336 20 16.0336C21.2994 16.0336 22.447 16.3682 23.1612 16.8525C23.8014 17.2865 24.1281 17.8547 24.1281 18.4336V41.4961H28.2782V9.59004C28.2782 9.01108 28.6049 8.44302 29.2451 8.00895C29.9593 7.52466 31.107 7.19001 32.4063 7.19001C33.7057 7.19001 34.8533 7.52466 35.5675 8.00895C36.2077 8.44302 36.5344 9.01108 36.5344 9.59004V41.4961ZM4.84882 41.4961H10.3386V27.711C9.63159 28.0619 8.66413 28.289 7.5937 28.289C6.52328 28.289 5.55581 28.0619 4.84882 27.711V41.4961ZM17.2551 41.4961H22.7449V20.2558C22.0379 20.6066 21.0704 20.8337 20 20.8337C18.9296 20.8337 17.9621 20.6066 17.2551 20.2558V41.4961ZM29.6614 41.4961H35.1512V11.4122C34.4442 11.7631 33.4767 11.9902 32.4063 11.9902C31.3359 11.9902 30.3684 11.7631 29.6614 11.4122V41.4961ZM22.7449 18.4336C22.7449 18.2569 22.5804 18.1298 22.385 17.9973C21.8481 17.6333 20.9767 17.4168 20 17.4168C19.0233 17.4168 18.152 17.6333 17.615 17.9973C17.4196 18.1298 17.2551 18.2569 17.2551 18.4336C17.2551 18.6103 17.4196 18.7374 17.615 18.87C18.152 19.234 19.0233 19.4505 20 19.4505C20.9767 19.4505 21.8481 19.234 22.385 18.87C22.5804 18.7374 22.7449 18.6103 22.7449 18.4336ZM35.1512 9.59004C35.1512 9.41342 34.9867 9.28625 34.7913 9.15381C34.2543 8.78977 33.383 8.57321 32.4063 8.57321C31.4296 8.57321 30.5583 8.78977 30.0213 9.15381C29.826 9.28625 29.6614 9.41342 29.6614 9.59004C29.6614 9.76674 29.826 9.89391 30.0213 10.0264C30.5583 10.3904 31.4296 10.607 32.4063 10.607C33.383 10.607 34.2543 10.3904 34.7913 10.0264C34.9867 9.89391 35.1512 9.76674 35.1512 9.59004ZM7.5937 24.872C6.61699 24.872 5.74566 25.0886 5.20871 25.4526C5.01334 25.5851 4.84882 25.7122 4.84882 25.8889C4.84882 26.0656 5.01334 26.1927 5.20871 26.3252C5.74566 26.6892 6.61699 26.9058 7.5937 26.9058C8.57042 26.9058 9.44175 26.6892 9.97869 26.3252C10.174 26.1927 10.3386 26.0656 10.3386 25.8889C10.3386 25.7122 10.174 25.5851 9.97869 25.4526C9.44175 25.0886 8.57042 24.872 7.5937 24.872ZM32.9131 2.4579C24.4218 9.70839 15.13 14.2884 6.34303 17.2488C5.98132 17.3707 5.58866 17.176 5.46677 16.8143C5.34487 16.4525 5.53964 16.0599 5.90135 15.9381C14.5032 13.04 23.5993 8.56621 31.9178 1.48879L30.5887 1.55968C30.2075 1.58 29.8816 1.28702 29.8613 0.905857C29.8409 0.524698 30.1339 0.198694 30.515 0.178379L33.8409 0.000982899C34.0485 -0.0100827 34.25 0.0727366 34.3897 0.226618C34.5294 0.380413 34.5926 0.588931 34.5618 0.794423L34.082 3.98729C34.0253 4.36473 33.6728 4.62512 33.2953 4.56841C32.9178 4.5117 32.6574 4.15924 32.7142 3.7818L32.9131 2.4579Z" fill="#F3F0FF" />
                      </svg>


                      <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <h3 className="block security-head">
                            Flexibility and Scalability
                          </h3>
                        </div>
                        <p className="block security-body">
                          Updone caters to a variety of staffing needs, from last-minute replacements to long-term engagements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <div className='p-6 m-auto flex justify-start items-center h-[115%]'>
             <svg width="1" height="400" viewBox="0 0 1 683" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1L0.50003 682" stroke="white" stroke-linecap="round" />
              </svg>
             </div>

              <div className='h-full w-1/2 mt-6'>
                <div className='flex flex-col justify-evenly items-center m-auto h-full space-y-6' >
                  <div>
                    <div className="relative flex items-start gap-4 pt-0 mx-0 mt-4 overflow-hidde bg-transparent shadow-none rounded-xl bg-clip-border">
                      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.9104 18.178L35.2088 10.6904C35.1016 10.5197 34.9142 10.416 34.7126 10.416H30.3866V6.37453C31.6959 6.10328 32.683 4.9418 32.683 3.55414C32.683 1.96594 31.39 0.673828 29.8006 0.673828C28.2124 0.673828 26.9204 1.96594 26.9204 3.55414C26.9204 4.94164 27.9066 6.10297 29.2147 6.37438V10.416H18.9072C18.5836 10.416 18.3212 10.6784 18.3212 11.002C18.3212 11.3255 18.5836 11.5879 18.9072 11.5879H23.0124L27.3461 18.4897L23.0123 25.3936H19.4887V22.2855C19.4887 21.962 19.2263 21.6996 18.9027 21.6996C18.5791 21.6996 18.3168 21.962 18.3168 22.2855V25.3936H13.0197L17.1579 18.8012C17.2775 18.6107 17.2775 18.3685 17.1579 18.178L13.0199 11.5879H16.2032C16.5268 11.5879 16.7891 11.3255 16.7891 11.002C16.7891 10.6784 16.5268 10.416 16.2032 10.416H11.9601H6.83242V6.37445C8.14055 6.10305 9.12672 4.94164 9.12672 3.55422C9.12672 1.96602 7.83461 0.673906 6.24648 0.673906C4.65836 0.673906 3.36625 1.96602 3.36625 3.55422C3.36625 4.94172 4.35242 6.10305 5.66055 6.37445V10.4161H0.586015C0.372812 10.4161 0.176405 10.5319 0.0732804 10.7185C-0.0299227 10.9051 -0.0235946 11.133 0.0896867 11.3135L4.59351 18.4898L0.0896086 25.6682C-0.0236727 25.8488 -0.0300008 26.0766 0.0732023 26.2632C0.176405 26.4498 0.372734 26.5655 0.585937 26.5655H3.83469C4.15828 26.5655 4.42062 26.3032 4.42062 25.9796C4.42062 25.656 4.15828 25.3937 3.83469 25.3937H1.64539L5.78172 18.8011C5.90117 18.6106 5.90117 18.3687 5.78172 18.1782L1.64562 11.588H5.66062V13.715C5.66062 14.0386 5.92297 14.3009 6.24656 14.3009C6.57016 14.3009 6.8325 14.0386 6.8325 13.715V11.588H11.6362L15.9699 18.4898L11.6362 25.3937H6.53875C6.21516 25.3937 5.95281 25.656 5.95281 25.9796C5.95281 26.3032 6.21516 26.5655 6.53875 26.5655H18.3168V29.6239C17.0087 29.8955 16.0225 31.0578 16.0225 32.4463C16.0225 34.0345 17.3146 35.3266 18.9027 35.3266C20.4909 35.3266 21.783 34.0345 21.783 32.4463C21.783 31.0578 20.7968 29.8955 19.4887 29.6239V26.5655H34.7126C34.9142 26.5655 35.1016 26.4619 35.2088 26.2911L39.9104 18.8012C40.03 18.6107 40.03 18.3685 39.9104 18.178ZM28.0923 3.55414C28.0923 2.61211 28.8587 1.8457 29.8007 1.8457C30.7439 1.8457 31.5112 2.61211 31.5112 3.55414C31.5112 4.49617 30.7439 5.26258 29.8007 5.26258C28.8587 5.26266 28.0923 4.49617 28.0923 3.55414ZM4.53812 3.55414C4.53812 2.61211 5.30453 1.8457 6.24648 1.8457C7.18852 1.8457 7.95484 2.61211 7.95484 3.55414C7.95484 4.49617 7.18844 5.26258 6.24648 5.26258C5.30445 5.26266 4.53812 4.49617 4.53812 3.55414ZM20.6111 32.4463C20.6111 33.3884 19.8447 34.1548 18.9027 34.1548C17.9608 34.1548 17.1944 33.3884 17.1944 32.4463C17.1944 31.503 17.9608 30.7357 18.9027 30.7357C19.8448 30.7356 20.6111 31.503 20.6111 32.4463ZM34.3886 25.3936H24.3959L28.5341 18.8012C28.6537 18.6107 28.6537 18.3685 28.5341 18.178L24.3962 11.5879H29.2148V13.7149C29.2148 14.0385 29.4772 14.3009 29.8008 14.3009C30.1244 14.3009 30.3867 14.0385 30.3867 13.7149V11.5879H34.3887L38.7224 18.4897L34.3886 25.3936Z" fill="#F3F0FF" />
                      </svg>


                      <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <h3 className="block security-head">
                            Streamlined Booking Process
                          </h3>
                        </div>
                        <p className="block security-body">
                          The user-friendly online platform allows clients to browse available staff, filter by specific needs, and confirm bookings within minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg width="350" height="1" viewBox="0 0 394 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.5L393 0.500034" stroke="white" stroke-linecap="round" />
                  </svg>

                  <div>
                    <div className="relative flex items-start gap-4 pt-0 mx-0 mt-4 overflow-hidde bg-transparent shadow-none rounded-xl bg-clip-border">
                      <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.9916 9.29664C39.9912 8.61266 39.7223 8.00945 39.2137 7.55242L33.1337 2.08711C32.3774 1.4075 31.4239 0.712891 30.0833 0.712891C30.0829 0.712891 30.0823 0.712891 30.0819 0.712891C28.7404 0.713359 27.7868 1.40891 27.0309 2.0893L20.9548 7.55875C20.4465 8.01625 20.178 8.61969 20.1782 9.30367L20.181 16.3232H16.1458C16.8761 14.8066 17.3848 12.4108 16.8135 10.6168C16.4115 9.35422 15.5261 8.52187 14.2531 8.20969C14.0906 8.16977 13.919 8.1968 13.7766 8.28453C13.6341 8.37219 13.5328 8.51344 13.4952 8.67641C13.4259 8.97742 13.3618 9.25961 13.3016 9.52484C12.5509 12.8306 12.4544 13.2555 10.3809 14.6107C8.91602 15.5681 8.81203 15.6917 7.90102 17.0208C7.80797 17.1566 7.70531 17.3063 7.59039 17.4725C7.22148 18.0061 6.74953 18.2467 6.06367 18.2527L6.01078 18.2529V18.1032C6.01078 17.3248 5.3775 16.6915 4.59898 16.6915H1.41172C0.633281 16.6915 0 17.3248 0 18.1032V31.8738C0 32.6523 0.633281 33.2855 1.41172 33.2855H4.59906C5.3775 33.2855 6.01086 32.6523 6.01086 31.8738V31.2331C6.29258 31.3314 6.57422 31.4362 6.86422 31.5445C8.28414 32.0748 9.89344 32.6759 12.2829 32.6759H20.5795C20.9331 32.6759 21.2697 32.6021 21.5752 32.4697C21.8752 32.6046 22.2002 32.6759 22.5334 32.6759H22.534L37.6543 32.6707C38.9482 32.6702 40.0005 31.6171 39.9999 30.3232L39.9916 9.29664ZM4.76086 31.8738C4.76086 31.9615 4.6868 32.0355 4.59906 32.0355H1.41172C1.32406 32.0355 1.25 31.9615 1.25 31.8738V18.1032C1.25 18.0155 1.32406 17.9415 1.41172 17.9415H4.59906C4.6868 17.9415 4.76086 18.0155 4.76086 18.1032V31.8738ZM12.2829 31.4259C10.1193 31.4259 8.68688 30.8909 7.30164 30.3735C6.88344 30.2173 6.45461 30.0572 6.01094 29.9142V19.5029L6.07117 19.5027C7.16297 19.4932 8.02016 19.0492 8.61875 18.1832C8.73469 18.0155 8.8382 17.8645 8.93211 17.7275C9.77227 16.5018 9.77227 16.5018 11.0648 15.657C13.5615 14.0252 13.7455 13.2143 14.5205 9.80164C14.532 9.75102 14.5437 9.69961 14.5555 9.64766C15.0705 9.92109 15.422 10.3666 15.6225 10.996C16.2122 12.8479 15.2823 15.6989 14.5547 16.539C14.3945 16.7239 14.357 16.9853 14.4587 17.2079C14.5604 17.4305 14.7825 17.5732 15.0272 17.5732H22.1725C22.8688 17.5732 23.4353 18.1397 23.4353 18.836C23.4353 19.5323 22.8688 20.0989 22.1725 20.0989H17.2463C16.9012 20.0989 16.6213 20.3787 16.6213 20.7239C16.6213 21.0691 16.9012 21.3489 17.2463 21.3489H23.2048C23.9012 21.3489 24.4677 21.9154 24.4677 22.6117C24.4677 23.308 23.9012 23.8746 23.2048 23.8746H17.2463C16.9012 23.8746 16.6213 24.1545 16.6213 24.4996C16.6213 24.8448 16.9012 25.1246 17.2463 25.1246H22.5559C23.2523 25.1246 23.8188 25.6911 23.8188 26.3874C23.8188 27.0837 23.2523 27.6502 22.5559 27.6502H17.2463C16.9012 27.6502 16.6213 27.9301 16.6213 28.2752C16.6213 28.6204 16.9012 28.9002 17.2463 28.9002H20.5795C21.2759 28.9002 21.8424 29.4668 21.8424 30.1631C21.8424 30.8595 21.2759 31.4259 20.5795 31.4259H12.2829ZM37.6538 31.4207L22.7506 31.4259C22.9674 31.0545 23.0923 30.6233 23.0923 30.1631C23.0923 29.7001 22.9665 29.2659 22.7472 28.893C24.0438 28.7949 25.0688 27.7086 25.0688 26.3874C25.0688 25.7744 24.848 25.2119 24.482 24.7752C25.221 24.3373 25.7177 23.5313 25.7177 22.6117C25.7177 21.5826 25.0957 20.696 24.208 20.3079C24.5082 19.8939 24.6853 19.3853 24.6853 18.836C24.6853 17.4505 23.558 16.3232 22.1725 16.3232H21.4311L21.4283 9.30328C21.4282 8.97453 21.5469 8.70781 21.7912 8.48789L27.8673 3.01836C28.6998 2.26891 29.3416 1.9632 30.0824 1.96289H30.0834C30.8235 1.96289 31.4654 2.26828 32.2982 3.01672L38.3782 8.48203C38.6227 8.7018 38.7416 8.96844 38.7417 9.29719L38.75 30.3237C38.7502 30.9284 38.2585 31.4205 37.6538 31.4207ZM33.837 22.9627C33.9285 23.717 33.7263 24.4054 33.2523 24.9534C32.6948 25.598 31.7684 26.0301 30.7141 26.1513V26.9463C30.7141 27.2915 30.4343 27.5713 30.0891 27.5713C29.744 27.5713 29.4641 27.2915 29.4641 26.9463V26.1423C27.9029 25.9277 26.6893 24.9405 26.338 23.5313C26.2545 23.1964 26.4583 22.8572 26.7932 22.7737C27.1284 22.6907 27.4673 22.8941 27.5509 23.2289C27.8746 24.5273 29.1812 24.9605 30.2023 24.935C31.079 24.9141 31.9051 24.6005 32.307 24.1358C32.5509 23.8538 32.6455 23.5193 32.5962 23.1133C32.4795 22.1523 31.6779 21.6008 29.9969 21.3248C27.3216 20.8855 26.6986 19.5287 26.6472 18.4679C26.5758 16.998 27.6048 15.7659 29.2079 15.4023C29.292 15.3834 29.3775 15.3669 29.4643 15.3532V14.5403C29.4643 14.1952 29.7441 13.9153 30.0893 13.9153C30.4345 13.9153 30.7143 14.1952 30.7143 14.5403V15.3479C31.8586 15.5173 32.9874 16.1802 33.5514 17.5236C33.685 17.8418 33.5354 18.2082 33.2171 18.3418C32.8988 18.4755 32.5325 18.3258 32.3989 18.0075C31.8568 16.7164 30.5445 16.3811 29.4844 16.6216C28.6833 16.8032 27.8452 17.3678 27.8958 18.4074C27.9116 18.733 27.9596 19.7237 30.1995 20.0914C31.0293 20.2275 33.5553 20.6423 33.837 22.9627ZM30.084 9.09359C31.3113 9.09359 32.3098 8.09516 32.3098 6.86781C32.3098 5.64047 31.3113 4.64203 30.084 4.64203C28.8566 4.64203 27.8581 5.64047 27.8581 6.86781C27.8581 8.09516 28.8566 9.09359 30.084 9.09359ZM30.084 5.89195C30.622 5.89195 31.0598 6.32977 31.0598 6.86773C31.0598 7.4057 30.622 7.84352 30.084 7.84352C29.5459 7.84352 29.1081 7.4057 29.1081 6.86773C29.1081 6.32977 29.5459 5.89195 30.084 5.89195Z" fill="#F3F0FF" />
                      </svg>


                      <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <h3 className="block security-head">
                            Transparent pricing structure
                          </h3>
                        </div>
                        <p className="block security-body">
                          Competitive rates and transparent pricing structure ensure clients get the best value for their staffing needs..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
