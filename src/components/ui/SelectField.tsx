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
  multipleSections?: boolean
  options: string[]
}

const SelectField = ({
  label,
  register,
  error,
  multipleSections = false,
  icon,
  options,
  ...rest
}: SelectFieldProps) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  // Handle selection for single or multiple mode
  const handleSelect = (val: string) => {
    if (multipleSections) {
      handleMultiSelect(val)
      return
    }

    // Single select
    setSelectedValues([val])
    setOpenDropdown(false)
    register.onChange({
      target: { name: register.name, value: val },
    })
  }

  // Handle multiple selections
  const handleMultiSelect = (val: string) => {
    let updatedValues: string[]

    if (selectedValues.includes(val)) {
      updatedValues = selectedValues.filter((v) => v !== val)
    } else {
      updatedValues = [...selectedValues, val]
    }

    setSelectedValues(updatedValues)

    // Send joined string value to react-hook-form
    register.onChange({
      target: { name: register.name, value: updatedValues.join(', ') },
    })
  }

  return (
    <div className="relative w-full">
      <label className="font-[600] text-[#121212] font-regular">{label}</label>

      <div
        className="mt-1 justify-between pr-3 w-full border border-[#E3E3E3] rounded-[8px] flex items-center cursor-pointer"
        onMouseDown={(e) => {
          e.stopPropagation()
          setOpenDropdown((prev) => !prev)
        }}
      >
        <div className="flex items-center w-full">
          {icon && (
            <div className="text-[#666D80] border-r border-[#e3e3e3] text-[16px] px-3">
              {icon}
            </div>
          )}
          <input
            {...register}
            {...rest}
            readOnly
            value={selectedValues.join(', ')}
            placeholder="Select an option"
            className={`text-[#121212] cursor-pointer pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent w-full focus:outline-none`}
            onClick={(e) => e.preventDefault()}
          />
        </div>

        <IoIosArrowDown className="text-[20px] text-[#666D80]" />
      </div>

      {error && <p className="text-red-500 text-sm mt-0.5">{error}</p>}

      <Dropdown
        top="top-[calc(100%+6px)]"
        isOpen={openDropdown}
        border={true}
        onClose={() => setOpenDropdown(false)}
      >
        <div className="w-full bg-white rounded shadow-sm max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {options.map((item) => (
            <div
              key={item}
              className={`hover:bg-[#F6F8FA] flex items-center justify-between gap-8 px-3 py-2 text-[#121212] cursor-pointer ${
                selectedValues.includes(item) ? 'bg-[#FFF7F2]' : ''
              }`}
              onClick={() => handleSelect(item)}
            >
              {item}
              {multipleSections && (
                <input
                  type="checkbox"
                  checked={selectedValues.includes(item)}
                  onChange={() => handleMultiSelect(item)}
                  className="w-[16px] h-[16px] cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
          ))}
        </div>
      </Dropdown>
    </div>
  )
}

export default SelectField
