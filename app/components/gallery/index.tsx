import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './index.module.css'; // Using CSS Modules

function GalleryContent() {
    return (
        <>
            <div className="text-center">
                <h2 className="text-4xl tracking-tight font-bold text-primary-800 uppercase"><strong className='text-[#4831b6]'>Events</strong> Gallery</h2>
                <p style={{display:'ruby',color:'#E77307'}} className='relative top-[12px]'><span className='mr-2'><svg width="118" height="2" viewBox="0 0 118 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1H116.5" stroke="#E77307" stroke-width="2" stroke-linecap="round" />
                </svg>
                </span> 
                View More Events
                </p>
            </div>

            <Marquee direction="left" speed={50} gradient={false} play={true}>
                <div className="max-w-screen-xl mx-auto py-8 lg:py-16 ">
                    <div className="flex flex-col md:flex-row">
                        {/* Image 1 */}
                        <div className="flex flex-col w-full md:w-1/3">
                            <div className="w-full mb-2 pr-2">
                                <div className="overflow-hidden">
                                    <img className="w-full rounded-lg" src="./images/gallery/image1.jpg" alt="Image 1" style={{ maxWidth: '380px' }} />
                                </div>
                            </div>
                            {/* Image 2 */}
                            <div className="w-full mb-4 pr-2">
                                <div className="overflow-hidden">
                                    <img className="w-full rounded-lg" src="./images/gallery/image2.png" alt="Image 2" style={{ maxWidth: '380px' }} />
                                </div>
                            </div>
                        </div>
                        {/* Image 3 (Main Image) */}
                        <div className="mr-0 md:mb-0 flex-shrink-0">
                            <img className="w-[500px] rounded-lg mt-[87px]" src="./images/gallery/image3.jpg" alt="Main Image" />
                        </div>
                        {/* Image 4 */}
                        <div className="w-full md:w-1/3 mb-4 px-2">
                            <div className="overflow-hidden">
                                <img className="w-full h-[511px] rounded-lg" src="./images/gallery/image4.jpg" alt="Image 4" style={{ maxWidth: '380px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto py-8 lg:py-16 ">
                    <div className="flex flex-col md:flex-row">
                        {/* Image 1 */}
                        <div className="flex flex-col w-full md:w-1/3">
                            <div className="w-full mb-2 pr-2">
                                <div className="overflow-hidden">
                                    <img className="w-full rounded-lg" src="./images/gallery/image1.jpg" alt="Image 1" style={{ maxWidth: '380px' }} />
                                </div>
                            </div>
                            {/* Image 2 */}
                            <div className="w-full mb-4 pr-2">
                                <div className="overflow-hidden">
                                    <img className="w-full rounded-lg" src="./images/gallery/image2.png" alt="Image 2" style={{ maxWidth: '380px' }} />
                                </div>
                            </div>
                        </div>
                        {/* Image 3 (Main Image) */}
                        <div className="mr-0 md:mb-0 flex-shrink-0">
                            <img className="w-[500px] rounded-lg mt-[87px]" src="./images/gallery/image3.jpg" alt="Main Image" />
                        </div>
                        {/* Image 4 */}
                        <div className="w-full md:w-1/3 mb-4 px-2">
                            <div className="overflow-hidden">
                                <img className="w-full h-[511px] rounded-lg" src="./images/gallery/image4.jpg" alt="Image 4" style={{ maxWidth: '380px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto py-8 lg:py-16">
                    <div className="flex flex-col md:flex-row">
                        {/* Image 1 */}
                        <div className="flex flex-col w-full md:w-1/3">
                            <div className="w-full mb-2 pr-2">
                                <div className="overflow-hidden">
                                    <img className="w-full rounded-lg" src="./images/gallery/image1.jpg" alt="Image 1" style={{ maxWidth: '380px' }} />
                                </div>
                            </div>
                            {/* Image 2 */}
                            <div className="w-full mb-4 pr-2">
                                <div className="overflow-hidden">
                                    <img className="w-full rounded-lg" src="./images/gallery/image2.png" alt="Image 2" style={{ maxWidth: '380px' }} />
                                </div>
                            </div>
                        </div>
                        {/* Image 3 (Main Image) */}
                        <div className="mr-0 md:mb-0 flex-shrink-0">
                            <img className="w-[500px] rounded-lg mt-[87px]" src="./images/gallery/image3.jpg" alt="Main Image" />
                        </div>
                        {/* Image 4 */}
                        <div className="w-full md:w-1/3 mb-4 px-2">
                            <div className="overflow-hidden">
                                <img className="w-full h-[511px] rounded-lg" src="./images/gallery/image4.jpg" alt="Image 4" style={{ maxWidth: '380px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto py-8 lg:py-16">
                    <div className="flex flex-col md:flex-row">
                        {/* Image 1 */}
                        <div className="flex flex-col w-full md:w-1/3">
                            <div className="w-full mb-2 pr-2">
                                <div className="overflow-hidden">
                                    <img className="w-full rounded-lg" src="./images/gallery/image1.jpg" alt="Image 1" style={{ maxWidth: '380px' }} />
                                </div>
                            </div>
                            {/* Image 2 */}
                            <div className="w-full mb-4 pr-2">
                                <div className="overflow-hidden">
                                    <img className="w-full rounded-lg" src="./images/gallery/image2.png" alt="Image 2" style={{ maxWidth: '380px' }} />
                                </div>
                            </div>
                        </div>
                        {/* Image 3 (Main Image) */}
                        <div className="mr-0 md:mb-0 flex-shrink-0">
                            <img className="w-[500px] rounded-lg mt-[87px]" src="./images/gallery/image3.jpg" alt="Main Image" />
                        </div>
                        {/* Image 4 */}
                        <div className="w-full md:w-1/3 mb-4 px-2">
                            <div className="overflow-hidden">
                                <img className="w-full h-[511px] rounded-lg" src="./images/gallery/image4.jpg" alt="Image 4" style={{ maxWidth: '380px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </Marquee>
        </>
    );
}

export default GalleryContent;
