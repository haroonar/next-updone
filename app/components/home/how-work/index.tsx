'use client'
import Image from 'next/image';
import React, { useState } from 'react';

function HowWork() {
    const [hoveredCard, setHoveredCard] = useState(1);

    const cards = [
        { id: 1, dec: `Updone caters to a variety of staffing needs, from last-minute replacements to long-term engagements.`, text: '1. Pick a service', image: '/step1.png' },
        { id: 2, dec: `Updone caters to a variety of staffing needs, from last-minute replacements to long-term engagements.`, text: '2. Choose a worker', image: '/step2.png' },
        { id: 3, dec: `Updone caters to a variety of staffing needs, from last-minute replacements to long-term engagements.`, text: '3. Check availability', image: '/step3.png' },
        { id: 4, dec: `Updone caters to a variety of staffing needs, from last-minute replacements to long-term engagements.`, text: '4. Book for an event', image: '/step4.png' },
    ];

    return (
        <div className="relative h-screen pb-[100px]" style={{ background: "linear-gradient(90deg, #F3F0FF 0%, #FFFFFF 100%)" }}>
            {/* Background blur */}
            <div className="absolute inset-0 blur-5xl"></div>

            {/* Random colored circles with blur */}
            <div className="absolute inset-0 flex justify-end items-center space-x-4 space-y-4 blur-5xl">
                <div className="absolute left-[937px] top-[172px] w-32 h-32 bg-[#FFACC5] rounded-full"></div>
                <div className="absolute right-[238px] top-[404px] w-32 h-32 bg-[#FFFCAC] rounded-full"></div>
                <div className="absolute right-[614px] bottom-[215px] w-32 h-32 bg-[#FFD4AC] rounded-full"></div>
            </div>

            {/* Centered text */}
            <h1 className='text-center text-[60px] uppercase leading-[68px] font-[600] pt-[100px]'>How to <strong className='text-[#350ABC]'>Hire Professional</strong> <br /> For Your Need?</h1>
            <div className="absolute top-0 left-0 right-0 flex justify-center">
                <div className="relative h-screen flex flex-col md:flex-row w-full mx-40 top-[60px]">
                    <div className="w-full md:w-[54%] flex flex-col items-center justify-center space-y-4">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className={`px-3 py-2 transition-all duration-1000 ease-in-out ${hoveredCard === card.id ? 'bg-[#e9e5fb] border-[1px] shadow-xl border-[#7152d1]' : ''} rounded-lg w-3/4 text-start cursor-pointer`}
                                onMouseEnter={() => setHoveredCard(card.id)}
                                onMouseLeave={() => setHoveredCard(1)}
                            >
                                <h1 className={`${hoveredCard === card.id ? 'text-[#3E2392] font-[600] text-[22px]' : 'text-[#6B6B6B] font-[600] text-[20px]'}`}>{card.text}</h1>
                                <p className='text-[14px] ml-[21px] text-[#6B6B6B]'>{hoveredCard === card.id ? card.dec : ""}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full md:w-[46%] flex items-center justify-center relative right-20">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className={`absolute transition-opacity duration-1000 ease-in-out ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}
                                style={{ margin: '1rem' }} // Adjust margin here
                            >
                                <Image
                                    src={card.image}
                                    alt={card.text}
                                    width={1500}
                                    height={1500}
                                    className='rounded-lg shadow-stone-300'
                                    layout="responsive"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWork;
