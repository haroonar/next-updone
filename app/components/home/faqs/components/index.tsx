'use client'

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});
const AccordionItem: React.FC<{ index: number, title: string, content: JSX.Element, isOpen: boolean, onClick: () => void }> = ({ title, content, isOpen, onClick }) => {
  return (
    <div >
      <h6>
        <button
        style={{ background: isOpen ? '#2C2240' : undefined, color: isOpen ? '#F3F0FF' : undefined }}
          className={`relative flex items-center w-full py-3 2xl:py-6 rounded-tl-lg rounded-tr-lg px-4 text-left bg-[#FFFFFF] transition-all ease-in cursor-pointer text-[#2C2240] group ${isOpen ? ' text-[#F3F0FF]  m-0  relative bottom-[-12px]' : 'accordian-style rounded-md'}`}
          onClick={onClick}
        >
          <span className={`${montserrat.className} leading-[150%] text-[18px] font-medium px-3`}>{title}</span>
          {isOpen ? (
            <span className="absolute right-2 pt-1 text-lg group-open:opacity-0">
              <svg width="16" height="1" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.5H15" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </span>
          ) : (
            <span className="absolute right-2 pt-1 text-lg group-open:opacity-0">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.5V19.5" stroke="#2C2240" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 12.5H19" stroke="#2C2240" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </span>
          )}
        </button>
      </h6>
      <div className={`${isOpen ? 'block rounded-bl-lg rounded-br-lg mb-4 bg-[#FFFFFF]' : 'h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="p-4 text-[14px] text-[#6B6B6B] leading-[24px] tracking-[-2%] font-normal ">
          {content}
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;