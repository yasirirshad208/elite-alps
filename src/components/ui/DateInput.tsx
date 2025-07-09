'use client'

import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface BaseProps {
    label: string
    register: UseFormRegisterReturn
    error?: string
    icon?: ReactNode
}

interface InputProps
    extends BaseProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    value?: string | number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    allowedDateRanges?: never
}

interface DateRange {
    start: Date
    end: Date
}

interface DatePickerProps extends BaseProps {
  value?: Date | null
  onChange?: (date: Date | null) => void
  allowedDateRanges: DateRange[]
  minDate?: Date
  maxDate?: Date
}

type FormInputProps = InputProps | DatePickerProps

const isDateAllowed = (date: Date, allowedDateRanges: DateRange[]) => {
    const d = date.setHours(0, 0, 0, 0)
    return allowedDateRanges.some(({ start, end }) => {
        const s = new Date(start).setHours(0, 0, 0, 0)
        const e = new Date(end).setHours(0, 0, 0, 0)
        return d === s || d === e
    })
}

const DateInput = (props: FormInputProps) => {
    const { label, register, error, icon } = props

    // Date Picker mode
    if ('allowedDateRanges' in props && Array.isArray(props.allowedDateRanges)) {
        const { allowedDateRanges, value, onChange } = props
        return (
            <div className='w-full'>
                <label className="font-[600] text-[#121212] font-regular">{label}</label>
                <div className="mt-1 w-full border border-[#E3E3E3] rounded-[8px] flex items-center">
                    {icon && (
                        <div className="text-[#666D80] border-r border-[#e3e3e3] text-[16px] px-3">
                            {icon}
                        </div>
                    )}
                  <DatePicker
  selected={value instanceof Date ? value : null}
  onChange={(date) => {
    if (typeof onChange === 'function') {
      (onChange as (date: Date | null) => void)(date)
    }
  }}
  filterDate={(date) =>
    isDateAllowed(date, props.allowedDateRanges ?? [])
  }
  openToDate={props.allowedDateRanges[0]?.start}
  placeholderText="Select a date"
  className="text-[#121212] pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent w-full focus:outline-none"
  dateFormat="MMM d, yyyy"
  minDate={'minDate' in props ? props.minDate : undefined}
  maxDate={'maxDate' in props ? props.maxDate : undefined}
/>
                </div>
                {error && <p className="text-red-500 text-sm mt-0.5">{error}</p>}
            </div>
        )
    }

    // Regular input mode
    const { value, onChange, ...rest } = props as InputProps
    return (
        <div className='w-full'>
            <label className="font-[600] text-[#121212] font-regular">{label}</label>
            <div className="mt-1 w-full border border-[#E3E3E3] rounded-[8px] flex items-center">
                {icon && (
                    <div className="text-[#666D80] border-r border-[#e3e3e3] text-[16px] px-3">
                        {icon}
                    </div>
                )}
                <input
                    {...register}
                    {...rest}
                    value={value}
                    onChange={onChange}
                    className="text-[#121212] pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent w-full focus:outline-none"
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-0.5">{error}</p>}
        </div>
    )
}

export default DateInput
