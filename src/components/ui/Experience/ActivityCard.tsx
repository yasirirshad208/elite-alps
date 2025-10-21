import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react'
import { CiLocationOn, CiRuler } from 'react-icons/ci';
import { FaRegCalendarCheck, FaRegUser } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LuBed, LuFootprints } from 'react-icons/lu';

type AccommodationCard = {
    title: string;
    images: string[]
    location: string;
    price?: string;
    persons: string;
    hours: string;
    distance: string;
    time?: string
    link: string
    hideBottom?: boolean
};

const ActivityCard = ({ title, images, location, price, time, persons, hours, distance, link, hideBottom = false }: AccommodationCard) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleDotClick = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        e.preventDefault();
        setActiveImageIndex(index);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (!images || images.length === 0) return;
        setActiveImageIndex((prev) =>
            prev === images.length - 1 ? prev : prev + 1
        );
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        setCurrentTranslate(prevTranslate + diff);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        if (!images || images.length === 0) return;

        const movedBy = currentTranslate - prevTranslate;
        const threshold = 50;

        if (movedBy < -threshold && activeImageIndex < images.length - 1) {
            setActiveImageIndex(activeImageIndex + 1);
        } else if (movedBy > threshold && activeImageIndex > 0) {
            setActiveImageIndex(activeImageIndex - 1);
        }

        setCurrentTranslate(0);
        setPrevTranslate(0);
    };

    // Mouse events for desktop
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        e.preventDefault();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diff = currentX - startX;
        setCurrentTranslate(prevTranslate + diff);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (!images || images.length === 0) return;

        const movedBy = currentTranslate - prevTranslate;
        const threshold = 50;

        if (movedBy < -threshold && activeImageIndex < images.length - 1) {
            setActiveImageIndex(activeImageIndex + 1);
        } else if (movedBy > threshold && activeImageIndex > 0) {
            setActiveImageIndex(activeImageIndex - 1);
        }

        setCurrentTranslate(0);
        setPrevTranslate(0);
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleMouseUp();
        }
    };

    return (
        <div className='rounded-[12px] border border-[#E3E3E3] px-[6px] pt-[6px] pb-3 cursor-pointer bg-white'>
            <Link href={link}>
                {images.length === 1 ? (
                    <div className="relative w-full h-[223px]">
                        <Image
                            src={`https://elite-experience-backend.onrender.com/${images[0]}`}
                            alt="Activity Card Image"
                            fill
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1024px) 50vw,
                                25vw"
                            className="object-cover rounded-[9px]"
                        />
                    </div>
                ) : (
                    <div
                        className="relative group cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="overflow-hidden h-[223px] w-full rounded-[9px]"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                ref={sliderRef}
                                className="flex w-full h-full"
                                style={{
                                    transform: `translateX(calc(-${activeImageIndex * 100}% + ${isDragging ? currentTranslate : 0}px))`,
                                    transition: isDragging ? 'none' : 'transform 500ms ease-in-out',
                                }}
                            >
                                {images.map((img, idx) => (
                                    <div key={idx} className="w-full h-full flex-shrink-0 relative">
                                        <img
                                            src={`https://elite-experience-backend.onrender.com/${img}`}
                                            className="object-cover w-full h-full rounded-[9px] pointer-events-none"
                                            alt={title}
                                            draggable="false"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {activeImageIndex > 0 && (
                            <div
                                className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
                                onClick={handlePrev}
                            >
                                <IoIosArrowBack className="mr-[2px]" />
                            </div>
                        )}
                        {images.length - 1 !== activeImageIndex && (
                            <div
                                className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[15px] text-black absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer group-hover:opacity-75 opacity-0 transition-opacity duration-300"
                                onClick={handleNext}
                            >
                                <IoIosArrowForward className="ml-[3px]" />
                            </div>
                        )}

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-[5.5px] h-[5.5px] rounded-full cursor-pointer ${activeImageIndex === index ? "bg-white" : "bg-[#b0b0b0]"
                                        }`}
                                    onClick={(e) => handleDotClick(e, index)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className='mt-2 px-2'>
                    <div className='font-large text-[#121212] font-[600]'>{title}</div>
                    <div className='font-medium text-[#121212] text-[#272835] flex items-center gap-1 flex-wrap'><CiLocationOn className='md:text-[21px] text-[18px]' /> {location}</div>
                    <div className='flex items-center gap-1 sm:mt-2 mt-1.5 font-regular flex-wrap'>

                        <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                            <GoClock className='sm:text-[15px] text-[13px]' />

                            {hours} Hours
                        </div>
                        <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                            <LuFootprints className='text-[20px] rotate-[-45deg]' />
                            {distance} Ft
                        </div>

                        <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                            <FaRegUser className='sm:text-[15px] text-[13px]' />

                            {persons} person
                        </div>

                        {time && (
                            <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                                <FaRegCalendarCheck className='sm:text-[15px] text-[13px]' />

                                {time}
                            </div>
                        )}


                    </div>


                    {!hideBottom && (
                        <div className='font-large text-[#184E44] font-[600] sm:mt-2 mt-1.5'>€{parseFloat(price || "0")
                            .toFixed(0)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / Person</div>
                    )

                    }
                </div>
            </Link>

        </div>
    )
}

export default ActivityCard