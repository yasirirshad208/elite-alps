"use client"

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdApartment } from 'react-icons/md'
import { IoIosAdd, IoIosArrowDown, IoIosClose } from 'react-icons/io'
import { FiMinus } from 'react-icons/fi'
import Dropdown from '../DropdownAnimation'
import { FaHouseDamage } from 'react-icons/fa'
import { RiHotelLine } from 'react-icons/ri'
import DatePicker from 'react-datepicker'
import { addDays, isSaturday } from 'date-fns'
import PriceRange from '../PriceRange'

type DropdownType = 'accommodation' | 'location' | 'guests' | 'price' | 'checkIn' | 'checkOut' | null;


const AccommodationHeroFilter = ({ page, locationVal="", guestsVal=0, minPriceVal=0, maxPriceVal=300000, checkInVal=null, checkOutVal=null }: { page: string, locationVal?: string, guestsVal?: number, minPriceVal?: number, maxPriceVal?: number, checkInVal?: Date | null, checkOutVal?: Date | null }) => {
  const [toggle, setToggle] = useState(false)
  const [guest, setGuest] = useState(guestsVal)
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null)
  const [location, setLocation] = useState(locationVal)
  const [price, setPrice] = useState('')

  const [checkIn, setCheckIn] = useState<Date | null>(checkInVal)
  const [checkOut, setCheckOut] = useState<Date | null>(checkOutVal)
  const [isMobile, setIsMobile] = useState(false);

  const handleDropdownToggle = (dropdown: DropdownType) => {
    setOpenDropdown(prev => (prev === dropdown ? null : dropdown))
  }

  const normalizeDateToUTC = (date: Date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  };

  const filterCheckInDates = (date: Date) => {
    const today = new Date()
    return date >= today && isSaturday(date)
  }

  // Disable Saturdays after check-in date for check-out
  const filterCheckOutDates = (date: Date) => {
    if (!checkIn) return false; // ⛔ don't allow any dates if no check-in selected
    return isSaturday(date) && date > checkIn;
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [minPrice, setMinPrice] = useState(minPriceVal)
  const [maxPrice, setMaxPrice] = useState(maxPriceVal)

  const handleApply = (min: number, max: number) => {
    setPrice(max.toString());
    setMinPrice(min)
    setMaxPrice(max)
    handleDropdownToggle("price");
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null) // ✅ only call if provided
      }
    }

    if (openDropdown === "price") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown === "price"]);

  return (
    <div
      className="absolute z-10 left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[30%] lg:translate-y-1/2 w-full max-w-[872px] px-4 sm:px-0"
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
      <div className='bg-white rounded-b-[12px] p-[12px] flex lg:flex-row flex-col gap-[24px]'>
        <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-[12px]'>

          {/* Check In */}
          <div className="relative">
            <div className='cursor-pointer w-full lg:pr-2.5 lg:border-r border-[#e3e3e3]'>
              <div className="mb-2 font-regular font-[600] text-[#121212]">Check In</div>


              <div className="flex items-center justify-between">
                <div className="w-full" >
                  <DatePicker
                    selected={checkIn}
                    onChange={(date) => {
                      if (date) {
                        const normalized = normalizeDateToUTC(date);
                        setCheckIn(normalized);
                        setCheckOut(null);
                        setOpenDropdown(null); // close after selecting
                      }
                    }}
                    filterDate={filterCheckInDates}
                    placeholderText="Select Dates"
                    className="w-full bg-transparent placeholder:text-[#121212] text-[14px] text-[#121212] focus:outline-none"
                    dateFormat="MMM d yyyy"
                    open={openDropdown === 'checkIn'}
                    onClickOutside={() => setOpenDropdown(null)}
                    onInputClick={() => handleDropdownToggle('checkIn')}
                    calendarClassName="!z-50"
                  />
                </div>
                {checkIn ? (
                  <IoIosClose
                    className="min-w-[20px] text-[20px] text-[#121212] cursor-pointer"
                    onClick={() => setCheckIn(null)}
                  />
                ) : (
                  <IoIosArrowDown
                    className="min-w-[20px] text-[20px] text-[#121212] cursor-pointer"
                    onClick={() => handleDropdownToggle('checkIn')}
                  />
                )}
              </div>

            </div>
          </div>

          {/* Check Out */}
          <div className="relative">
            <div className='cursor-pointer w-full lg:pr-2.5 lg:border-r border-[#e3e3e3]'>
              <div className="mb-2 font-regular font-[600] text-[#121212]">Check Out</div>

              <div className="flex items-center justify-between">
                <div className="w-full" >
                  <DatePicker
                    selected={checkOut}
                    onChange={(date) => {
                      if (date) {
                        const normalized = normalizeDateToUTC(date);
                        setCheckOut(normalized);
                        setOpenDropdown(null);
                      }
                    }}
                    filterDate={filterCheckOutDates}
                    placeholderText="Select Dates"
                    className="w-full bg-transparent placeholder:text-[#121212] text-[14px] text-[#121212] focus:outline-none"
                    dateFormat="MMM d yyyy"
                    disabled={!checkIn}
                    open={openDropdown === 'checkOut'}
                    onClickOutside={() => setOpenDropdown(null)}
                    onInputClick={() => handleDropdownToggle('checkOut')}   // ✅ add this
                    calendarClassName="!z-50"
                  />
                </div>
                {checkOut ? (
                  <IoIosClose
                    className="min-w-[20px] text-[20px] text-[#121212] cursor-pointer"
                    onClick={() => setCheckOut(null)}
                  />
                ) : (
                  <IoIosArrowDown
                    className="min-w-[20px] text-[20px] text-[#121212] cursor-pointer"
                    onClick={() => handleDropdownToggle('checkOut')}
                  />
                )}
              </div>
            </div>
          </div>





          {/* Location */}
          {/* Location */}
<div className="relative">
  <div
    className={`cursor-pointer w-full ${location !== "" ? "pr-2.5 lg:border-r":""} border-[#e3e3e3] `}
    onMouseDown={(e) => {
      e.stopPropagation();
      handleDropdownToggle("location");
    }}
  >
    <div className="mb-2 font-regular font-[600] text-[#121212]">Location</div>

    <div className="flex items-center justify-between">
      {/* Text */}
      <span
        className={`text-[14px] ${
          location !== "" ? "truncate" : "whitespace-nowrap"
        }`}
      >
        {location === "" ? "Choose Destination" : location}
      </span>

      {/* Arrow */}
      <IoIosArrowDown className="text-[20px] text-[#121212] ml-2 flex-shrink-0" />
    </div>
  </div>

  <Dropdown
    top="top-[calc(100%+6px)]"
    onClose={() => setOpenDropdown(null)}
    isOpen={openDropdown === "location"}
    border={true}
  >
    <div className="w-full">
      {[
        "Courchevel 1850",
        "Courchevel Moriond (1650)",
        "Courchevel Village (1550)",
        "Courchevel Le Praz (1300)",
        "Meribel",
        "Val Thorens",
      ].map((item) => (
        <div
          key={item}
          className="hover:bg-[#F6F8FA] px-3 py-2 text-[#121212] cursor-pointer"
          onClick={() => {
            setLocation(item);
            setOpenDropdown(null);
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
            <div className={`cursor-pointer w-full lg:pr-2.5 ${location === "" ? "pl-2.5 lg:border-l":""} py-2 sm:py-0 lg:border-r  border-[#e3e3e3]`} onMouseDown={(e) => {
              e.stopPropagation();
              handleDropdownToggle("price");
            }}>
              <div className='mb-2 font-regular font-[600] text-[#121212]'>Price</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  {/* min-w-0 allows truncate to work properly inside flex */}
                  <span className="text-[14px] block max-w-[150px] truncate">
                    {minPrice === 0 && maxPrice === 300000
                      ? "All Prices"
                      : `£${minPrice.toLocaleString("en-US")} - £${maxPrice.toLocaleString("en-US")}/week`}
                  </span>
                </div>
                <IoIosArrowDown className="text-[20px] text-[#121212] flex-shrink-0" />
              </div>

            </div>

            {!isMobile && openDropdown === "price" ? (
              // Desktop / Tablet View
              <div
                ref={dropdownRef}
                className="
                        fixed
                        top-[calc(100%)]
                        mb-2
                        left-1/2 -translate-x-1/2
                        max-w-[506px]
                        z-[999999]
                      "
              >
                <PriceRange min={minPrice} max={maxPrice} onApplyFilter={handleApply} onClose={() => { setOpenDropdown(null) }} />
              </div>
            ) : (
              // Mobile: Button to open modal
              <>
                {isMobile && openDropdown === "price" && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10001]">
                    <div className="w-[90%] max-w-md px-[12px]" ref={dropdownRef}>
                      <PriceRange min={minPrice} max={maxPrice} onApplyFilter={handleApply} onClose={() => { setOpenDropdown(null) }} />

                    </div>
                  </div>
                )}
              </>
            )}

          </div>


          {/* Guests */}
          <div className="relative col-span-2 lg:col-span-1">
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
          <Link
            scroll={false}
            href={`/${page}?location=${location.toLowerCase()}&minPrice=${minPrice}&maxPrice=${maxPrice}&guest=${guest}&checkin=${checkIn ? checkIn.toISOString().split('T')[0] : ''}&checkout=${checkOut ? checkOut.toISOString().split('T')[0] : ''}`}
            className='flex items-center justify-center gap-2 font-medium font-[600] text-white bg-[#0074ec] lg:p-[20px] py-3 rounded-[12px] whitespace-nowrap'
          >
            <IoSearch className='md:text-[20px] text-[18px]' />
            <span className='text-white text-[16px] font-[600] lg:hidden'>Search Now</span>
          </Link>
        </div>
      </div>
    </div>
  )
}



export default AccommodationHeroFilter