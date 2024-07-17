import React, { useState } from 'react'
import { loginInputStyles } from '../../common/login-register'
import styles from './login.module.css'
import Image from 'next/image'
import { loginAction } from '@/app/libs/services/useSetLogin'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setAuth } from '@/app/libs/store/features/authSlice'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
export const LoginFormSchema = z.object({
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters').regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase, one lowercase letter, one number, and one symbol'
    ),
});


const LoginForm = () => {

    const [data, setData] = useState<any>(null);
    console.log('data', data)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: require('@hookform/resolvers/zod').zodResolver(LoginFormSchema),
        mode: 'onChange', // Enable real-time validation on change
    });

    const onSubmit = async (data: any) => {
        console.log(data); // Data will only be submitted if validation passes
        const body = {
            email: data?.email,
            password: data?.password
        };

        try {
            const newData = await loginAction('/login', body); // API call
            setData(newData?.data); // Update state with fetched data
            // Store newData in local storage
            dispatch(setAuth(newData))
            // Custom hook to handle redirect on login status
        } catch (error) {
            toast.error('Failed to login. Please check your credentials.');
            // Handle error state or display an error message
        } finally {
            setLoading(false); // Hide loading indicator regardless of success or failure
        }
    };

    return (
        <div className='login_backgorund rounded-[47%] h-[507px] w-[567px] top-[309px] right-[83px] relative'>
            <div className='w-[300px] m-auto relative bottom-[321px] right-[12px]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative w-full" style={{ width: '320px' }}>
                        <div>
                            <span className='flex justify-center items-center relative top-[21px]'>
                                <Image width={98} height={98} src='/images/booking/6.svg' alt='step-1' />
                            </span>
                            <h3 style={{}} className={`${styles.loginpopup_heads}`}>
                                Welcome Back
                            </h3>
                            <p className={styles.loginpopup_bodys}>Sign In or Sign up to updone to book pro event staff in a snap</p>
                        </div>

                        <div className="absolute inset-y-0 mt-[198px] ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                            <Image width={14} height={14} src='/images/booking/8.svg' alt='step-1' />
                        </div>
                        <input
                            style={loginInputStyles}
                            id="default-search"
                            type="email"
                            className={`${styles.defaultsearch} mt-[12px] shadow-lg pb-[14px] pt-[17px] pl-[50px] min-h-[52px] w-full focus:outline-blue-200`}
                            placeholder="Email address*"
                            {...register('email')}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-xs italic block">{(errors as any).email.message}</span>
                        )}
                        {!errors.email && (
                            <span className="block mt-1">&nbsp;</span>
                        )}

                    </div>
                    <div className="relative w-full" style={{ width: '320px' }}>
                        <div className="absolute inset-y-0 bottom-[43px]  ml-[12px] start-0 flex items-center ps-3 mb-[76px] pointer-events-none">
                            <Image width={14} height={14} src='/images/booking/9.svg' alt='step-1' />
                        </div>
                        <input
                            style={loginInputStyles}
                            type="password"
                            {...register('password')}
                            id="default-search"
                            className={`${styles.defaultsearch} mt-[8px]  shadow-lg pb-[14px] pt-[17px] pl-[50px] min-h-[52px] w-full focus:outline-blue-200`}
                            placeholder="Password*"

                        />
                        {errors.password && (
                            <span className="text-red-500 text-xs italic block">{(errors as any).password.message}</span>
                        )}
                        {!errors.password && (
                            <span className="block mt-1">&nbsp;</span>
                        )}
                        <button type='submit' className={`${styles.login_btn_}  mt-[20px] w-full justify-center bg-[#350ABC] text-[#F3F0FF3] opacity-[0.9] rounded-[4px]  px-[16px] py-[18px] text-center inline-flex items-center`}>
                            Login
                            <span className={`ml-2`}>
                                <Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' />
                            </span>

                        </button>
                        <div className='flex justify-center items-center gap-2'>
                            <p className='text-[#494848] text-[14px] fonr-[400] leading-[24px] tracking-[-0.28px]'>Already have an account? </p>
                            <h3 className='text-[#350ABC] text-[14px] font-[600] leading-[24px] tracking-[-0.28px]'>Login</h3>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
