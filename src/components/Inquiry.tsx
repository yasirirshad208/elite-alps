'use client';
import { useModalStore } from '@/stores/modalStore';
import React, { useEffect, useRef, useState } from 'react';
import { Form } from './ui/Form';
import TransferSuccessCard from './ui/Transfer/TransferSuccesscard';
import { useMediaQuery } from 'react-responsive';
import { FaArrowLeft, FaArrowUpLong, FaRegCalendarMinus, FaRegUser } from 'react-icons/fa6';
import FormInput from './ui/FormInput';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import CustomPhoneInput from './ui/PhoneInput';
import SelectField from './ui/SelectField';
import { LuContact } from 'react-icons/lu';
import FormTextarea from './ui/FormTextarea';
import { Box, Slider } from '@mui/material';

type FormValues = {
    name: string
    email: string
    preferedContactMethod: string
    phone: string
    location: number
    dateOfTravel: Date | null
    twoWeeksStay: string
    budget: string
    message: string
}

const InquiryModal = () => {
    const { isInquiryOpen, closeInquiry } = useModalStore();
    const [agreed, setAgreed] = useState(false)
    const [interestedInTwoWeeksStay, setInterestedInTwoWeeksStay] = useState(false);
const [price, setPrice] = useState<number[]>([5000, 300000]);

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 766 })

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        setPrice(newValue as number[]);
    };

    const handleCloseModal = () => {
        setIsSubmitted(false)
        closeInquiry()
    }

    const handleSubmit = async (data: FormValues) => {
        try {
            setIsSubmitting(true);

            const formData = {
                name:data.name,
                email:data.email,
                phone:data.phone,
                contactMethod:data.preferedContactMethod,
                location:data.location,
                dateOfTravel:data.dateOfTravel,
                interestedInTwoWeeksStay,
                budget:`€${price[0]} to €${price[1]}`,
                message:data.message,
            }

            const response = await fetch('http://localhost:5000/api/quickEnquiry/save', {
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

    const modalRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeInquiry();
      setIsSubmitted(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [closeInquiry]);


    if (!isInquiryOpen) return null;
    if (isSubmitted) {
        if (isMobile) {
            return (
                <div className="fixed  inset-0 z-[9999] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
                    <div ref={modalRef}  className="bg-white rounded-xl max-w-sm w-[90%] p-4">
                        <TransferSuccessCard onClose={handleCloseModal} />
                    </div>
                </div>
            )
        } else {
            return <div className="fixed  inset-0 z-[9999] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
                <div ref={modalRef}  className=" bg-white w-full h-full md:h-auto max-w-[706px] md:p-6 p-4 md:rounded-[12px] relative">
                    <>
                        <div className='flex justify-between'>

                            <div className='max-w-[550px]'>
                                <h2 className="text-[20px] text-[#121212] font-semibold">Quick Inquiry</h2>
                                <p className='mt-2 text-[#666D80] text-[18px] '>Let us know how we can help you, email us or chat to one of our luxury ski specialists on +44 (0)1202 203653.</p>
                            </div>
                            <button
                                className="md:w-[48px] md:h-[48px] w-[30px] h-[30px] text-[18px] md:text-[24px] cursor-pointer rounded-full border border-[#e3e3e3] flex justify-center items-center"
                                onClick={() => {
                                    closeInquiry()
                                    setIsSubmitted(false)
                                }}
                            >
                                ✕
                            </button>
                        </div>

                    </>
                    <div className='mt-6'>
                        <TransferSuccessCard onClose={handleCloseModal} />
                    </div>
                </div>
            </div>
        }
    } else {
        return (
            <>
                <div className="fixed inset-0 z-19 sm:z-[9999] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
                    <div ref={modalRef} className="overflow-y-auto bg-white w-full h-full md:max-h-[820px] max-w-[706px] sm:p-4 px-4 pb-4 pt-[108px] md:p-6 md:rounded-[12px] relative">
                        <>
                            <div className='mb-[32px] flex items-center gap-3 sm:hidden'>
                                <button className='p-2 rounded-full border-[#e3e3e3] border cursor-pointer' onClick={closeInquiry}><FaArrowLeft className='w-[24px] h-[24px]' /></button> <span className='text-[16x] font-[600] '>Quick Inquiry Form</span>
                            </div>
                            <div className='flex justify-between'>


                                <div className='max-w-[550px]'>
                                    <h2 className="text-[20px] text-[#121212] font-semibold">Quick Inquiry</h2>
                                    <p className='mt-2 text-[#666D80] text-[18px] '>Let us know how we can help you, email us or chat to one of our luxury ski specialists on +44 (0)1202 203653.</p>
                                </div>
                                <button
                                    className="hidden sm:flex md:w-[48px] md:h-[48px] w-[30px] h-[30px] text-[18px] md:text-[24px] cursor-pointer rounded-full border border-[#e3e3e3] justify-center items-center"
                                    onClick={closeInquiry}
                                >
                                    ✕
                                </button>
                            </div>

                            <div className='mt-6'>

                                <Form<FormValues>
                                    // defaultValues={{ checkIn: null, checkOut: null }}
                                    onSubmit={(data) => {
                                        handleSubmit(data)
                                    }}
                                >
                                    {({ register, formState: { errors }, control }) => {

                                        return (
                                            <>

                                                <div className='flex sm:items-center flex-col sm:flex-row gap-3'>
                                                    <FormInput
                                                        label="Full name"
                                                        register={register('name', { required: 'Name is required' })}
                                                        error={errors.name?.message}
                                                        placeholder="Enter your name"
                                                        icon={<FaRegUser />}
                                                    />

                                                    <FormInput
                                                        label="Email"
                                                        register={register('email', { required: 'Email is required' })}
                                                        error={errors.email?.message}
                                                        placeholder="Enter your email"
                                                        icon={<IoMailOutline />}
                                                    />
                                                </div>

                                                <div className='flex sm:items-center flex-col sm:flex-row gap-3'>


                                                    <CustomPhoneInput
                                                        label="Phone Number"
                                                        name="phone"
                                                        control={control}
                                                        error={errors.phone}
                                                    />

                                                    <SelectField
                                                        label="Prefered contact method"
                                                        register={register('preferedContactMethod', { required: 'Please select that field' })}
                                                        error={errors.preferedContactMethod?.message}
                                                        options={["Email", "Call", "Whatsapp",]}
                                                        icon={<LuContact />}
                                                    />
                                                </div>

                                                <div className='flex sm:items-center flex-col sm:flex-row gap-3'>
                                                    <SelectField
                                                        label="Location"
                                                        register={register('location', { required: 'Location is required' })}
                                                        error={errors.location?.message}
                                                        options={["Courchevel", "Grena", "Lyon", "Chambery",]}
                                                        icon={<IoLocationOutline />}
                                                    />

                                                    <FormInput
                                                        label="Date of travel"
                                                        type='date'
                                                        register={register('dateOfTravel', { required: 'Date is required' })}
                                                        error={errors.dateOfTravel?.message}
                                                        placeholder="Select date"
                                                        icon={<FaRegCalendarMinus />}
                                                    />
                                                </div>

                                                <div className='flex items-center gap-2 my-1'>
                                                    <input
                                                        type="checkbox"
                                                        id="twoWeeksStay"
                                                        checked={interestedInTwoWeeksStay}
  onChange={(e) => setInterestedInTwoWeeksStay(e.target.checked)}
                                                    />
                                                    <label htmlFor="twoWeeksStay" className="text-[#475467] text-[14px]">
                                                        Interested in a 2 weeeks stay?
                                                    </label>
                                                </div>

                                                <div className="flex-1">
                                                    <label
                                                        htmlFor=""
                                                        className=" text-[16px] text-[#121212] font-[600]"
                                                    >
                                                        Slide your Budget
                                                    </label>
                                                    <Box className="w-full h-[65px] pl-[23px] pr-[40px] overflow-hidden">
                                                        <Slider
                                                            value={price}
                                                            onChange={handlePriceChange}
                                                            min={5000}
                                                            max={300000}
                                                            step={10000}
                                                            valueLabelDisplay="on"
                                                            valueLabelFormat={(value) => `€${value.toLocaleString()}`}
                                                            sx={{
                                                                "& .MuiSlider-thumb": {
                                                                    backgroundColor: "#ffffff",
                                                                    border: "2px solid #0074ec",
                                                                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                                                                    "&:focus, &:hover, &.Mui-active": {
                                                                        boxShadow: "0 0 6px rgba(0, 0, 255, 0.5)", // Adjust for hover/active states
                                                                    },
                                                                },
                                                                "& .MuiSlider-track": { backgroundColor: "#0074ec" },
                                                                "& .MuiSlider-rail": { backgroundColor: "#ddd" },
                                                                "& .MuiSlider-valueLabel": {
                                                                    backgroundColor: "#ffffff",
                                                                    color: "#3d3d3d",
                                                                    fontWeight: "bold",
                                                                    fontSize: "14px",
                                                                    borderRadius: "4px",
                                                                    top: 50, // Moves the value label below the handle
                                                                    boxShadow:
                                                                        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                                                                    "&:before": {
                                                                        display: "none", // Removes the triangle pointer above the label
                                                                    },
                                                                },
                                                            }}
                                                        />
                                                    </Box>
                                                </div>

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
                                                        Accept the terms and conditions.
                                                    </label>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={!agreed || isSubmitting}
                                                    className={`font-medium font-[600] w-full text-white sm:py-3 py-2 rounded-[12px] transition-all duration-200 ${agreed && !isSubmitting ? 'bg-[#0074ec] cursor-pointer' : 'bg-blue-400 cursor-not-allowed'
                                                        }`}
                                                >
                                                    {isSubmitting ? (
                                                        'Submitting...'
                                                    ) : (
                                                        <span className="flex items-center justify-center gap-2">
                                                            Submit Inquiry
                                                            <FaArrowUpLong className="w-[18px] h-[18px] transform rotate-[45deg]" />
                                                        </span>
                                                    )}
                                                </button>
                                            </>
                                        )
                                    }}
                                </Form>

                            </div>
                        </>
                    </div>
                </div>
            </>

        );
    }




};

export default InquiryModal;
