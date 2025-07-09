import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiLocationOn, CiRuler } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { LuBed } from 'react-icons/lu';

type AccommodationCard = {
    title: string;
    image: string
    location: string;
    price: string;
    persons: string;
    bedrooms: string;
    area: string;
    link: string
};

const HomeAccommodationCard = ({ title, image, location, price, persons, bedrooms, area, link }: AccommodationCard) => {
    return (
        <div className='rounded-[12px] border border-[#E3E3E3] p-[6px] cursor-pointer'>
            <Link href={link}>

                <div className="relative z-0 w-full md:h-[360px] sm:h-[300px] h-[200px]">
                    <Image
                        src={image}
                        alt="Accommodation Card Image"
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
                    <div className='flex items-center gap-1 sm:mt-2 mt-1.5 font-regular'>
                        <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                            <FaRegUser className='sm:text-[15px] text-[13px]' />

                            {persons} person
                        </div>

                        <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                            <LuBed className='sm:text-[15px] text-[13px]' />

                            {bedrooms} Bed
                        </div>

                        <div className='rounded-[4px] text-[#121212] flex gap-1.5 items-center border border-[#E3E3E3] p-1'>
                            <CiRuler className='text-[20px] rotate-[-45deg]' />
                            {area} m²
                        </div>
                    </div>

                    <div className='mt-2.5 mb-1 h-[1px] w-full bg-[#e3e3e3]'></div>

                    <div className='font-regular text-[#121212] font-[600]'>Start From</div>
                    <div className='font-large text-[#184E44] font-[600] sm:mt-2 mt-1.5'>€{parseFloat(price)
                        .toFixed(0) // remove decimal
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / week</div>
                </div>
            </Link>

        </div>
    )
}

export default HomeAccommodationCard