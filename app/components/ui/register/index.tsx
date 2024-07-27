import React, { useState } from 'react'
import { loginInputStyles } from '../../common/login-register'
import styles from './register.module.css'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { apiRequest } from '@/app/libs/services'
import { RegisterFormSchema } from '@/app/libs/validations/schema'
import { zodResolver } from '@hookform/resolvers/zod'

const RegisterForm = ({setRegisterMenuOpen,setLoginMenuOpen}:any) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(RegisterFormSchema),
        mode: 'onBlur', // or 'onChange', 'onSubmit'
      });

    const onSubmit = async (data: any) => {
        setLoading(true); // Show loading indicator
        const body = {
            name: data?.name,
            email: data?.email,
            company: data?.company,
            phone_number: data?.phoneNumber,
            password: data?.password,
            password_confirmation: data?.confirmPassword
        };

        try {
            const newData = await apiRequest('/register', {
                method: 'POST',
                body: body
              }); // API call
              if(newData?.token){
                  setRegisterMenuOpen(false)
                  setLoginMenuOpen(true)
              }
              setData(newData?.data); // Update state with fetched data
        } catch (error) {
            toast.error('Failed to login. Please check your credentials.');
            // Handle error state or display an error message
        } finally {
            setLoading(false); // Hide loading indicator regardless of success or failure
        }
    };
    const handleLoginClick=()=>{
        setLoginMenuOpen(true)
        setRegisterMenuOpen(false)
    }
    return (
        <div className='login_backgorund rounded-[47%] h-[560px] w-[567px] top-[384px] right-[83px] relative'>

            <div className='relative bottom-[420px] pb-[60px] h-[610px] overflow-scroll'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full top-[21px]" style={{ width: '320px' }}>

                            <div className='relative top-[20px]'>
                                <span className='flex justify-center items-center relative top-[21px]'>
                                    <Image width={98} height={98} src='/images/booking/6.svg' alt='step-1' />
                                </span>
                                <h3 style={{}} className={`${styles.loginpopup_heads}`}>
                                    Welcome Back
                                </h3>
                                <p className={styles.loginpopup_bodys}>Sign In or Sign up to updone to book pro event staff in a snap</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full h-[70px]" style={{ width: '320px' }}>
                        <div className="relative top-[47px] inset-y-0 mt-3 ml-[15px] start-0 flex items-center ps-3 pointer-events-none">
                                <Image width={14} height={14} src='/images/auth/name.svg' alt='step-1' />
                            </div>
                            <input
                                type="text"
                                id="default-search"
                                className={`${styles.defaultsearch} mt-[12px]  pb-[14px] pt-[17px] pl-[50px] min-h-[52px] w-full focus:outline-blue-200 `}
                                placeholder="Full Name*"
                                style={loginInputStyles}
                                {...register('name')}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-xs italic block">{(errors as any).name.message}</span>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full h-[70px]" style={{ width: '320px' }}>
                            <div className="relative top-[47px] inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                                <Image width={14} height={15} src='/images/auth/email.svg' alt='step-1' />
                            </div>
                            <input
                                type="email"
                                id="default-search"
                                className={`${styles.defaultsearch} mt-[12px]  pb-[14px] pt-[17px] pl-[50px] min-h-[52px] w-full focus:outline-blue-200 `}
                                placeholder="Email address*"
                                style={loginInputStyles}
                                {...register('email')}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-xs italic block">{(errors as any).email.message}</span>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full h-[70px]" style={{ width: '320px' }}>


                            <div className="relative top-[47px] inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                                <Image width={16} height={16} src='/images/booking/company.svg' alt='step-1' />
                            </div>
                            <input
                                type="text"
                                id="default-search"
                                className={`${styles.defaultsearch}  mt-[12px]  pb-[14px] pt-[17px] pl-[50px] min-h-[52px] w-full focus:outline-blue-200 `}
                                placeholder="Company Name*"
                                style={loginInputStyles}
                                {...register('company')}
                            />
                            {errors.company && (
                                <span className="text-red-500 text-xs italic block">{(errors as any).company.message}</span>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full" style={{ width: '320px' }}>


                            <div className="relative top-[47px] inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                                <Image width={14} height={15} src='/images/auth/contact.svg' alt='step-1' />
                            </div>
                            <input
                                type="number"
                                id="default-search"
                                className={`${styles.defaultsearch}  mt-[12px]  pb-[14px] pt-[17px] pl-[50px] min-h-[52px] w-full focus:outline-blue-200 `}
                                placeholder="Contact Number*"
                                style={loginInputStyles}
                                {...register('phoneNumber')}
                            />
                            {errors.phoneNumber && (
                                <span className="text-red-500 text-xs italic block">{(errors as any).phoneNumber.message}</span>
                            )}
                        </div>
                    </div>
                    {/* Dotted Border */}
                    <div style={{ width: '320px', margin: '14px auto 0px' }} className='border border-b border-dashed'></div>
                   <div>
                   <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full h-[70px]" style={{ width: '320px' }}>
                            <input
                                type="password"
                                id="default-search"
                                className={`${styles.defaultsearch}  mt-[12px]  pb-[14px] pt-[17px] pl-[20px] min-h-[52px] w-full focus:outline-blue-200  pr-10`} // Adjusted paddingRight to accommodate the icon
                                placeholder="Password*"
                                style={loginInputStyles}
                                {...register('password')}
                            />
                            {errors.password && (
                                <span className="text-red-500 text-xs italic block">{(errors as any).password.message}</span>
                            )}

                        </div>

                    </div>
                    <div className='flex justify-between flex-col gap-[8px] items-center'>
                        <div className="relative w-full" style={{ width: '320px' }}>
                            <input
                                type="password"
                                id="default-search"
                                className={`${styles.defaultsearch} mt-[12px]  pb-[14px] pt-[17px] pl-[20px] min-h-[52px] w-full focus:outline-blue-200  pr-10`} // Adjusted paddingRight to accommodate the icon
                                placeholder="Confirm Password*"
                                style={loginInputStyles}
                                {...register('confirmPassword')}
                            />
                            {errors.confirmPassword && (
                                <span className="text-red-500 text-xs italic block">{(errors as any).confirmPassword.message}</span>
                            )}

                        </div>

                    </div>
                   </div>
                    <button type='submit' className={`${styles.login_btn_}  mt-[20px] !w-[58.2%] !my-[21px] !mx-auto !ml-[115px] justify-center bg-[#350ABC] text-[#F3F0FF3] opacity-[0.9] rounded-[4px]  px-[16px] py-[18px] text-center inline-flex items-center`}>
                        Register
                        <span className={`ml-2`}>
                            <Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' />
                        </span>

                    </button>
                </form>
                <div className='flex justify-center items-center gap-2'>
                    <p className='text-[#494848] text-[14px] fonr-[400] leading-[24px] tracking-[-0.28px]'>Already have an account? </p>
                    <h3 className='text-[#350ABC] text-[14px] font-[600] leading-[24px] tracking-[-0.28px]' onClick={handleLoginClick}>Login</h3>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
