"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Dropdown from './ui/NavDropdown'
import { useModalStore } from '@/stores/modalStore'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
    const openInquiry = useModalStore((state) => state.openInquiry);
    const toggleMenu = (menuName: string) => {
        setOpenMenu((prev) => (prev === menuName ? null : menuName));
    };

    const toggleMobileMenu = (menuName: string) => {
        setOpenMobileMenu((prev) => (prev === menuName ? null : menuName));
    };

    return (
        <>
            <header className='z-20 absolute rounded-[9999px] md:top-[20px] top-[15px] left-1/2 -translate-x-1/2 lg:w-[985px] md:w-[80%] sm:w-[90%] w-[95%] bg-white h-[52px] md:h-auto py-[8px] px-[16px] border border-[#E3E3E3]'>
                <div className='flex justify-between h-full items-center'>
                    <div>
                        <Link href={"/"}>
                            <Image src="/logo.png" alt="Logo" priority={true} width={85} height={52} />
                        </Link>
                    </div>

                    {/* <div className=' flex items-center justify-between'> */}
                    <nav className='lg:flex items-center relative hidden'>
                        {/* Accommodation */}
                        <div className='relative'>
                            <div
                                className={`flex items-center ${openMenu === 'accommodation' ? 'font-semibold' : ''} gap-1 px-[12px] py-[8px] text-[16px] cursor-pointer text-[#121212]`}

                                onMouseDown={(e) => {
                                    e.stopPropagation()
                                    toggleMenu('accommodation')
                                }}
                            >
                                Accommodation <IoIosArrowDown
                                    className={`transition-transform duration-300 ${openMenu === 'accommodation' ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>
                            <Dropdown top="top-[59px]" onClose={() => setOpenMenu(null)} isOpen={openMenu === 'accommodation'}>
                                <div className='w-full cursor-pointer'>
                                    <Link href={"/chalets"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-2 py-2 rounded-md hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => setOpenMenu(null)}>
                                            {/* <FaHouseDamage className='text-[24px] text-[#666D80] group-hover:text-[#121212] transition-all duration-200' /> */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                                className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200"
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

                                            <div>
                                                <span className='text-[16px] text-[#121212] group-hover:font-semibold transition-all duration-200'>Chalets</span>
                                                <p className='text-[12px] text-[#666D80]'>Exclusive mountain retreats with bespoke service</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href={"/apartments"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-2 py-2 rounded-md hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => setOpenMenu(null)}>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="21"
                                                viewBox="0 0 20 21"
                                                fill="none"
                                                className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200"
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



                                            <div>
                                                <span className='text-[16px] text-[#121212] group-hover:font-semibold transition-all duration-200'>Apartments</span>
                                                <p className='text-[12px] text-[#666D80]'>Sophisticated urban residences with premium amenities</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href={"/hotels"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-2 py-2 rounded-md hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => setOpenMenu(null)}>
                                            {/* <RiHotelLine className='text-[24px] text-[#666D80] group-hover:text-[#121212] transition-all duration-200' /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9056" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9056)">
                                                    <path d="M14.1666 8H15.8333V6.33333H14.1666V8ZM14.1666 11.3333H15.8333V9.66667H14.1666V11.3333ZM14.1666 14.6667H15.8333V13H14.1666V14.6667ZM0.833252 18V9.66667L6.66659 5.5L12.4999 9.66667V18H8.33325V13H4.99992V18H0.833252ZM14.1666 18V8.83333L8.33325 4.625V3H19.1666V18H14.1666Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <div>
                                                <span className='text-[16px] text-[#121212] group-hover:font-semibold transition-all duration-200'>Hotels</span>
                                                <p className='text-[12px] text-[#666D80]'>Handpicked luxury establishments with exceptional comfort</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </Dropdown>
                        </div>

                        {/* Transfer */}
                        <div className='relative'>
                            <div
                                className={`flex items-center ${openMenu === 'transfer' ? 'font-semibold' : ''} gap-1 px-[12px] py-[8px] text-[16px] cursor-pointer text-[#121212]`}
                                onMouseDown={(e) => {
                                    e.stopPropagation()
                                    toggleMenu('transfer')
                                }}
                            >
                                Transfer <IoIosArrowDown
                                    className={`transition-transform duration-300 ${openMenu === 'transfer' ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>
                            <Dropdown onClose={() => setOpenMenu(null)} top="top-[59px]" isOpen={openMenu === 'transfer'}>
                                <div className='w-full cursor-pointer'>
                                    <Link href={"/helicopters"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-2 py-2 rounded-md hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => setOpenMenu(null)}>
                                            {/* <FaHelicopter className='text-[24px] text-[#666D80] group-hover:text-[#121212] transition-all duration-200' /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <path d="M7.49992 9.33335V4.33335C6.11103 4.33335 4.93047 4.81946 3.95825 5.79169C2.98603 6.76391 2.49992 7.94446 2.49992 9.33335H7.49992ZM10.8333 16.8334H2.49992V15.1667H10.8333V16.8334ZM12.4999 14.3334H2.49992C2.04159 14.3334 1.64922 14.1702 1.32284 13.8438C0.996446 13.5174 0.833252 13.125 0.833252 12.6667V9.33335C0.833252 7.47224 1.47909 5.89585 2.77075 4.60419C4.06242 3.31252 5.63881 2.66669 7.49992 2.66669H12.4999V6.83335H16.6666L17.4999 5.16669H19.1666V11L12.4999 11.6667V14.3334ZM15.8333 1.83335H2.49992V0.166687H15.8333V1.83335Z" fill="currentColor" />
                                            </svg>
                                            <div>
                                                <span className='text-[16px] text-[#121212] group-hover:font-semibold transition-all duration-200'>Helicopter</span>
                                                <p className='text-[12px] text-[#666D80]'>Swift aerial transportation with panoramic views</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href={"/jets"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-2 py-2 rounded-md hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => setOpenMenu(null)}>

                                            {/* <IoIosJet className='text-[24px] text-[#666D80] group-hover:text-[#121212] transition-all duration-200' /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9097" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9097)">
                                                    <path d="M8.27083 18.1041L6.20833 14.2708L2.375 12.2083L3.85417 10.75L6.875 11.2708L9 9.14581L2.39583 6.33331L4.14583 4.54165L12.1667 5.95831L14.75 3.37498C15.0694 3.05554 15.4653 2.89581 15.9375 2.89581C16.4097 2.89581 16.8056 3.05554 17.125 3.37498C17.4444 3.69442 17.6042 4.08679 17.6042 4.55206C17.6042 5.01734 17.4444 5.4097 17.125 5.72915L14.5208 8.33331L15.9375 16.3333L14.1667 18.1041L11.3333 11.5L9.20833 13.625L9.75 16.625L8.27083 18.1041Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <div>
                                                <span className='text-[16px] text-[#121212] group-hover:font-semibold transition-all duration-200'>Jet</span>
                                                <p className='text-[12px] text-[#666D80]'>Private aviation ensuring comfortable, flexible travel</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href={"/cars"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-2 py-2 rounded-md hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => setOpenMenu(null)}>
                                            {/* <FaCarAlt className='text-[24px] text-[#666D80] group-hover:text-[#121212] transition-all duration-200' /> */}

                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9104" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9104)">
                                                    <path d="M5 16.3333V17.1666C5 17.4027 4.92014 17.6007 4.76042 17.7604C4.60069 17.9201 4.40278 18 4.16667 18H3.33333C3.09722 18 2.89931 17.9201 2.73958 17.7604C2.57986 17.6007 2.5 17.4027 2.5 17.1666V10.5L4.25 5.49996C4.33333 5.24996 4.48264 5.04857 4.69792 4.89579C4.91319 4.74301 5.15278 4.66663 5.41667 4.66663H14.5833C14.8472 4.66663 15.0868 4.74301 15.3021 4.89579C15.5174 5.04857 15.6667 5.24996 15.75 5.49996L17.5 10.5V17.1666C17.5 17.4027 17.4201 17.6007 17.2604 17.7604C17.1007 17.9201 16.9028 18 16.6667 18H15.8333C15.5972 18 15.3993 17.9201 15.2396 17.7604C15.0799 17.6007 15 17.4027 15 17.1666V16.3333H5ZM4.83333 8.83329H15.1667L14.2917 6.33329H5.70833L4.83333 8.83329ZM6.25 13.8333C6.59722 13.8333 6.89236 13.7118 7.13542 13.4687C7.37847 13.2257 7.5 12.9305 7.5 12.5833C7.5 12.2361 7.37847 11.9409 7.13542 11.6979C6.89236 11.4548 6.59722 11.3333 6.25 11.3333C5.90278 11.3333 5.60764 11.4548 5.36458 11.6979C5.12153 11.9409 5 12.2361 5 12.5833C5 12.9305 5.12153 13.2257 5.36458 13.4687C5.60764 13.7118 5.90278 13.8333 6.25 13.8333ZM13.75 13.8333C14.0972 13.8333 14.3924 13.7118 14.6354 13.4687C14.8785 13.2257 15 12.9305 15 12.5833C15 12.2361 14.8785 11.9409 14.6354 11.6979C14.3924 11.4548 14.0972 11.3333 13.75 11.3333C13.4028 11.3333 13.1076 11.4548 12.8646 11.6979C12.6215 11.9409 12.5 12.2361 12.5 12.5833C12.5 12.9305 12.6215 13.2257 12.8646 13.4687C13.1076 13.7118 13.4028 13.8333 13.75 13.8333Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <div>
                                                <span className='text-[16px] text-[#121212] group-hover:font-semibold transition-all duration-200'>Cars</span>
                                                <p className='text-[12px] text-[#666D80]'>Discreet chauffeur service with luxury vehicles</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </Dropdown>
                        </div>

                        {/* Experiences */}
                        <div className='relative'>
                            <div
                                className={`flex items-center ${openMenu === 'experiences' ? 'font-semibold' : ''} gap-1 px-[12px] py-[8px] text-[16px] cursor-pointer text-[#121212]`}
                                onMouseDown={(e) => {
                                    e.stopPropagation()
                                    toggleMenu('experiences')
                                }}

                            >
                                Experiences <IoIosArrowDown
                                    className={`transition-transform duration-300 ${openMenu === 'experiences' ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>
                            <Dropdown onClose={() => setOpenMenu(null)} top="top-[59px]" isOpen={openMenu === 'experiences'}>
                                <div className='w-full cursor-pointer'>
                                    <Link href={"/restaurants"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-2 py-2 rounded-md hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => setOpenMenu(null)}>
                                            {/* <IoMdRestaurant className='text-[24px] text-[#666D80] group-hover:text-[#121212] transition-all duration-200' /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9138" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9138)">
                                                    <path d="M3.64591 18L2.47925 16.8333L11.0209 8.29167C10.7709 7.70833 10.7362 7.04861 10.9167 6.3125C11.0973 5.57639 11.4931 4.91667 12.1042 4.33333C12.8404 3.59722 13.6598 3.16667 14.5626 3.04167C15.4654 2.91667 16.2015 3.13889 16.7709 3.70833C17.3404 4.27778 17.5626 5.01389 17.4376 5.91667C17.3126 6.81944 16.882 7.63889 16.1459 8.375C15.5626 8.98611 14.9029 9.38194 14.1667 9.5625C13.4306 9.74306 12.7709 9.70833 12.1876 9.45833L11.1459 10.5L17.4792 16.8333L16.3126 18L9.97925 11.7083L3.64591 18ZM6.10425 10.875L3.60425 8.375C2.85425 7.625 2.47925 6.72917 2.47925 5.6875C2.47925 4.64583 2.85425 3.75 3.60425 3L8.77091 8.20833L6.10425 10.875Z" fill="#1C1B1F" />
                                                </g>
                                            </svg>
                                            <div>
                                                <span className='text-[16px] text-[#121212] group-hover:font-semibold transition-all duration-200'>Restaurants</span>
                                                <p className='text-[12px] text-[#666D80]'>Priority access to acclaimed dining worldwide</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href={"/activities"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-2 py-2 rounded-md hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => setOpenMenu(null)}>
                                            {/* <FaShapes className='text-[24px] text-[#666D80] group-hover:text-[#121212] transition-all duration-200' /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9145" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9145)">
                                                    <path d="M1.66675 9.66663L5.83341 2.16663L10.0001 9.66663H1.66675ZM5.83341 18C4.91675 18 4.13203 17.6736 3.47925 17.0208C2.82647 16.368 2.50008 15.5833 2.50008 14.6666C2.50008 13.75 2.82647 12.9652 3.47925 12.3125C4.13203 11.6597 4.91675 11.3333 5.83341 11.3333C6.75008 11.3333 7.5348 11.6597 8.18758 12.3125C8.84036 12.9652 9.16675 13.75 9.16675 14.6666C9.16675 15.5833 8.84036 16.368 8.18758 17.0208C7.5348 17.6736 6.75008 18 5.83341 18ZM10.8334 18V11.3333H17.5001V18H10.8334ZM14.1667 9.66663C13.3751 8.99996 12.7119 8.43746 12.1772 7.97913C11.6424 7.52079 11.2154 7.11801 10.8959 6.77079C10.5765 6.42357 10.3473 6.09718 10.2084 5.79163C10.0695 5.48607 10.0001 5.15968 10.0001 4.81246C10.0001 4.18746 10.2188 3.65968 10.6563 3.22913C11.0938 2.79857 11.639 2.58329 12.2917 2.58329C12.6667 2.58329 13.0174 2.6701 13.3438 2.84371C13.6702 3.01732 13.9445 3.2569 14.1667 3.56246C14.389 3.2569 14.6633 3.01732 14.9897 2.84371C15.3161 2.6701 15.6667 2.58329 16.0417 2.58329C16.6945 2.58329 17.2397 2.79857 17.6772 3.22913C18.1147 3.65968 18.3334 4.18746 18.3334 4.81246C18.3334 5.15968 18.264 5.48607 18.1251 5.79163C17.9862 6.09718 17.757 6.42357 17.4376 6.77079C17.1181 7.11801 16.6911 7.52079 16.1563 7.97913C15.6216 8.43746 14.9584 8.99996 14.1667 9.66663Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <div>
                                                <span className='text-[16px] text-[#121212] group-hover:font-semibold transition-all duration-200'>Activities</span>
                                                <p className='text-[12px] text-[#666D80]'>Curated adventures tailored to your preferences</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href={"/events"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-2 py-2 rounded-md hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => setOpenMenu(null)}>
                                            {/* <MdLocalActivity className='text-[24px] text-[#666D80] group-hover:text-[#121212] transition-all duration-200' /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9152" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9152)">
                                                    <path d="M10.0001 14.6667C10.2362 14.6667 10.4341 14.5868 10.5938 14.4271C10.7536 14.2674 10.8334 14.0695 10.8334 13.8334C10.8334 13.5973 10.7536 13.3993 10.5938 13.2396C10.4341 13.0799 10.2362 13 10.0001 13C9.76397 13 9.56605 13.0799 9.40633 13.2396C9.24661 13.3993 9.16675 13.5973 9.16675 13.8334C9.16675 14.0695 9.24661 14.2674 9.40633 14.4271C9.56605 14.5868 9.76397 14.6667 10.0001 14.6667ZM10.0001 11.3334C10.2362 11.3334 10.4341 11.2535 10.5938 11.0938C10.7536 10.9341 10.8334 10.7362 10.8334 10.5C10.8334 10.2639 10.7536 10.066 10.5938 9.90629C10.4341 9.74657 10.2362 9.66671 10.0001 9.66671C9.76397 9.66671 9.56605 9.74657 9.40633 9.90629C9.24661 10.066 9.16675 10.2639 9.16675 10.5C9.16675 10.7362 9.24661 10.9341 9.40633 11.0938C9.56605 11.2535 9.76397 11.3334 10.0001 11.3334ZM10.0001 8.00004C10.2362 8.00004 10.4341 7.92018 10.5938 7.76046C10.7536 7.60074 10.8334 7.40282 10.8334 7.16671C10.8334 6.9306 10.7536 6.73268 10.5938 6.57296C10.4341 6.41324 10.2362 6.33337 10.0001 6.33337C9.76397 6.33337 9.56605 6.41324 9.40633 6.57296C9.24661 6.73268 9.16675 6.9306 9.16675 7.16671C9.16675 7.40282 9.24661 7.60074 9.40633 7.76046C9.56605 7.92018 9.76397 8.00004 10.0001 8.00004ZM16.6667 17.1667H3.33341C2.87508 17.1667 2.48272 17.0035 2.15633 16.6771C1.82994 16.3507 1.66675 15.9584 1.66675 15.5V12.1667C2.12508 12.1667 2.51744 12.0035 2.84383 11.6771C3.17022 11.3507 3.33341 10.9584 3.33341 10.5C3.33341 10.0417 3.17022 9.64935 2.84383 9.32296C2.51744 8.99657 2.12508 8.83337 1.66675 8.83337V5.50004C1.66675 5.04171 1.82994 4.64935 2.15633 4.32296C2.48272 3.99657 2.87508 3.83337 3.33341 3.83337H16.6667C17.1251 3.83337 17.5174 3.99657 17.8438 4.32296C18.1702 4.64935 18.3334 5.04171 18.3334 5.50004V8.83337C17.8751 8.83337 17.4827 8.99657 17.1563 9.32296C16.8299 9.64935 16.6667 10.0417 16.6667 10.5C16.6667 10.9584 16.8299 11.3507 17.1563 11.6771C17.4827 12.0035 17.8751 12.1667 18.3334 12.1667V15.5C18.3334 15.9584 18.1702 16.3507 17.8438 16.6771C17.5174 17.0035 17.1251 17.1667 16.6667 17.1667Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <div>
                                                <span className='text-[16px] text-[#121212] group-hover:font-semibold transition-all duration-200'>Event</span>
                                                <p className='text-[12px] text-[#666D80]'>VIP access to prestigious occasions</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </Dropdown>
                        </div>

                        {/* Magazines */}
                        <div className='flex items-center gap-1 px-[12px] py-[8px] text-[16px] cursor-pointer text-[#121212]'>
                            <Link href='/magazine'>Magazines</Link>
                        </div>

                        {/* About Us */}
                        <div className='whitespace-nowrap flex items-center gap-1 px-[12px] py-[8px] text-[16px] cursor-pointer text-[#121212]'>
                            <Link href='/about'>About us</Link>
                        </div>
                    </nav>

                    <div className='flex items-center gap-3'>
                        <div>
                            <button
                                onClick={openInquiry}
                                className="cursor-pointer bg-[#0074ec] rounded-[9999px] sm:w-[120px] md:w-[140px] lg:w-[152px] px-3 md:py-3 py-2 text-white font-[600]  md:text-[16px] text-[14px] whitespace-nowrap"
                                style={{ letterSpacing: "-0.36px", lineHeight: "140%" }}
                            >
                                Quick Inquiry
                            </button>

                        </div>

                        <div className="w-10 h-10 flex items-center justify-center lg:hidden">
                            <div
                                className="relative w-6 h-8 cursor-pointer flex items-center justify-center"
                                onClick={() => {
                                    setOpen(!open)
                                    setOpenMobileMenu(null)
                                }}
                            >
                                {/* Top bar */}
                                <span
                                    className={`absolute w-full h-[2px] bg-black rounded-md transition-all duration-300 ease-in-out ${open ? "rotate-45 translate-y-0" : "-translate-y-[8px]"
                                        }`}
                                ></span>

                                {/* Middle bar */}
                                <span
                                    className={`absolute w-full h-[2px] bg-black rounded-md transition-all duration-300 ease-in-out ${open ? "opacity-0" : "translate-y-0"
                                        }`}
                                ></span>

                                {/* Bottom bar */}
                                <span
                                    className={`absolute w-full h-[2px] bg-black rounded-md transition-all duration-300 ease-in-out ${open ? "-rotate-45 translate-y-0" : "translate-y-[8px]"
                                        }`}
                                ></span>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>


                <div
                    className={`bg-white rounded-[20px] absolute w-full min-h-[400px] top-[calc(100%+8px)] left-0 border border-[#E3E3E3] 
                    overflow-hidden transform transition-all duration-300 ease-in-out
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
                `}
                >
                    <div className='w-full h-full p-4'>
                        <div className='w-full'>
                            <div className={`flex justify-between items-center p-2 cursor-pointer ${openMobileMenu === 'accommodation' ? 'font-semibold text-[#121212]' : 'text-[#666D80]'} `} onClick={() => toggleMobileMenu('accommodation')}>
                                Accommodation <IoIosArrowDown
                                    className={`text-[20px] transition-transform duration-300 ${openMobileMenu === 'accommodation' ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>

                            <div
                                className={`mt-1 transition-all duration-300 ease-in-out transform-gpu w-full overflow-hidden
                            ${openMobileMenu === 'accommodation'
                                        ? "opacity-100 translate-y-0 max-h-[500px] pointer-events-auto"
                                        : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
                        `}
                            >
                                <div className='w-full cursor-pointer'>
                                    <Link href={"/chalets"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-3 py-2 hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => {
                                            setOpen(!open)
                                            setOpenMobileMenu(null)
                                        }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                                className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200"
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
                                            <span className='text-[16px] text-[#121212]'>Chalets</span>
                                        </div>
                                    </Link>

                                    <Link href={"/apartments"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-3 py-2 hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => {
                                            setOpen(!open)
                                            setOpenMobileMenu(null)
                                        }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="21"
                                                viewBox="0 0 20 21"
                                                fill="none"
                                                className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200"
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
                                            <span className='text-[16px] text-[#121212]'>Apartments</span>
                                        </div>
                                    </Link>

                                    <Link href={"/hotels"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-3 py-2 hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => {
                                            setOpen(!open)
                                            setOpenMobileMenu(null)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9056" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9056)">
                                                    <path d="M14.1666 8H15.8333V6.33333H14.1666V8ZM14.1666 11.3333H15.8333V9.66667H14.1666V11.3333ZM14.1666 14.6667H15.8333V13H14.1666V14.6667ZM0.833252 18V9.66667L6.66659 5.5L12.4999 9.66667V18H8.33325V13H4.99992V18H0.833252ZM14.1666 18V8.83333L8.33325 4.625V3H19.1666V18H14.1666Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <span className='text-[16px] text-[#121212] '>Hotels</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>


                        </div>

                        <div className='w-full'>
                            <div className={`flex justify-between items-center p-2 cursor-pointer ${openMobileMenu === 'transfer' ? 'font-semibold text-[#121212]' : 'text-[#666D80]'} `} onClick={() => toggleMobileMenu('transfer')}>
                                Transfer <IoIosArrowDown
                                    className={`text-[20px] transition-transform duration-300 ${openMobileMenu === 'transfer' ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>

                            <div
                                className={`mt-1 transition-all duration-300 ease-in-out transform-gpu w-full overflow-hidden
                            ${openMobileMenu === 'transfer'
                                        ? "opacity-100 translate-y-0 max-h-[500px] pointer-events-auto"
                                        : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
                        `}
                            >
                                <div className='w-full cursor-pointer'>
                                    <Link href={"/helicopters"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-3 py-2 hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => {
                                            setOpen(!open)
                                            setOpenMobileMenu(null)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <path d="M7.49992 9.33335V4.33335C6.11103 4.33335 4.93047 4.81946 3.95825 5.79169C2.98603 6.76391 2.49992 7.94446 2.49992 9.33335H7.49992ZM10.8333 16.8334H2.49992V15.1667H10.8333V16.8334ZM12.4999 14.3334H2.49992C2.04159 14.3334 1.64922 14.1702 1.32284 13.8438C0.996446 13.5174 0.833252 13.125 0.833252 12.6667V9.33335C0.833252 7.47224 1.47909 5.89585 2.77075 4.60419C4.06242 3.31252 5.63881 2.66669 7.49992 2.66669H12.4999V6.83335H16.6666L17.4999 5.16669H19.1666V11L12.4999 11.6667V14.3334ZM15.8333 1.83335H2.49992V0.166687H15.8333V1.83335Z" fill="currentColor" />
                                            </svg>
                                            <span className='text-[16px] text-[#121212]'>Helicopters</span>
                                        </div>
                                    </Link>

                                    <Link href={"/jets"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-3 py-2 hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => {
                                            setOpen(!open)
                                            setOpenMobileMenu(null)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9097" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9097)">
                                                    <path d="M8.27083 18.1041L6.20833 14.2708L2.375 12.2083L3.85417 10.75L6.875 11.2708L9 9.14581L2.39583 6.33331L4.14583 4.54165L12.1667 5.95831L14.75 3.37498C15.0694 3.05554 15.4653 2.89581 15.9375 2.89581C16.4097 2.89581 16.8056 3.05554 17.125 3.37498C17.4444 3.69442 17.6042 4.08679 17.6042 4.55206C17.6042 5.01734 17.4444 5.4097 17.125 5.72915L14.5208 8.33331L15.9375 16.3333L14.1667 18.1041L11.3333 11.5L9.20833 13.625L9.75 16.625L8.27083 18.1041Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <span className='text-[16px] text-[#121212]'>Jets</span>
                                        </div>
                                    </Link>

                                    <Link href={"/cars"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-3 py-2 hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => {
                                            setOpen(!open)
                                            setOpenMobileMenu(null)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9104" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9104)">
                                                    <path d="M5 16.3333V17.1666C5 17.4027 4.92014 17.6007 4.76042 17.7604C4.60069 17.9201 4.40278 18 4.16667 18H3.33333C3.09722 18 2.89931 17.9201 2.73958 17.7604C2.57986 17.6007 2.5 17.4027 2.5 17.1666V10.5L4.25 5.49996C4.33333 5.24996 4.48264 5.04857 4.69792 4.89579C4.91319 4.74301 5.15278 4.66663 5.41667 4.66663H14.5833C14.8472 4.66663 15.0868 4.74301 15.3021 4.89579C15.5174 5.04857 15.6667 5.24996 15.75 5.49996L17.5 10.5V17.1666C17.5 17.4027 17.4201 17.6007 17.2604 17.7604C17.1007 17.9201 16.9028 18 16.6667 18H15.8333C15.5972 18 15.3993 17.9201 15.2396 17.7604C15.0799 17.6007 15 17.4027 15 17.1666V16.3333H5ZM4.83333 8.83329H15.1667L14.2917 6.33329H5.70833L4.83333 8.83329ZM6.25 13.8333C6.59722 13.8333 6.89236 13.7118 7.13542 13.4687C7.37847 13.2257 7.5 12.9305 7.5 12.5833C7.5 12.2361 7.37847 11.9409 7.13542 11.6979C6.89236 11.4548 6.59722 11.3333 6.25 11.3333C5.90278 11.3333 5.60764 11.4548 5.36458 11.6979C5.12153 11.9409 5 12.2361 5 12.5833C5 12.9305 5.12153 13.2257 5.36458 13.4687C5.60764 13.7118 5.90278 13.8333 6.25 13.8333ZM13.75 13.8333C14.0972 13.8333 14.3924 13.7118 14.6354 13.4687C14.8785 13.2257 15 12.9305 15 12.5833C15 12.2361 14.8785 11.9409 14.6354 11.6979C14.3924 11.4548 14.0972 11.3333 13.75 11.3333C13.4028 11.3333 13.1076 11.4548 12.8646 11.6979C12.6215 11.9409 12.5 12.2361 12.5 12.5833C12.5 12.9305 12.6215 13.2257 12.8646 13.4687C13.1076 13.7118 13.4028 13.8333 13.75 13.8333Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <span className='text-[16px] text-[#121212] '>Cars</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>


                        </div>

                        <div className='w-full'>
                            <div className={`flex justify-between items-center p-2 cursor-pointer ${openMobileMenu === 'experience' ? 'font-semibold text-[#121212]' : 'text-[#666D80]'} `} onClick={() => toggleMobileMenu('experience')}>
                                Experiences <IoIosArrowDown
                                    className={`text-[20px] transition-transform duration-300 ${openMobileMenu === 'experience' ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>

                            <div
                                className={`mt-1 transition-all duration-300 ease-in-out transform-gpu w-full overflow-hidden
                            ${openMobileMenu === 'experience'
                                        ? "opacity-100 translate-y-0 max-h-[500px] pointer-events-auto"
                                        : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
                        `}
                            >
                                <div className='w-full cursor-pointer'>
                                    <Link href={"/restaurants"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-3 py-2 hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => {
                                            setOpen(!open)
                                            setOpenMobileMenu(null)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9138" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9138)">
                                                    <path d="M3.64591 18L2.47925 16.8333L11.0209 8.29167C10.7709 7.70833 10.7362 7.04861 10.9167 6.3125C11.0973 5.57639 11.4931 4.91667 12.1042 4.33333C12.8404 3.59722 13.6598 3.16667 14.5626 3.04167C15.4654 2.91667 16.2015 3.13889 16.7709 3.70833C17.3404 4.27778 17.5626 5.01389 17.4376 5.91667C17.3126 6.81944 16.882 7.63889 16.1459 8.375C15.5626 8.98611 14.9029 9.38194 14.1667 9.5625C13.4306 9.74306 12.7709 9.70833 12.1876 9.45833L11.1459 10.5L17.4792 16.8333L16.3126 18L9.97925 11.7083L3.64591 18ZM6.10425 10.875L3.60425 8.375C2.85425 7.625 2.47925 6.72917 2.47925 5.6875C2.47925 4.64583 2.85425 3.75 3.60425 3L8.77091 8.20833L6.10425 10.875Z" fill="#1C1B1F" />
                                                </g>
                                            </svg>
                                            <span className='text-[16px] text-[#121212]'>Restaurants</span>
                                        </div>
                                    </Link>

                                    <Link href={"/activities"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-3 py-2 hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => {
                                            setOpen(!open)
                                            setOpenMobileMenu(null)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9152" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9152)">
                                                    <path d="M10.0001 14.6667C10.2362 14.6667 10.4341 14.5868 10.5938 14.4271C10.7536 14.2674 10.8334 14.0695 10.8334 13.8334C10.8334 13.5973 10.7536 13.3993 10.5938 13.2396C10.4341 13.0799 10.2362 13 10.0001 13C9.76397 13 9.56605 13.0799 9.40633 13.2396C9.24661 13.3993 9.16675 13.5973 9.16675 13.8334C9.16675 14.0695 9.24661 14.2674 9.40633 14.4271C9.56605 14.5868 9.76397 14.6667 10.0001 14.6667ZM10.0001 11.3334C10.2362 11.3334 10.4341 11.2535 10.5938 11.0938C10.7536 10.9341 10.8334 10.7362 10.8334 10.5C10.8334 10.2639 10.7536 10.066 10.5938 9.90629C10.4341 9.74657 10.2362 9.66671 10.0001 9.66671C9.76397 9.66671 9.56605 9.74657 9.40633 9.90629C9.24661 10.066 9.16675 10.2639 9.16675 10.5C9.16675 10.7362 9.24661 10.9341 9.40633 11.0938C9.56605 11.2535 9.76397 11.3334 10.0001 11.3334ZM10.0001 8.00004C10.2362 8.00004 10.4341 7.92018 10.5938 7.76046C10.7536 7.60074 10.8334 7.40282 10.8334 7.16671C10.8334 6.9306 10.7536 6.73268 10.5938 6.57296C10.4341 6.41324 10.2362 6.33337 10.0001 6.33337C9.76397 6.33337 9.56605 6.41324 9.40633 6.57296C9.24661 6.73268 9.16675 6.9306 9.16675 7.16671C9.16675 7.40282 9.24661 7.60074 9.40633 7.76046C9.56605 7.92018 9.76397 8.00004 10.0001 8.00004ZM16.6667 17.1667H3.33341C2.87508 17.1667 2.48272 17.0035 2.15633 16.6771C1.82994 16.3507 1.66675 15.9584 1.66675 15.5V12.1667C2.12508 12.1667 2.51744 12.0035 2.84383 11.6771C3.17022 11.3507 3.33341 10.9584 3.33341 10.5C3.33341 10.0417 3.17022 9.64935 2.84383 9.32296C2.51744 8.99657 2.12508 8.83337 1.66675 8.83337V5.50004C1.66675 5.04171 1.82994 4.64935 2.15633 4.32296C2.48272 3.99657 2.87508 3.83337 3.33341 3.83337H16.6667C17.1251 3.83337 17.5174 3.99657 17.8438 4.32296C18.1702 4.64935 18.3334 5.04171 18.3334 5.50004V8.83337C17.8751 8.83337 17.4827 8.99657 17.1563 9.32296C16.8299 9.64935 16.6667 10.0417 16.6667 10.5C16.6667 10.9584 16.8299 11.3507 17.1563 11.6771C17.4827 12.0035 17.8751 12.1667 18.3334 12.1667V15.5C18.3334 15.9584 18.1702 16.3507 17.8438 16.6771C17.5174 17.0035 17.1251 17.1667 16.6667 17.1667Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <span className='text-[16px] text-[#121212]'>Activities</span>
                                        </div>
                                    </Link>

                                    <Link href={"/events"}>
                                        <div className='rounded-[8px] pr-6 pl-2 flex items-center gap-3 py-2 hover:bg-[#F6F8FA] group transition-all duration-200' onClick={() => {
                                            setOpen(!open)
                                            setOpenMobileMenu(null)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-[#666D80] group-hover:text-[#121212] transition-all duration-200">
                                                <mask id="mask0_404_9152" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_404_9152)">
                                                    <path d="M10.0001 14.6667C10.2362 14.6667 10.4341 14.5868 10.5938 14.4271C10.7536 14.2674 10.8334 14.0695 10.8334 13.8334C10.8334 13.5973 10.7536 13.3993 10.5938 13.2396C10.4341 13.0799 10.2362 13 10.0001 13C9.76397 13 9.56605 13.0799 9.40633 13.2396C9.24661 13.3993 9.16675 13.5973 9.16675 13.8334C9.16675 14.0695 9.24661 14.2674 9.40633 14.4271C9.56605 14.5868 9.76397 14.6667 10.0001 14.6667ZM10.0001 11.3334C10.2362 11.3334 10.4341 11.2535 10.5938 11.0938C10.7536 10.9341 10.8334 10.7362 10.8334 10.5C10.8334 10.2639 10.7536 10.066 10.5938 9.90629C10.4341 9.74657 10.2362 9.66671 10.0001 9.66671C9.76397 9.66671 9.56605 9.74657 9.40633 9.90629C9.24661 10.066 9.16675 10.2639 9.16675 10.5C9.16675 10.7362 9.24661 10.9341 9.40633 11.0938C9.56605 11.2535 9.76397 11.3334 10.0001 11.3334ZM10.0001 8.00004C10.2362 8.00004 10.4341 7.92018 10.5938 7.76046C10.7536 7.60074 10.8334 7.40282 10.8334 7.16671C10.8334 6.9306 10.7536 6.73268 10.5938 6.57296C10.4341 6.41324 10.2362 6.33337 10.0001 6.33337C9.76397 6.33337 9.56605 6.41324 9.40633 6.57296C9.24661 6.73268 9.16675 6.9306 9.16675 7.16671C9.16675 7.40282 9.24661 7.60074 9.40633 7.76046C9.56605 7.92018 9.76397 8.00004 10.0001 8.00004ZM16.6667 17.1667H3.33341C2.87508 17.1667 2.48272 17.0035 2.15633 16.6771C1.82994 16.3507 1.66675 15.9584 1.66675 15.5V12.1667C2.12508 12.1667 2.51744 12.0035 2.84383 11.6771C3.17022 11.3507 3.33341 10.9584 3.33341 10.5C3.33341 10.0417 3.17022 9.64935 2.84383 9.32296C2.51744 8.99657 2.12508 8.83337 1.66675 8.83337V5.50004C1.66675 5.04171 1.82994 4.64935 2.15633 4.32296C2.48272 3.99657 2.87508 3.83337 3.33341 3.83337H16.6667C17.1251 3.83337 17.5174 3.99657 17.8438 4.32296C18.1702 4.64935 18.3334 5.04171 18.3334 5.50004V8.83337C17.8751 8.83337 17.4827 8.99657 17.1563 9.32296C16.8299 9.64935 16.6667 10.0417 16.6667 10.5C16.6667 10.9584 16.8299 11.3507 17.1563 11.6771C17.4827 12.0035 17.8751 12.1667 18.3334 12.1667V15.5C18.3334 15.9584 18.1702 16.3507 17.8438 16.6771C17.5174 17.0035 17.1251 17.1667 16.6667 17.1667Z" fill="currentColor" />
                                                </g>
                                            </svg>
                                            <span className='text-[16px] text-[#121212] '>Events</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>


                        </div>

                        <div className="w-full">
                            <Link
                                href="/magazine"
                                className="flex justify-between items-center p-2 cursor-pointer text-[#666D80]"
                            >
                                Magazine
                            </Link>
                        </div>

                        <div className="w-full">
                            <Link
                                href="/about"
                                className="flex justify-between items-center p-2 cursor-pointer text-[#666D80]"
                            >
                                About us
                            </Link>
                        </div>
                    </div>
                </div>

            </header>


        </>
    )
}

export default Navbar