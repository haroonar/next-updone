'use client'
import React, { useCallback, useState } from 'react';
import { ACCORDIAN_DATA } from './constants';
import AccordionItem from './components';

const Accordion: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleAccordionClick = useCallback((
    (index: number) => {
      setOpenAccordion(prev => (prev === index ? null : index));
    }
  ), [openAccordion]);

  return (
    <div className='relative bg-[#F9F9F9] py-[100px] flex justify-center items-center h-screen'>
          <div className="flex flex-col justify-center mx-48 items-center gap-8 lg:flex-row max-lg:max-w-2xl max-w-full">
            <div >
              <h1 className='2xl:faq-head md:text-[34px] 2xl:text-[45px] mb-4 font-[600] md:leading-[40.64px] 2xl:leading-[44.64px]'>Frequently Asked Questions</h1>
              <p className='faq-body'>Have question? We’re here to help</p>
            </div>
            <div className="w-full">
              <div className="accordion-group" data-accordion="default-accordion">
                {ACCORDIAN_DATA.map((item, index) => (
                  <AccordionItem
                    key={index}
                    index={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openAccordion === index}
                    onClick={() => handleAccordionClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
  );
};

export default Accordion;
