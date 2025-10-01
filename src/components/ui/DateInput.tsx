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
                            if (typeof onChange === "function") {
                                (onChange as (date: Date | null) => void)(date);
                            }
                        }}
                        filterDate={(date) => isDateAllowed(date, props.allowedDateRanges ?? [])}
                        openToDate={props.allowedDateRanges[0]?.start}
                        placeholderText="Select a date"
                        className="text-[#121212] pl-3 pr-4 py-3 font-regular placeholder:text-[#666D80] placeholder:text-[14px] bg-transparent w-full focus:outline-none"
                        dateFormat="MMM d, yyyy"
                        minDate={"minDate" in props ? props.minDate : undefined}
                        maxDate={"maxDate" in props ? props.maxDate : undefined}
                        renderCustomHeader={({
                            date,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div className="flex items-center justify-between px-1 py-2 bg-white">
                                {/* Prev Button */}
                                <button
                                type='button'
                                    onClick={decreaseMonth}
                                    disabled={prevMonthButtonDisabled}
                                    className="p-1 disabled:opacity-40 cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.4286 8.84672H6.15849L8.61514 6.17209C8.71747 6.06449 8.79909 5.93578 8.85524 5.79347C8.91139 5.65116 8.94094 5.4981 8.94218 5.34323C8.94342 5.18835 8.91631 5.03475 8.86244 4.8914C8.80857 4.74805 8.72902 4.61782 8.62842 4.5083C8.52783 4.39878 8.40821 4.31217 8.27654 4.25352C8.14487 4.19487 8.0038 4.16535 7.86154 4.1667C7.71929 4.16805 7.5787 4.20022 7.44799 4.26136C7.31728 4.32249 7.19906 4.41135 7.10023 4.52276L2.81476 9.18849C2.71498 9.29684 2.63582 9.42556 2.58181 9.56727C2.5278 9.70898 2.5 9.8609 2.5 10.0143C2.5 10.1677 2.5278 10.3197 2.58181 10.4614C2.63582 10.6031 2.71498 10.7318 2.81476 10.8402L7.10023 15.5059C7.30229 15.7184 7.57292 15.8359 7.85383 15.8333C8.13474 15.8306 8.40345 15.7079 8.60209 15.4917C8.80073 15.2754 8.91341 14.9829 8.91585 14.677C8.91829 14.3712 8.8103 14.0765 8.61514 13.8566L6.15849 11.1796H16.4286C16.7128 11.1796 16.9853 11.0567 17.1862 10.8379C17.3871 10.6192 17.5 10.3225 17.5 10.0132C17.5 9.7038 17.3871 9.40711 17.1862 9.18836C16.9853 8.96961 16.7128 8.84672 16.4286 8.84672Z" fill="#121212" />
                                    </svg>
                                </button>

                                {/* Month + Year */}
                                <span className="text-[14px] font-[700] text-black">
                                    {date.toLocaleString("default", { month: "long" })}{" "}
                                    {date.getFullYear()}
                                </span>

                                {/* Next Button */}
                                <button
                                type='button'
                                    onClick={increaseMonth}
                                    disabled={nextMonthButtonDisabled}
                                    className="p-1 disabled:opacity-40 cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.4184 10.4451C17.4996 10.2324 17.5208 9.99836 17.4794 9.77258C17.438 9.54679 17.3359 9.33941 17.1859 9.17668L12.8999 4.52192C12.8011 4.41077 12.6829 4.32212 12.5521 4.26113C12.4214 4.20015 12.2808 4.16804 12.1385 4.1667C11.9963 4.16536 11.8552 4.1948 11.7235 4.25331C11.5918 4.31182 11.4722 4.39823 11.3716 4.50749C11.271 4.61676 11.1914 4.74668 11.1375 4.8897C11.0836 5.03271 11.0565 5.18594 11.0578 5.34046C11.059 5.49497 11.0886 5.64767 11.1447 5.78965C11.2009 5.93162 11.2825 6.06003 11.3848 6.16738L13.8429 8.83688H3.5715C3.28732 8.83688 3.01478 8.95948 2.81383 9.17772C2.61289 9.39595 2.5 9.69194 2.5 10.0006C2.5 10.3092 2.61289 10.6052 2.81383 10.8234C3.01478 11.0417 3.28732 11.1643 3.5715 11.1643H13.8429L11.3859 13.8326C11.2836 13.94 11.202 14.0684 11.1458 14.2103C11.0896 14.3523 11.0601 14.505 11.0588 14.6595C11.0576 14.814 11.0847 14.9673 11.1386 15.1103C11.1925 15.2533 11.272 15.3832 11.3726 15.4925C11.4732 15.6017 11.5929 15.6882 11.7246 15.7467C11.8562 15.8052 11.9973 15.8346 12.1396 15.8333C12.2819 15.8319 12.4225 15.7998 12.5532 15.7388C12.6839 15.6779 12.8022 15.5892 12.901 15.4781L17.187 10.8233C17.2863 10.715 17.3649 10.5865 17.4184 10.4451Z" fill="#121212" />
                                    </svg>
                                </button>
                            </div>
                        )}
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








