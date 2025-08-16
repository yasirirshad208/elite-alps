"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import Dropdown from '../DropdownAnimation'

type DropdownType = string | null

export type Value = {
    name: string,
    value: string[]
}

const ExperienceHeroFilter = ({ page, values }: { page: string, values: Value[] }) => {

    const [openDropdown, setOpenDropdown] = useState<DropdownType>(null)
    const [dropdownVals, setDropdownVals] = useState<Record<string, string>>({})

    const handleDropdownToggle = (dropdown: DropdownType) => {
        setOpenDropdown(prev => (prev === dropdown ? null : dropdown))
    }

    const query = Object.entries(dropdownVals)
        .map(([key, val]) => `${key.toLowerCase()}=${encodeURIComponent(val.toLowerCase())}`)
        .join('&');

    useEffect(() => {
        const initialDropdowns: Record<string, string> = {}

        values.forEach((item) => {
            const key = item.name.toLowerCase()
            initialDropdowns[key] = item.value[0] || ''
        })

        setDropdownVals(initialDropdowns)
    }, [values])

    return (
        <div
            className="absolute z-10 rounded-b-[16px] left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[30%] sm:translate-y-1/2 w-full max-w-[553px] px-4 sm:px-0"
            style={{ boxShadow: "0px 11.65px 39.88px 0px #00000012" }}
        >
            <div className="bg-white rounded-[16px] w-full">
                <div className="bg-[#EFEFEF] rounded-t-[16px] sm:px-3 sm:py-2 p-1 flex items-center">
                    <Link href="/restaurants" className='w-full'>
                        <button
                            className={`sm:px-3 px-2 py-2 text-[16px] font-regular w-full font-[600] flex items-center sm:gap-2 gap-1 justify-center rounded-[12px] ${page === "restaurants" ? "bg-white text-[#121212]" : "text-[#666D80]"} mr-2 cursor-pointer`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className={page === "restaurants" ? "text-[#121212]" : "text-[#666D80]"}>
                                <mask id="mask0_404_9138" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_404_9138)">
                                    <path d="M3.64591 18L2.47925 16.8333L11.0209 8.29167C10.7709 7.70833 10.7362 7.04861 10.9167 6.3125C11.0973 5.57639 11.4931 4.91667 12.1042 4.33333C12.8404 3.59722 13.6598 3.16667 14.5626 3.04167C15.4654 2.91667 16.2015 3.13889 16.7709 3.70833C17.3404 4.27778 17.5626 5.01389 17.4376 5.91667C17.3126 6.81944 16.882 7.63889 16.1459 8.375C15.5626 8.98611 14.9029 9.38194 14.1667 9.5625C13.4306 9.74306 12.7709 9.70833 12.1876 9.45833L11.1459 10.5L17.4792 16.8333L16.3126 18L9.97925 11.7083L3.64591 18ZM6.10425 10.875L3.60425 8.375C2.85425 7.625 2.47925 6.72917 2.47925 5.6875C2.47925 4.64583 2.85425 3.75 3.60425 3L8.77091 8.20833L6.10425 10.875Z" fill="#1C1B1F" />
                                </g>
                            </svg> Restaurants
                        </button>
                    </Link>
                    <Link href="/activities" className='w-full'>
                        <button
                            className={`sm:px-3 px-2 py-2 text-[16px] font-regular w-full font-[600] flex items-center sm:gap-2 gap-1 justify-center rounded-[12px] ${page === "activities" ? "bg-white text-[#121212]" : "text-[#666D80]"} mr-2 cursor-pointer`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className={page === "activities" ? "text-[#121212]" : "text-[#666D80]"}>
                                <mask id="mask0_404_9145" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_404_9145)">
                                    <path d="M1.66675 9.66663L5.83341 2.16663L10.0001 9.66663H1.66675ZM5.83341 18C4.91675 18 4.13203 17.6736 3.47925 17.0208C2.82647 16.368 2.50008 15.5833 2.50008 14.6666C2.50008 13.75 2.82647 12.9652 3.47925 12.3125C4.13203 11.6597 4.91675 11.3333 5.83341 11.3333C6.75008 11.3333 7.5348 11.6597 8.18758 12.3125C8.84036 12.9652 9.16675 13.75 9.16675 14.6666C9.16675 15.5833 8.84036 16.368 8.18758 17.0208C7.5348 17.6736 6.75008 18 5.83341 18ZM10.8334 18V11.3333H17.5001V18H10.8334ZM14.1667 9.66663C13.3751 8.99996 12.7119 8.43746 12.1772 7.97913C11.6424 7.52079 11.2154 7.11801 10.8959 6.77079C10.5765 6.42357 10.3473 6.09718 10.2084 5.79163C10.0695 5.48607 10.0001 5.15968 10.0001 4.81246C10.0001 4.18746 10.2188 3.65968 10.6563 3.22913C11.0938 2.79857 11.639 2.58329 12.2917 2.58329C12.6667 2.58329 13.0174 2.6701 13.3438 2.84371C13.6702 3.01732 13.9445 3.2569 14.1667 3.56246C14.389 3.2569 14.6633 3.01732 14.9897 2.84371C15.3161 2.6701 15.6667 2.58329 16.0417 2.58329C16.6945 2.58329 17.2397 2.79857 17.6772 3.22913C18.1147 3.65968 18.3334 4.18746 18.3334 4.81246C18.3334 5.15968 18.264 5.48607 18.1251 5.79163C17.9862 6.09718 17.757 6.42357 17.4376 6.77079C17.1181 7.11801 16.6911 7.52079 16.1563 7.97913C15.6216 8.43746 14.9584 8.99996 14.1667 9.66663Z" fill="currentColor" />
                                </g>
                            </svg>
                            Activities
                        </button>
                    </Link>
                    <Link href="/events" className='w-full'>
                        <button
                            className={`sm:px-3 px-2 py-2 text-[16px] font-regular w-full font-[600] flex items-center sm:gap-2 gap-1 justify-center rounded-[12px] ${page === "events" ? "bg-white text-[#121212]" : "text-[#666D80]"} mr-2 cursor-pointer`}

                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className={page === "events" ? "text-[#121212]" : "text-[#666D80]"}>
                                <mask id="mask0_404_9152" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_404_9152)">
                                    <path d="M10.0001 14.6667C10.2362 14.6667 10.4341 14.5868 10.5938 14.4271C10.7536 14.2674 10.8334 14.0695 10.8334 13.8334C10.8334 13.5973 10.7536 13.3993 10.5938 13.2396C10.4341 13.0799 10.2362 13 10.0001 13C9.76397 13 9.56605 13.0799 9.40633 13.2396C9.24661 13.3993 9.16675 13.5973 9.16675 13.8334C9.16675 14.0695 9.24661 14.2674 9.40633 14.4271C9.56605 14.5868 9.76397 14.6667 10.0001 14.6667ZM10.0001 11.3334C10.2362 11.3334 10.4341 11.2535 10.5938 11.0938C10.7536 10.9341 10.8334 10.7362 10.8334 10.5C10.8334 10.2639 10.7536 10.066 10.5938 9.90629C10.4341 9.74657 10.2362 9.66671 10.0001 9.66671C9.76397 9.66671 9.56605 9.74657 9.40633 9.90629C9.24661 10.066 9.16675 10.2639 9.16675 10.5C9.16675 10.7362 9.24661 10.9341 9.40633 11.0938C9.56605 11.2535 9.76397 11.3334 10.0001 11.3334ZM10.0001 8.00004C10.2362 8.00004 10.4341 7.92018 10.5938 7.76046C10.7536 7.60074 10.8334 7.40282 10.8334 7.16671C10.8334 6.9306 10.7536 6.73268 10.5938 6.57296C10.4341 6.41324 10.2362 6.33337 10.0001 6.33337C9.76397 6.33337 9.56605 6.41324 9.40633 6.57296C9.24661 6.73268 9.16675 6.9306 9.16675 7.16671C9.16675 7.40282 9.24661 7.60074 9.40633 7.76046C9.56605 7.92018 9.76397 8.00004 10.0001 8.00004ZM16.6667 17.1667H3.33341C2.87508 17.1667 2.48272 17.0035 2.15633 16.6771C1.82994 16.3507 1.66675 15.9584 1.66675 15.5V12.1667C2.12508 12.1667 2.51744 12.0035 2.84383 11.6771C3.17022 11.3507 3.33341 10.9584 3.33341 10.5C3.33341 10.0417 3.17022 9.64935 2.84383 9.32296C2.51744 8.99657 2.12508 8.83337 1.66675 8.83337V5.50004C1.66675 5.04171 1.82994 4.64935 2.15633 4.32296C2.48272 3.99657 2.87508 3.83337 3.33341 3.83337H16.6667C17.1251 3.83337 17.5174 3.99657 17.8438 4.32296C18.1702 4.64935 18.3334 5.04171 18.3334 5.50004V8.83337C17.8751 8.83337 17.4827 8.99657 17.1563 9.32296C16.8299 9.64935 16.6667 10.0417 16.6667 10.5C16.6667 10.9584 16.8299 11.3507 17.1563 11.6771C17.4827 12.0035 17.8751 12.1667 18.3334 12.1667V15.5C18.3334 15.9584 18.1702 16.3507 17.8438 16.6771C17.5174 17.0035 17.1251 17.1667 16.6667 17.1667Z" fill="currentColor" />
                                </g>
                            </svg>
                            Events
                        </button>
                    </Link>
                </div>
            </div>
            {/* lg:items-center lg:flex-row flex-col */}
            <div className='bg-white rounded-b-[12px] p-[12px] flex sm:flex-row flex-col gap-[24px]'>
                <div className='w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-[12px] gap-[8px]'>


                    {values.map((item: Value, index: number) => {
                        const dropdownKey = item.name.toLowerCase();

                        return (
                            <div key={dropdownKey} className="relative">
                                <div
                                    className={`cursor-pointer w-full ${index === 0 ? "sm:border-r  border-[#e3e3e3] sm:pr-2.5 mb-1 sm:mb-0" : ""} `}
                                    onMouseDown={(e) => {
    e.stopPropagation();
    handleDropdownToggle(dropdownKey);
  }}
                                >
                                    <div className="mb-2 font-regular font-[600] text-[#121212]">{item.name}</div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[14px]">
                                                {dropdownVals[dropdownKey]}
                                            </span>
                                        </div>
                                        <IoIosArrowDown className="text-[20px] text-[#121212]" />
                                    </div>
                                </div>
                                <Dropdown top='top-[calc(100%+6px)]' onClose={()=>setOpenDropdown(null)}  isOpen={openDropdown === dropdownKey} border={true}>
                                    <div className="w-full">
                                        {item.value.map((option) => (
                                            <div
                                                key={option}
                                                className="hover:bg-[#F6F8FA] px-3 py-2 text-[#121212] cursor-pointer"
                                                onClick={() => {
                                                    setDropdownVals((prev) => ({ ...prev, [dropdownKey]: option }));
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                </Dropdown>
                            </div>
                        );
                    })}

                </div>

                {/* Search Button */}
                <div>
                    <Link scroll={false} href={`/${page}?${query}`} className='flex items-center justify-center gap-2 font-medium font-[600] text-white bg-[#0074ec] md:p-[20px] py-3 rounded-[12px] whitespace-nowrap'>
                        <IoSearch className='md:text-[20px] text-[18px]' />
                        <span className='text-white text-[16px] font-[600] sm:hidden'>Search Now</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}



export default ExperienceHeroFilter