'use client'

import React, { useEffect, useState } from 'react'
import { Form } from '../Form'
import FormInput from '../FormInput'
import { FaRegCalendarMinus, FaRegUser, FaRegUserCircle } from 'react-icons/fa'
import PeopleInput from '../PeopleInput'
import SelectField from '../SelectField'
import FormTextarea from '../FormTextarea'
import CustomPhoneInput from '../PhoneInput'
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { LuClock, LuMessageSquareText } from 'react-icons/lu'
import { useMediaQuery } from 'react-responsive'
import TransferSuccessCard from '../Transfer/TransferSuccesscard'
import ExperienceSuccessCard from './ExperienceSuccessCard'


type FormValues = {
    firstName: string
    lastName: string
    message: string
    phone: string
    people: number
    time: string
    email: string
    date: Date | null
}



const ExperienceForm = ({ name, location, experienceType, timeOptions, price }: {  location:string,name: string, experienceType?: string, timeOptions:string[], price?:string }) => {
    
    const [agreed, setAgreed] = useState(false)

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

   
const isMobile = useMediaQuery({ maxWidth: 639 })

const handleCloseModal = () => {
  setIsSubmitted(false)
}

const handleSubmit = async (data: FormValues) => {
        try {
            setIsSubmitting(true);

            const formData = {
                name:data.firstName + " " + data.lastName,
                email:data.email,
                phone:data.phone,
                time:data.time,
                experienceName:name,
                location:location,
                experienceType:experienceType,
                date:data.date,
                message:data.message,
                people:data.people
            }

            const response = await fetch('https://elite-experience-backend.onrender.com/api/experienceEnquiry/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errData = await response.json();
                console.log(errData)
                alert('Submission failed');
                return;
            }

            // Success
            setIsSubmitted(true);
        } catch (error) {
            alert('Submission error');
            
        } finally {
            setIsSubmitting(false);
        }
    };

useEffect(() => {
  if (isSubmitted && isMobile) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.style.overflow = 'hidden' // prevent background scroll
  } else {
    document.body.style.overflow = 'auto'
  }
}, [isSubmitted, isMobile])

if (isSubmitted) {
  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-20 z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl max-w-sm w-[90%] p-4">
          <ExperienceSuccessCard onClose={handleCloseModal} />
        </div>
      </div>
    )
  } else {
    return <ExperienceSuccessCard onClose={handleCloseModal}/>
  }
}


    return (
        <div>

            {price &&(
            <>
            <h2 className="md:text-[32px] sm:text-[24px] text-[20px] text-[#121212] font-semibold">
                €{parseFloat(price || "20")
                    .toFixed(0) // remove decimal
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / Person
            </h2>

            <div className="h-[1px] bg-[#e3e3e3] w-full my-3"></div>
            </>
            )}

            <div className="font-large text-[#121212] font-[600] mb-1">Need help in booking?</div>

            <Form<FormValues>
                // defaultValues={{ checkIn: null, checkOut: null }}
                onSubmit={(data) => {
                    handleSubmit(data)
                }}
            >
                {({ register, formState: { errors }, control }) => {

                    return (
                        <>

                                <FormInput
                                label="Date"
                                type='date'
                                    register={register('date', { required: 'Date is required' })}
                                    error={errors.date?.message}
                                    placeholder="Select date"
                                    icon={<FaRegCalendarMinus />}
                                />

                            <SelectField
                                label="Select Time"
                                register={register('time', { required: 'Time is required' })}
                                error={errors.time?.message}
                                options={timeOptions}
                                icon={<LuClock />}
                            />

                            <PeopleInput
                                label="Number of People"
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

                           


                            <FormTextarea
                                label="Message Here"
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
                                <label htmlFor="policy" className="text-[#475467] font-regular">
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

export default ExperienceForm
