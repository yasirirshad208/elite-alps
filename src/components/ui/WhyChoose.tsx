import Image from 'next/image'
import React, { ReactNode } from 'react'
import { FaRegStar } from 'react-icons/fa';
import { MdLockOutline, MdOutlineHeadphones, MdOutlineTranslate } from 'react-icons/md';
import { TfiMedall } from 'react-icons/tfi'

type CardData = {
    title: string;
    icon: ReactNode;
    text: string;
};

const WhyChoose = () => {
    const data: CardData[] = [
        {
            title: "Over 10 Years Alpine Expertise",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                <path d="M6.175 11.7L7.05 8.85L4.75 7H7.6L8.5 4.2L9.4 7H12.25L9.925 8.85L10.8 11.7L8.5 9.925L6.175 11.7ZM2.5 21V13.275C1.86667 12.575 1.375 11.775 1.025 10.875C0.675 9.975 0.5 9.01667 0.5 8C0.5 5.76667 1.275 3.875 2.825 2.325C4.375 0.775 6.26667 0 8.5 0C10.7333 0 12.625 0.775 14.175 2.325C15.725 3.875 16.5 5.76667 16.5 8C16.5 9.01667 16.325 9.975 15.975 10.875C15.625 11.775 15.1333 12.575 14.5 13.275V21L8.5 19L2.5 21ZM8.5 14C10.1667 14 11.5833 13.4167 12.75 12.25C13.9167 11.0833 14.5 9.66667 14.5 8C14.5 6.33333 13.9167 4.91667 12.75 3.75C11.5833 2.58333 10.1667 2 8.5 2C6.83333 2 5.41667 2.58333 4.25 3.75C3.08333 4.91667 2.5 6.33333 2.5 8C2.5 9.66667 3.08333 11.0833 4.25 12.25C5.41667 13.4167 6.83333 14 8.5 14ZM4.5 18.025L8.5 17L12.5 18.025V14.925C11.9167 15.2583 11.2875 15.5208 10.6125 15.7125C9.9375 15.9042 9.23333 16 8.5 16C7.76667 16 7.0625 15.9042 6.3875 15.7125C5.7125 15.5208 5.08333 15.2583 4.5 14.925V18.025Z" fill="#121212" />
            </svg>,
            text: "Unrivaled knowledge of luxury mountain destinations",
        },
        {
            title: "Handpicked Luxury Properties",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <mask id="mask0_140_13631" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_140_13631)">
                    <path d="M21.7998 18.7L18.7998 15.7L20.1998 14.3L23.1998 17.3L21.7998 18.7ZM18.1998 6.7L16.7998 5.3L19.7998 2.3L21.1998 3.7L18.1998 6.7ZM6.7998 6.7L3.7998 3.7L5.1998 2.3L8.1998 5.3L6.7998 6.7ZM3.1998 18.7L1.7998 17.3L4.7998 14.3L6.1998 15.7L3.1998 18.7ZM9.3498 16.825L12.4998 14.925L15.6498 16.85L14.8248 13.25L17.5998 10.85L13.9498 10.525L12.4998 7.125L11.0498 10.5L7.3998 10.825L10.1748 13.25L9.3498 16.825ZM6.3248 21L7.9498 13.975L2.4998 9.25L9.6998 8.625L12.4998 2L15.2998 8.625L22.4998 9.25L17.0498 13.975L18.6748 21L12.4998 17.275L6.3248 21Z" fill="#121212" />
                </g>
            </svg>,
            text: "Only the finest chalets meeting our exacting standards",
        },
        {
            title: "In-Resort Concierge Service",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <mask id="mask0_140_13640" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_140_13640)">
                    <path d="M9.5 21H5.5C4.95 21 4.47917 20.8042 4.0875 20.4125C3.69583 20.0208 3.5 19.55 3.5 19V12C3.5 10.75 3.7375 9.57917 4.2125 8.4875C4.6875 7.39583 5.32917 6.44583 6.1375 5.6375C6.94583 4.82917 7.89583 4.1875 8.9875 3.7125C10.0792 3.2375 11.25 3 12.5 3C13.75 3 14.9208 3.2375 16.0125 3.7125C17.1042 4.1875 18.0542 4.82917 18.8625 5.6375C19.6708 6.44583 20.3125 7.39583 20.7875 8.4875C21.2625 9.57917 21.5 10.75 21.5 12V19C21.5 19.55 21.3042 20.0208 20.9125 20.4125C20.5208 20.8042 20.05 21 19.5 21H15.5V13H19.5V12C19.5 10.05 18.8208 8.39583 17.4625 7.0375C16.1042 5.67917 14.45 5 12.5 5C10.55 5 8.89583 5.67917 7.5375 7.0375C6.17917 8.39583 5.5 10.05 5.5 12V13H9.5V21ZM7.5 15H5.5V19H7.5V15ZM17.5 15V19H19.5V15H17.5Z" fill="#121212" />
                </g>
            </svg>,
            text: "24/7 assistance from our experienced local team",
        },
        {
            title: "Multi-lingual Local Experts",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <mask id="mask0_140_13649" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_140_13649)">
                    <path d="M12.4 22L16.95 10H19.05L23.6 22H21.5L20.425 18.95H15.575L14.5 22H12.4ZM4.5 19L3.1 17.6L8.15 12.55C7.56667 11.9667 7.0375 11.3 6.5625 10.55C6.0875 9.8 5.65 8.95 5.25 8H7.35C7.68333 8.65 8.01667 9.21667 8.35 9.7C8.68333 10.1833 9.08333 10.6667 9.55 11.15C10.1 10.6 10.6708 9.82917 11.2625 8.8375C11.8542 7.84583 12.3 6.9 12.6 6H1.5V4H8.5V2H10.5V4H17.5V6H14.6C14.25 7.2 13.725 8.43333 13.025 9.7C12.325 10.9667 11.6333 11.9333 10.95 12.6L13.35 15.05L12.6 17.1L9.55 13.975L4.5 19ZM16.2 17.2H19.8L18 12.1L16.2 17.2Z" fill="#121212" />
                </g>
            </svg>,
            text: "Seamlessly navigate every aspect of your alpine journey",
        },
        {
            title: "Discreet & Personalized Planning",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <mask id="mask0_140_13658" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_140_13658)">
                    <path d="M6.5 22C5.95 22 5.47917 21.8042 5.0875 21.4125C4.69583 21.0208 4.5 20.55 4.5 20V10C4.5 9.45 4.69583 8.97917 5.0875 8.5875C5.47917 8.19583 5.95 8 6.5 8H7.5V6C7.5 4.61667 7.9875 3.4375 8.9625 2.4625C9.9375 1.4875 11.1167 1 12.5 1C13.8833 1 15.0625 1.4875 16.0375 2.4625C17.0125 3.4375 17.5 4.61667 17.5 6V8H18.5C19.05 8 19.5208 8.19583 19.9125 8.5875C20.3042 8.97917 20.5 9.45 20.5 10V20C20.5 20.55 20.3042 21.0208 19.9125 21.4125C19.5208 21.8042 19.05 22 18.5 22H6.5ZM6.5 20H18.5V10H6.5V20ZM12.5 17C13.05 17 13.5208 16.8042 13.9125 16.4125C14.3042 16.0208 14.5 15.55 14.5 15C14.5 14.45 14.3042 13.9792 13.9125 13.5875C13.5208 13.1958 13.05 13 12.5 13C11.95 13 11.4792 13.1958 11.0875 13.5875C10.6958 13.9792 10.5 14.45 10.5 15C10.5 15.55 10.6958 16.0208 11.0875 16.4125C11.4792 16.8042 11.95 17 12.5 17ZM9.5 8H15.5V6C15.5 5.16667 15.2083 4.45833 14.625 3.875C14.0417 3.29167 13.3333 3 12.5 3C11.6667 3 10.9583 3.29167 10.375 3.875C9.79167 4.45833 9.5 5.16667 9.5 6V8Z" fill="#121212" />
                </g>
            </svg>,
            text: "Attention to detail with absolute privacy",
        },
    ];
    return (
        <div className="bg-[#EFEFEF] lg:py-16 md:py-12 py-10">
            <div className="container">
                <div className='flex items-center justify-between lg:flex-row flex-col-reverse'>
                    <div className='flex-1'>
                        <div className="text-[#666D80] font-medium">//Why Choose Elite Alps</div>
                        <div className="heading-h1 text-[#121212] leading-[120%] mt-2">Tailored Luxury.</div>
                        <div className="heading-h1 text-[#121212] leading-[120%] mb-2">Seamless Experience.</div>
                        <div className="text-[#666D80] font-medium">
                            We distinguish ourselves through uncompromising <br className="hidden md:block" />
                            quality and attention to details.
                        </div>
                    </div>

                    <div className="relative md:flex-1 w-full h-[247px] ">
                        <Image
                            src="/why-choose.png"
                            alt="Why choose us"
                            fill
                            className="object-contain"
                        />
                    </div>


                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-4 gap-6 border-y border-[#e3e3e3] mt-10">
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className="sm:px-6 py-5 flex flex-col items-center gap-3 sm:border-r sm:border-b-0 border-b border-[#e3e3e3] sm:last:border-r-0 last:border-b-0"
                        >
                            <div className="py-2 px-3 rounded-[12px] bg-[#FFF] text-[#121212]">
                                {item.icon}
                            </div>

                            <div className="font-large font-[600] text-[#121212] sm:mt-5 mt-3 text-center">
                                {item.title}
                            </div>

                            <div className="font-regular text-[#666D80] text-center">
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default WhyChoose