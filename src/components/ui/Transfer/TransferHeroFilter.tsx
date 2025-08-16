"use client"

import Link from 'next/link'
import { useState } from 'react'
import {  IoSearch } from 'react-icons/io5'
import { IoIosAdd, IoIosArrowDown, IoIosJet } from 'react-icons/io'
import { FiMinus } from 'react-icons/fi'
import Dropdown from '../DropdownAnimation'
import {  FaHelicopter } from 'react-icons/fa'

type DropdownType = 'departure' | 'guests' | 'destination' | null

const TransferHeroFilter = ({ page }: { page: string }) => {
  const [toggle, setToggle] = useState(false)
  const [guest, setGuest] = useState(1)
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null)
  const [departure, setDeparture] = useState('Grena')
  const [destination, setDestination] = useState('Courchevel')

  const handleDropdownToggle = (dropdown: DropdownType) => {
    setOpenDropdown(prev => (prev === dropdown ? null : dropdown))
  }

  return (
    <div
      className="absolute z-10 left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[30%] sm:translate-y-1/2 w-full max-w-[665px] px-4 sm:px-0"
      style={{ boxShadow: "0px 11.65px 39.88px 0px #00000012" }}
    >
      <div className="bg-white rounded-[16px] w-full">
        <div className="bg-[#EFEFEF] rounded-t-[16px] sm:px-3 sm:py-2 p-1 flex items-center">
          <Link href="/helicopters" className='w-full'>
            <button
              className={`sm:px-3 px-2 py-2 text-[16px] font-regular w-full font-[600] flex items-center sm:gap-2 gap-1 justify-center rounded-[12px] ${page === "helicopters" ? "bg-white text-[#121212]" : "text-[#666D80]"} mr-2 cursor-pointer`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none" className={page === "helicopters" ? "text-[#121212]" : "text-[#666D80]"}>
                <path d="M7.49992 9.33335V4.33335C6.11103 4.33335 4.93047 4.81946 3.95825 5.79169C2.98603 6.76391 2.49992 7.94446 2.49992 9.33335H7.49992ZM10.8333 16.8334H2.49992V15.1667H10.8333V16.8334ZM12.4999 14.3334H2.49992C2.04159 14.3334 1.64922 14.1702 1.32284 13.8438C0.996446 13.5174 0.833252 13.125 0.833252 12.6667V9.33335C0.833252 7.47224 1.47909 5.89585 2.77075 4.60419C4.06242 3.31252 5.63881 2.66669 7.49992 2.66669H12.4999V6.83335H16.6666L17.4999 5.16669H19.1666V11L12.4999 11.6667V14.3334ZM15.8333 1.83335H2.49992V0.166687H15.8333V1.83335Z" fill="currentColor" />
              </svg>
              Helicopters
            </button>
          </Link>
          <Link href="/cars" className='w-full'>
            <button
              className={`sm:px-3 px-2 py-2 text-[16px] font-regular w-full font-[600] flex items-center sm:gap-2 gap-1 justify-center rounded-[12px] ${page === "cars" ? "bg-white text-[#121212]" : "text-[#666D80]"} mr-2 cursor-pointer`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className={page === "cars" ? "text-[#121212]" : "text-[#666D80]"}>
                <mask id="mask0_404_9104" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                  <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_404_9104)">
                  <path d="M5 16.3333V17.1666C5 17.4027 4.92014 17.6007 4.76042 17.7604C4.60069 17.9201 4.40278 18 4.16667 18H3.33333C3.09722 18 2.89931 17.9201 2.73958 17.7604C2.57986 17.6007 2.5 17.4027 2.5 17.1666V10.5L4.25 5.49996C4.33333 5.24996 4.48264 5.04857 4.69792 4.89579C4.91319 4.74301 5.15278 4.66663 5.41667 4.66663H14.5833C14.8472 4.66663 15.0868 4.74301 15.3021 4.89579C15.5174 5.04857 15.6667 5.24996 15.75 5.49996L17.5 10.5V17.1666C17.5 17.4027 17.4201 17.6007 17.2604 17.7604C17.1007 17.9201 16.9028 18 16.6667 18H15.8333C15.5972 18 15.3993 17.9201 15.2396 17.7604C15.0799 17.6007 15 17.4027 15 17.1666V16.3333H5ZM4.83333 8.83329H15.1667L14.2917 6.33329H5.70833L4.83333 8.83329ZM6.25 13.8333C6.59722 13.8333 6.89236 13.7118 7.13542 13.4687C7.37847 13.2257 7.5 12.9305 7.5 12.5833C7.5 12.2361 7.37847 11.9409 7.13542 11.6979C6.89236 11.4548 6.59722 11.3333 6.25 11.3333C5.90278 11.3333 5.60764 11.4548 5.36458 11.6979C5.12153 11.9409 5 12.2361 5 12.5833C5 12.9305 5.12153 13.2257 5.36458 13.4687C5.60764 13.7118 5.90278 13.8333 6.25 13.8333ZM13.75 13.8333C14.0972 13.8333 14.3924 13.7118 14.6354 13.4687C14.8785 13.2257 15 12.9305 15 12.5833C15 12.2361 14.8785 11.9409 14.6354 11.6979C14.3924 11.4548 14.0972 11.3333 13.75 11.3333C13.4028 11.3333 13.1076 11.4548 12.8646 11.6979C12.6215 11.9409 12.5 12.2361 12.5 12.5833C12.5 12.9305 12.6215 13.2257 12.8646 13.4687C13.1076 13.7118 13.4028 13.8333 13.75 13.8333Z" fill="currentColor" />
                </g>
              </svg>
              Cars
            </button>
          </Link>
          <Link href="/jets" className='w-full'>
            <button
              className={`sm:px-3 px-2 py-2 text-[16px] font-regular w-full font-[600] flex items-center sm:gap-2 gap-1 justify-center rounded-[12px] ${page === "jets" ? "bg-white text-[#121212]" : "text-[#666D80]"} mr-2 cursor-pointer`}

            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className={page === "jets" ? "text-[#121212]" : "text-[#666D80]"}>
                <mask id="mask0_404_9097" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                  <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_404_9097)">
                  <path d="M8.27083 18.1041L6.20833 14.2708L2.375 12.2083L3.85417 10.75L6.875 11.2708L9 9.14581L2.39583 6.33331L4.14583 4.54165L12.1667 5.95831L14.75 3.37498C15.0694 3.05554 15.4653 2.89581 15.9375 2.89581C16.4097 2.89581 16.8056 3.05554 17.125 3.37498C17.4444 3.69442 17.6042 4.08679 17.6042 4.55206C17.6042 5.01734 17.4444 5.4097 17.125 5.72915L14.5208 8.33331L15.9375 16.3333L14.1667 18.1041L11.3333 11.5L9.20833 13.625L9.75 16.625L8.27083 18.1041Z" fill="currentColor" />
                </g>
              </svg>
              Jets
            </button>
          </Link>
        </div>
      </div>
      {/* lg:items-center lg:flex-row flex-col */}
      <div className='bg-white rounded-b-[12px] p-[12px] flex sm:flex-row flex-col gap-[24px]'>
        <div className='w-full grid sm:grid-cols-3 grid-cols-1 sm:gap-[12px] gap-[8px]'>



          {/* Location */}
          <div className="relative">
            <div className='cursor-pointer w-full sm:pr-2.5 sm:border-r border-[#e3e3e3]' onMouseDown={(e) => {
    e.stopPropagation();
    handleDropdownToggle("departure");
  }}>
              <div className='mb-2 font-regular font-[600] text-[#121212]'>Departure</div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-[14px]'>{departure}</span>
                </div>
                <IoIosArrowDown className='text-[20px] text-[#121212]' />
              </div>
            </div>
            <Dropdown top='top-[calc(100%+6px)]' onClose={()=>setOpenDropdown(null)}  isOpen={openDropdown === 'departure'} border={true}>
              <div className='w-full'>
                {["Grena", "Lyon", "Chambery",].map((item) => (
                  <div
                    key={item}
                    className='hover:bg-[#F6F8FA] px-3 py-2 text-[#121212] cursor-pointer'
                    onClick={() => {
                      setDeparture(item)
                      setOpenDropdown(null)
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Dropdown>
          </div>

          {/* Price */}
          <div className="relative">
            <div className='cursor-pointer w-full sm:pr-2.5 py-2 sm:py-0 sm:border-r border-[#e3e3e3]' onMouseDown={(e) => {
    e.stopPropagation();
    handleDropdownToggle("destination");
  }}>
              <div className='mb-2 font-regular font-[600] text-[#121212]'>Destination</div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-[14px]'>{destination}</span>
                </div>
                <IoIosArrowDown className='text-[20px] text-[#121212]' />
              </div>
            </div>
            <Dropdown top='top-[calc(100%+6px)]' onClose={()=>setOpenDropdown(null)}  isOpen={openDropdown === 'destination'} border={true}>
              <div className='w-full'>
                {['Courchevel'].map((item) => (
                  <div
                    key={item}
                    className='hover:bg-[#F6F8FA] px-3 py-2 text-[#121212] cursor-pointer'
                    onClick={() => {
                      setDestination(item)
                      setOpenDropdown(null)
                    }}
                  >
                    {item}
                  </div>
                ))}

              </div>
            </Dropdown>
          </div>


          {/* Guests */}
          <div className="relative">
            <div className='cursor-pointer w-full ' onClick={() => handleDropdownToggle('guests')}>
              <div className='mb-2 font-regular font-[600] text-[#121212]'>Passengers</div>
              <div className=' flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-[14px]'>{guest} passengers</span>
                </div>

                <div className='flex items-center gap-2.5'>
                  <FiMinus className='rounded-[4px] border border-[#e3e3e3] text-[16px] cursor-pointer' onClick={() => { guest > 0 ? setGuest(guest - 1) : setGuest(0) }} />
                  <span>{guest}</span>
                  <IoIosAdd className='rounded-[4px] border border-[#e3e3e3] text-[18px] cursor-pointer' onClick={() => { setGuest(guest + 1) }} />

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Search Button */}
        <div>
          <Link scroll={false} href={`/${page}?departure=${departure.toLowerCase()}&destination=${destination.toLowerCase()}&passengers=${guest}`} className='flex items-center justify-center gap-2 font-medium font-[600] text-white bg-[#0074ec] md:p-[20px] py-3 rounded-[12px] whitespace-nowrap'>
            <IoSearch className='md:text-[20px] text-[18px]' />
            <span className='text-white text-[16px] font-[600] sm:hidden'>Search Now</span>
          </Link>
        </div>
      </div>
    </div>
  )
}



export default TransferHeroFilter

// export default TransferHeroFilter