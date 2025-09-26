"use client"

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { IoIosAdd, IoIosArrowDown } from 'react-icons/io'
import Dropdown from './DropdownAnimation'
import { FiMinus } from 'react-icons/fi'
import { TbTransferVertical } from 'react-icons/tb'
import PriceRange from './PriceRange'

type DropdownType = 'accommodation' | 'location' | 'guests' | 'price' | 'transfer' | 'departure' | 'destination' | 'passengers' | null

const HeroFilter = () => {
  const [toggle, setToggle] = useState(false)
  const [guest, setGuest] = useState(1)
  const [passengers, setPassengers] = useState(1)
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null)
  const [accommodationType, setAccommodationType] = useState('Chalets')
  const [location, setLocation] = useState('Courchevel 1850')
  const [price, setPrice] = useState('300000')
  
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [transferType, setTransferType] = useState('Helicopters')
  const [destination, setDestination] = useState('Courchevel')
  const [departure, setDeparture] = useState('Grena')

  const handleDropdownToggle = (dropdown: DropdownType) => {
    setOpenDropdown(prev => (prev === dropdown ? null : dropdown))
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(300000)

  const handleApply = (min: number, max: number) => {
    setPrice(max.toString());
    setMinPrice(min)
    setMaxPrice(max)
    handleDropdownToggle("price");
    setIsModalOpen(false);
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
    <div className="px-4 sm:px-0 absolute md:bottom-[50px] bottom-[20px] left-1/2 transform -translate-x-1/2  min-h-[100px] rounded-[16px] w-full sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1312px]">
      <div className="bg-[#EFEFEF] rounded-t-[16px] sm:px-4 sm:py-3 p-1.5 sm:gap-0 gap-2 flex items-center">
        <button
          className={`px-3 py-2 text-[16px] w-full sm:w-auto text-[#121212] font-[600] sm:rounded-[999px] rounded-[12px] ${!toggle && "bg-white"} mr-2 cursor-pointer`}
          onClick={() => setToggle(false)}
        >
          Accommodation
        </button>
        <button
          className={`px-3 py-2 text-[16px] w-full sm:w-auto text-[#121212] font-[600] sm:rounded-[999px] rounded-[12px] ${toggle && "bg-white"} cursor-pointer`}
          onClick={() => setToggle(true)}
        >
          Transfer
        </button>
      </div>

      {
        !toggle ?
          (
            <div className='bg-white rounded-b-[12px] sm:p-6 px-[16px] py-[12px] flex lg:items-center lg:flex-row flex-col gap-[24px]'>
              <div className='w-full grid grid-cols-2 lg:grid-cols-4 md:gap-[24px] sm:gap-[16px] gap-[8px]'>

                {/* Accommodation Type */}
                <div className="relative">
                  <div className='cursor-pointer w-full' onMouseDown={(e) => {
    e.stopPropagation();
    handleDropdownToggle("accommodation");
  }}>
                    <div className='mb-2 font-regular font-[600] text-[#121212]'>Accommodation Type</div>
                    <div className='sm:px-4.5 px-3 sm:py-3 py-2.5 border border-[#e3e3e3] rounded-[999px] flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                          <path d="M21.8987 9.64253L16.5015 8.56303V2.87788C16.5015 2.76592 16.4765 2.65537 16.4282 2.55436C16.3799 2.45334 16.3096 2.36443 16.2224 2.29414C16.1356 2.22319 16.0338 2.1729 15.9246 2.14708C15.8155 2.12126 15.702 2.12058 15.5925 2.1451L8.09253 3.77254C7.92512 3.80877 7.77516 3.90125 7.66762 4.03457C7.56008 4.1679 7.50144 4.33403 7.50146 4.50532V8.56303L2.10425 9.64253C1.93429 9.67659 1.78137 9.76846 1.67148 9.90251C1.56159 10.0366 1.50152 10.2045 1.50146 10.3779V22.3779C1.50141 22.4764 1.52077 22.5739 1.55844 22.665C1.59611 22.756 1.65135 22.8387 1.72101 22.9083C1.79066 22.978 1.87336 23.0332 1.96438 23.0709C2.0554 23.1086 2.15296 23.1279 2.25146 23.1279H21.7515C21.85 23.1279 21.9475 23.1086 22.0385 23.0709C22.1296 23.0332 22.2123 22.978 22.2819 22.9083C22.3516 22.8387 22.4068 22.756 22.4445 22.665C22.4822 22.5739 22.5015 22.4764 22.5015 22.3779V10.3779C22.5014 10.2045 22.4413 10.0366 22.3315 9.90251C22.2216 9.76846 22.0686 9.67659 21.8987 9.64253ZM21.0015 10.9927V13.2131L16.5015 12.313V10.0927L21.0015 10.9927ZM9.00146 5.10994L15.0015 3.80806V6.01302L9.00146 7.21309V5.10994ZM7.50146 10.0927V12.313L3.00147 13.2131V10.9927L7.50146 10.0927ZM3.00147 14.7427L7.50146 13.8429V21.6279H3.00147V14.7427ZM9.00146 8.74275L15.0015 7.54267V21.6279H9.00146V8.74275ZM16.5015 21.6279V13.8429L21.0015 14.7427V21.6279H16.5015Z" fill="#121212" />
                          <path d="M18.7515 15.6279C18.653 15.6279 18.5554 15.6472 18.4644 15.6849C18.3734 15.7226 18.2907 15.7778 18.221 15.8475C18.1514 15.9171 18.0961 15.9998 18.0584 16.0908C18.0208 16.1819 18.0014 16.2794 18.0015 16.3779V19.3779C18.0015 19.5768 18.0805 19.7676 18.2211 19.9083C18.3618 20.0489 18.5526 20.1279 18.7515 20.1279C18.9504 20.1279 19.1411 20.0489 19.2818 19.9083C19.4224 19.7676 19.5015 19.5768 19.5015 19.3779V16.3779C19.5015 16.2794 19.4822 16.1819 19.4445 16.0908C19.4068 15.9998 19.3516 15.9171 19.2819 15.8475C19.2123 15.7778 19.1296 15.7226 19.0385 15.6849C18.9475 15.6472 18.85 15.6279 18.7515 15.6279Z" fill="#121212" />
                          <path d="M5.25 15.6279C5.15149 15.6278 5.05394 15.6472 4.96292 15.6848C4.8719 15.7225 4.7892 15.7778 4.71954 15.8474C4.64989 15.9171 4.59464 15.9998 4.55697 16.0908C4.5193 16.1818 4.49994 16.2794 4.5 16.3779V19.3779C4.5 19.5768 4.57902 19.7675 4.71967 19.9082C4.86032 20.0489 5.05109 20.1279 5.25 20.1279C5.44891 20.1279 5.63968 20.0489 5.78033 19.9082C5.92098 19.7675 6 19.5768 6 19.3779V16.3779C6.00006 16.2794 5.9807 16.1818 5.94303 16.0908C5.90536 15.9998 5.85011 15.9171 5.78046 15.8474C5.7108 15.7778 5.6281 15.7225 5.53708 15.6848C5.44606 15.6472 5.34851 15.6278 5.25 15.6279Z" fill="#121212" />
                          <path d="M11.9985 13.3779C11.9 13.3778 11.8025 13.3972 11.7115 13.4348C11.6204 13.4725 11.5377 13.5278 11.4681 13.5974C11.3984 13.6671 11.3432 13.7498 11.3055 13.8408C11.2678 13.9318 11.2485 14.0294 11.2485 14.1279V18.6279C11.2485 18.8268 11.3276 19.0175 11.4682 19.1582C11.6089 19.2989 11.7996 19.3779 11.9985 19.3779C12.1974 19.3779 12.3882 19.2989 12.5289 19.1582C12.6695 19.0175 12.7485 18.8268 12.7485 18.6279V14.1279C12.7486 14.0294 12.7292 13.9318 12.6916 13.8408C12.6539 13.7498 12.5986 13.6671 12.529 13.5974C12.4593 13.5278 12.3766 13.4725 12.2856 13.4348C12.1946 13.3972 12.097 13.3778 11.9985 13.3779Z" fill="#121212" />
                        </svg>
                        <span className='sm:text-[16px] text-[12px]'>{accommodationType}</span>
                      </div>
                      <IoIosArrowDown className='sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] text-[#121212]' />
                    </div>
                  </div>
                  <Dropdown top='top-[calc(100%+6px)]' onClose={()=>setOpenDropdown(null)}  isOpen={openDropdown === 'accommodation'} border={true}>
                    <div className='w-full'>
                      {['Chalets', 'Apartments', 'Hotels'].map((item) => (
                        <div
                          key={item}
                          className='hover:bg-[#F6F8FA] px-3 py-2 text-[#121212] cursor-pointer'
                          onClick={() => {
                            setAccommodationType(item)
                            setOpenDropdown(null)
                          }}
                        >
                          {item}
                        </div>
                      ))}

                    </div>
                  </Dropdown>
                </div>

                {/* Location */}
                <div className="relative">
                  <div className='cursor-pointer w-full' onMouseDown={(e) => {
    e.stopPropagation();
    handleDropdownToggle("location");
  }}>
                    <div className='mb-2 font-regular font-[600] text-[#121212]'>Location</div>
                    <div className='sm:px-4.5 px-3 sm:py-3 py-2.5 border border-[#e3e3e3] rounded-[999px] flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <g clipPath="url(#clip0_4_84)">
                            <path d="M12.7402 11.8779C14.291 11.8779 15.5527 10.6162 15.5527 9.06537C15.5527 7.51456 14.291 6.25287 12.7402 6.25287C11.1894 6.25287 9.92773 7.51456 9.92773 9.06537C9.92773 10.6162 11.1894 11.8779 12.7402 11.8779ZM12.7402 8.12787C13.2572 8.12787 13.6777 8.54843 13.6777 9.06537C13.6777 9.58231 13.2572 10.0029 12.7402 10.0029C12.2233 10.0029 11.8027 9.58231 11.8027 9.06537C11.8027 8.54843 12.2233 8.12787 12.7402 8.12787Z" fill="#121212" />
                            <path d="M21.1768 9.06537C21.1768 4.41293 17.3917 0.627869 12.7393 0.627869C8.08682 0.627869 4.30176 4.41293 4.30176 9.06537C4.30176 10.9059 4.88404 12.6551 5.9857 14.1238L10.4884 20.127C11.0173 20.832 11.8588 21.2529 12.7393 21.2529C13.6198 21.2529 14.4612 20.832 14.9901 20.1269L19.4928 14.1238C20.5945 12.6551 21.1768 10.9059 21.1768 9.06537ZM17.9929 12.9987L13.4902 19.0017C13.3109 19.2408 13.0372 19.3779 12.7393 19.3779C12.4413 19.3779 12.1676 19.2408 11.9883 19.0018L7.48565 12.9987C6.62938 11.8571 6.17676 10.497 6.17676 9.06537C6.17676 5.44681 9.1207 2.50287 12.7393 2.50287C16.3578 2.50287 19.3018 5.44681 19.3018 9.06537C19.3018 10.497 18.8491 11.8571 17.9929 12.9987Z" fill="#121212" />
                            <path d="M17.4272 23.6904C17.4272 23.1726 17.0075 22.7529 16.4897 22.7529H8.98975C8.47196 22.7529 8.05225 23.1726 8.05225 23.6904C8.05225 24.2081 8.47196 24.6279 8.98975 24.6279H16.4897C17.0075 24.6279 17.4272 24.2081 17.4272 23.6904Z" fill="#121212" />
                          </g>
                          <defs>
                            <clipPath id="clip0_4_84">
                              <rect width="24" height="24" fill="white" transform="translate(0.740723 0.627869)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className='sm:text-[16px] text-[12px]'>{location}</span>
                      </div>
                      <IoIosArrowDown className='sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] text-[#121212]' />
                    </div>
                  </div>
                  <Dropdown top='top-[calc(100%+6px)]' onClose={()=>setOpenDropdown(null)}  isOpen={openDropdown === 'location'} border={true}>
                    <div className='w-full'>
                      {['Courchevel 1850', 'Courchevel Moriond (1650)', "Courchevel Village (1550)", "Courchevel Le Praz (1300)", 'Meribel', 'Val Thorens'].map((item) => (
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

                {/* Guests */}
                <div className="relative">
                  <div className='cursor-pointer w-full' onClick={() => handleDropdownToggle('guests')}>
                    <div className='mb-2 font-regular font-[600] text-[#121212]'>Guests</div>
                    <div className='sm:px-4.5 px-3 sm:py-3 py-2.5 border border-[#e3e3e3] rounded-[999px] flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <g clipPath="url(#clip0_4_96)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.4819 1.87781C9.85858 1.87781 7.73193 4.00446 7.73193 6.62781C7.73193 9.25116 9.85858 11.3778 12.4819 11.3778C15.1053 11.3778 17.2319 9.25116 17.2319 6.62781C17.2319 4.00446 15.1053 1.87781 12.4819 1.87781ZM9.23193 6.62781C9.23193 4.83288 10.687 3.37781 12.4819 3.37781C14.2769 3.37781 15.7319 4.83288 15.7319 6.62781C15.7319 8.42273 14.2769 9.87781 12.4819 9.87781C10.687 9.87781 9.23193 8.42273 9.23193 6.62781Z" fill="#121212" />
                            <path d="M18.4819 3.87781C18.0677 3.87781 17.7319 4.21359 17.7319 4.62781C17.7319 5.04202 18.0677 5.37781 18.4819 5.37781C19.8584 5.37781 20.7319 6.28354 20.7319 7.12781C20.7319 7.97208 19.8584 8.87781 18.4819 8.87781C18.0677 8.87781 17.7319 9.21359 17.7319 9.62781C17.7319 10.042 18.0677 10.3778 18.4819 10.3778C20.4192 10.3778 22.2319 9.04496 22.2319 7.12781C22.2319 5.21065 20.4192 3.87781 18.4819 3.87781Z" fill="#121212" />
                            <path d="M7.23193 4.62781C7.23193 4.21359 6.89615 3.87781 6.48193 3.87781C4.54471 3.87781 2.73193 5.21065 2.73193 7.12781C2.73193 9.04496 4.54471 10.3778 6.48193 10.3778C6.89615 10.3778 7.23193 10.042 7.23193 9.62781C7.23193 9.21359 6.89615 8.87781 6.48193 8.87781C5.10545 8.87781 4.23193 7.97208 4.23193 7.12781C4.23193 6.28354 5.10545 5.37781 6.48193 5.37781C6.89615 5.37781 7.23193 5.04202 7.23193 4.62781Z" fill="#121212" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.4819 12.8778C10.6977 12.8778 9.04838 13.3586 7.82327 14.1753C6.60339 14.9886 5.73193 16.1945 5.73193 17.6278C5.73193 19.0612 6.60339 20.267 7.82327 21.0803C9.04838 21.897 10.6977 22.3778 12.4819 22.3778C14.2662 22.3778 15.9155 21.897 17.1406 21.0803C18.3605 20.267 19.2319 19.0612 19.2319 17.6278C19.2319 16.1945 18.3605 14.9886 17.1406 14.1753C15.9155 13.3586 14.2662 12.8778 12.4819 12.8778ZM7.23193 17.6278C7.23193 16.852 7.70362 16.0579 8.65532 15.4234C9.60177 14.7924 10.9525 14.3778 12.4819 14.3778C14.0114 14.3778 15.3621 14.7924 16.3085 15.4234C17.2602 16.0579 17.7319 16.852 17.7319 17.6278C17.7319 18.4036 17.2602 19.1977 16.3085 19.8322C15.3621 20.4632 14.0114 20.8778 12.4819 20.8778C10.9525 20.8778 9.60177 20.4632 8.65532 19.8322C7.70362 19.1977 7.23193 18.4036 7.23193 17.6278Z" fill="#121212" />
                            <path d="M19.7493 14.4672C19.8381 14.0626 20.238 13.8065 20.6426 13.8952C21.6045 14.1062 22.4712 14.4872 23.1147 15.0137C23.7577 15.5398 24.2319 16.263 24.2319 17.1278C24.2319 17.9926 23.7577 18.7158 23.1147 19.2419C22.4712 19.7685 21.6045 20.1495 20.6426 20.3604C20.238 20.4491 19.8381 20.1931 19.7493 19.7885C19.6606 19.3839 19.9167 18.9839 20.3213 18.8952C21.1136 18.7215 21.7469 18.423 22.1648 18.081C22.5833 17.7386 22.7319 17.4041 22.7319 17.1278C22.7319 16.8515 22.5833 16.5171 22.1648 16.1746C21.7469 15.8326 21.1136 15.5342 20.3213 15.3604C19.9167 15.2717 19.6606 14.8718 19.7493 14.4672Z" fill="#121212" />
                            <path d="M4.32128 13.8952C4.72588 13.8065 5.1258 14.0626 5.21453 14.4672C5.30325 14.8718 5.04719 15.2717 4.64259 15.3604C3.85022 15.5342 3.21698 15.8326 2.79906 16.1746C2.38056 16.5171 2.23193 16.8515 2.23193 17.1278C2.23193 17.4041 2.38056 17.7386 2.79906 18.081C3.21698 18.423 3.85022 18.7215 4.64259 18.8952C5.04719 18.9839 5.30325 19.3839 5.21453 19.7885C5.1258 20.1931 4.72588 20.4491 4.32128 20.3604C3.3594 20.1495 2.49264 19.7685 1.84913 19.2419C1.20618 18.7158 0.731934 17.9926 0.731934 17.1278C0.731934 16.263 1.20618 15.5398 1.84913 15.0137C2.49264 14.4872 3.3594 14.1062 4.32128 13.8952Z" fill="#121212" />
                          </g>
                          <defs>
                            <clipPath id="clip0_4_96">
                              <rect width="24" height="24" fill="white" transform="translate(0.481934 0.627808)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className='font-regular hidden sm:block'>{guest} Guests</span>
                      </div>

                      <div className='flex items-center gap-2.5'>
                        <FiMinus className='rounded-[4px] border border-[#e3e3e3] text-[16px] cursor-pointer' onClick={() => { guest > 0 ? setGuest(guest - 1) : setGuest(0) }} />
                        <span>{guest}</span>
                        <IoIosAdd className='rounded-[4px] border border-[#e3e3e3] text-[18px] cursor-pointer' onClick={() => { setGuest(guest + 1) }} />

                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative inline-block">
                  <div
                    className="cursor-pointer w-full"
                   onMouseDown={(e) => {
    e.stopPropagation();
    handleDropdownToggle("price");
  }}
                  >
                    {/* Trigger */}
                    <div className="mb-2 font-regular font-[600] text-[#121212]">Price</div>
                    <div className="sm:px-4.5 px-3 sm:py-3 py-2.5 border border-[#e3e3e3] rounded-[999px] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.48294 9.83788C8.73559 8.32213 10.047 7.21118 11.5837 7.21118H12.4479C14.0297 7.21118 15.434 8.22338 15.9343 9.72403C16.0652 10.117 15.8529 10.5417 15.4599 10.6727C15.067 10.8037 14.6422 10.5913 14.5112 10.1983C14.2152 9.31023 13.3841 8.71118 12.4479 8.71118H11.5837C10.7803 8.71118 10.0946 9.29203 9.96254 10.0845C9.84329 10.8 10.3134 11.4811 11.0247 11.6234L13.7149 12.1614C15.2202 12.4625 16.2149 13.9037 15.9625 15.4178C15.7099 16.9336 14.3985 18.0445 12.8618 18.0445H11.9976C10.4158 18.0445 9.01144 17.0323 8.51124 15.5317C8.38024 15.1387 8.59264 14.714 8.98559 14.583C9.37854 14.452 9.80329 14.6644 9.93429 15.0573C10.2303 15.9455 11.0614 16.5445 11.9976 16.5445H12.8618C13.6652 16.5445 14.3509 15.9637 14.4829 15.1712C14.6022 14.4557 14.1321 13.7746 13.4208 13.6323L10.7305 13.0943C9.22534 12.7932 8.23059 11.352 8.48294 9.83788Z"
                            fill="#121212"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.2231 5.87793C12.6373 5.87793 12.9731 6.21373 12.9731 6.62793V18.6279C12.9731 19.0421 12.6373 19.3779 12.2231 19.3779C11.8089 19.3779 11.4731 19.0421 11.4731 18.6279V6.62793C11.4731 6.21373 11.8089 5.87793 12.2231 5.87793Z"
                            fill="#121212"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.47363 12.6279C2.47363 7.24313 6.83883 2.87793 12.2236 2.87793C17.6084 2.87793 21.9736 7.24313 21.9736 12.6279C21.9736 18.0127 17.6084 22.3779 12.2236 22.3779C6.83883 22.3779 2.47363 18.0127 2.47363 12.6279ZM12.2236 4.37793C7.66728 4.37793 3.97363 8.07158 3.97363 12.6279C3.97363 17.1843 7.66728 20.8779 12.2236 20.8779C16.78 20.8779 20.4736 17.1843 20.4736 12.6279C20.4736 8.07158 16.78 4.37793 12.2236 4.37793Z"
                            fill="#121212"
                          />
                        </svg>
                        <span className="sm:text-[16px] text-[12px]">£{Number(price).toLocaleString("en-US")}/week</span>
                      </div>
                      <IoIosArrowDown className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] text-[#121212]" />
                    </div>
                  </div>

                  {/* Dropdown */}
                  {/* <> */}
                  {!isMobile && openDropdown === "price" ? (
                    // Desktop / Tablet View
                    <div
                     ref={dropdownRef}
                                        className="
                        fixed
                        top-[calc(90%)]
                        mb-2
                        left-1/2 -translate-x-1/2
                        max-w-[506px]
                        z-[999999]
                      "
                    >
                      <PriceRange onApplyFilter={handleApply} min={minPrice} max={maxPrice} onClose={() => { setOpenDropdown(null) }} />
                    </div>
                  ) : (
                    // Mobile: Button to open modal
                    <>
                      {isMobile && openDropdown === "price" && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10001]">
                          <div className="w-[90%] max-w-md px-[12px]">
                            <PriceRange onApplyFilter={handleApply} min={minPrice} max={maxPrice}  onClose={() => { setOpenDropdown(null) }} />
                           
                          </div>
                        </div>
                      )}
                    </>
                  )}

                </div>

              </div>

              {/* Search Button */}
              <div>
                <Link href={`/${accommodationType.toLowerCase()}?location=${location.toLowerCase()}&minPrice=${minPrice}&maxPrice=${maxPrice}&guest=${guest}`} className='flex items-center justify-center gap-2 font-medium font-[600] text-white bg-[#0074ec] px-6 py-3 rounded-[9999px] whitespace-nowrap'>
                  <IoSearch className='text-[18px]' />
                  Search Now
                </Link>
              </div>
            </div>
          ) : (
            <div className='bg-white rounded-b-[12px] sm:p-6 px-[16px] py-[12px] flex lg:items-center lg:flex-row flex-col gap-[24px]'>
              <div className='w-full grid grid-cols-2 lg:grid-cols-4 md:gap-[24px] sm:gap-[16px] gap-[8px]'>

                {/* Accommodation Type */}
                <div className="relative">
                  <div className='cursor-pointer w-full' onMouseDown={(e) => {
    e.stopPropagation();
    handleDropdownToggle("transfer");
  }}>
                    <div className='mb-2 font-regular font-[600] text-[#121212]'>Transfer Type</div>
                    <div className='sm:px-4.5 px-3 sm:py-3 py-2.5 border border-[#e3e3e3] rounded-[999px] flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <TbTransferVertical className='text-[20px] text-[#121212]' />
                        <span className='sm:text-[16px] text-[12px]'>{transferType}</span>
                      </div>
                      <IoIosArrowDown className='sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] text-[#121212]' />
                    </div>
                  </div>
                  <Dropdown top='top-[calc(100%+6px)]' onClose={()=>setOpenDropdown(null)}  isOpen={openDropdown === 'transfer'} border={true}>
                    <div className='w-full'>
                      {['Helicopters', 'Cars', 'Jets'].map((item) => (
                        <div
                          key={item}
                          className='hover:bg-[#F6F8FA] px-3 py-2 text-[#121212] cursor-pointer'
                          onClick={() => {
                            setTransferType(item)
                            setOpenDropdown(null)
                          }}
                        >
                          {item}
                        </div>
                      ))}

                    </div>
                  </Dropdown>
                </div>

                {/* Location */}
                <div className="relative">
                  <div className='cursor-pointer w-full' onMouseDown={(e) => {
    e.stopPropagation();
    handleDropdownToggle("departure");
  }}>
                    <div className='mb-2 font-regular font-[600] text-[#121212]'>Departure</div>
                    <div className='sm:px-4.5 px-3 sm:py-3 py-2.5 border border-[#e3e3e3] rounded-[999px] flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <g clipPath="url(#clip0_4_84)">
                            <path d="M12.7402 11.8779C14.291 11.8779 15.5527 10.6162 15.5527 9.06537C15.5527 7.51456 14.291 6.25287 12.7402 6.25287C11.1894 6.25287 9.92773 7.51456 9.92773 9.06537C9.92773 10.6162 11.1894 11.8779 12.7402 11.8779ZM12.7402 8.12787C13.2572 8.12787 13.6777 8.54843 13.6777 9.06537C13.6777 9.58231 13.2572 10.0029 12.7402 10.0029C12.2233 10.0029 11.8027 9.58231 11.8027 9.06537C11.8027 8.54843 12.2233 8.12787 12.7402 8.12787Z" fill="#121212" />
                            <path d="M21.1768 9.06537C21.1768 4.41293 17.3917 0.627869 12.7393 0.627869C8.08682 0.627869 4.30176 4.41293 4.30176 9.06537C4.30176 10.9059 4.88404 12.6551 5.9857 14.1238L10.4884 20.127C11.0173 20.832 11.8588 21.2529 12.7393 21.2529C13.6198 21.2529 14.4612 20.832 14.9901 20.1269L19.4928 14.1238C20.5945 12.6551 21.1768 10.9059 21.1768 9.06537ZM17.9929 12.9987L13.4902 19.0017C13.3109 19.2408 13.0372 19.3779 12.7393 19.3779C12.4413 19.3779 12.1676 19.2408 11.9883 19.0018L7.48565 12.9987C6.62938 11.8571 6.17676 10.497 6.17676 9.06537C6.17676 5.44681 9.1207 2.50287 12.7393 2.50287C16.3578 2.50287 19.3018 5.44681 19.3018 9.06537C19.3018 10.497 18.8491 11.8571 17.9929 12.9987Z" fill="#121212" />
                            <path d="M17.4272 23.6904C17.4272 23.1726 17.0075 22.7529 16.4897 22.7529H8.98975C8.47196 22.7529 8.05225 23.1726 8.05225 23.6904C8.05225 24.2081 8.47196 24.6279 8.98975 24.6279H16.4897C17.0075 24.6279 17.4272 24.2081 17.4272 23.6904Z" fill="#121212" />
                          </g>
                          <defs>
                            <clipPath id="clip0_4_84">
                              <rect width="24" height="24" fill="white" transform="translate(0.740723 0.627869)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className='sm:text-[16px] text-[12px]'>{departure}</span>
                      </div>
                      <IoIosArrowDown className='sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] text-[#121212]' />
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
                  <div className='cursor-pointer w-full' onMouseDown={(e) => {
    e.stopPropagation();
    handleDropdownToggle("destination");
  }}>
                    <div className='mb-2 font-regular font-[600] text-[#121212]'>Destination</div>
                    <div className='sm:px-4.5 px-3 sm:py-3 py-2.5 border border-[#e3e3e3] rounded-[999px] flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[18px] h-[18px] md:w-[25px] md:h-[25px]"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_4_84)">
                            <path d="M12.7402 11.8779C14.291 11.8779 15.5527 10.6162 15.5527 9.06537C15.5527 7.51456 14.291 6.25287 12.7402 6.25287C11.1894 6.25287 9.92773 7.51456 9.92773 9.06537C9.92773 10.6162 11.1894 11.8779 12.7402 11.8779ZM12.7402 8.12787C13.2572 8.12787 13.6777 8.54843 13.6777 9.06537C13.6777 9.58231 13.2572 10.0029 12.7402 10.0029C12.2233 10.0029 11.8027 9.58231 11.8027 9.06537C11.8027 8.54843 12.2233 8.12787 12.7402 8.12787Z" fill="#121212" />
                            <path d="M21.1768 9.06537C21.1768 4.41293 17.3917 0.627869 12.7393 0.627869C8.08682 0.627869 4.30176 4.41293 4.30176 9.06537C4.30176 10.9059 4.88404 12.6551 5.9857 14.1238L10.4884 20.127C11.0173 20.832 11.8588 21.2529 12.7393 21.2529C13.6198 21.2529 14.4612 20.832 14.9901 20.1269L19.4928 14.1238C20.5945 12.6551 21.1768 10.9059 21.1768 9.06537ZM17.9929 12.9987L13.4902 19.0017C13.3109 19.2408 13.0372 19.3779 12.7393 19.3779C12.4413 19.3779 12.1676 19.2408 11.9883 19.0018L7.48565 12.9987C6.62938 11.8571 6.17676 10.497 6.17676 9.06537C6.17676 5.44681 9.1207 2.50287 12.7393 2.50287C16.3578 2.50287 19.3018 5.44681 19.3018 9.06537C19.3018 10.497 18.8491 11.8571 17.9929 12.9987Z" fill="#121212" />
                            <path d="M17.4272 23.6904C17.4272 23.1726 17.0075 22.7529 16.4897 22.7529H8.98975C8.47196 22.7529 8.05225 23.1726 8.05225 23.6904C8.05225 24.2081 8.47196 24.6279 8.98975 24.6279H16.4897C17.0075 24.6279 17.4272 24.2081 17.4272 23.6904Z" fill="#121212" />
                          </g>
                          <defs>
                            <clipPath id="clip0_4_84">
                              <rect width="24" height="24" fill="white" transform="translate(0.740723 0.627869)" />
                            </clipPath>
                          </defs>
                        </svg>

                        <span className='sm:text-[16px] text-[12px]'>{destination}</span>
                      </div>
                      <IoIosArrowDown className='sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] text-[#121212]' />
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
                  <div className='cursor-pointer w-full' onClick={() => handleDropdownToggle('guests')}>
                    <div className='mb-2 font-regular font-[600] text-[#121212]'>Passengers</div>
                    <div className='sm:px-4.5 px-3 sm:py-3 py-2.5 border border-[#e3e3e3] rounded-[999px] flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <g clipPath="url(#clip0_4_96)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.4819 1.87781C9.85858 1.87781 7.73193 4.00446 7.73193 6.62781C7.73193 9.25116 9.85858 11.3778 12.4819 11.3778C15.1053 11.3778 17.2319 9.25116 17.2319 6.62781C17.2319 4.00446 15.1053 1.87781 12.4819 1.87781ZM9.23193 6.62781C9.23193 4.83288 10.687 3.37781 12.4819 3.37781C14.2769 3.37781 15.7319 4.83288 15.7319 6.62781C15.7319 8.42273 14.2769 9.87781 12.4819 9.87781C10.687 9.87781 9.23193 8.42273 9.23193 6.62781Z" fill="#121212" />
                            <path d="M18.4819 3.87781C18.0677 3.87781 17.7319 4.21359 17.7319 4.62781C17.7319 5.04202 18.0677 5.37781 18.4819 5.37781C19.8584 5.37781 20.7319 6.28354 20.7319 7.12781C20.7319 7.97208 19.8584 8.87781 18.4819 8.87781C18.0677 8.87781 17.7319 9.21359 17.7319 9.62781C17.7319 10.042 18.0677 10.3778 18.4819 10.3778C20.4192 10.3778 22.2319 9.04496 22.2319 7.12781C22.2319 5.21065 20.4192 3.87781 18.4819 3.87781Z" fill="#121212" />
                            <path d="M7.23193 4.62781C7.23193 4.21359 6.89615 3.87781 6.48193 3.87781C4.54471 3.87781 2.73193 5.21065 2.73193 7.12781C2.73193 9.04496 4.54471 10.3778 6.48193 10.3778C6.89615 10.3778 7.23193 10.042 7.23193 9.62781C7.23193 9.21359 6.89615 8.87781 6.48193 8.87781C5.10545 8.87781 4.23193 7.97208 4.23193 7.12781C4.23193 6.28354 5.10545 5.37781 6.48193 5.37781C6.89615 5.37781 7.23193 5.04202 7.23193 4.62781Z" fill="#121212" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.4819 12.8778C10.6977 12.8778 9.04838 13.3586 7.82327 14.1753C6.60339 14.9886 5.73193 16.1945 5.73193 17.6278C5.73193 19.0612 6.60339 20.267 7.82327 21.0803C9.04838 21.897 10.6977 22.3778 12.4819 22.3778C14.2662 22.3778 15.9155 21.897 17.1406 21.0803C18.3605 20.267 19.2319 19.0612 19.2319 17.6278C19.2319 16.1945 18.3605 14.9886 17.1406 14.1753C15.9155 13.3586 14.2662 12.8778 12.4819 12.8778ZM7.23193 17.6278C7.23193 16.852 7.70362 16.0579 8.65532 15.4234C9.60177 14.7924 10.9525 14.3778 12.4819 14.3778C14.0114 14.3778 15.3621 14.7924 16.3085 15.4234C17.2602 16.0579 17.7319 16.852 17.7319 17.6278C17.7319 18.4036 17.2602 19.1977 16.3085 19.8322C15.3621 20.4632 14.0114 20.8778 12.4819 20.8778C10.9525 20.8778 9.60177 20.4632 8.65532 19.8322C7.70362 19.1977 7.23193 18.4036 7.23193 17.6278Z" fill="#121212" />
                            <path d="M19.7493 14.4672C19.8381 14.0626 20.238 13.8065 20.6426 13.8952C21.6045 14.1062 22.4712 14.4872 23.1147 15.0137C23.7577 15.5398 24.2319 16.263 24.2319 17.1278C24.2319 17.9926 23.7577 18.7158 23.1147 19.2419C22.4712 19.7685 21.6045 20.1495 20.6426 20.3604C20.238 20.4491 19.8381 20.1931 19.7493 19.7885C19.6606 19.3839 19.9167 18.9839 20.3213 18.8952C21.1136 18.7215 21.7469 18.423 22.1648 18.081C22.5833 17.7386 22.7319 17.4041 22.7319 17.1278C22.7319 16.8515 22.5833 16.5171 22.1648 16.1746C21.7469 15.8326 21.1136 15.5342 20.3213 15.3604C19.9167 15.2717 19.6606 14.8718 19.7493 14.4672Z" fill="#121212" />
                            <path d="M4.32128 13.8952C4.72588 13.8065 5.1258 14.0626 5.21453 14.4672C5.30325 14.8718 5.04719 15.2717 4.64259 15.3604C3.85022 15.5342 3.21698 15.8326 2.79906 16.1746C2.38056 16.5171 2.23193 16.8515 2.23193 17.1278C2.23193 17.4041 2.38056 17.7386 2.79906 18.081C3.21698 18.423 3.85022 18.7215 4.64259 18.8952C5.04719 18.9839 5.30325 19.3839 5.21453 19.7885C5.1258 20.1931 4.72588 20.4491 4.32128 20.3604C3.3594 20.1495 2.49264 19.7685 1.84913 19.2419C1.20618 18.7158 0.731934 17.9926 0.731934 17.1278C0.731934 16.263 1.20618 15.5398 1.84913 15.0137C2.49264 14.4872 3.3594 14.1062 4.32128 13.8952Z" fill="#121212" />
                          </g>
                          <defs>
                            <clipPath id="clip0_4_96">
                              <rect width="24" height="24" fill="white" transform="translate(0.481934 0.627808)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className='font-regular hidden sm:block'>{passengers} passengers</span>
                      </div>

                      <div className='flex items-center gap-2.5'>
                        <FiMinus className='rounded-[4px] border border-[#e3e3e3] text-[16px] cursor-pointer' onClick={() => { passengers > 0 ? setPassengers(passengers - 1) : setPassengers(0) }} />
                        <span>{passengers}</span>
                        <IoIosAdd className='rounded-[4px] border border-[#e3e3e3] text-[18px] cursor-pointer' onClick={() => { setPassengers(passengers + 1) }} />

                      </div>
                    </div>
                  </div>
                </div>


              </div>

              {/* Search Button */}
              <div>
                <Link href={`/${transferType.toLowerCase()}?departure=${departure.toLowerCase()}&destination=${destination}&passengers=${passengers}`} className='flex items-center justify-center gap-2 font-medium font-[600] text-white bg-[#0074ec] px-6 py-3 rounded-[9999px] whitespace-nowrap'>
                  <IoSearch className='text-[18px]' />
                  Search Now
                </Link>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default HeroFilter
