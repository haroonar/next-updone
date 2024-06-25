import React from 'react';

interface SelectProps<T> {
  options: T[];
  valueKey: keyof T;
  labelKey: keyof T;
  defaultValue: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  containerClassName?: string;
  icon?: React.ReactNode;
  isLimit?:boolean;
}

const CommonSelect = <T,>({
  options,
  valueKey,
  labelKey,
  defaultValue,
  onChange,
  className = '',
  containerClassName = '',
  icon = null,
  isLimit
}: SelectProps<T>) => {
  return (
    <div className={`relative inline-flex ${containerClassName}`}>
      {icon && <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">{icon}</div>}
      <select
        className={isLimit ? `${className}`:`font-[500] block appearance-none w-full pl-10 rounded focus:outline-none focus:shadow-outline ${className}`}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={String(option[valueKey])}>
            {String(option[labelKey])}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CommonSelect;
