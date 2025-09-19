import Link from 'next/link'
import React from 'react'

const NoRecord = ({ page }: { page: string }) => {
    return (
        <div className='flex flex-col flex-end gap-4 w-full'>
            {/* <span className='text-[#666D80] font-semibold text-end'>0 Results Found</span> */}

            <div className='flex flex-col justify-center items-center gap-2 self-stretch'>
                <div className='py-4 flex flex-col items-center justify-center gap-[24px] self-stretch'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                        <g clip-path="url(#clip0_1492_11254)">
                            <path d="M48 24.5C48 31.1 45.4 37.1 41 41.5C36.6 45.9 30.6 48.5 24 48.5C10.8 48.5 0 37.7 0 24.5C0 11.3 10.8 0.5 24 0.5C37.2 0.5 48 11.3 48 24.5Z" fill="#E9E9F4" />
                            <path d="M39 36.4998L34 31.4998C36.2 28.6998 37.4 25.2998 37.4 21.4998C37.4 12.6998 30.2 5.2998 21.2 5.2998C12.2 5.2998 5 12.4998 5 21.4998C5 30.4998 12.2 37.6998 21.2 37.6998C25 37.6998 28.4 36.4998 31.2 34.2998L36.2 39.2998C37 40.0998 38.2 40.0998 39 39.2998C39.6 38.6998 39.6 37.2998 39 36.4998ZM9 21.6998C9 15.0998 14.4 9.4998 21.2 9.4998C28 9.4998 33.4 14.8998 33.4 21.6998C33.4 28.2998 28 33.8998 21.2 33.8998C14.6 33.8998 9 28.2998 9 21.6998Z" fill="#D5D5E2" />
                            <path d="M26.4 23.9C27.6 23.9 28.6 22.9 28.6 21.7C28.6 20.5 27.6 19.5 26.4 19.5H16C14.8 19.5 14 20.5 14 21.7C14 22.9 15 23.9 16.2 23.9H26.4Z" fill="#BEBECE" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1492_11254">
                                <rect width="48" height="48" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='text-[20px] text-[#121212] text-center font-semibold leading-[120%] px-4'>
                            We couldn’t find any [{page}] with those filters.
                        </div>

                        <div className='text-[#666D80] text-center text-[14px]'>
                            Try tweaking the filters, adjusting your dates, or exploring nearby locations.
                        </div>
                    </div>
                </div>

                <div className='p-[24px] flex items-center flex-col sm:flex-row gap-[24px] self-stretch rounded-[24px] bg-[#F8FAFB]'>
                    <div className='bg-transparent flex gap-3 items-center flex-[1_0_0]'>
                        <img src="/elip.svg" alt="df" />

                        <div className='flex flex-col justify-center gap-2'>
                            <div className='text-[20px] text-[#121212] font-semibold leading-[120%]'>
                                Didn’t find what you need?
                            </div>

                            <div className='text-[#666D80] text-[14px]'>
                                Our team can recommend tailored options to suit your preferences.
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="flex sm:w-[152px] w-full px-[12px] py-[12px] justify-center items-center gap-[8px] 
                 rounded-full bg-[#0074EC] text-white font-medium"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default NoRecord