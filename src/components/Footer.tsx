"use client"
import React from 'react'
import FooterSubscribe from './ui/FooterSubscribe'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname();

    const showNewsletter = pathname === '/' || pathname === '/magazine' || pathname === '/about';
    return (
        <footer className="relative">
            <div className="relative w-full bg-[url('/footer.webp')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70"></div>


                <div className="relative z-10 flex items-center justify-center flex-col h-full py-[40px] px-[20px] md:py-[60px] md:px-[40px] xl:py-[80px] xl:px-[64px]">
                    {showNewsletter && (
                        <div>
                            <div className="text-white text-center font-medium">//Our Newsletter</div>
                            <div className="heading-h1 !text-white text-center leading-[120%] my-2">Join the inner circle</div>
                            <div className="text-white text-center font-medium">
                                Be the first to access limited offers, seasonal openings, and Alpine inspiration.
                            </div>

                            <FooterSubscribe />
                        </div>
                    )}

                    <div className="container flex items-center justify-center flex-col">
                        <div className='sm:mt-[64px] mt-[40px] w-full max-w-[1140px] bg-white rounded-[24px] p-4 md:p-12 lg:p-[48px] flex flex-col md:flex-row  gap-[24px] md:gap-[40px] lg:gap-[64px]'>
                            <div>
                                {/* <div> */}
                                <Image src={"/logo.png"} width={103} height={62} alt='Logo' />
                                {/* </div> */}

                                <div className='sm:mt-[32px] mt-[24px] w-full max-w-[320px] font-medium text-[#666D80] break-words leading-snug'>
                                    Discover the finest selection of accommodation, transport and addresses
                                    in your winter paradise and save time to make the most of your holiday
                                </div>


                            </div>

                            <div className='flex gap-x-[28px] gap-y-[24px] sm:gap-[40px] w-full mx-auto lg:gap-[64px] flex-wrap'>

                                <div className='flex flex-col gap-3'>
                                    <div className='font-regular font-[600] text-[#666D80]'>Accommodation</div>

                                    <Link href="/chalets" className='font-regular font-[600] text-[#121212]'>Alpine Chalets</Link>
                                    <Link href="/apartments" className='font-regular font-[600] text-[#121212]'>Mountain Apartments</Link>
                                    <Link href="/hotels" className='font-regular font-[600] text-[#121212]'>Hotels</Link>
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <div className='font-regular font-[600] text-[#666D80]'>Transportation</div>

                                    <Link href="/cars" className='font-regular font-[600] text-[#121212]'>Car Transfer</Link>
                                    <Link href="/jets" className='font-regular font-[600] text-[#121212]'>Jet Transfer</Link>
                                    <Link href="/helicopters" className='font-regular font-[600] text-[#121212]'>Helicopter Transfer</Link>
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <div className='font-regular font-[600] text-[#666D80]'>Discover the Apls</div>

                                    <Link href="/restaurants" className='font-regular font-[600] text-[#121212]'>Alpine Dining Guide</Link>
                                    <Link href="/activities" className='font-regular font-[600] text-[#121212]'>Winter Experiences</Link>
                                    <Link href="/events" className='font-regular font-[600] text-[#121212]'>Seasonal Events</Link>
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <div className='font-regular font-[600] text-[#666D80]'>Company</div>

                                    <Link href="/contact" className='font-regular font-[600] text-[#121212]'>Contact us</Link>
                                    <Link href="/about" className='font-regular font-[600] text-[#121212]'>About us</Link>
                                    <Link href="/faqs" className='font-regular font-[600] text-[#121212]'>FAQ</Link>
                                    <Link href="/magazine" className='font-regular font-[600] text-[#121212]'>Magazine</Link>
                                </div>

                            </div>
                        </div>

                        <div className='sm:mt-[64px] mt-[40px] w-full border-t border-[#e3e3e3] '>
                            <div className='text-center flex justify-center flex-col md:flex-row items-center sm:pt-[32px] pt-[24px] md:gap-6 gap-4 text-white'>
                                <div>
                                    Copyright ©{new Date().getFullYear()}. Elite. All Rights Reserved.
                                </div>

                                <div className='flex gap-3 justify-center'>
                                    <Link href={"/policy"} className='hover:underline'>Privacy Policy</Link>
                                    <Link href={"/terms"} className='hover:underline'>Terms of service</Link>
                                </div>

                                <div className='flex items-center justify-center gap-3'>
                                    <a href={"/www.facebook.com"} target='_blank'><FaFacebook className='text-white text-[20px]' /></a>
                                    <a href={"/www.instagram.com"} target='_blank'><FaInstagram className='text-white text-[20px]' /></a>
                                    <a href={"/www.x.com"} target='_blank'><FaXTwitter className='text-white text-[20px]' /></a>
                                    <a href={"/www.linkedin.com"} target='_blank'><FaLinkedin className='text-white text-[20px]' /></a>
                                    <a href={"/www.youtube.com"} target='_blank'><FaYoutube className='text-white text-[20px]' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </footer>

    )
}

export default Footer