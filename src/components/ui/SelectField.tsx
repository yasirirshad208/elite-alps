'use client'

import { useState } from 'react'
import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import Dropdown from './DropdownAnimation'
import { IoIosArrowDown } from 'react-icons/io'

interface SelectFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    label: string
    register: UseFormRegisterReturn
    error?: string
    icon?: ReactNode
    options: string[] // dropdown values as props
}

const SelectField = ({ label, register, error, icon, options, ...rest }: SelectFieldProps) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [value, setValue] = useState('')

    // Update both local value and call react-hook-form onChange to keep form state synced
    const handleSelect = (val: string) => {
    setValue(val)
    setOpenDropdown(false)

    // Create a synthetic event object properly
    const syntheticEvent = {
        target: {
            name: register.name,
            value: val,
        }
    };

    register.onChange(syntheticEvent);
};


   return (
        <div className="relative w-full">
            <label className="font-[600] text-[#121212] font-regular">{label}</label>
            <div
                className="mt-1 justify-between pr-3 w-full border border-[#E3E3E3] rounded-[8px] flex items-center cursor-pointer"
                 onMouseDown={(e) => {
    e.stopPropagation();              // prevent the document mousedown from firing
    setOpenDropdown((prev) => !prev); // true toggle
  }}
            >
                <div className='flex items-center'>
                    {icon && (
                        <div className="text-[#666D80] border-r border-[#e3e3e3] text-[16px] px-3">
                            {icon}
                        </div>
                    )}
                    <input
                        {...register}
                        {...rest}
                        readOnly
                        value={value}
                        placeholder="Select an option"
                        className={`text-[#121212] cursor-pointer pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent w-full focus:outline-none`}
                        onClick={(e) => e.preventDefault()} // prevent input focus to avoid keyboard popup on mobile
                    />
                </div>

                <IoIosArrowDown className='text-[20px] text-[#666D80]' />
            </div>

            {error && <p className="text-red-500 text-sm mt-0.5">{error}</p>}

            <Dropdown
                top="top-[calc(100%+6px)]"
                isOpen={openDropdown}
                border={true}
                 onClose={() => setOpenDropdown(false)}
            >
                <div className="w-full bg-white rounded">
                    {options.map((item) => (
                        <div
                            key={item}
                            className="hover:bg-[#F6F8FA] px-3 py-2 text-[#121212] cursor-pointer"
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </Dropdown>
        </div>
    )
}

export default SelectField


