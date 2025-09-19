'use client'

import { InputHTMLAttributes, ReactNode, useRef, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { FiMinus } from 'react-icons/fi'
import { IoIosAdd } from 'react-icons/io'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  register: UseFormRegisterReturn
  error?: string
  icon?: ReactNode
}

const PeopleInput = ({ label, register, error, icon, ...rest }: FormInputProps) => {
  const [people, setPeople] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const updatePeople = (newValue: number) => {
    setPeople(newValue)

    // Trigger react-hook-form onChange
    if (inputRef.current) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set
      nativeInputValueSetter?.call(inputRef.current, String(newValue))

      const event = new Event('input', { bubbles: true })
      inputRef.current.dispatchEvent(event)
    }
  }

 return (
    <div className="w-full">
      <label className="font-[600] text-[#121212] font-regular">{label}</label>
      <div className="mt-1 w-full border border-[#E3E3E3] rounded-[8px] flex items-center justify-between pr-4">
        <div className="flex items-center">
          {icon && (
            <div className="text-[#666D80] border-r border-[#e3e3e3] text-[16px] px-3">
              {icon}
            </div>
          )}
          <input
            {...register}
            {...rest}
            ref={(e) => {
              register.ref(e)
              inputRef.current = e // Save ref for manual updates
            }}
            onChange={(e) => {
              const value = Number(e.target.value)
              setPeople(value)
              register.onChange(e)
            }}
            value={people === 0 ? '' : people}
            className={`text-[#121212] pl-3 pr-4 py-3 font-regular placeholder:text-[14px] placeholder:text-[#666D80] bg-transparent w-full focus:outline-none`}
            type="number"
          />
        </div>

        <div className="flex items-center gap-2">
          <FiMinus
            className="rounded-[9999px] p-1 border border-[#e3e3e3] text-[20px] cursor-pointer"
            onClick={() => updatePeople(Math.max(0, people - 1))}
          />
          <span className="text-[14px] text-[#666D80]">{people}</span>
          <IoIosAdd
            className="rounded-[9999px] p-1 border border-[#e3e3e3] text-[24px] cursor-pointer"
            onClick={() => updatePeople(people + 1)}
          />
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-0.5">{error}</p>}
    </div>
  )
}

export default PeopleInput



