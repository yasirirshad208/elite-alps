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


const AccommodationHeroFilter = ({ page, locationVal = "", guestsVal = 0, minPriceVal = 0, maxPriceVal = 300000, checkInVal = null, checkOutVal = null }: { page: string, locationVal?: string, guestsVal?: number, minPriceVal?: number, maxPriceVal?: number, checkInVal?: Date | null, checkOutVal?: Date | null }) => {
  const [toggle, setToggle] = useState(false)
  const [guest, setGuest] = useState(guestsVal)
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null)
  const [location, setLocation] = useState(locationVal);
  const [locations, setLocations] = useState<string[]>(
    locationVal && locationVal.trim() !== ""
      ? locationVal.split(",").map((loc) => loc.trim())
      : []
  );

  const [price, setPrice] = useState('')

  const [checkIn, setCheckIn] = useState<Date | null>(checkInVal)
  const [checkOut, setCheckOut] = useState<Date | null>(checkOutVal)
  const [isMobile, setIsMobile] = useState(false);


  const handleLocationToggle = (item: string) => {
    setLocations((prev) => {
      let updated;

      if (prev.includes(item)) {
        // Remove if already selected
        updated = prev.filter((loc) => loc !== item);
      } else {
        // Add if not selected
        updated = [...prev, item];
      }

      // Update the single "location" state based on the new array
      setLocation(updated.length > 0 ? updated[0] : "");

      return updated;
    });
  };


  const handleDropdownToggle = (dropdown: DropdownType) => {
    setOpenDropdown(prev => (prev === dropdown ? null : dropdown))
  }

  const normalizeDateToUTC = (date: Date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  };

  // const filterCheckInDates = (date: Date) => {
  //   const today = new Date()
  //   return date >= today && isSaturday(date)
  // }

  // // Disable Saturdays after check-in date for check-out
  // const filterCheckOutDates = (date: Date) => {
  //   if (!checkIn) return false; // ⛔ don't allow any dates if no check-in selected
  //   return isSaturday(date) && date > checkIn;
  // }

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



  const [isSelectingCheckIn, setIsSelectingCheckIn] = useState(true)

  // Keep these filter functions
  const filterCheckInDates = (date: Date) => {
    const today = new Date()
    return date >= today && isSaturday(date)
  }

  const filterCheckOutDates = (date: Date) => {
    if (!checkIn) return false
    return isSaturday(date) && date > checkIn
  }

  // Add this handler
  const handleDateSelect = (date: Date | null) => {
    if (!date) return

    const normalized = normalizeDateToUTC(date)

    if (isSelectingCheckIn) {
      // Selecting Check-In date
      setCheckIn(normalized)

      // If checkout exists and new checkin is AFTER checkout, reset checkout
      if (checkOut && normalized > checkOut) {
        setCheckOut(null)
        setIsSelectingCheckIn(false) // User needs to select new checkout
      } else if (!checkOut) {
        // If no checkout yet, switch to checkout selection mode
        setIsSelectingCheckIn(false)
      } else {
        // If checkout is valid (after new checkin), keep it and close calendar
        setOpenDropdown(null)
        setIsSelectingCheckIn(true)
      }
      // Calendar stays open for checkout selection
      setOpenDropdown('checkIn')
    } else {
      // Second selection → set Check-Out
      setCheckOut(normalized)
      setOpenDropdown(null) // Close calendar
      setIsSelectingCheckIn(true) // Reset for next time
    }
  }

  // Handle when clicking the calendar icon/input to reopen
  const handleCalendarOpen = () => {
    setOpenDropdown('checkIn')
    // Only reset to check-in selection if no dates are selected yet
    if (!checkIn) {
      setIsSelectingCheckIn(true)
    }
  }




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
                <div className="w-full">
                  <DatePicker
                    selected={checkIn}
                    onChange={handleDateSelect}
                    filterDate={isSelectingCheckIn ? filterCheckInDates : filterCheckOutDates}
                    placeholderText={isSelectingCheckIn ? "Select Dates" : "Select Dates"}
                    className="w-full bg-transparent placeholder:text-[#121212] text-[14px] text-[#121212] focus:outline-none"
                    dateFormat="MMM d yyyy"
                    open={openDropdown === 'checkIn'}
                    onClickOutside={() => setOpenDropdown(null)}
                    onInputClick={() => {
                      setOpenDropdown('checkIn')
                      setIsSelectingCheckIn(true)
                    }}
                    calendarClassName={`!z-50 sm:ml-[120px] ml-[80px] ${isMobile ? '' : 'react-datepicker--two-months side-by-side'}`}
                    shouldCloseOnSelect={false}
                    monthsShown={isMobile ? 1 : 2}
                    showPreviousMonths={false}   // ✅ ensures next month shows beside current
                    renderCustomHeader={({
                      date,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled,
                      customHeaderCount
                    }) => {
                      // customHeaderCount = 0 for first month, 1 for second month
                      const headerDate = new Date(date);
                      headerDate.setMonth(date.getMonth() + customHeaderCount);

                      return (
                        <div className="flex items-center justify-between px-1 py-2 bg-white">
                          <button
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                            className="p-1 disabled:opacity-40 cursor-pointer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                              <path
                                d="M16.4286 8.84672H6.15849L8.61514 6.17209C8.71747 6.06449 8.79909 5.93578 8.85524 5.79347C8.91139 5.65116 8.94094 5.4981 8.94218 5.34323C8.94342 5.18835 8.91631 5.03475 8.86244 4.8914C8.80857 4.74805 8.72902 4.61782 8.62842 4.5083C8.52783 4.39878 8.40821 4.31217 8.27654 4.25352C8.14487 4.19487 8.0038 4.16535 7.86154 4.1667C7.71929 4.16805 7.5787 4.20022 7.44799 4.26136C7.31728 4.32249 7.19906 4.41135 7.10023 4.52276L2.81476 9.18849C2.71498 9.29684 2.63582 9.42556 2.58181 9.56727C2.5278 9.70898 2.5 9.8609 2.5 10.0143C2.5 10.1677 2.5278 10.3197 2.58181 10.4614C2.63582 10.6031 2.71498 10.7318 2.81476 10.8402L7.10023 15.5059C7.30229 15.7184 7.57292 15.8359 7.85383 15.8333C8.13474 15.8306 8.40345 15.7079 8.60209 15.4917C8.80073 15.2754 8.91341 14.9829 8.91585 14.677C8.91829 14.3712 8.8103 14.0765 8.61514 13.8566L6.15849 11.1796H16.4286C16.7128 11.1796 16.9853 11.0567 17.1862 10.8379C17.3871 10.6192 17.5 10.3225 17.5 10.0132C17.5 9.7038 17.3871 9.40711 17.1862 9.18836C16.9853 8.96961 16.7128 8.84672 16.4286 8.84672Z"
                                fill="#121212"
                              />
                            </svg>
                          </button>

                          <span className="text-[14px] font-[700] text-black">
                            {headerDate.toLocaleString('default', { month: 'long' })} {headerDate.getFullYear()}
                          </span>

                          <button
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                            className="p-1 disabled:opacity-40 cursor-pointer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                              <path
                                d="M17.4184 10.4451C17.4996 10.2324 17.5208 9.99836 17.4794 9.77258C17.438 9.54679 17.3359 9.33941 17.1859 9.17668L12.8999 4.52192C12.8011 4.41077 12.6829 4.32212 12.5521 4.26113C12.4214 4.20015 12.2808 4.16804 12.1385 4.1667C11.9963 4.16536 11.8552 4.1948 11.7235 4.25331C11.5918 4.31182 11.4722 4.39823 11.3716 4.50749C11.271 4.61676 11.1914 4.74668 11.1375 4.8897C11.0836 5.03271 11.0565 5.18594 11.0578 5.34046C11.059 5.49497 11.0886 5.64767 11.1447 5.78965C11.2009 5.93162 11.2825 6.06003 11.3848 6.16738L13.8429 8.83688H3.5715C3.28732 8.83688 3.01478 8.95948 2.81383 9.17772C2.61289 9.39595 2.5 9.69194 2.5 10.0006C2.5 10.3092 2.61289 10.6052 2.81383 10.8234C3.01478 11.0417 3.28732 11.1643 3.5715 11.1643H13.8429L11.3859 13.8326C11.2836 13.94 11.202 14.0684 11.1458 14.2103C11.0896 14.3523 11.0601 14.505 11.0588 14.6595C11.0576 14.814 11.0847 14.9673 11.1386 15.1103C11.1925 15.2533 11.272 15.3832 11.3726 15.4925C11.4732 15.6017 11.5929 15.6882 11.7246 15.7467C11.8562 15.8052 11.9973 15.8346 12.1396 15.8333C12.2819 15.8319 12.4225 15.7998 12.5532 15.7388C12.6839 15.6779 12.8022 15.5892 12.901 15.4781L17.187 10.8233C17.2863 10.715 17.3649 10.5865 17.4184 10.4451Z"
                                fill="#121212"
                              />
                            </svg>
                          </button>
                        </div>
                      );
                    }}

                  />


                </div>

                {checkIn ? (
                  <IoIosClose
                    className="min-w-[20px] text-[20px] text-[#121212] cursor-pointer"
                    onClick={() => {
                      setCheckIn(null)
                      setCheckOut(null)
                      setIsSelectingCheckIn(true)
                    }}
                  />
                ) : (
                  <IoIosArrowDown
                    className="min-w-[20px] text-[20px] text-[#121212] cursor-pointer"
                    onClick={handleCalendarOpen}
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
                <span className="text-[14px] cursor-text" onClick={handleCalendarOpen}>
                  {checkOut
                    ? checkOut.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })
                    : 'Select Dates'}
                </span>
                {checkOut ? (

                  <IoIosClose
                    className="min-w-[20px] text-[20px] text-[#121212] cursor-pointer"
                    onClick={() => {
                      setCheckOut(null)
                      setCheckIn(null)
                    }}
                  />
                ) : (
                  <IoIosArrowDown
                    className="min-w-[20px] text-[20px] text-[#121212] cursor-pointer"
                    onClick={handleCalendarOpen}
                  />
                )}
              </div>
            </div>
          </div>






          {/* Location */}
          {/* Location */}
          <div className="relative">
            <div
              className={`cursor-pointer w-full ${location !== "" ? "pr-2.5 lg:border-r" : ""} border-[#e3e3e3] `}
              onMouseDown={(e) => {
                e.stopPropagation();
                handleDropdownToggle("location");
              }}
            >
              <div className="mb-2 font-regular font-[600] text-[#121212]">Location</div>

              <div className="flex items-center justify-between">
                {/* Text */}
                <span
                  className={`text-[14px] ${location !== "" ? "truncate" : "whitespace-nowrap"
                    }`}
                >
                  {location === ""
                    ? "Choose Destination"
                    : location.replace(/\b\w/g, (char) => char.toUpperCase())}
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
                    className="hover:bg-[#F6F8FA] flex items-center justify-between gap-8 px-3 py-3 text-[#121212] cursor-pointer"
                    onClick={() => handleLocationToggle(item)}
                  >
                    {item}
                    <input
                      type="checkbox"
                      checked={locations.includes(item)}
                      onChange={() => handleLocationToggle(item)}
                      className="w-[16px] h-[16px] cursor-pointer"
                      onClick={(e) => e.stopPropagation()} // prevent double toggle
                    />
                  </div>
                ))}
              </div>
            </Dropdown>
          </div>





          {/* Price */}
          <div className="relative">
            <div className={`cursor-pointer w-full lg:pr-2.5 ${location === "" ? "pl-2.5 lg:border-l" : ""} py-2 sm:py-0 lg:border-r  border-[#e3e3e3]`} onMouseDown={(e) => {
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
                      : `€${minPrice.toLocaleString("en-US")} - €${maxPrice.toLocaleString("en-US")}/week`}
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
            href={`/${page}?location=${encodeURIComponent(locations.join(','))}&minPrice=${minPrice}&maxPrice=${maxPrice}&guest=${guest}&checkin=${checkIn ? checkIn.toISOString().split('T')[0] : ''
              }&checkout=${checkOut ? checkOut.toISOString().split('T')[0] : ''}`}
            className="flex items-center justify-center gap-2 font-medium font-[600] text-white bg-[#0074ec] lg:p-[20px] py-3 rounded-[12px] whitespace-nowrap"
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