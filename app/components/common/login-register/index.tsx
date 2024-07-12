"use client"
import Image from 'next/image'
import React from 'react'


export const loginInputStyles: { [key: string]: string } = {
  borderRadius: "4px",
  background: " #FFF",
  boxShadow: " 0px 4px 16px 0px rgba(0, 0, 0, 0.08)"
}
const LoginFrom = ({ showLoginForm, close, showRegisterForm, styles, handleClose, setShowLoginForm, handleShowRegisterForm ,isHeaderLogin}: any) => {
  
 console.log('showLoginFormdddd', showRegisterForm)
  return (
    <div>
      {close ? <></> :
        <div style={{ height: showLoginForm ? "257px" : (showRegisterForm ? "430px" : "765px") }} className={`${styles.loginpopup}  ${isHeaderLogin ? "right-14 top-16":" right-0"} h-40 z-10 absolute overflow-hidden`}>
          <span className='relative bottom-[20px]'>
            <Image width={98} height={98} src='/images/booking/6.svg' alt='step-1' />
          </span>

          {/* Close button */}
          <button
            className="absolute top-[11px] right-[11px] text-gray-500  hover:text-gray-800 focus:outline-none"
            onClick={handleClose}
          >
            <Image width={12} height={12} src='/images/booking/7.svg' alt='step-1' />
          </button>
          {!showLoginForm && <button
            className="absolute top-[11px] left-[11px] text-gray-500  hover:text-gray-800 focus:outline-none"
            onClick={handleClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="6" viewBox="0 0 42 6" fill="none">
              <path d="M0 3L5 5.88675L5 0.113249L0 3ZM41 3.5C41.2761 3.5 41.5 3.27615 41.5 3C41.5 2.72386 41.2761 2.5 41 2.5L41 3.5ZM4.5 3.5L41 3.5L41 2.5L4.5 2.5L4.5 3.5Z" fill="#6B6B6B" />
            </svg>
            <span className='text-[12px] relative bottom-1 text-[#6B6B6B] font-[400] leading-[24px] tracking-[-0.2px]'>back</span>
          </button>}

          {/* Background section */}
          <div style={{ height: showLoginForm ? "193px" : "300px", bottom: showLoginForm ? '-59.125px' : '-130.125px' }} className='login_backgorund w-[529px] h-[193px] absolute bottom-[-59.125px] z-1 rounded-[56%]'>
            {/* Content on top of background */}

            {showLoginForm ?
              <div className="relative text-center bottom-[-34px]">
                <h2 className={styles.loginpopup_head}>
                  Join Updone
                </h2>
                <p className={styles.loginpopup_body}>Sign In or Sign up to updone to book pro event staff in a snap</p>
                <div className='flex justify-center items-center gap-[7px] mx-24 relative bottom-[80px]'>
                  <button onClick={() => setShowLoginForm(false)} className={`${styles.login_btn}`}>Login</button>
                  <button onClick={(e) => handleShowRegisterForm(e)} className={`${styles.register_btn}`}>Register</button>
                </div>
              </div>
              :
              <div className={`relative text-center  bottom-[25px]`}>
                {!showRegisterForm ? "" : <>
                  <h3 style={{}} className={`${styles.loginpopup_heads}`}>
                    Welcome Back
                  </h3>
                  <p className={styles.loginpopup_bodys}>Sign In or Sign up to updone to book pro event staff in a snap</p>
                </>
                }
                {
                  showRegisterForm ? <div className='flex justify-center items-center gap-[7px] mx-24 relative bottom-[143px] flex-col'>
                    <div className='flex justify-between flex-col gap-[8px] items-center'>
                      <div className="relative w-full" style={{ width: '320px' }}>


                        <div className="absolute inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                          <Image width={14} height={14} src='/images/booking/8.svg' alt='step-1' />
                        </div>
                        <input
                          style={loginInputStyles}
                          type="search"
                          id="default-search"
                          className={`${styles.defaultsearch} mt-[12px]  shadow-lg py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200`}
                          placeholder="Email address*"

                        />

                      </div>
                      <div className="flex items-center w-full" style={{ width: '320px' }}>
                        <div className="absolute inset-y-0 mt-3 ml-[21px] start-0 flex items-center ps-3 pointer-events-none bottom-[20px]">
                          <Image width={14} height={15} src='/images/booking/9.svg' alt='step-1' />

                        </div>
                        <input
                          style={loginInputStyles}
                          type="search"
                          id="default-search"
                          className={`${styles.defaultsearch} mt-[12px]  shadow-lg py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200`}
                          placeholder="Password"

                        />
                      </div>

                    </div>
                    <button className={`${styles.login_btn_}  mt-[20px] w-full justify-center bg-[#350ABC] text-[#F3F0FF3] opacity-[0.9] rounded-[4px]  px-[16px] py-[18px] text-center inline-flex items-center`}>
                      Login
                      <span className={`ml-2`}>
                        <Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' />
                      </span>

                    </button>
                  </div> :
                    <div className='relative bottom-[468px]'>
                      <div className='flex justify-center items-center gap-[7px] mx-24 relative bottom-[-145px] flex-col'>
                        <h3 className={`${styles.registerpopup_head}`}>
                          Welcome Back
                        </h3>
                        <p className={styles.registerpopup_body}>Sign In or Sign up to updone to book pro event staff in a snap</p>
                      </div>
                      <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full" style={{ width: '320px' }}>


                          <div className="absolute inset-y-0 mt-3 ml-[15px] start-0 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M11.6668 12.25V11.0833C11.6668 10.4645 11.421 9.871 10.9834 9.43342C10.5458 8.99583 9.95233 8.75 9.3335 8.75H4.66683C4.04799 8.75 3.4545 8.99583 3.01691 9.43342C2.57933 9.871 2.3335 10.4645 2.3335 11.0833V12.25" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M6.99984 6.41667C8.2885 6.41667 9.33317 5.372 9.33317 4.08333C9.33317 2.79467 8.2885 1.75 6.99984 1.75C5.71117 1.75 4.6665 2.79467 4.6665 4.08333C4.6665 5.372 5.71117 6.41667 6.99984 6.41667Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <input
                            type="search"
                            id="default-search"
                            className={`${styles.defaultsearch} mt-[12px]  py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 `}
                            placeholder="Full Name*"
                            style={loginInputStyles}

                          />

                        </div>
                      </div>
                      <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full" style={{ width: '320px' }}>


                          <div className="absolute inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                              <path d="M2.33366 3.20801H11.667C12.3087 3.20801 12.8337 3.73301 12.8337 4.37467V11.3747C12.8337 12.0163 12.3087 12.5413 11.667 12.5413H2.33366C1.69199 12.5413 1.16699 12.0163 1.16699 11.3747V4.37467C1.16699 3.73301 1.69199 3.20801 2.33366 3.20801Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.8337 4.37451L7.00033 8.45784L1.16699 4.37451" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <input
                            type="search"
                            id="default-search"
                            className={`${styles.defaultsearch} mt-[12px]  py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 `}
                            placeholder="Email address*"
                            style={loginInputStyles}
                          />

                        </div>
                      </div>
                      <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full" style={{ width: '320px' }}>


                          <div className="absolute inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                            <Image width={16} height={16} src='/images/booking/company.svg' alt='step-1' />
                          </div>
                          <input
                            type="search"
                            id="default-search"
                            className={`${styles.defaultsearch}  mt-[12px]  py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 `}
                            placeholder="Company Name"
                            style={loginInputStyles}
                          />

                        </div>
                      </div>
                      <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full" style={{ width: '320px' }}>


                          <div className="absolute inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                              <g clip-path="url(#clip0_628_1848)">
                                <path d="M12.8338 10.7444V12.4944C12.8345 12.6569 12.8012 12.8177 12.7361 12.9665C12.671 13.1154 12.5756 13.249 12.4559 13.3588C12.3362 13.4687 12.1948 13.5523 12.0409 13.6043C11.887 13.6564 11.724 13.6757 11.5622 13.6611C9.76714 13.466 8.04291 12.8527 6.52799 11.8702C5.11856 10.9746 3.9236 9.77967 3.02799 8.37024C2.04214 6.84844 1.42863 5.11582 1.23716 3.31274C1.22258 3.15143 1.24175 2.98885 1.29345 2.83535C1.34515 2.68186 1.42824 2.54081 1.53744 2.42118C1.64663 2.30156 1.77954 2.20599 1.9277 2.14054C2.07586 2.0751 2.23602 2.04122 2.39799 2.04107H4.14799C4.43109 2.03829 4.70554 2.13853 4.92018 2.32313C5.13483 2.50773 5.27503 2.76408 5.31466 3.04441C5.38852 3.60444 5.5255 4.15433 5.72299 4.68357C5.80147 4.89236 5.81846 5.11927 5.77194 5.33742C5.72541 5.55557 5.61733 5.7558 5.46049 5.91441L4.71966 6.65524C5.55006 8.11564 6.75925 9.32483 8.21966 10.1552L8.96049 9.41441C9.11909 9.25757 9.31933 9.14948 9.53748 9.10296C9.75562 9.05644 9.98253 9.07342 10.1913 9.15191C10.7206 9.34939 11.2705 9.48638 11.8305 9.56024C12.1139 9.60021 12.3726 9.74294 12.5576 9.96128C12.7426 10.1796 12.8409 10.4583 12.8338 10.7444Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_628_1848">
                                  <rect width="14" height="14" fill="white" transform="translate(0 0.874512)" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <input
                            type="search"
                            id="default-search"
                            className={`${styles.defaultsearch}  mt-[12px]  py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 `}
                            placeholder="Company Name"
                            style={loginInputStyles}
                          />

                        </div>
                      </div>
                      {/* Dotted Border */}
                      <div style={{ width: '320px', margin: '14px auto 0px' }} className='border border-b border-dashed'></div>
                      <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full" style={{ width: '320px' }}>
                          <input
                            type="password"
                            id="default-search"
                            className={`${styles.defaultsearch}  mt-[12px]  py-[14px] pl-[20px] min-h-[52px] w-full focus:outline-blue-200  pr-10`} // Adjusted paddingRight to accommodate the icon
                            placeholder="Password"
                            style={loginInputStyles}
                          />
                          <div className="absolute inset-y-0 mt-[12px] right-0 flex items-center pr-3 pointer-events-none"> {/* Adjusted right spacing */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                              <path d="M0.583008 7.87467C0.583008 7.87467 2.91634 3.20801 6.99967 3.20801C11.083 3.20801 13.4163 7.87467 13.4163 7.87467C13.4163 7.87467 11.083 12.5413 6.99967 12.5413C2.91634 12.5413 0.583008 7.87467 0.583008 7.87467Z" stroke="#9F9F9F" strokeWidth="0.583333" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7 9.62451C7.9665 9.62451 8.75 8.84101 8.75 7.87451C8.75 6.90801 7.9665 6.12451 7 6.12451C6.0335 6.12451 5.25 6.90801 5.25 7.87451C5.25 8.84101 6.0335 9.62451 7 9.62451Z" stroke="#9F9F9F" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>

                      </div>
                      <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full" style={{ width: '320px' }}>
                          <input
                            type="password"
                            id="default-search"
                            className={`${styles.defaultsearch} mt-[12px]  py-[14px] pl-[20px] min-h-[52px] w-full focus:outline-blue-200  pr-10`} // Adjusted paddingRight to accommodate the icon
                            placeholder="Confirm Password"
                            style={loginInputStyles}
                          />
                          <div className="absolute inset-y-0 mt-[12px] right-0 flex items-center pr-3 pointer-events-none"> {/* Adjusted right spacing */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                              <path d="M0.583008 7.87467C0.583008 7.87467 2.91634 3.20801 6.99967 3.20801C11.083 3.20801 13.4163 7.87467 13.4163 7.87467C13.4163 7.87467 11.083 12.5413 6.99967 12.5413C2.91634 12.5413 0.583008 7.87467 0.583008 7.87467Z" stroke="#9F9F9F" strokeWidth="0.583333" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7 9.62451C7.9665 9.62451 8.75 8.84101 8.75 7.87451C8.75 6.90801 7.9665 6.12451 7 6.12451C6.0335 6.12451 5.25 6.90801 5.25 7.87451C5.25 8.84101 6.0335 9.62451 7 9.62451Z" stroke="#9F9F9F" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>

                      </div>
                      <button style={{ width: '60.5%', margin: '21px auto' }} className={`${styles.login_btn_}  mt-[20px] w-full justify-center bg-[#350ABC] text-[#F3F0FF3] opacity-[0.9] rounded-[4px]  px-[16px] py-[18px] text-center inline-flex items-center`}>
                        Register
                        <span className={`ml-2`}>
                          <Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' />
                        </span>

                      </button>
                      <div className='flex justify-center items-center gap-2'>
                        <p className='text-[#494848] text-[14px] fonr-[400] leading-[24px] tracking-[-0.28px]'>Already have an account? </p>
                        <h3 className='text-[#350ABC] text-[14px] font-[600] leading-[24px] tracking-[-0.28px]'>Login</h3>
                      </div>
                    </div>
                }
              </div>
            }
          </div>

        </div>
      }
    </div>
  )
}

export default React.memo(LoginFrom)
