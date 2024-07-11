'use client';
import React, { useCallback, useState } from 'react';
import  ACCORDIAN_DATA  from './constants';
import dynamic from 'next/dynamic';
// Dynamic import for AccordionItem component
const AccordionItem = dynamic(() => import('./components'), {
});

const Accordion: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const handleAccordionClick = useCallback(
    (index: number) => {
      setOpenAccordion(prev => (prev === index ? null : index));
    },
    [openAccordion]
  );

  return (
    <div
      style={{
        paddingTop: openAccordion === 0 ? '110px' : undefined,
        marginBottom: openAccordion === 5 ? '250px' : undefined,
      }}
      className="relative bg-[#F9F9F9] py-[100px] flex justify-center items-center"
    >
      <div className="flex flex-col justify-center max-w-[1279px] items-center gap-8 lg:flex-row  m-auto">
        <div>
          <h2 className="2xl:faq-head md:text-[34px] 2xl:text-[45px] mb-4 font-[600] md:leading-[40.64px] 2xl:leading-[44.64px]">
            Frequently Asked Questions
          </h2>
          <p className="faq-body">Have question? We’re here to help</p>
        </div>
        <div className="w-full space-y-2">
          <div className="accordion-group space-y-[20px]" data-accordion="default-accordion">
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

export default React.memo(Accordion);
