"use client"
import { useModalStore } from '@/stores/modalStore';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const InquiryBtn = () => {
    const openInquiry = useModalStore((state) => state.openInquiry);
  return (
    <button className="sm:w-auto w-full px-6 py-3  border border-[#e3e3e3] cursor-pointer flex items-center justify-center gap-2 rounded-[160px]" onClick={openInquiry}>
        <span className='font-medium text-[#121212] font-[600]'>Quick Inquiry</span>
        <FaArrowUpLong className='rotate-[45deg] w-[16px] h-[16px]' />
    </button>
  )
}

export default InquiryBtn