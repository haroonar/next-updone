'use client'
import { montserrat } from '@/app/libs/Fonts';
import Image from 'next/image';
import React, { useState } from 'react';

function HowWork() {
    const [selectedCard, setSelectedCard] = useState(1); // State to track selected card

    const cards = [
        { id: 1, dec: `Updone caters to a variety of staffing needs, from last-minute replacements to long-term engagements.`, text: `1.  Pick a service`, image: '/step1.png' },
        { id: 2, dec: `Updone caters to a variety of staffing needs, from last-minute replacements to long-term engagements.`, text: '2.  Choose a worker', image: '/step2.png' },
        { id: 3, dec: `Updone caters to a variety of staffing needs, from last-minute replacements to long-term engagements.`, text: '3.  Check availability', image: '/step3.png' },
        { id: 4, dec: `Updone caters to a variety of staffing needs, from last-minute replacements to long-term engagements.`, text: '4.  Book for an event', image: '/step4.png' },
    ];

    const handleCardSelect = (cardId: number) => {
        setSelectedCard(cardId === selectedCard ? 0 : cardId); // Toggle selection
    };

    return (
        <div style={{ background: "linear-gradient(90deg, #F3F0FF 0%, #FFFFFF 100%)", maxHeight: '990px' }} className='max-w-[1279px m-auto'>
            <h2 className='text-center text-[60px] uppercase leading-[68px] font-[600] pt-[100px] pb-[25px]'>How to <strong className='text-[#350ABC]'>Hire Professional</strong> <br /> For Your Need?</h2>
            <div className="relative min-h-[120vh] max-h-screen" >
                {/* Background blur */}
                <div className="absolute inset-0 blur-5xl"></div>

                {/* Colored circles */}
                <div className="absolute inset-0 flex justify-end items-center space-x-4 space-y-4 blur-5xl max-w-[1279px] m-auto h-[90%]">
                    <div className="absolute left-[32%] top-[2%] md:left-[1144px] md:top-[-17px] w-44 h-44 bg-[#FFACC5] rounded-full"></div>
                    <div className="absolute right-[0%] top-[56%] w-44 h-44 bg-[#FFFCAC] rounded-full"></div>
                    <div className="absolute right-[33%] bottom-[40%] w-44 h-44 bg-[#FFD4AC] rounded-full"></div>
                </div>

                {/* Centered text */}
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <div className="relative h-screen flex flex-col md:flex-row w-full max-w-[1279px] top-[60px]">
                        <div className="w-full md:w-[54%] flex flex-col items-start justify-start space-y-4" style={{
                            width: "54%",
                            height: "auto",
                        }}>
                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    style={{ margin: '0px', width: '86%' }}
                                    className={`pl-[36px] pt-2 pb-[25px] give-border transition ease-in ${selectedCard === card.id ? 'border-l-[6px]  border-[#350ABC]' : 'border-l-[6px]  border-[#e1dfea]'} ${selectedCard === card.id ? '' : ''}  w-3/4 text-start cursor-pointer`}
                                    onClick={() => handleCardSelect(card.id)}
                                >
                                    <h3 className={`pb-1 tracking-[-0.48px] leading-normal font-[500] text-[24px] ${montserrat.className} ${selectedCard === card.id ? 'text-[#3E2392]' : 'text-[#2C2240]'}`}>{card.text}</h3>
                                    <p className='text-[16px] leading-[26px] font-[400] translate-[-0.32px] ml-[26px] text-[#6B6B6B] w-[104%%] ' style={{ marginBottom: card.id === 4 ? '0' : "0.5rem" }}>{card.dec}</p>
                                </div>
                            ))}
                            <div className='text-start  text-[#2C2240] m-0 text-[14.545px] font-[700] tracking-[-0.291px] leading-[ 23.636px] mt-[18px]' style={{
                                transform: "rotate(91deg)",
                                position: "relative",
                                right: "256px", margin: '0'
                            }}>
                            </div>
                            <span style={{ transform: "rotate(91deg)" }} className='relative right-1.5'>0{selectedCard}</span> <span style={{ margin: '0' }} className='m-0 '><svg className='relative right-1.5 my-1' width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7018 5.70169L0.527273 1.71623L0.527273 0.407139L16.7018 4.37805L16.7018 5.70169Z" fill="#6B6B6B" />
                            </svg>
                            </span> <span style={{ margin: '0', transform: "rotate(91deg)" }} className='m-0 relative right-1.5 text-start text-[#6B6B6B] text-[14.545px] font-[500] tracking-[-0.291px] leading-[ 23.636px]'>04</span>

                        </div>

                        <div className="w-full md:w-[46%] flex items-start justify-end bottom-[15px]">
                            {selectedCard > 0 && ( // Render image only if a card is selected
                                <div style={{ position: 'relative', width: '100%', height: '60%' }}>
                                    <div style={{ position: 'absolute', inset: 0 }}>
                                        <Image
                                            layout="responsive"
                                            objectFit="fill"
                                            quality={100}
                                            src={cards[selectedCard - 1].image}
                                            alt={cards[selectedCard - 1].text}
                                            width={750}
                                            height={750}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWork;
