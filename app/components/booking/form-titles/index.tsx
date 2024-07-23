import { STEPS_DATA } from '@/app/libs/Constants';
import Image from 'next/image';
import React from 'react';

interface FormTitlesProps {
    styles: { [key: string]: string };
    currentStep: number;
}



const FormTitles: React.FC<FormTitlesProps> = ({ styles, currentStep }) => {
    const { imageSrc, imageAlt, description } = STEPS_DATA[currentStep] || STEPS_DATA[2]; // Default to index 2 (default step)

    return (
        <div className={`${styles.tell_us} text-center text-[#000000] flex justify-center items-center gap-[20px] leading-[20.4px] tracking-[-0.32px] !text-[16px] pt-[33.5px] px-[10px] ${currentStep===1 ? "":"mb-[68.5px]"}`}>
            <Image width={24} height={24} src={imageSrc} alt={imageAlt} />
            {description}
        </div>
    );
};

export default React.memo(FormTitles);
