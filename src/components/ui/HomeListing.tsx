"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import HomeAccommodationCard from './HomeAccommodationCard';
import { usePropertyStore } from '@/stores/PropertyStore';

const HomeListing = () => {
    const [selected, setSelected] = useState("chalets");
    const {
        sliderApartments,
        sliderChalets,
        fetchSliderApartments,
        fetchSliderChalets
    } = usePropertyStore();

    useEffect(() => {
        if (sliderChalets.length === 0) {
            fetchSliderApartments();
            fetchSliderChalets()
        }
    }, [fetchSliderChalets, fetchSliderApartments, sliderApartments.length, sliderChalets.length]);
    return (
        <div className='container'>
            <div>
                <div className="text-[#666D80] font-medium text-center">//Our Listings</div>
                <div className="heading-h1 text-[#121212] leading-[120%] my-2 text-center">Alpine Escapes That Captivate the Soul</div>
                <div className="text-[#666D80] font-medium text-center">
                    Our hand-selected portfolio of the most extraordinary <br className="hidden md:block" /> mountain residences.
                </div>
            </div>

            <div className='flex justify-center md:mt-12 mt-8'>
                <div className={`bg-[#efefef] p-1 rounded-[12px] flex items-center gap-2`}>
                    <button className={`flex items-center gap-2 text-[#666D80] bg-[#efefef] px-4 py-2 ${selected === "chalets" ? "text-black bg-[#ffffff]" : "text-[#666D80] bg-[#efefef]"} rounded-[6px] cursor-pointer font-regular font-[600]`} onClick={() => setSelected("chalets")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            className={`${selected === "chalets" ? "text-black" : "text-[#666D80]"}`}
                        >
                            <mask
                                id="mask0_404_9042"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="25"
                            >
                                <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_404_9042)">
                                <path
                                    d="M17.5 11.5V10.3L16.75 11.05L16.05 10.35L17.5 8.9V8H16.6L15.15 9.45L14.45 8.75L15.2 8H14V7H15.2L14.45 6.25L15.15 5.525L16.6 6.975H17.5V6.1L16.05 4.65L16.75 3.95L17.5 4.7V3.5H18.5V4.7L19.25 3.95L19.95 4.65L18.5 6.1V7H19.4L20.85 5.55L21.55 6.25L20.8 7H22V8H20.8L21.55 8.75L20.85 9.45L19.4 8H18.5V8.9L19.95 10.35L19.25 11.05L18.5 10.3V11.5H17.5ZM5 20.5V15.8L3.9 16.9L2.5 15.5L10 8L17.5 15.5L16.1 16.925L15 15.825V20.5H11V15.5H9V20.5H5Z"
                                    fill="currentColor"
                                    className="transition-all duration-200"
                                />
                            </g>
                        </svg>
                        Chalets
                    </button>

                    <button className={`flex items-center gap-1 text-[#666D80] bg-[#efefef] px-4 py-2 ${selected === "apartments" ? "text-black bg-[#ffffff]" : "text-[#666D80] bg-[#efefef]"} rounded-[6px] cursor-pointer font-regular font-[600]`} onClick={() => setSelected("apartments")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            className={`${selected === "apartments" ? "text-black" : "text-[#666D80]"}`}
                        >
                            <mask
                                id="mask0_404_9049"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="20"
                                height="21"
                            >
                                <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_404_9049)">
                                <path
                                    d="M2.5 18V6.33333H5.83333V3H14.1667V9.66667H17.5V18H10.8333V14.6667H9.16667V18H2.5ZM4.16667 16.3333H5.83333V14.6667H4.16667V16.3333ZM4.16667 13H5.83333V11.3333H4.16667V13ZM4.16667 9.66667H5.83333V8H4.16667V9.66667ZM7.5 13H9.16667V11.3333H7.5V13ZM7.5 9.66667H9.16667V8H7.5V9.66667ZM7.5 6.33333H9.16667V4.66667H7.5V6.33333ZM10.8333 13H12.5V11.3333H10.8333V13ZM10.8333 9.66667H12.5V8H10.8333V9.66667ZM10.8333 6.33333H12.5V4.66667H10.8333V6.33333ZM14.1667 16.3333H15.8333V14.6667H14.1667V16.3333ZM14.1667 13H15.8333V11.3333H14.1667V13Z"
                                    fill="currentColor"
                                />
                            </g>
                        </svg>
                        Apartmrnts
                    </button>

                    <button className={`flex items-center gap-1 text-[#666D80] bg-[#efefef] px-4 py-2 ${selected === "hotels" ? "text-black bg-[#ffffff]" : "text-[#666D80] bg-[#efefef]"} rounded-[6px] cursor-pointer font-regular font-[600]`} onClick={() => setSelected("hotels")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className={`${selected === "hotels" ? "text-black" : "text-[#666D80]"}`}>
                            <mask id="mask0_404_9056" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_404_9056)">
                                <path d="M14.1666 8H15.8333V6.33333H14.1666V8ZM14.1666 11.3333H15.8333V9.66667H14.1666V11.3333ZM14.1666 14.6667H15.8333V13H14.1666V14.6667ZM0.833252 18V9.66667L6.66659 5.5L12.4999 9.66667V18H8.33325V13H4.99992V18H0.833252ZM14.1666 18V8.83333L8.33325 4.625V3H19.1666V18H14.1666Z" fill="currentColor" />
                            </g>
                        </svg>
                        Hotels
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-12 mt-8">
                {
                    selected === "apartments" || selected === "hotels" ? (
                        sliderApartments.slice(2, 5).map((item, index) => (
                            <HomeAccommodationCard

                                 key={index}
              title={item.name}
              area={item.surface}
              persons={item.adults}
              location={item.station}
              bedrooms={item.rooms}
              price={item.winterPrice}
              image={item.mainImage}
              link={`/chalets/${item.propertyId}`}
                            />
                        ))
                    ) : (
                        sliderChalets.slice(2, 5).map((item, index) => (
                            <HomeAccommodationCard
                                 key={index}
              title={item.name}
              area={item.surface}
              persons={item.adults}
              location={item.station}
              bedrooms={item.rooms}
              price={item.winterPrice}
              image={item.mainImage}
              link={`/chalets/${item.propertyId}`}
                            />
                        ))
                    )
                }
            </div>


            <div className='flex justify-center md:mt-12 mt-8 w-full'>
  <Link href={`/${selected}`} className='sm:w-auto w-full '>
    <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white rounded-[9999px] px-[24px] py-[12px] font-medium font-[600] border border-[#E3E3E3] cursor-pointer mt-4">
      View All Properties <GoArrowUpRight />
    </button>
  </Link>
</div>




        </div>
    )
}

export default HomeListing