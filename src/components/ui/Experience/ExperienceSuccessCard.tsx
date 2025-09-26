import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useMediaQuery } from 'react-responsive'

type Props = {
  onClose: () => void
}

const ExperienceSuccessCard = ({onClose }: Props) => {
    const isMobile = useMediaQuery({ maxWidth: 639 })
    return (
        <div>
            {isMobile && (
                <div className='flex justify-end mb-4' onClick={onClose}>
                    <div className='rounded-[10000px] w-[35px] h-[35px] flex items-center justify-center text-[#121212] text-[18px] cursor-pointer border border-[#e3e3e3]'><RxCross2 /></div>
                </div>
            )}


            <div className='flex flex-col items-center'>
                <Image src="/check.png" width={45} height={45} alt="check" />

                <div className='font-large font-[600] text-[#121212] mt-3 mb-2'>
                    Thank you for the booking request!
                </div>

                <div className='text-[14px] text-[#666D80] sm:px-4 px-2 text-center'>
                    Your request has been received. Our team will confirm your reservation shortly.
                </div>
            </div>
            <div className='w-full h-[1px] bg-[#e3e3e3] my-3'></div>
            <div className='mt-3 flex flex-col gap-2'>

                <div className='text-[#121212] font-[600] text-[12px] mb-2 text-center'>While you wait, explore experiences that make your stay unforgettable.</div>
                <Link href={"/restaurants"}>
                    <button
                        type="submit"
                        className={` font-medium font-[600] w-full text-white sm:py-3 py-2 rounded-[12px] transition-all duration-200 bg-[#0074ec] cursor-pointer`}
                    >
                         Browse Experience
                    </button>
                </Link>
                <Link href={"/chalets"}>
                    <button
                        type="submit"
                        className={`font-medium font-[600] w-full text-[#0074ec] sm:py-3 py-2 rounded-[12px] transition-all duration-200 bg-[#ffffff] border border-[#0074ec] cursor-pointer`}
                    >
                        Browse Chalets
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ExperienceSuccessCard