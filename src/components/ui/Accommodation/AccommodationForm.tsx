'use client'

import React, { useEffect, useState } from 'react'
import { Form } from '../Form'
import FormInput from '../FormInput'
import { FaRegCalendarMinus, FaRegUser, FaRegUserCircle } from 'react-icons/fa'
import PeopleInput from '../PeopleInput'
import SelectField from '../SelectField'
import DateInput from '../DateInput'
import FormTextarea from '../FormTextarea'
import CustomPhoneInput from '../PhoneInput'
import { IoMailOutline } from 'react-icons/io5'
import { LuMessageSquareText } from 'react-icons/lu'
import SuccessCard from '../SuccessCard'

type FormValues = {
    firstName: string
    lastName: string
    message: string
    phone: string
    people: number
    subject: string
    email: string
    checkIn: Date | null
    checkOut: Date | null
}

interface Sejour {
    start: string;
    end: string;
    price: string;
}

const AccommodationForm = ({ id, name, location, accommodationType, dateRanges }: { id: string, name: string, location?: string, accommodationType?: string, dateRanges: Sejour[] }) => {
    const [agreed, setAgreed] = useState(false)
    const [rate, setRate] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const parseLocalDate = (dateStr: string) => {
        const [year, month, day] = dateStr.split('-').map(Number);
        return new Date(year, month - 1, day); // local date, no UTC conversion
    };

    const allowedDates = dateRanges.map((date) => ({
        start: parseLocalDate(date.start),
        end: parseLocalDate(date.end),
        price: date.price,
    }));

    // allowedDates.map((d)=>console.log(d))

    const getMatchingRange = (date: Date | null) => {
        if (!date) return undefined
        return allowedDates.find(
            (range) =>
                range.start.setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)
        )
    }
    useEffect(() => {
        if (window.innerWidth < 640) {
            window.scrollTo({ top: 30, behavior: 'smooth' })
        }
    }, [isSubmitted === true])

    const handleSubmit = async (data: FormValues) => {
        try {
            setIsSubmitting(true);

            const formData = {
                name: data.firstName + " " + data.lastName,
                email: data.email,
                phone: data.phone,
                interestedIn: data.subject,
                accommodationName: name,
                location,
                accommodationType,
                checkIn: data.checkIn,
                checkOut: data.checkOut,
                message: data.message,
                numberOfPeople: data.people
            }

            const response = await fetch('https://elite-experience-backend.onrender.com/api/accommodationEnquiry/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errData = await response.json();
                alert('Submission failed');
                return;
            }

            // Success
            setIsSubmitted(true);
        } catch (error) {
            alert('Submission failed ');

        } finally {
            setIsSubmitting(false);
        }
    };



    if (isSubmitted) {


        return <SuccessCard name={name} page={accommodationType + "s"} transferPage="cars" />
    }

    return (
        <div>
            <h2 className="text-[20px] text-[#121212] font-semibold">
                €{parseFloat(rate || (dateRanges[0]?.price ?? "0"))
                    .toFixed(0)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / Week
            </h2>

            <div className="h-[1px] bg-[#e3e3e3] w-full my-3"></div>

            <div className="tetxt-[16px] font-semibold text-[#121212] font-[600] mb-2.5">Make an Enquiry</div> 

            <Form<FormValues>
                defaultValues={{ checkIn: null, checkOut: null }}
                onSubmit={(data) => {
                    handleSubmit(data)

                }}
            >
                {({ register, formState: { errors }, watch, setValue, control }) => {
                    const checkIn = watch('checkIn')

                    return (
                        <>
                            <div className='flex items-center gap-3 w-full'>
                                {/* Check-in date only allows start dates */}
                                <DateInput
                                    icon={<FaRegCalendarMinus />}
                                    label="Check In"
                                    value={checkIn}
                                    onChange={(date: Date | null) => {
                                        setValue('checkIn', date)
                                        const matching = getMatchingRange(date)
                                        setValue('checkOut', matching?.end || null)
                                        setRate(matching?.price || "")
                                    }}
                                    register={register('checkIn', { required: 'Check-in date is required' })}
                                    error={errors.checkIn?.message}
                                    allowedDateRanges={allowedDates.map((r) => ({ start: r.start, end: r.start }))}
                                />
                                {/* Check-out date only allows corresponding end date */}
                                <DateInput
                                    icon={<FaRegCalendarMinus />}
                                    label="Check Out"
                                    value={watch('checkOut')}
                                    onChange={(date: Date | null) => setValue('checkOut', date)}
                                    register={register('checkOut', { required: 'Check-out date is required' })}
                                    error={errors.checkOut?.message}
                                    allowedDateRanges={
                                        checkIn
                                            ? allowedDates
                                                .filter(
                                                    (r) =>
                                                        r.start.setHours(0, 0, 0, 0) === checkIn.setHours(0, 0, 0, 0)
                                                )
                                                .map((r) => ({ start: r.end, end: r.end }))
                                            : []
                                    }
                                />
                            </div>

                            <PeopleInput
                                label="Number of people"
                                type="number"
                                register={register('people', {
                                    required: 'Number of people is required',
                                    valueAsNumber: true,
                                    min: { value: 1, message: 'Must be at least 1' },
                                })}
                                error={errors.people?.message}
                                placeholder="Add your people"
                                icon={<FaRegUserCircle />}
                            />

                            <div className='flex items-center gap-3'>
                                <FormInput
                                    label="First name"
                                    register={register('firstName', { required: 'First name is required' })}
                                    error={errors.firstName?.message}
                                    placeholder="Enter your first name"
                                    icon={<FaRegUser />}
                                />

                                <FormInput
                                    label="Last name"
                                    register={register('lastName', { required: 'Last name is required' })}
                                    error={errors.lastName?.message}
                                    placeholder="Enter your last name"
                                    icon={<FaRegUser />}
                                />
                            </div>

                            <div className='flex items-center gap-3'>
                                <FormInput
                                    label="Email"
                                    register={register('email', { required: 'Email is required' })}
                                    error={errors.email?.message}
                                    placeholder="Enter your email"
                                    icon={<IoMailOutline />}
                                />

                                <CustomPhoneInput
                                    label="Phone Number"
                                    name="phone"
                                    control={control}
                                    error={errors.phone}
                                />
                            </div>

                            <SelectField
                                label="Subject"
                                register={register('subject')}
                                error={errors.subject?.message}
                                options={['Option 1', 'Option 2', 'Option 3']}
                                icon={<LuMessageSquareText />}
                            />



                            <FormTextarea
                                label="Message here"
                                register={register('message')}
                                error={errors.message?.message}
                                placeholder="Enter your message here"
                            />


                           
 <div className='flex items-center gap-2 my-1'>
                                <input
                                    type="checkbox"
                                    id="policy"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />
                                <label htmlFor="policy" className="text-[#475467] text-[14px]">
                                    You agree to our friendly privacy policy.
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={!agreed || isSubmitting}
                                className={`font-medium font-[600] w-full text-white sm:py-3 py-2 rounded-[12px] transition-all duration-200 ${agreed && !isSubmitting ? 'bg-[#0074ec] cursor-pointer' : 'bg-blue-400 cursor-not-allowed'
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>

                        </>
                    )
                }}
            </Form>
        </div>
    )
}

export default AccommodationForm





