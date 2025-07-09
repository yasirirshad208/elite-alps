import InquiryBtn from "@/components/ui/InquiryBtnBlue";
import Image from "next/image";

export default function Faqs() {
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
                    <div className="flex items-center flex-col gap-3 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
                        <div className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-[600] !text-white text-center leading-[120%] max-w-[750px]">
                            Frequently Asked Questions
                        </div>

                        <div className="text-center font-[400] font-medium text-white">Have questions? We’re here to help.</div>
                    </div>
                </div>
            </section>

            <section className="my-[40px] md:my-[60px]">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
                        <div className="p-3 bg-white border border-[#e3e3e3] rounded-[12px]">
                            <div className="flex justify-center ">
                                <span className="bg-[#EDFAFF] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M10.6681 7.42222V14.3911M7.1837 10.9067H14.1526M19.3793 10.9067C19.3793 15.7177 15.4792 19.6178 10.6681 19.6178C5.85713 19.6178 1.95703 15.7177 1.95703 10.9067C1.95703 6.09565 5.85713 2.19556 10.6681 2.19556C15.4792 2.19556 19.3793 6.09565 19.3793 10.9067Z" stroke="#0074EC" stroke-width="1.74222" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2"> Can I customize my stay with specific activities or events?</div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                Yes, we offer tailor-made packages to suit your preferences, including personalized activities and events.
                            </div>
                        </div>
                        <div className="p-3 bg-white border border-[#e3e3e3] rounded-[12px]">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10 22V15.65L11.625 11H20.375L22 15.65V22H20V20.5H12V22H10ZM12 14.5H20L19.3 12.5H12.7L12 14.5ZM13 18.5C13.2833 18.5 13.521 18.404 13.713 18.212C13.905 18.02 14.0007 17.7827 14 17.5C13.9993 17.2173 13.9033 16.98 13.712 16.788C13.5207 16.596 13.2833 16.5 13 16.5C12.7167 16.5 12.4793 16.596 12.288 16.788C12.0967 16.98 12.0007 17.2173 12 17.5C11.9993 17.7827 12.0953 18.0203 12.288 18.213C12.4807 18.4057 12.718 18.5013 13 18.5ZM19 18.5C19.2833 18.5 19.521 18.404 19.713 18.212C19.905 18.02 20.0007 17.7827 20 17.5C19.9993 17.2173 19.9033 16.98 19.712 16.788C19.5207 16.596 19.2833 16.5 19 16.5C18.7167 16.5 18.4793 16.596 18.288 16.788C18.0967 16.98 18.0007 17.2173 18 17.5C17.9993 17.7827 18.0953 18.0203 18.288 18.213C18.4807 18.4057 18.718 18.5013 19 18.5ZM6 14V12H8V14H6ZM11 8V6H13V8H11ZM6 18V16H8V18H6ZM6 22V20H8V22H6ZM2 22V8H7V2H17V9H15V4H9V10H4V22H2ZM11.5 19H20.5V16H11.5V19Z" fill="#0074EC" />
                                    </svg>

                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2"> Is transport available for off-site activities?
                            </div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                Yes, transport is available for both on-site and off-site activities as part of your booking.
                            </div>
                        </div>
                        <div className="p-3 bg-white border border-[#e3e3e3] rounded-[12px]">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M5.17736 4.74785L17.4949 17.0654M20.0472 10.9066C20.0472 15.7176 16.1471 19.6177 11.3361 19.6177C6.5251 19.6177 2.625 15.7176 2.625 10.9066C2.625 6.09559 6.5251 2.1955 11.3361 2.1955C16.1471 2.1955 20.0472 6.09559 20.0472 10.9066Z" stroke="#0074EC" stroke-width="1.74222" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2">What is your cancellation policy?
                            </div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
                            </div>
                        </div>
                        <div className="p-3 bg-white border border-[#e3e3e3] rounded-[12px]">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M11.618 19.1634L8.06797 15.6134L9.51797 14.1634L11.618 16.2634L15.818 12.0634L17.268 13.5134L11.618 19.1634ZM3.66797 22.8134V4.81335H6.66797V2.81335H8.66797V4.81335H16.668V2.81335H18.668V4.81335H21.668V22.8134H3.66797ZM5.66797 20.8134H19.668V10.8134H5.66797V20.8134ZM5.66797 8.81335H19.668V6.81335H5.66797V8.81335Z" fill="#0074EC" />
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2"> How can I check availability and book?</div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                You can check availability and make bookings directly through our website, or contact us for personalized assistance.                            </div>
                        </div>
                        <div className="p-3 bg-white border border-[#e3e3e3] rounded-[12px]">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <g clip-path="url(#clip0_278_8645)">
                                            <path d="M20.9766 20.4344C21.7422 20.8094 22.375 21.3368 22.875 22.0165C23.375 22.6962 23.6914 23.4618 23.8242 24.3134H22.5352C22.4492 23.868 22.2891 23.454 22.0547 23.0712C21.8203 22.6884 21.5352 22.3602 21.1992 22.0868C20.8633 21.8134 20.4844 21.5946 20.0625 21.4305C19.6406 21.2665 19.2031 21.1884 18.75 21.1962C18.2891 21.1962 17.8516 21.2743 17.4375 21.4305C17.0234 21.5868 16.6445 21.8016 16.3008 22.0751C15.957 22.3485 15.6719 22.6805 15.4453 23.0712C15.2188 23.4618 15.0586 23.8759 14.9648 24.3134H13.6758C13.8008 23.4696 14.1133 22.7079 14.6133 22.0282C15.1133 21.3485 15.75 20.8173 16.5234 20.4344C16.0781 20.0829 15.7344 19.6571 15.4922 19.1571C15.25 18.6571 15.125 18.1259 15.1172 17.5634C15.1172 17.2118 15.1641 16.8719 15.2578 16.5438C15.3516 16.2157 15.4922 15.9071 15.6797 15.618C15.8672 15.329 16.0898 15.0712 16.3477 14.8446C16.6055 14.618 16.8945 14.4266 17.2148 14.2704C17.0039 13.9657 16.7617 13.6962 16.4883 13.4618C16.2148 13.2274 15.918 13.0204 15.5977 12.8407C15.2773 12.661 14.9414 12.5321 14.5898 12.454C14.2383 12.3759 13.875 12.329 13.5 12.3134C12.875 12.3134 12.2773 12.4344 11.707 12.6766C11.1367 12.9188 10.6406 13.2743 10.2188 13.743C10.4062 14.2509 10.5 14.7743 10.5 15.3134C10.5 16.0321 10.3398 16.7079 10.0195 17.3407C9.69922 17.9735 9.25 18.5048 8.67188 18.9344C9.17969 19.1923 9.63672 19.5087 10.043 19.8837C10.4492 20.2587 10.8008 20.6805 11.0977 21.1493C11.3945 21.618 11.6172 22.118 11.7656 22.6493C11.9141 23.1805 11.9922 23.7352 12 24.3134H10.5C10.5 23.6962 10.3828 23.1141 10.1484 22.5673C9.91406 22.0204 9.59375 21.5438 9.1875 21.1376C8.78125 20.7313 8.30078 20.4071 7.74609 20.1649C7.19141 19.9227 6.60938 19.8055 6 19.8134C5.375 19.8134 4.79297 19.9305 4.25391 20.1649C3.71484 20.3993 3.23828 20.7196 2.82422 21.1259C2.41016 21.5321 2.08594 22.0126 1.85156 22.5673C1.61719 23.1219 1.5 23.704 1.5 24.3134H0C0 23.743 0.078125 23.1923 0.234375 22.661C0.390625 22.1298 0.613281 21.6298 0.902344 21.161C1.19141 20.6923 1.53906 20.2704 1.94531 19.8954C2.35156 19.5204 2.8125 19.2001 3.32812 18.9344C2.75 18.5048 2.30078 17.9735 1.98047 17.3407C1.66016 16.7079 1.5 16.0321 1.5 15.3134C1.5 14.6962 1.61719 14.1141 1.85156 13.5673C2.08594 13.0204 2.40625 12.5438 2.8125 12.1376C3.21875 11.7313 3.69531 11.4071 4.24219 11.1649C4.78906 10.9227 5.375 10.8055 6 10.8134C6.66406 10.8134 7.29297 10.954 7.88672 11.2352C8.48047 11.5165 8.99609 11.9071 9.43359 12.4071C9.63672 12.2118 9.85547 12.036 10.0898 11.8798C10.3242 11.7235 10.5703 11.5751 10.8281 11.4344C10.25 11.0048 9.80078 10.4735 9.48047 9.8407C9.16016 9.20789 9 8.5321 9 7.81335C9 7.19617 9.11719 6.61414 9.35156 6.06726C9.58594 5.52039 9.90625 5.04382 10.3125 4.63757C10.7188 4.23132 11.1953 3.9071 11.7422 3.66492C12.2891 3.42273 12.875 3.30554 13.5 3.31335C14.1172 3.31335 14.6992 3.43054 15.2461 3.66492C15.793 3.89929 16.2695 4.2196 16.6758 4.62585C17.082 5.0321 17.4062 5.51257 17.6484 6.06726C17.8906 6.62195 18.0078 7.20398 18 7.81335C18 8.5321 17.8398 9.20789 17.5195 9.8407C17.1992 10.4735 16.75 11.0048 16.1719 11.4344C16.7188 11.7235 17.2109 12.0751 17.6484 12.4891C18.0859 12.9032 18.457 13.3837 18.7617 13.9305C19.2617 13.9305 19.7305 14.0243 20.168 14.2118C20.6055 14.3993 20.9922 14.661 21.3281 14.9969C21.6641 15.3329 21.9219 15.7157 22.1016 16.1454C22.2812 16.5751 22.375 17.0477 22.3828 17.5634C22.3828 18.1259 22.2617 18.6571 22.0195 19.1571C21.7773 19.6571 21.4297 20.0829 20.9766 20.4344ZM6 18.3134C6.41406 18.3134 6.80078 18.2352 7.16016 18.079C7.51953 17.9227 7.83984 17.7079 8.12109 17.4344C8.40234 17.161 8.61719 16.8446 8.76562 16.4852C8.91406 16.1259 8.99219 15.7352 9 15.3134C9 14.8993 8.92188 14.5126 8.76562 14.1532C8.60938 13.7938 8.39453 13.4735 8.12109 13.1923C7.84766 12.911 7.53125 12.6962 7.17188 12.5477C6.8125 12.3993 6.42188 12.3212 6 12.3134C5.58594 12.3134 5.19922 12.3915 4.83984 12.5477C4.48047 12.704 4.16016 12.9188 3.87891 13.1923C3.59766 13.4657 3.38281 13.7821 3.23438 14.1415C3.08594 14.5009 3.00781 14.8915 3 15.3134C3 15.7274 3.07812 16.1141 3.23438 16.4735C3.39062 16.8329 3.60547 17.1532 3.87891 17.4344C4.15234 17.7157 4.46875 17.9305 4.82812 18.079C5.1875 18.2274 5.57812 18.3055 6 18.3134ZM10.5 7.81335C10.5 8.22742 10.5781 8.61414 10.7344 8.97351C10.8906 9.33289 11.1055 9.6532 11.3789 9.93445C11.6523 10.2157 11.9688 10.4305 12.3281 10.579C12.6875 10.7274 13.0781 10.8055 13.5 10.8134C13.9141 10.8134 14.3008 10.7352 14.6602 10.579C15.0195 10.4227 15.3398 10.2079 15.6211 9.93445C15.9023 9.66101 16.1172 9.3446 16.2656 8.98523C16.4141 8.62585 16.4922 8.23523 16.5 7.81335C16.5 7.39929 16.4219 7.01257 16.2656 6.6532C16.1094 6.29382 15.8945 5.97351 15.6211 5.69226C15.3477 5.41101 15.0312 5.19617 14.6719 5.04773C14.3125 4.89929 13.9219 4.82117 13.5 4.81335C13.0859 4.81335 12.6992 4.89148 12.3398 5.04773C11.9805 5.20398 11.6602 5.41882 11.3789 5.69226C11.0977 5.9657 10.8828 6.2821 10.7344 6.64148C10.5859 7.00085 10.5078 7.39148 10.5 7.81335ZM18.75 15.1962C18.4219 15.1962 18.1172 15.2587 17.8359 15.3837C17.5547 15.5087 17.3047 15.6766 17.0859 15.8876C16.8672 16.0985 16.6953 16.3485 16.5703 16.6376C16.4453 16.9266 16.3828 17.2352 16.3828 17.5634C16.3828 17.8915 16.4453 18.1962 16.5703 18.4774C16.6953 18.7587 16.8633 19.0087 17.0742 19.2274C17.2852 19.4462 17.5352 19.618 17.8242 19.743C18.1133 19.868 18.4219 19.9305 18.75 19.9305C19.0781 19.9305 19.3828 19.868 19.6641 19.743C19.9453 19.618 20.1953 19.4501 20.4141 19.2391C20.6328 19.0282 20.8047 18.7782 20.9297 18.4891C21.0547 18.2001 21.1172 17.8915 21.1172 17.5634C21.1172 17.2352 21.0547 16.9305 20.9297 16.6493C20.8047 16.368 20.6367 16.118 20.4258 15.8993C20.2148 15.6805 19.9648 15.5087 19.6758 15.3837C19.3867 15.2587 19.0781 15.1962 18.75 15.1962Z" fill="#0074EC" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_278_8645">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.313354)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2">Are the activities family-friendly?
                            </div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                Absolutely! We have activities for all ages, including families, couples, and individuals.                            </div>
                        </div>
                        <div className="p-3 bg-white border border-[#e3e3e3] rounded-[12px]">
                            <div className="flex justify-center">
                                <span className="bg-[#EDFAFF] w-[42px] h-[42px] rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M21.3359 17.8134V8.81335H7.33594V17.8134H21.3359ZM21.3359 3.81335C21.8664 3.81335 22.3751 4.02407 22.7502 4.39914C23.1252 4.77421 23.3359 5.28292 23.3359 5.81335V17.8134C23.3359 18.3438 23.1252 18.8525 22.7502 19.2276C22.3751 19.6026 21.8664 19.8134 21.3359 19.8134H7.33594C6.8055 19.8134 6.2968 19.6026 5.92172 19.2276C5.54665 18.8525 5.33594 18.3438 5.33594 17.8134V5.81335C5.33594 5.28292 5.54665 4.77421 5.92172 4.39914C6.2968 4.02407 6.8055 3.81335 7.33594 3.81335H8.33594V1.81335H10.3359V3.81335H18.3359V1.81335H20.3359V3.81335H21.3359ZM17.8659 11.8734L13.4259 16.3134L10.7459 13.6334L11.8059 12.5734L13.4259 14.1934L16.8059 10.8134L17.8659 11.8734ZM3.33594 21.8134H17.3359V23.8134H3.33594C2.8055 23.8134 2.2968 23.6026 1.92172 23.2276C1.54665 22.8525 1.33594 22.3438 1.33594 21.8134V9.81335H3.33594V21.8134Z" fill="#0074EC" />
                                    </svg>
                                </span>
                            </div>

                            <div className="text-[20px] text-[#121212] font-semibold text-center mt-6 mb-2">What types of events do you host?</div>

                            <div className="text-[16px] text-center text-[#666D80]">
                                We host a variety of events including private celebrations, corporate retreats, and themed activities.                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#efefef] lg:py-[80px] md:py-[60px] py-[40px]">
                    <div className="container py-[40px] px-[32px] flex flex-col gap-[32px]">
                        <div className="flex justify-center">
                            <Image src="/faq-avatar.png" width={120} alt="Avatar" height={56}/>
                        </div>

                        <div className="flex justify-center flex-col gap-3">
                            <div className="text-[#101828] font-[600] text-[20px] text-center">Still have questions?</div>

                            <div className="text-[#475467] text-[18px] text-center">Can’t find the answer you’re looking for? Please chat to our friendly team.</div>
                       
                       
                        </div>

                        <div className="flex justify-center">
                        <InquiryBtn/>
                       </div>
                    </div>
                </div>
            </section>
        </>
    )
}