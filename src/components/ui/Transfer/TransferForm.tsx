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
import { LuMessageSquareText } from 'react-icons/lu'
import TransferSuccessCard from './TransferSuccesscard'
import { useMediaQuery } from 'react-responsive'


type FormValues = {
    firstName: string
    lastName: string
    message: string
    phone: string
    passengers: number
    extra: string
    email: string
    date: Date | null
    departure: string
    destination: string
}



const TransferForm = ({ name, transferType }: {  name: string, transferType?: string }) => {
    
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
                extra:data.extra,
                vehicleName:name,
                departure:data.departure,
                destination:data.destination,
                vehicleType:transferType,
                date:data.date,
                message:data.message,
                passengers:data.passengers
            }

            const response = await fetch('http://localhost:5000/api/vehicleEnquiry/save', {
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
          <TransferSuccessCard onClose={handleCloseModal} />
        </div>
      </div>
    )
  } else {
    return <TransferSuccessCard onClose={handleCloseModal}/>
  }
}


    return (
        <div>

            <Form<FormValues>
                // defaultValues={{ checkIn: null, checkOut: null }}
               onSubmit={(data) => {
                    handleSubmit(data)

                }}
            >
                {({ register, formState: { errors }, control }) => {

                    return (
                        <>

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

                            <div className='flex items-center gap-3'>
                                <SelectField
                                label="Departure"
                                register={register('departure', { required: 'Departure is required' })}
                                error={errors.departure?.message}
                                options={["Grena","Lyon","Chambery",]}
                                icon={<IoLocationOutline />}
                            />

                                <SelectField
                                label="Destination"
                                register={register('destination', { required: 'Destination is required' })}
                                error={errors.destination?.message}
                                options={['Courchevel']}
                                icon={<IoLocationOutline />}
                            />
                            </div>

                            <div className='flex items-center gap-3 w-full'>

                                <FormInput
                                label="Date"
                                type='date'
                                    register={register('date', { required: 'Date is required' })}
                                    error={errors.date?.message}
                                    placeholder="Select date"
                                    icon={<FaRegCalendarMinus />}
                                />
                                
                                <PeopleInput
                                label="Number of Passengers"
                                type="number"
                                register={register('passengers', {
                                    required: 'Number of passengers is required',
                                    valueAsNumber: true,
                                    min: { value: 1, message: 'Must be at least 1' },
                                })}
                                error={errors.passengers?.message}
                                placeholder="Add your passengers"
                                icon={<FaRegUserCircle />}
                            />
                            </div>

                            

                            

                            

                            <SelectField
                                label="Extra Option"
                                register={register('extra')}
                                error={errors.extra?.message}
                                options={['Option 1', 'Option 2', 'Option 3']}
                                icon={<LuMessageSquareText />}
                            />



                            <FormTextarea
                                label="Anything we should know"
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

export default TransferForm
