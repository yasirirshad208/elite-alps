import AboutAchievements from "@/components/ui/AboutAchievements";
import InquiryBtn from "@/components/ui/InquiryBtn";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";

export default function About() {
    return (
        <>
            <section >
                <div
                    className="sm:px-0 px-4 relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("about.jpg")` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 z-0"></div>

                    {/* Content */}
                    <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
                        <div className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-[600] !text-white text-center leading-[120%] max-w-[750px]">
                            The Best Luxury Ski Chaltes In Europe
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-[40px] md:mt-[60px] lg:mt-[80px]">
                <div className="container">
                    <div className="flex justify-between sm:items-end gap-3 sm:flex-row flex-col flex-wrap">
                        <div className="flex flex-col gap-3">
                            <h1 className="heading-h1 mb-[12px] font-[600] leading-[120%]">Who Are We</h1>

                            <p className="font-medium max-w-[528px] text-[#666D80] leading-[140%]"> Get the latest insights, trends, and expert advice in our blog. Stay informed, inspired, and ahead of the curve.</p>
                        </div>

                        <div>
                            <InquiryBtn />
                        </div>
                    </div>

                   <div className="mt-[48px] flex items-center justify-between gap-[32px] flex-col lg:flex-row">
                     <div className="w-full lg:max-w-[616px]">
                        <div className="w-full md:text-[20px] text-[18px] font-[400] text-[#121212] leading-[120%]">Elite is your gateway to unforgettable travel experiences, luxurious accommodations, and charming chalets. We meticulously curate the best in travel, from exotic destinations to hidden gems, ensuring that every journey with us is extraordinary.</div>
                        <div className="w-full md:text-[20px] text-[18px] font-[400] text-[#121212] leading-[120%] mt-6">
                        At Elite, we are dedicated to crafting moments that inspire and memories that last. Explore the world with us and elevate your travel adventures to new heights.
                    </div>
                    </div>

                    <div className="h-full w-full lg:max-w-[483px]">
                        <img
                            src="/about-1.png"
                            alt="About"
                            className="w-full h-[218px] sm:h-[230px] md:h-[260px] lg:rounded-[0px] rounded-[12px] object-cover"
                        />
                    </div>
                   </div>


                </div>
            </section>

            <AboutAchievements />

            <section className="my-[40px] md:my-[60px] lg:my-[80px] ">
                <div className="container mx-auto">
                    <div className="w-full flex items-center flex-wrap justify-between gap-3 ">
                        <h1 className=" font-[600] heading-h1">
                            What We Offer
                        </h1>

                        <p className="text-[#666D80] font-medium max-w-[420px]">
                            At Elite, we specialize in curating travel experiences that are more than just destinations—they’re journeys filled with comfort, excitement, and local charm.
                        </p>

                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[48px]">
                        <div className="px-4 py-8 bg-white border-b border-r border-[#e3e3e3]
              lg:border-b md:border-b border-b
              lg:border-r md:border-r sm:border-r-0">
                            <div className="flex justify-center ">
                                <span className="bg-[#EDFAFF] px-[12px] py-[8px] rounded-[12px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <mask id="mask0_278_7393" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_278_7393)">
                                            <path d="M11.5 17C12.75 17 13.8125 16.5625 14.6875 15.6875C15.5625 14.8125 16 13.75 16 12.5V8H11.5C10.25 8 9.1875 8.4375 8.3125 9.3125C7.4375 10.1875 7 11.25 7 12.5C7 12.9333 7.05833 13.35 7.175 13.75C7.29167 14.15 7.46667 14.5333 7.7 14.9L7.3 15.3C7.11667 15.4833 7.025 15.7167 7.025 16C7.025 16.2833 7.11667 16.5167 7.3 16.7C7.48333 16.8833 7.71667 16.975 8 16.975C8.28333 16.975 8.51667 16.8833 8.7 16.7L9.1 16.3C9.46667 16.5333 9.85 16.7083 10.25 16.825C10.65 16.9417 11.0667 17 11.5 17ZM11.5 15C11.35 15 11.2 14.9833 11.05 14.95C10.9 14.9167 10.75 14.875 10.6 14.825L12.7 12.7C12.8833 12.5167 12.975 12.2833 12.975 12C12.975 11.7167 12.8833 11.4833 12.7 11.3C12.5167 11.1167 12.2833 11.025 12 11.025C11.7167 11.025 11.4833 11.1167 11.3 11.3L9.175 13.4C9.125 13.25 9.08333 13.1 9.05 12.95C9.01667 12.8 9 12.65 9 12.5C9 11.8 9.24167 11.2083 9.725 10.725C10.2083 10.2417 10.8 10 11.5 10H14V12.5C14 13.2 13.7583 13.7917 13.275 14.275C12.7917 14.7583 12.2 15 11.5 15ZM12 23L8.55 20.3L4.225 19.775L3.7 15.45L1 12L3.7 8.55L4.225 4.225L8.55 3.7L12 1L15.45 3.7L19.775 4.225L20.3 8.55L23 12L20.3 15.45L19.775 19.775L15.45 20.3L12 23ZM12 20.45L14.65 18.4L18 17.975L18.4 14.65L20.45 12L18.4 9.35L17.975 6.025L14.65 5.6L12 3.55L9.35 5.6L6 6.025L5.6 9.35L3.55 12L5.6 14.65L6.025 18L9.35 18.4L12 20.45Z" fill="#0074EC" />
                                        </g>
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2">Echo-Friendly Options</div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                Choose sustainable travel and accommodation options that respect the environment.
                            </div>
                        </div>
                        <div className="px-4 py-8 bg-white border-b border-r border-[#e3e3e3]
              lg:border-b md:border-b border-b
              lg:border-r md:border-r sm:border-r-0">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] px-[12px] py-[8px] rounded-[12px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <mask id="mask0_278_7402" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_278_7402)">
                                            <path d="M12 23V21H19V20H15V12H19V11C19 9.06667 18.3167 7.41667 16.95 6.05C15.5833 4.68333 13.9333 4 12 4C10.0667 4 8.41667 4.68333 7.05 6.05C5.68333 7.41667 5 9.06667 5 11V12H9V20H5C4.45 20 3.97917 19.8042 3.5875 19.4125C3.19583 19.0208 3 18.55 3 18V11C3 9.76667 3.2375 8.60417 3.7125 7.5125C4.1875 6.42083 4.83333 5.46667 5.65 4.65C6.46667 3.83333 7.42083 3.1875 8.5125 2.7125C9.60417 2.2375 10.7667 2 12 2C13.2333 2 14.3958 2.2375 15.4875 2.7125C16.5792 3.1875 17.5333 3.83333 18.35 4.65C19.1667 5.46667 19.8125 6.42083 20.2875 7.5125C20.7625 8.60417 21 9.76667 21 11V21C21 21.55 20.8042 22.0208 20.4125 22.4125C20.0208 22.8042 19.55 23 19 23H12ZM5 18H7V14H5V18ZM17 18H19V14H17V18Z" fill="#0074EC" />
                                        </g>
                                    </svg>

                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2">24/7 Customer Support
                            </div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                We re here for you around the clock, ensuring a smooth and enjoyable experience.
                            </div>
                        </div>
                        <div className="px-4 py-8 bg-white border-b border-[#e3e3e3]
              lg:border-b md:border-b border-b
              lg:border-r-0 md:border-r-0 sm:border-r-0">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] px-[12px] py-[8px] rounded-[12px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <mask id="mask0_278_7411" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_278_7411)">
                                            <path d="M16.7 14.5L20.5 11.25L23.5 11.5L19.1 15.325L20.4 21L17.85 19.45L16.7 14.5ZM14.35 7.2L13.3 4.75L14.45 2L16.75 7.425L14.35 7.2ZM7.35 16.825L10.5 14.925L13.65 16.85L12.825 13.25L15.6 10.85L11.95 10.525L10.5 7.125L9.05 10.5L5.4 10.825L8.175 13.25L7.35 16.825ZM4.325 21L5.95 13.975L0.5 9.25L7.7 8.625L10.5 2L13.3 8.625L20.5 9.25L15.05 13.975L16.675 21L10.5 17.275L4.325 21Z" fill="#0074EC" />
                                        </g>
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2">Affordable Luxury
                            </div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                Get the best value for your money with luxurious stays and activities at competitive prices.
                            </div>
                        </div>
                        <div className="px-4 py-8 bg-white border-r border-[#e3e3e3]
              lg:border-b-0 md:border-b border-b
              lg:border-r md:border-r sm:border-r-0">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] px-[12px] py-[8px] rounded-[12px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <mask id="mask0_278_7423" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_278_7423)">
                                            <path d="M10.5 15H13.5L12.925 11.775C13.2583 11.6083 13.5208 11.3667 13.7125 11.05C13.9042 10.7333 14 10.3833 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.3833 10.0958 10.7333 10.2875 11.05C10.4792 11.3667 10.7417 11.6083 11.075 11.775L10.5 15ZM12 22C9.68333 21.4167 7.77083 20.0875 6.2625 18.0125C4.75417 15.9375 4 13.6333 4 11.1V5L12 2L20 5V11.1C20 13.6333 19.2458 15.9375 17.7375 18.0125C16.2292 20.0875 14.3167 21.4167 12 22ZM12 19.9C13.7333 19.35 15.1667 18.25 16.3 16.6C17.4333 14.95 18 13.1167 18 11.1V6.375L12 4.125L6 6.375V11.1C6 13.1167 6.56667 14.95 7.7 16.6C8.83333 18.25 10.2667 19.35 12 19.9Z" fill="#0074EC" />
                                        </g>
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2">Secure Payments</div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                Book with confidence through our secure, trusted payment system.
                            </div>
                        </div>
                        <div className="px-4 py-8 bg-white border-r border-[#e3e3e3]
              lg:border-b-0 md:border-b border-b
              lg:border-r md:border-r sm:border-r-0">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] px-[12px] py-[8px] rounded-[12px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <mask id="mask0_278_7432" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_278_7432)">
                                            <path d="M21.4 14.25L14.25 21.4C14.05 21.6 13.825 21.75 13.575 21.85C13.325 21.95 13.075 22 12.825 22C12.575 22 12.325 21.95 12.075 21.85C11.825 21.75 11.6 21.6 11.4 21.4L2.575 12.575C2.39167 12.3917 2.25 12.1792 2.15 11.9375C2.05 11.6958 2 11.4417 2 11.175V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H11.175C11.4417 2 11.7 2.05417 11.95 2.1625C12.2 2.27083 12.4167 2.41667 12.6 2.6L21.4 11.425C21.6 11.625 21.7458 11.85 21.8375 12.1C21.9292 12.35 21.975 12.6 21.975 12.85C21.975 13.1 21.9292 13.3458 21.8375 13.5875C21.7458 13.8292 21.6 14.05 21.4 14.25ZM12.825 20L19.975 12.85L11.15 4H4V11.15L12.825 20ZM6.5 8C6.91667 8 7.27083 7.85417 7.5625 7.5625C7.85417 7.27083 8 6.91667 8 6.5C8 6.08333 7.85417 5.72917 7.5625 5.4375C7.27083 5.14583 6.91667 5 6.5 5C6.08333 5 5.72917 5.14583 5.4375 5.4375C5.14583 5.72917 5 6.08333 5 6.5C5 6.91667 5.14583 7.27083 5.4375 7.5625C5.72917 7.85417 6.08333 8 6.5 8Z" fill="#0074EC" />
                                        </g>
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2">Exclusive Deals
                            </div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                Access members-only discounts and special offers to save more on your next trip.
                            </div>
                        </div>
                        <div className="px-4 py-8 bg-white border-[#e3e3e3]
              lg:border-b-0 md:border-b-0 border-b-0
              lg:border-r-0 md:border-r-0 sm:border-r-0">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] px-[12px] py-[8px] rounded-[12px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <mask id="mask0_278_7441" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_278_7441)">
                                            <path d="M14 7V5H22V7H14ZM14 11V9H22V11H14ZM14 15V13H22V15H14ZM8 14C7.16667 14 6.45833 13.7083 5.875 13.125C5.29167 12.5417 5 11.8333 5 11C5 10.1667 5.29167 9.45833 5.875 8.875C6.45833 8.29167 7.16667 8 8 8C8.83333 8 9.54167 8.29167 10.125 8.875C10.7083 9.45833 11 10.1667 11 11C11 11.8333 10.7083 12.5417 10.125 13.125C9.54167 13.7083 8.83333 14 8 14ZM2 20V18.1C2 17.75 2.08333 17.4167 2.25 17.1C2.41667 16.7833 2.65 16.5333 2.95 16.35C3.7 15.9 4.49583 15.5625 5.3375 15.3375C6.17917 15.1125 7.06667 15 8 15C8.93333 15 9.82083 15.1125 10.6625 15.3375C11.5042 15.5625 12.3 15.9 13.05 16.35C13.35 16.5333 13.5833 16.7833 13.75 17.1C13.9167 17.4167 14 17.75 14 18.1V20H2ZM4.15 18H11.85C11.2667 17.6667 10.65 17.4167 10 17.25C9.35 17.0833 8.68333 17 8 17C7.31667 17 6.65 17.0833 6 17.25C5.35 17.4167 4.73333 17.6667 4.15 18ZM8 12C8.28333 12 8.52083 11.9042 8.7125 11.7125C8.90417 11.5208 9 11.2833 9 11C9 10.7167 8.90417 10.4792 8.7125 10.2875C8.52083 10.0958 8.28333 10 8 10C7.71667 10 7.47917 10.0958 7.2875 10.2875C7.09583 10.4792 7 10.7167 7 11C7 11.2833 7.09583 11.5208 7.2875 11.7125C7.47917 11.9042 7.71667 12 8 12Z" fill="#0074EC" />
                                        </g>
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2">Personal Travel Concierge</div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                Get a dedicated travel expert to assist with planning and bookings every step of the way.
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-[40px]">
                       <Link href="/contact">
                        <button className="sm:w-auto w-full px-6 py-3 bg-[#0074ec] cursor-pointer flex items-center gap-2 rounded-[12px]">
                            <span className='font-medium text-white font-[600]'>Contact us</span>
                            <FaArrowUpLong className='rotate-[45deg] w-[16px] h-[16px] text-white' />
                        </button>
                       </Link>
                    </div>
                </div>
            </section>

        </>
    )
}