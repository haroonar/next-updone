import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem: React.FC<{ index: number, title: string, content: JSX.Element, isOpen: boolean, onClick: () => void }> = ({ title, content, isOpen, onClick }) => {
  return (
    <div>
      <h6 className="mb-4">
        <button
          className={`relative flex items-center w-full py-3 px-4 text-left bg-[#FFFFFF] transition-all ease-in cursor-pointer text-slate-700 group ${isOpen ? 'bg-fuchsia-900 text-white rounded-md m-0 rounded-0 relative bottom-[-12px]' : 'accordian-style'}`}
          onClick={onClick}
        >
          <span className='text-[18px] px-3'>{title}</span>
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
      <div className={`${isOpen ? 'block rounded-lg mb-4 bg-[#FFFFFF]' : 'h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="p-4 text-[14px]">
          {content}
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;