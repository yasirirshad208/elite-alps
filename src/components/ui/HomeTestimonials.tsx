'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const testimonials = [
    {
        name: 'Sarah L',
        img: "/test-1.webp",
        location: 'London, UK',
        quote: '"Elite Alps understood exactly what we were looking for. Our chalet exceeded expectations, and the personal concierge made our stay truly seamless."',
    },
    {
        name: 'Mark D',
        img: "/test-2.webp",
        location: 'New York, USA',
        quote: '"An unforgettable experience. The team was incredibly professional and every detail was taken care of before we even asked."',
    },
    {
        name: 'Emily R',
        img: "/test-3.webp",
        location: 'Sydney, Australia',
        quote: `"From booking to check-out, the experience was flawless. We'll definitely be back next season."`,
    },
    {
        name: 'Olivia H',
        img: "/test-4.webp",
        location: 'Toronto, Canada',
        quote: '"Everything was impeccable. The atmosphere, the service, the views — it felt like a dream."',
    },
]

const imageStyles = [
    // 4th (back-most)
    {
        className: "right-[75px] top-[-8px] rotate-[2deg] sm:w-[274px] sm:h-[343px] w-[187px] h-[235px]",
        zIndex: 1,
        scale: 0.9,
        opacity: 0.6
    },
    // 3rd
    {
        className: "sm:left-[-14px] sm:top-[23px] left-[6px] top-[16px] rotate-[-8deg] sm:w-[274px] sm:h-[343px] w-[187px] h-[235px]",
        zIndex: 2,
        scale: 0.95,
        opacity: 0.8
    },
    // 2nd
    {
        className: "top-[35px] sm:top-auto sm:right-[-14px] sm:bottom-[38px] right-[13px] rotate-[5deg] sm:w-[274px] sm:h-[343px] w-[187px] h-[235px]",
        zIndex: 3,
        scale: 0.98,
        opacity: 0.9
    },
    // 1st (front-most)
    {
        className: "sm:left-[75px] sm:bottom-0 left-[67px] bottom-[14px] sm:w-[274px] sm:h-[343px] w-[187px] h-[235px]",
        zIndex: 4,
        scale: 1,
        opacity: 1
    }
];

const HomeTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleNext = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setTimeout(() => setIsAnimating(false), 600)
    }

    const handlePrev = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setTimeout(() => setIsAnimating(false), 600)
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

                <div className="relative sm:w-[459px] w-full sm:h-[452px] h-[323px] mx-auto flex justify-center items-center">
                    {rotated
                        .slice(0, 4)
                        .map((t, idx) => {
                            const style = imageStyles[idx]
                            return (
                                <div
                                    key={t.name}
                                    className={`absolute p-2 rounded-[24px] border-[8px] border-white bg-[#999898] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${style.className} transition-all duration-600 ease-in-out`}
                                    style={{ 
                                        backgroundImage: `url(${t.img})`, 
                                        backgroundSize: "cover", 
                                        backgroundPosition: "center",
                                        zIndex: style.zIndex,
                                        transform: `scale(${style.scale})`,
                                        opacity: style.opacity
                                    }}
                                >
                                    <Image src={t.img} alt="testimonial" fill className="rounded-[16px] object-cover" />
                                </div>
                            )
                        })}
                </div>

                {/* Testimonial text */}
                <div className="flex items-center flex-col md:min-h-[144px] min-h-[137px] md:gap-6 gap-4 mt-10 max-w-[550px] mx-auto text-center">
                    <div 
                        key={`quote-${currentIndex}`}
                        className="font-large font-[600] text-[#121212] min-h-[4.5rem] animate-[fadeInUp_0.6s_ease-out]"
                    >
                        {testimonials[currentIndex].quote}
                    </div>
                    <div 
                        key={`author-${currentIndex}`}
                        className="flex justify-center items-center gap-3 font-medium animate-[fadeInUp_0.6s_ease-out_0.1s_both]"
                    >
                        <span>{testimonials[currentIndex].name}</span>
                        <span>{testimonials[currentIndex].location}</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex items-center justify-center gap-2 md:mt-10 mt-7'>
                    <button 
                        onClick={handlePrev} 
                        disabled={isAnimating}
                        className='prev-btn cursor-pointer px-4 py-3 flex gap-2.5 rounded-full items-center border border-[#e3e3e3] transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        <FaArrowLeftLong className='text-[18px]' />
                        <span className='font-medium'>Prev</span>
                    </button>

                    <button 
                        onClick={handleNext} 
                        disabled={isAnimating}
                        className='next-btn cursor-pointer px-4 py-3 flex gap-2.5 rounded-full items-center border border-[#e3e3e3] transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        <span className='font-medium'>Next</span>
                        <FaArrowRightLong className='text-[18px]' />
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}

export default HomeTestimonials