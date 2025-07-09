import ContactForm from "@/components/ui/ContactForm"
import Image from "next/image"


export default function Contact() {
    return (
        <>
            <section className="lg:mt-[130px] md:mt-[110px] mt-[80px] mb-[40px] md:mb-[60px] mb-[40px]">
                <div className="container flex items-center flex-col lg:flex-row gap-[32px]">
                    <div className="flex-1 lg:w-auto w-full">
                        <div className="lg:block hidden">
                            <Image width={640} height={327} className=" rounded-[23px]" src={"/contact.jpg"} alt="contact" />
                        </div>

                        <div className="my-[24px]">
                            <div className="text-[32px] text-[#121212] font-[600]">Contact Information</div>
                            <div className="text-[16px] text-[#666D80] mt-[12px]">We're Just a Call or Message Away From Making Your Travel Dreams Come True</div>
                        </div>

                        <div className="h-[1px] w-full bg-[#e3e3e3]"></div>

                        <div className="stretch-self flex lg:items-center gap-[24px] flex-wrap sm:flex-row flex-col px-[16px] py-[32px]">
                            <div className="md:w-[64px] md:h-[64px] w-[48px] h-[48px] border border-[#e3e3e3] rounded-[12px] flex items-center justify-center ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5.5 h-5.5 md:w-8 md:h-8"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <mask id="mask0_325_9118" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                        <rect width="32" height="32" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_325_9118)">
                                        <path d="M5.33464 26.6666C4.6013 26.6666 3.97352 26.4055 3.4513 25.8833C2.92908 25.3611 2.66797 24.7333 2.66797 24V7.99998C2.66797 7.26665 2.92908 6.63887 3.4513 6.11665C3.97352 5.59442 4.6013 5.33331 5.33464 5.33331H26.668C27.4013 5.33331 28.0291 5.59442 28.5513 6.11665C29.0735 6.63887 29.3346 7.26665 29.3346 7.99998V24C29.3346 24.7333 29.0735 25.3611 28.5513 25.8833C28.0291 26.4055 27.4013 26.6666 26.668 26.6666H5.33464ZM16.0013 17.3333L5.33464 10.6666V24H26.668V10.6666L16.0013 17.3333ZM16.0013 14.6666L26.668 7.99998H5.33464L16.0013 14.6666ZM5.33464 10.6666V7.99998V24V10.6666Z" fill="#121212" />
                                    </g>
                                </svg>
                            </div>

                            <div className="flex flex-col gap-2 flex-[1_0_0]">
                                <div className="text-[#121212] font-[600]">Contact</div>
                                <div className="text-[16px] text-[#666D80]">Our friendly team is here to help</div>
                            </div>

                            <div className="flex items-center">
                                <div className="text-[#121212] font-[600]">hi@elite.com</div>
                            </div>
                        </div>

                        <div className="h-[1px] w-full bg-[#e3e3e3]"></div>

                        <div className="stretch-self flex lg:items-center gap-[24px] flex-wrap sm:flex-row flex-col px-[16px] py-[32px]">
                            <div className="md:w-[64px] md:h-[64px] w-[48px] h-[48px] border border-[#e3e3e3] rounded-[12px] flex items-center justify-center ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5.5 h-5.5 md:w-8 md:h-8"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <mask id="mask0_325_9128" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                        <rect width="32" height="32" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_325_9128)">
                                        <path d="M26.6 28C23.8222 28 21.0778 27.3944 18.3667 26.1833C15.6556 24.9722 13.1889 23.2556 10.9667 21.0333C8.74444 18.8111 7.02778 16.3444 5.81667 13.6333C4.60556 10.9222 4 8.17778 4 5.4C4 5 4.13333 4.66667 4.4 4.4C4.66667 4.13333 5 4 5.4 4H10.8C11.1111 4 11.3889 4.10556 11.6333 4.31667C11.8778 4.52778 12.0222 4.77778 12.0667 5.06667L12.9333 9.73333C12.9778 10.0889 12.9667 10.3889 12.9 10.6333C12.8333 10.8778 12.7111 11.0889 12.5333 11.2667L9.3 14.5333C9.74444 15.3556 10.2722 16.15 10.8833 16.9167C11.4944 17.6833 12.1667 18.4222 12.9 19.1333C13.5889 19.8222 14.3111 20.4611 15.0667 21.05C15.8222 21.6389 16.6222 22.1778 17.4667 22.6667L20.6 19.5333C20.8 19.3333 21.0611 19.1833 21.3833 19.0833C21.7056 18.9833 22.0222 18.9556 22.3333 19L26.9333 19.9333C27.2444 20.0222 27.5 20.1833 27.7 20.4167C27.9 20.65 28 20.9111 28 21.2V26.6C28 27 27.8667 27.3333 27.6 27.6C27.3333 27.8667 27 28 26.6 28ZM8.03333 12L10.2333 9.8L9.66667 6.66667H6.7C6.81111 7.57778 6.96667 8.47778 7.16667 9.36667C7.36667 10.2556 7.65556 11.1333 8.03333 12ZM19.9667 23.9333C20.8333 24.3111 21.7167 24.6111 22.6167 24.8333C23.5167 25.0556 24.4222 25.2 25.3333 25.2667V22.3333L22.2 21.7L19.9667 23.9333Z" fill="#121212" />
                                    </g>
                                </svg>
                            </div>

                            <div className="flex flex-col gap-2 flex-[1_0_0]">
                                <div className="text-[#121212] font-[600]">Phone Number</div>
                                <div className="text-[16px] text-[#666D80]">Mon-Fri from 8am to 5pm.</div>
                            </div>

                            <div className="flex items-center">
                                <div className="text-[#121212] font-[600]">+1 (555) 000-0000</div>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-[#e3e3e3]"></div>

                        <div className="text-[#121212] text-[14px] mt-[24px]">Need something else? Use the contact form to get in touch.</div>
                    </div>

                    <div className="flex-1 lg:w-auto w-full">
                        <div className="mb-[40px]">
                            <div className="heading-h1 text-[#121212] font-[600]">Get In Touch</div>
                            <div className="text-[16px] text-[#666D80] mt-[12px]">Our friendly team would love to hear from you.</div>

                        </div>
                        <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 " style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }}>
                            <ContactForm />
                        </div>
                    </div>

                    <div className="w-full lg:hidden block">
                        <Image width={840} height={327} className="w-full lg:w-[840px] h-[327px]  rounded-[23px]" src={"/contact.jpg"} alt="contact" />
                    </div>
                </div>
            </section>
        </>
    )
}