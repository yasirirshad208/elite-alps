import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiLocationOn, CiRuler } from 'react-icons/ci';
import { FaRegCalendarCheck, FaRegUser } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
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
    return (
        <div className='rounded-[12px] border border-[#E3E3E3] px-[6px] pt-[6px] pb-3 cursor-pointer bg-white'>
            <Link href={link}>

                <div className="relative w-full h-[223px]">
                    <Image
                        src={`http://localhost:5000/${images[0]}`}
                        alt="Activity Card Image"
                        fill
                        sizes="(max-width: 768px) 100vw,
                                (max-width: 1024px) 50vw,
                                    25vw"
                        className="object-cover rounded-[9px]"
                    />
                </div>


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
                            .toFixed(0) // remove decimal
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / Person</div>
                    )

                    }
                </div>
            </Link>

        </div>
    )
}

export default ActivityCard