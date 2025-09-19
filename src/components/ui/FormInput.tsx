'use client'

import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  register: UseFormRegisterReturn
  error?: string
  icon?: ReactNode
}

const FormInput = ({ label, register, error, icon, ...rest }: FormInputProps) => {
   return (
    <div className='w-full'>
      <label className="font-[600] text-[#121212] font-regular ">{label}</label>
      <div className="mt-1 w-full  border border-[#E3E3E3] rounded-[8px] flex items-center">
        {icon && <div className="text-[#666D80] border-r border-[#e3e3e3] text-[16px] px-3">{icon}</div>}
        <input
          {...register}
          {...rest}
          className={`text-[#121212] pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent w-full focus:outline-none`}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-0.5">{error}</p>}
    </div>
  )
}

export default FormInput



