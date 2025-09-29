'use client'

import React, { useEffect, useState } from 'react'
import { Form } from './Form'
import FormInput from './FormInput'
import { FaRegUser,  } from 'react-icons/fa'
import SelectField from './SelectField'
import FormTextarea from './FormTextarea'
import CustomPhoneInput from './PhoneInput'
import { IoMailOutline } from 'react-icons/io5'
import { LuClock,  } from 'react-icons/lu'
import { useMediaQuery } from 'react-responsive'
import ExperienceSuccessCard from './Experience/ExperienceSuccessCard'


type FormValues = {
    firstName: string
    lastName: string
    message: string
    phone: string
    time: string
    email: string
}



const ContactForm = () => {
    
    const [agreed, setAgreed] = useState(false)

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

   const handleSubmit = async (data: FormValues) => {
        try {
            setIsSubmitting(true);

            const formData = {
                name:data.firstName + " " + data.lastName,
                email:data.email,
                phone:data.phone,
                time:data.time,
                message:data.message,
            }

            const response = await fetch('http://localhost:5000/api/contact/save', {
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


const isMobile = useMediaQuery({ maxWidth: 639 })

const handleCloseModal = () => {
  setIsSubmitted(false)
}

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

                            <SelectField
                                label="Select Time"
                                register={register('time', { required: 'Time is required' })}
                                error={errors.time?.message}
                                options={["Option 1", "Option 2", "Option 3"]}
                                icon={<LuClock />}
                            />


                            <FormTextarea
                                label="Message"
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

export default ContactForm
