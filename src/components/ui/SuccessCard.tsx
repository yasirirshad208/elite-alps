import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SuccessCard = ({ name, page, transferPage }: { name: string, page: string, transferPage: string }) => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <Image src="/check.png" width={45} height={45} alt="check" />

                <div className='font-large font-[600] text-[#121212] mt-3 mb-2'>
                    Thank you for your enquiry!
                </div>

                <div className='text-[14px] text-[#666D80] sm:px-4 px-2 text-center'>
                    Your request for {name} has been received. Our dedicated team will be in touch shortly to assist with your booking and ensure a seamless stay
                </div>
            </div>
            <div className='w-full h-[1px] bg-[#e3e3e3] my-3'></div>
            <div className='mt-3 flex flex-col gap-2'>
                
                <div className='text-[#121212] font-[600] text-[12px] mb-2 text-center'> Need a transfer from the airport or train station? <span className='text-[#666D80] !font-[400]'>Let us handle the details for you.</span></div>
                <Link href={"/"+transferPage.toLowerCase()}>
                <button
                    type="submit"
                    className={` font-medium font-[600] w-full text-white sm:py-3 py-2 rounded-[12px] transition-all duration-200 bg-[#0074ec] cursor-pointer`}
                >
                    Add Transfers to Your Stay
                </button>
                </Link>
<Link href={"/"+page.toLowerCase()}>
                 <button
                    type="submit"
                    className={`font-medium font-[600] w-full text-[#0074ec] sm:py-3 py-2 rounded-[12px] transition-all duration-200 bg-[#ffffff] border border-[#0074ec] cursor-pointer`}
                >
                    Browse More {page}
                </button>
                </Link>
            </div>
        </div>
    )
}

export default SuccessCard