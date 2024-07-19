import Image from 'next/image'
import React from 'react'
interface FormNavProps{
    steps:Array<any>
    currentStep:any;
    changeActiveColor:any;
    setChangeActiveColor:(arg:boolean)=>void
    next:any
}
const FormNav = ({steps,currentStep,changeActiveColor,setChangeActiveColor,next}:FormNavProps) => {
    return (
        <>
            {/* steps */}
            <nav aria-label='Progress' className='relative left-6 z-[1]'>
                <ol role='list' className='flex space-x-4 justify-center items-center mt-[133px] mx-[224px]'>
                    {steps.map((step, index) => (
                        <li key={step.name} className='flex-1 gap-4'>
                            {currentStep > index ? (
                                <div className='flex justify-start items-center gap-4'>

                                    <div className='flex justify-center items-center'>
                                        <span className='relative top-[6px] left-[16px] text-sm font-medium text-sky-600'>
                                            {step.image}
                                        </span>
                                        <div className='flex flex-col'>
                                            <span className='mb-[15px] text-[14px] font-[600] leading-[20.4px] text-[#000000] tracking-[-0.28px]'>
                                                {step.id}
                                            </span>
                                            <span className='absolute mt-5 text-[#6B6B6B] text-sm mb-[15px] text-[11px] font-[400] leading-[24px]  tracking-[-0.11px]'>{step.name}</span>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: changeActiveColor ? "180px" : " 200px",
                                            position: "absolute",
                                            marginLeft: changeActiveColor ? "160px" : step.name === "Event and contact details" ? '150px' : "147px"
                                        }}
                                        className='flex w-full flex-row justify-start items-center border-l-[1px] border-[#000000] opacity-[0.3px] py-2 pl-4 md:border-l-0 md:border-t-[1px] md:pb-0 md:pl-0 md:pt-4'
                                        aria-current='step'
                                    >

                                    </div>
                                </div>
                            ) : currentStep === index ? (
                                <div className='flex justify-start items-center gap-4'>

                                    <div className='flex justify-center items-center'>
                                        <span className='relative top-[6px] left-[16px]  text-sm font-medium text-sky-600'>
                                            {
                                                step.name === "Pay the cost of hiring" ?
                                                    <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/stepBlue2.svg' alt='step-1' /> :
                                                    step.name === "Congratulation!" && !changeActiveColor ? (
                                                        <>
                                                            {setChangeActiveColor(true)}
                                                            <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/step1.svg' alt='step-1' />
                                                        </>
                                                    ) :
                                                        step.image
                                            }

                                        </span>
                                        <div className='flex flex-col'>
                                            <span className='mb-[15px] text-[14px] font-[600] leading-[20.4px] text-[#000000] tracking-[-0.28px]'>
                                                {step.id}
                                            </span>
                                            <span className='absolute mt-5 text-[#6B6B6B] text-sm mb-[15px] text-[11px] font-[400] leading-[24px]  tracking-[-0.11px]'>{step.name}</span>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: "184px",
                                            position: "absolute",
                                            marginLeft: step.name === "Pay the cost of hiring" ? '162px' : '153px'
                                        }}
                                        className={changeActiveColor ? "" : 'flex w-full flex-row justify-start items-center border-l-[1px] border-[#000000] opacity-[0.3px] py-2 pl-4 md:border-l-0 md:border-t-[1px] md:pb-0 md:pl-0 md:pt-4'}
                                        aria-current='step'
                                    >

                                    </div>
                                </div>
                            ) : step.name === 'Congratulation!' ? (
                                <div onClick={next} className='ml-[25px] flex justify-start items-center'>
                                    <span className='relative top-[6px] left-[16px]  text-sm font-medium text-sky-600'>
                                        {
                                            step.image
                                        }
                                    </span>
                                    <div className='flex flex-col' >
                                        <span className='mb-[15px] text-[#b0b0b2] text-[14px] font-[600] leading-[20.4px] tracking-[-0.28px]'>
                                            {step.id}
                                        </span>
                                        <span className='absolute mt-5 text-[#cfcfd2] text-[11px] font-[400] leading-[24px] tracking-[-0.1px]'>{step.name}</span>
                                    </div>
                                </div>
                            ) : <div className='flex justify-start items-center gap-4'>

                                <div onClick={next} className='flex justify-start items-center'>
                                    <span className='relative top-[6px] left-[16px]  text-sm font-medium text-sky-600'>
                                        {step.image}
                                    </span>
                                    <div className='flex flex-col' >
                                        <span className='mb-[15px] text-[#b0b0b2] text-[14px] font-[600] leading-[20.4px] tracking-[-0.28px]'>
                                            {step.id}
                                        </span>
                                        <span className='absolute mt-5 text-[#cfcfd2] text-[11px] font-[400] leading-[24px] tracking-[-0.1px]'>{step.name}</span>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "184px",
                                        position: "absolute",
                                        marginLeft: '171px'
                                    }}
                                    className='flex w-full flex-row justify-start items-center border-l-[1px] border-[#b0b0b2] opacity-[0.3px] py-2 pl-4 md:border-l-0 md:border-t-[1px] md:pb-0 md:pl-0 md:pt-4'
                                    aria-current='step'
                                >

                                </div>
                            </div>}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    )
}

export default FormNav
