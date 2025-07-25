"use client"

import Link from 'next/link'
import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdApartment } from 'react-icons/md'
import { IoIosAdd, IoIosArrowDown } from 'react-icons/io'
import { FiMinus } from 'react-icons/fi'
import Dropdown from '../DropdownAnimation'
import { FaHouseDamage } from 'react-icons/fa'
import { RiHotelLine } from 'react-icons/ri'

type DropdownType = 'accommodation' | 'location' | 'guests' | 'price' | null

const AccommodationHeroFilter = ({ page }: { page: string }) => {
  const [toggle, setToggle] = useState(false)
  const [guest, setGuest] = useState(1)
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null)
  const [location, setLocation] = useState('Courchevel')
  const [price, setPrice] = useState('10000')

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
          <Link href="/chalets" className='w-full'>
            <button
              className={`sm:px-3 px-2 py-2 text-[16px] font-regular w-full font-[600] flex items-center sm:gap-2 gap-1 justify-center rounded-[12px] ${page === "chalets" ? "bg-white text-[#121212]" : "text-[#666D80]"} mr-2 cursor-pointer`}
            >
              {/* <FaHouseDamage className={`text-[20px] ${page === "chalets" ? "text-[#121212]" : "text-[#666D80]"} `} /> Chalets */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className={`${page === "chalets" ? "text-[#121212]" : "text-[#666D80]"}`}
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
          </Link>
          <Link href="/apartments" className='w-full'>
            <button
              className={`sm:px-3 px-2 py-2 text-[16px] font-regular w-full font-[600] flex items-center sm:gap-2 gap-1 justify-center rounded-[12px] ${page === "apartments" ? "bg-white text-[#121212]" : "text-[#666D80]"} mr-2 cursor-pointer`}
            >
              {/* <MdApartment className={`text-[20px] ${page === "apartments" ? "text-[#121212]" : "text-[#666D80]"}`} /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                className={`${page === "apartments" ? "text-[#121212]" : "text-[#666D80]"}`}
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
              Apartments
            </button>
          </Link>
          <Link href="/hotels" className='w-full'>
            <button
              className={`sm:px-3 px-2 py-2 text-[16px] font-regular w-full font-[600] flex items-center sm:gap-2 gap-1 justify-center rounded-[12px] ${page === "hotels" ? "bg-white text-[#121212]" : "text-[#666D80]"} mr-2 cursor-pointer`}

            >
              {/* <RiHotelLine className={`text-[20px] ${page === "hotels" ? "text-[#121212]" : "text-[#666D80]"}`} /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className={`${page === "hotels" ? "text-[#121212]" : "text-[#666D80]"}`}>
                <mask id="mask0_404_9056" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                  <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_404_9056)">
                  <path d="M14.1666 8H15.8333V6.33333H14.1666V8ZM14.1666 11.3333H15.8333V9.66667H14.1666V11.3333ZM14.1666 14.6667H15.8333V13H14.1666V14.6667ZM0.833252 18V9.66667L6.66659 5.5L12.4999 9.66667V18H8.33325V13H4.99992V18H0.833252ZM14.1666 18V8.83333L8.33325 4.625V3H19.1666V18H14.1666Z" fill="currentColor" />
                </g>
              </svg>
              Hotels
            </button>
          </Link>
        </div>
      </div>
      {/* lg:items-center lg:flex-row flex-col */}
      <div className='bg-white rounded-b-[12px] p-[12px] flex sm:flex-row flex-col gap-[24px]'>
        <div className='w-full grid sm:grid-cols-3 grid-cols-1 sm:gap-[12px] gap-[8px]'>



          {/* Location */}
          <div className="relative">
            <div className='cursor-pointer w-full sm:pr-2.5 sm:border-r border-[#e3e3e3]' onClick={() => handleDropdownToggle('location')}>
              <div className='mb-2 font-regular font-[600] text-[#121212]'>Location</div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-[14px]'>{location}</span>
                </div>
                <IoIosArrowDown className='text-[20px] text-[#121212]' />
              </div>
            </div>
            <Dropdown top='top-[calc(100%+6px)]' isOpen={openDropdown === 'location'} border={true}>
              <div className='w-full'>
                {['Courchevel', 'Merible', 'Val Thorens'].map((item) => (
                  <div
                    key={item}
                    className='hover:bg-[#F6F8FA] px-3 py-2 text-[#121212] cursor-pointer'
                    onClick={() => {
                      setLocation(item)
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
            <div className='cursor-pointer w-full sm:pr-2.5 py-2 sm:py-0 sm:border-r border-[#e3e3e3]' onClick={() => handleDropdownToggle('price')}>
              <div className='mb-2 font-regular font-[600] text-[#121212]'>Price</div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-[14px]'>£{price}/week</span>
                </div>
                <IoIosArrowDown className='text-[20px] text-[#121212]' />
              </div>
            </div>
            <Dropdown top='top-[calc(100%+6px)]' isOpen={openDropdown === 'price'} border={true}>
              <div className='w-full'>
                {['5000', '10000', '15000'].map((item) => (
                  <div
                    key={item}
                    className='hover:bg-[#F6F8FA] px-3 py-2 text-[#121212] cursor-pointer'
                    onClick={() => {
                      setPrice(item)
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
              <div className='mb-2 font-regular font-[600] text-[#121212]'>Guests</div>
              <div className=' flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-[14px]'>{guest} Guests</span>
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
          <Link scroll={false} href={`/${page}?location=${location.toLowerCase()}&price=${price}&guest=${guest}`} className='flex items-center justify-center gap-2 font-medium font-[600] text-white bg-[#0074ec] md:p-[20px] py-3 rounded-[12px] whitespace-nowrap'>
            <IoSearch className='md:text-[20px] text-[18px]' />
            <span className='text-white text-[16px] font-[600] sm:hidden'>Search Now</span>
          </Link>
        </div>
      </div>
    </div>
  )
}



export default AccommodationHeroFilter