'use client'

import 'react-phone-input-2/lib/style.css'
import PhoneInputLib from 'react-phone-input-2'
import { Control, Controller, FieldError } from 'react-hook-form'

interface CustomPhoneInputProps {
    label: string
    name: string
    control: Control<any>
    error?: FieldError
}

const CustomPhoneInput = ({ label, name, control, error }: CustomPhoneInputProps) => {
    return (
       <div className="relative w-full">
            <label className="font-[600] text-[#121212] font-regular">{label}</label>

            <div className="mt-1">
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: 'Phone number is required' }}
                    render={({ field }) => (
                        <PhoneInputLib
                            country={'us'}
                            {...field}
                            inputClass="!w-full !bg-transparent !border !border-[#E3E3E3] !rounded-[8px] !pl-14 !pr-4 !py-6 placeholder:text-[#666D80] placeholder:text-[14px] text-[#121212]"
                            buttonClass="!bg-transparent"
                            containerClass="!w-full"
                            dropdownClass="!text-[#121212]"
                        />
                    )}
                />
            </div>

            {error && <p className="text-red-500 text-sm mt-0.5">{error.message}</p>}
        </div>
    )
}

export default CustomPhoneInput



