import Modal from '@/app/components/common/modal/Modal';
import BookingCalander from '@/app/components/ui/booking-calander';
import { useBookingContext } from '@/app/libs/context/BookingContext';
import { Staff } from '@/app/libs/types';
import Image from 'next/image'
import React, { useState } from 'react'
import { highlightedDatesAvailable, highlightedDatesNotAvailable } from '../../../detail';
type StaffMapProps = {
    staff: Staff;
    handleStaffClick: (arg: Staff) => void
    setModalOpen?: (arg: boolean) => void;
    modalOpen?: boolean
}
const StaffMap = ({ staff, handleStaffClick, setModalOpen, modalOpen }: StaffMapProps) => {
    const [showAllServices, setShowAllServices] = useState(false);
    const { setSelectedTimeId, selectedTimeId, scrollRef, selectedTimes, scrollDown, scrollUp, handleAddToBooking, handleTimeSelection, availableTimesMap, setDate, date, timessss } = useBookingContext();
    const openModal = () => {
        setModalOpen?.(true);
    };

    const closeModal = () => {
        setModalOpen?.(false);
    };
    return (
        <>
            <Image
                style={{
                    position: "relative",
                    left: "93px",
                    top: " 60px",
                    padding: "6px",
                    background: "#f3f0ff"
                }}
                className="w-34 h-34 rounded-full object-cover "
                src={staff.img}
                width={120}
                height={120}
                alt=''
            />
            <div key={staff.id} className="p-3 pb-0 h-[430px] max-w-full mx-auto rounded-lg overflow-hidden shadow-whiteeee z-10 bg-white border-[1px] border-[#E9E9E9]">
                <div className='text-center relative top-[20px] left-[73px] bg-[#e6e0fa] text-[#350abc] rounded-md inline-flex gap-2 py-[6px] px-[22px]'>
                    <svg width="24" height="24" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_481_590)">
                            <path d="M16.4333 0H0.566667C0.416377 0 0.272243 0.0585317 0.165973 0.162719C0.0597022 0.266905 0 0.408213 0 0.555556L0 9.44444C0 9.59179 0.0597022 9.7331 0.165973 9.83728C0.272243 9.94147 0.416377 10 0.566667 10H16.4333C16.5836 10 16.7278 9.94147 16.834 9.83728C16.9403 9.7331 17 9.59179 17 9.44444V0.555556C17 0.408213 16.9403 0.266905 16.834 0.162719C16.7278 0.0585317 16.5836 0 16.4333 0ZM0.566667 9.44444V0.555556H16.4333V9.44444H0.566667Z" fill="#350ABC" />
                            <path d="M15.3804 2.76371C15.0782 2.72044 14.7982 2.58273 14.5822 2.37105C14.3661 2.15937 14.2254 1.885 14.1811 1.58871C14.1628 1.45619 14.096 1.33471 13.9932 1.24686C13.8904 1.15902 13.7585 1.11081 13.6221 1.11121H3.37787C3.24195 1.112 3.11082 1.16052 3.00826 1.24797C2.9057 1.33543 2.8385 1.45602 2.81885 1.58788C2.77469 1.88414 2.63426 2.15855 2.41841 2.37037C2.20256 2.58219 1.92279 2.72013 1.62064 2.76371C1.4854 2.78151 1.36138 2.84693 1.27171 2.94777C1.18204 3.04861 1.13285 3.17799 1.1333 3.31176V6.68843C1.1328 6.82207 1.18183 6.95135 1.27126 7.05221C1.36069 7.15307 1.48445 7.21865 1.6195 7.23676C1.9217 7.28006 2.2016 7.41774 2.41765 7.62936C2.63371 7.84098 2.7744 8.11526 2.81885 8.41149C2.83843 8.54345 2.90558 8.66417 3.00813 8.75177C3.11068 8.83937 3.24186 8.88805 3.37787 8.88899H13.6221C13.7585 8.88939 13.8904 8.84118 13.9932 8.75333C14.096 8.66549 14.1628 8.544 14.1811 8.41149C14.2255 8.11515 14.3662 7.84076 14.5823 7.62907C14.7984 7.41738 15.0784 7.2797 15.3807 7.23649C15.5157 7.21838 15.6394 7.15282 15.7288 7.05201C15.8181 6.9512 15.8671 6.822 15.8666 6.68843V3.31176C15.8658 3.17851 15.8163 3.04995 15.7271 2.9494C15.6379 2.84885 15.5149 2.78297 15.3804 2.76371ZM15.3 6.68649C14.8391 6.75219 14.4164 6.97459 14.1057 7.31482C13.8445 7.59944 13.676 7.95419 13.6221 8.33343H3.37957C3.31806 7.9183 3.12126 7.53381 2.81856 7.23734C2.51585 6.94086 2.12347 6.74832 1.69997 6.68843V3.31343C2.1234 3.25313 2.51559 3.06019 2.81799 2.76342C3.12039 2.46665 3.31679 2.08195 3.37787 1.66676H13.6204C13.6819 2.08207 13.8787 2.46677 14.1813 2.76355C14.484 3.06032 14.8764 3.25329 15.3 3.31371V6.68649Z" fill="#350ABC" />
                            <path d="M3.39994 3.88904C3.17578 3.88904 2.95667 3.9542 2.77029 4.07629C2.58391 4.19838 2.43865 4.37192 2.35287 4.57495C2.26709 4.77797 2.24465 5.00138 2.28838 5.21692C2.33211 5.43245 2.44005 5.63043 2.59855 5.78582C2.75705 5.94122 2.95899 6.04704 3.17883 6.08991C3.39868 6.13278 3.62655 6.11078 3.83364 6.02668C4.04073 5.94258 4.21774 5.80017 4.34227 5.61745C4.4668 5.43473 4.53327 5.21991 4.53327 5.00015C4.53327 4.70546 4.41386 4.42285 4.20132 4.21448C3.98878 4.0061 3.70051 3.88904 3.39994 3.88904ZM3.39994 5.5557C3.28786 5.5557 3.1783 5.52312 3.08511 5.46208C2.99192 5.40103 2.91929 5.31427 2.8764 5.21275C2.83351 5.11124 2.82229 4.99953 2.84416 4.89177C2.86602 4.784 2.91999 4.68501 2.99924 4.60731C3.07849 4.52962 3.17946 4.4767 3.28938 4.45527C3.39931 4.43383 3.51324 4.44483 3.61679 4.48688C3.72033 4.52893 3.80884 4.60014 3.8711 4.6915C3.93337 4.78286 3.9666 4.89027 3.9666 5.00015C3.9666 5.14749 3.9069 5.2888 3.80063 5.39299C3.69436 5.49717 3.55023 5.5557 3.39994 5.5557Z" fill="#350ABC" />
                            <path d="M12.4666 5.00015C12.4666 5.21991 12.533 5.43473 12.6576 5.61745C12.7821 5.80017 12.9591 5.94258 13.1662 6.02668C13.3733 6.11078 13.6011 6.13278 13.821 6.08991C14.0408 6.04704 14.2428 5.94122 14.4013 5.78582C14.5598 5.63043 14.6677 5.43245 14.7114 5.21692C14.7552 5.00138 14.7327 4.77797 14.6469 4.57495C14.5612 4.37192 14.4159 4.19838 14.2295 4.07629C14.0432 3.9542 13.824 3.88904 13.5999 3.88904C13.2993 3.88904 13.011 4.0061 12.7985 4.21448C12.586 4.42285 12.4666 4.70546 12.4666 5.00015ZM14.1666 5.00015C14.1666 5.11003 14.1333 5.21744 14.0711 5.3088C14.0088 5.40016 13.9203 5.47137 13.8167 5.51342C13.7132 5.55546 13.5993 5.56647 13.4893 5.54503C13.3794 5.52359 13.2784 5.47068 13.1992 5.39299C13.1199 5.31529 13.066 5.2163 13.0441 5.10853C13.0222 5.00077 13.0335 4.88906 13.0764 4.78755C13.1192 4.68603 13.1919 4.59927 13.2851 4.53822C13.3783 4.47718 13.4878 4.44459 13.5999 4.44459C13.7502 4.44459 13.8943 4.50313 14.0006 4.60731C14.1069 4.7115 14.1666 4.85281 14.1666 5.00015Z" fill="#350ABC" />
                            <path d="M8.50008 2.22241C7.9397 2.22241 7.39191 2.38533 6.92597 2.69055C6.46003 2.99578 6.09687 3.42961 5.88242 3.93718C5.66798 4.44475 5.61187 5.00327 5.72119 5.54211C5.83052 6.08094 6.10036 6.5759 6.49661 6.96438C6.89286 7.35285 7.39771 7.61741 7.94733 7.72459C8.49694 7.83178 9.06663 7.77677 9.58435 7.56652C10.1021 7.35628 10.5446 7.00024 10.8559 6.54344C11.1672 6.08664 11.3334 5.54958 11.3334 5.00019C11.3326 4.26373 11.0338 3.55766 10.5026 3.0369C9.97147 2.51614 9.25128 2.22322 8.50008 2.22241ZM8.50008 7.22241C8.05178 7.22241 7.61354 7.09208 7.24079 6.8479C6.86804 6.60372 6.57751 6.25666 6.40596 5.8506C6.2344 5.44454 6.18951 4.99773 6.27697 4.56666C6.36443 4.13559 6.58031 3.73962 6.89731 3.42884C7.21431 3.11806 7.61819 2.90641 8.05788 2.82067C8.49757 2.73492 8.95332 2.77893 9.3675 2.94712C9.78168 3.11532 10.1357 3.40015 10.3847 3.76559C10.6338 4.13103 10.7667 4.56068 10.7667 5.00019C10.7661 5.58936 10.527 6.1542 10.1021 6.57081C9.67718 6.98741 9.10103 7.22175 8.50008 7.22241Z" fill="#350ABC" />
                            <path d="M8.50002 4.72239C8.45029 4.72234 8.40146 4.70946 8.35842 4.68505C8.31538 4.66064 8.27965 4.62556 8.25481 4.58332C8.22998 4.54109 8.21693 4.49319 8.21696 4.44444C8.21699 4.39569 8.2301 4.34781 8.25499 4.3056C8.27987 4.2634 8.31564 4.22835 8.35872 4.20399C8.40179 4.17964 8.45064 4.16682 8.50036 4.16683C8.55009 4.16684 8.59893 4.17968 8.64199 4.20406C8.68505 4.22844 8.7208 4.2635 8.74567 4.30572C8.76364 4.33846 8.78813 4.36733 8.8177 4.39062C8.84727 4.41391 8.8813 4.43115 8.91779 4.4413C8.95427 4.45146 8.99246 4.45433 9.0301 4.44974C9.06774 4.44516 9.10406 4.43321 9.1369 4.41461C9.16974 4.39601 9.19844 4.37113 9.22129 4.34146C9.24414 4.31178 9.26069 4.27791 9.26994 4.24185C9.27919 4.20579 9.28097 4.16828 9.27516 4.13153C9.26935 4.09479 9.25607 4.05956 9.23612 4.02794C9.13353 3.85884 8.9731 3.73088 8.78335 3.66683V3.61127C8.78335 3.5376 8.7535 3.46695 8.70036 3.41486C8.64723 3.36276 8.57516 3.3335 8.50002 3.3335C8.42487 3.3335 8.3528 3.36276 8.29967 3.41486C8.24653 3.46695 8.21668 3.5376 8.21668 3.61127V3.66239C8.02779 3.72761 7.86854 3.85628 7.76713 4.02559C7.66573 4.1949 7.62872 4.39393 7.66266 4.58743C7.69659 4.78094 7.79929 4.95642 7.95255 5.0828C8.10581 5.20919 8.29975 5.27831 8.50002 5.27794C8.54974 5.27799 8.59857 5.29086 8.64162 5.31527C8.68466 5.33968 8.72039 5.37477 8.74522 5.41701C8.77005 5.45924 8.7831 5.50714 8.78307 5.55589C8.78304 5.60464 8.76993 5.65252 8.74504 5.69472C8.72016 5.73693 8.68439 5.77197 8.64132 5.79633C8.59825 5.82069 8.54939 5.83351 8.49967 5.8335C8.44995 5.83348 8.4011 5.82064 8.35804 5.79626C8.31498 5.77188 8.27923 5.73683 8.25437 5.69461C8.21561 5.63319 8.15398 5.58899 8.08254 5.57137C8.0111 5.55375 7.93547 5.5641 7.87168 5.60023C7.8079 5.63635 7.76097 5.69541 7.74085 5.76489C7.72074 5.83436 7.72901 5.90879 7.76392 5.97239C7.86677 6.14148 8.02737 6.26941 8.21725 6.3335V6.38905C8.21725 6.46272 8.2471 6.53338 8.30024 6.58547C8.35337 6.63756 8.42544 6.66683 8.50058 6.66683C8.57573 6.66683 8.64779 6.63756 8.70093 6.58547C8.75406 6.53338 8.78392 6.46272 8.78392 6.38905V6.33822C8.97306 6.27312 9.13256 6.14443 9.23413 5.97499C9.33569 5.80555 9.37274 5.60632 9.33871 5.41264C9.30469 5.21896 9.20177 5.04336 9.04824 4.917C8.8947 4.79064 8.70048 4.72169 8.50002 4.72239Z" fill="#350ABC" />
                        </g>
                        <defs>
                            <clipPath id="clip0_481_590">
                                <rect width="17" height="10" rx="0.5" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='text-[16px] font-normal '>{staff?.hourRate}$/hr</span>
                </div>

                <div className='flex flex-col h-[94%] items-start justify-center relative bottom-[22px] mt-[35px]'>

                    <div className="flex flex-col mt-4 items-center w-full">
                        <div className="text-center flex justify-between w-full items-center font-bold text-lg mb-2">
                            <h3 style={{ letterSpacing: '-1%' }} className='text-[20px] text-[#2C2240] font-semibold '>{staff.name}</h3>
                            <div className="flex items-center justify-center">
                                <div className='relative bottom-[2px]'>
                                    <svg className="w-4 h-4 text-[#F79809] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <p className="ms-1 text-[14px]  font-normal text-black">5.0/5</p>
                            </div>
                        </div>
                        <div className="text-center flex justify-between w-full items-center font-bold text-lg mb-1">
                            <div className="text-center text-[14px] font-normal  text-[#989898] flex gap-2">
                                <Image src='/images/gallery/location.svg' alt='location-svg' width={15} height={15} />  {`${staff.city}`}
                            </div>
                            <span className='text-[14px] font-semibold'>102 Jobs</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-2 w-full">
                        <div className="flex items-center ">
                            <p style={{ wordSpacing: '-1px' }} className="leading-[24px] py-[6px] px-[10px] text-[11px] font-normal inline-flex items-center rounded-[100px] bg-[#F6F6F6] whitespace-nowrap overflow-hidden text-ellipsis text-sm">
                                <span className="mr-2 flex-shrink-0">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_464_1076)">
                                            <path d="M10.8333 3.79163H2.16659C1.56828 3.79163 1.08325 4.27665 1.08325 4.87496V10.2916C1.08325 10.8899 1.56828 11.375 2.16659 11.375H10.8333C11.4316 11.375 11.9166 10.8899 11.9166 10.2916V4.87496C11.9166 4.27665 11.4316 3.79163 10.8333 3.79163Z" stroke="#2C2240" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.66658 11.375V2.70833C8.66658 2.42102 8.55245 2.14547 8.34928 1.9423C8.14612 1.73914 7.87057 1.625 7.58325 1.625H5.41659C5.12927 1.625 4.85372 1.73914 4.65055 1.9423C4.44739 2.14547 4.33325 2.42102 4.33325 2.70833V11.375" stroke="#2C2240" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_464_1076">
                                                <rect width="13" height="13" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                Last job was a bartender, 25th June
                            </p>

                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-[24px] w-full">
                        <div className="flex items-center text-paragraph">
                            <svg width="256" height="1" viewBox="0 0 256 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.7" x2="256" y2="0.7" stroke="url(#paint0_linear_464_1080)" stroke-width="0.6" />
                                <defs>
                                    <linearGradient id="paint0_linear_464_1080" x1="0" y1="1.5" x2="256" y2="1.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#CBCBCB" stop-opacity="0" />
                                        <stop offset="0.505" stop-color="#CBCBCB" />
                                        <stop offset="1" stop-color="#CBCBCB" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                    </div>
                    <div className="flex flex-col items-start mt-2 w-full">
                        <h2 style={{ letterSpacing: '-2%' }} className="text-left text-[#2C2240] text-[14px] font-semibold w-full py-2">Services</h2>
                        <div className="flex gap-x-3 flex-wrap text-[#350abc]">
                            {staff.services.slice(0, showAllServices ? staff.services.length : 3).map((service, index) => (
                                <p key={index} className="text-left text-[14px] font-normal " style={{ margin: '0px' }}>
                                    {service}
                                </p>
                            ))}
                            {staff.services.length > 3 && !showAllServices && (
                                <button style={{ margin: '0px', letterSpacing: '-2%' }} className='font-semibold text-[12px]' onClick={() => setShowAllServices(true)}>
                                    +{staff.services.length - 3} more
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-around items-center mt-4 w-full space-x-2 border-t pt-4 pb-2 border-[#f3f0ff]">
                        <button onClick={() => handleStaffClick(staff)} className="text-[14px] font-normal py-[2px] text-[#413853] rounded-md">View Details</button>
                        <button onClick={openModal} type="button" className="text-[#dfdbec] bg-[#2c2240]  rounded-[4px] text-[14px] font-normal px-[30px] py-[10px] text-center inline-flex items-center  me-2 ">
                            <span className='mr-2'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#F3F0FF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>

                            Book Now
                        </button>
                        <Modal isOpen={modalOpen} onClose={closeModal}>
                            <BookingCalander
                            isStaffListerFilter
                                date={date}
                                setDate={setDate}
                                setSelectedTimeId={setSelectedTimeId}
                                scrollRef={scrollRef}
                                availableTimesMap={availableTimesMap}
                                handleTimeSelection={handleTimeSelection}
                                selectedTimeId={selectedTimeId}
                                scrollUp={scrollUp}
                                scrollDown={scrollDown}
                                timessss={timessss}
                                handleAddToBooking={handleAddToBooking}
                                selectedTimes={selectedTimes}
                                highlightedDatesNotAvailable={highlightedDatesNotAvailable}
                            highlightedDatesAvailable={highlightedDatesAvailable}
                            />
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffMap
