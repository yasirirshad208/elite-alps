'use client'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string
  register: UseFormRegisterReturn
  error?: string
  icon?: ReactNode
  minDate?: Date
  maxDate?: Date
  setValue?: UseFormSetValue<any>
  dateRange?: boolean
  startDateFieldName?: string
  endDateFieldName?: string
}

const FormInput = ({
  label,
  register,
  error,
  icon,
  type,
  minDate,
  maxDate,
  setValue,
  dateRange = false,
  startDateFieldName,
  endDateFieldName,
  ...rest
}: FormInputProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const handleDateRangeChange = (dates: [Date | null, Date | null] | Date) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates
      setStartDate(start)
      setEndDate(end)

      if (setValue) {
        if (startDateFieldName && start) {
          setValue(startDateFieldName, start)
        }
        if (endDateFieldName && end) {
          setValue(endDateFieldName, end)
        }
      }
    }
  }

  return (
    <div className="w-full">
      <label className="font-[600] text-[#121212] font-regular">{label}</label>
      <div className="mt-1 w-full border border-[#E3E3E3] rounded-[8px] flex items-center">
        {icon && (
          <div className="text-[#666D80] border-r border-[#e3e3e3] text-[16px] px-3">
            {icon}
          </div>
        )}

        {type === 'date' && dateRange ? (
          <DatePicker
            selectsRange
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateRangeChange}
            className="text-[#121212] pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent w-full focus:outline-none"
            placeholderText="Select date range"
            minDate={minDate}
            maxDate={maxDate}
            dateFormat="d MMM yyyy" // ✅ format like "18 Oct 2025"
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="flex items-center justify-between px-1 py-2 bg-white">
                <button
                  type='button'
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="p-1 disabled:opacity-40 cursor-pointer"
                >
                  ‹
                </button>
                <span className="text-[14px] font-[700] text-black">
                  {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
                </span>
                <button
                  type='button'
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="p-1 disabled:opacity-40 cursor-pointer"
                >
                  ›
                </button>
              </div>
            )}
          />
        ) : type === 'date' ? (
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => {
              setSelectedDate(date)
              if (setValue) setValue(register.name, date)
            }}
            className="text-[#121212] pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent w-full focus:outline-none"
            placeholderText="Select date"
            minDate={minDate}
            maxDate={maxDate}
            dateFormat="d MMM yyyy" // ✅ formatted like "18 Oct 2025"
          />
        ) : (
          <input
            {...register}
            {...rest}
            className="text-[#121212] pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent w-full focus:outline-none"
          />
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-0.5">{error}</p>}
    </div>
  )
}

export default FormInput
