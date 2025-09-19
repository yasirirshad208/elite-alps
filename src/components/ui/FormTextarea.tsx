'use client'

import { TextareaHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  register: UseFormRegisterReturn
  error?: string
}

const FormTextarea = ({ label, register, error, ...rest }: FormTextareaProps) => {
   return (
    <div>
      <label className="font-[600] text-[#121212] font-regular">{label}</label>
      <textarea
        {...register}
        {...rest}
        className="mt-1 h-[90px] w-full border border-[#E3E3E3] rounded-[8px] text-[#121212] pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent focus:outline-none resize-none"
      />
      {error && <p className="text-red-500 text-sm mt-0.5">{error}</p>}
    </div>
  )
}

export default FormTextarea



