"use client"
import { useModalStore } from '@/stores/modalStore';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const InquiryBtn = () => {
    const openInquiry = useModalStore((state) => state.openInquiry);
  return (
    <button className="sm:w-auto w-full px-6 py-3 bg-[#0074ec] cursor-pointer flex items-center justify-center text-white gap-2 rounded-[12px]" onClick={openInquiry}>
        <span className='font-medium font-[600]'>Submit Inquiry</span>
        <FaArrowUpLong className='rotate-[45deg] w-[16px] h-[16px]' />
    </button>
  )
}

export default InquiryBtn