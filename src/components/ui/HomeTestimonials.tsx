'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const testimonials = [
    {
        name: 'Sarah L',
        img: "/test-1.webp",
        location: 'London, UK',
        quote: '“Elite Alps understood exactly what we were looking for. Our chalet exceeded expectations, and the personal concierge made our stay truly seamless.”',
    },
    {
        name: 'Mark D',
        img: "/test-2.webp",
        location: 'New York, USA',
        quote: '“An unforgettable experience. The team was incredibly professional and every detail was taken care of before we even asked.”',
    },
    {
        name: 'Emily R',
        img: "/test-3.webp",
        location: 'Sydney, Australia',
        quote: '“From booking to check-out, the experience was flawless. We’ll definitely be back next season.”',
    },
    {
        name: 'Olivia H',
        img: "/test-4.webp",
        location: 'Toronto, Canada',
        quote: '“Everything was impeccable. The atmosphere, the service, the views — it felt like a dream.”',
    },
]

const imageStyles = [
    // 4th (back-most)
    "right-[75px] top-[-8px] rotate-[2deg] sm:w-[274px] sm:h-[343px] w-[187px] h-[235px] z-[1]",
    // 3rd
    "sm:left-[-14px] sm:top-[23px] left-[6px] top-[16] rotate-[-8deg] sm:w-[274px] sm:h-[343px] w-[187px] h-[235px] z-[2]",
    // 2nd
    "top-[35px] sm:top-auto sm:right-[-14px] sm:bottom-[38px] right-[13px] rotate-[5deg] sm:w-[274px] sm:h-[343px] w-[187px] h-[235px] z-[3]"
,
    // 1st (front-most)
    "sm:left-[75px] sm:bottom-0 left-[67px] bottom-[14px] sm:w-[274px] sm:h-[343px] w-[187px] h-[235px] z-[4]"
];



const HomeTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    // Rotate array to simulate stacking order
    const rotated = [...testimonials.slice(currentIndex), ...testimonials.slice(0, currentIndex)]

    return (
        <div className="lg:py-16 md:py-12 py-10">
            <div className="container">
                <div className="text-[#666D80] font-medium text-center">//Testimonials</div>
                <div className="heading-h1 text-[#121212] leading-[120%] my-2 text-center">Stories from the Slopes</div>
                <div className="text-[#666D80] font-medium text-center mb-8 sm:mb-10">
                    Experiences shared by our distinguished clientele from around the world.
                </div>

                <div className="relative sm:w-[459px] w-full sm:h-[452px] h-[323px] mx-auto flex justify-center items-center ">
                    {rotated
                        .slice(0, 4)
                        .map((t, idx) => (
                            <div
                                key={idx}
                                className={`absolute p-2 rounded-[24px] border-[8px] border-white bg-[#999898] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${imageStyles[idx]} transition-all duration-500`}
                                style={{ backgroundImage: `url(${t.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
                            >
                                <Image src={t.img} alt="testimonial" fill className="rounded-[16px] object-cover" />
                            </div>
                        ))}
                </div>

                {/* Testimonial text */}
                <div className="flex items-center flex-col md:gap-6 gap-4 mt-10 max-w-[550px] mx-auto text-center">
                    <div className="font-large font-[600] text-[#121212] min-h-[4.5rem]">
                        {testimonials[currentIndex].quote}
                    </div>
                    <div className="flex justify-center items-center gap-3 font-medium ">
                        <span>{testimonials[currentIndex].name}</span>
                        <span>{testimonials[currentIndex].location}</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex items-center justify-center gap-2 md:mt-10 mt-7'>
                    <button onClick={handlePrev} className='prev-btn cursor-pointer px-4 py-3 flex gap-2.5 rounded-full items-center border border-[#e3e3e3]'>
                        <FaArrowLeftLong className='text-[18px]' />
                        <span className='font-medium'>Prev</span>
                    </button>

                    <button onClick={handleNext} className='next-btn cursor-pointer px-4 py-3 flex gap-2.5 rounded-full items-center border border-[#e3e3e3]'>
                        <span className='font-medium'>Next</span>
                        <FaArrowRightLong className='text-[18px]' />
                    </button>
                </div>
            </div>
        </div>
    )
}



export default HomeTestimonials
