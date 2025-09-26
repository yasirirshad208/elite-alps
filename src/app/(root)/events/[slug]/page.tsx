"use client"
// import ChaletsForm from "@/components/ChaletsForm";
import ExperienceMedia from "@/components/ExperienceMedia";
import MapComponent from "@/components/MapComponent";
import ShareBtn from "@/components/ShareBtn";
import BookEventSkeleton from "@/components/skeletons/BookEventSkeleton";
import AccommodationForm from "@/components/ui/Accommodation/AccommodationForm";
import ChaletsKeyFeatures from "@/components/ui/ChaletsKeyFeatures";
import ChaletsSlider from "@/components/ui/ChaletsSlider";
import ActivitySlider from "@/components/ui/Experience/ActivitySlider";
import ExperienceForm from "@/components/ui/Experience/ExperienceForm";
import ExperiencSlider from "@/components/ui/Experience/ExperienceSlider";
import RestaurantKeyFeatures from "@/components/ui/Experience/RestaurantKeyFeatures";
import SubMenu from "@/components/ui/SubMenu";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";




export default function BookRestaurant({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const [data, setData] = useState<any>();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [activeId, setActiveId] = useState('details');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: propertyData } = await axios.get(
                    `http://localhost:5000/api/events/${slug}`
                );
                setData(propertyData);
            } catch (err) {
                setError("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params.slug]);

    const sections = [
        { id: 'details', label: 'Details' },

        { id: 'location', label: 'Location' },
        { id: 'date', label: 'Date' },
    ];

    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
        }
    };


    if (loading) return <BookEventSkeleton/>;
    if (error) return <p className="text-red-500 md:mt-20 mt-10 text-center">{error}</p>;





    return (
        <>



            <section className="md:mt-[140px] mt-[80px]">
                <div className="sm:container mx-auto">

                    <div className="sm:block hidden">
                        <div className="flex items-center gap-1 container">
                            <Link href={"/activities"} className="text-[#666d86] font-regular underline">Activities</Link>
                            <IoIosArrowBack className="text-[#121212]" />
                            <span className="text-[#121212] font-regular">Detailed Activity</span>
                        </div>
                    </div>

                    <div className="absolute w-full left-0 sm:pt-7 sm:pb-2 px-4 sm:px-0 sm:static top-[110px] z-19 sm:top-auto">
                        <div className="flex justify-between items-center">
                            <div className="mb-1 sm:hidden block">
                                <Link href="/activities">
                                    <div className="h-[40px] w-[40px] rounded-[10000px] bg-white border border-[#e3e3e3] flex justify-center items-center cursor-pointer">
                                        <FaArrowLeft className="text-[16px] text-[#121212]" />
                                    </div>
                                </Link>
                            </div>
                            <div className="sm:flex justify-start items-start gap-3 flex-col gap-0 hidden">
                                <h2 className="font-[600] text-[32px] text-[#121212] md:text-[40px] leading-[120%]">
                                    {data.name}
                                </h2>
                                <div className="flex items-center gap-1  text-[#272835] ">
                                    <GrLocation className="w-[21px] h-[21px]" />  <span className="text-[20px]">{data.address || "45 Sunset Blvd, Apt 6B,Brighton Town,Miami, FL33101, USA"}</span>
                                </div>
                            </div>
                            <div>
                                <ShareBtn />
                            </div>
                        </div>
                    </div>



                    <ExperienceMedia images={data.images} url={`http://localhost:5000/`} />
                </div>
            </section>

            <div className="flex flex-col justify-start items-start gap-3 sm:hidden px-4 mt-[12px] mb-[8px]">
                <h2 className="font-[600] heading-h1 text-[#121212] ">
                    {data.name}
                </h2>
                <div className="flex items-center gap-1  text-[#272835] ">
                    <GrLocation className="w-[21px] h-[21px]" />  <span className="font-large">{data.address || "45 Sunset Blvd, Apt 6B,Brighton Town,Miami, FL33101, USA"}</span>
                </div>
            </div>

            <SubMenu items={sections} activeId={activeId} onClick={handleScrollTo} />
            <section >
                <div className="container mx-auto">
                    <div className=" w-full  pl-3">

                        <div >
                            <h2 className="text-[#121212] font-large font-semibold mb-4">
                                About The Activity
                            </h2>

                            {/* {dynamicParagraphs.map((paragraph: string, index: number) => ( */}
                            <p
                                // key={index}
                                className="font-medium text-[#666D80] md:mb-4 sm:mb-3 mb-3"
                            >
                                {data.description}
                            </p>
                            {/* ))} */}
                        </div>

                        <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>

                        <div className=" font-inter md:mt-[50px] mt-[40px]" id="details">
                            <RestaurantKeyFeatures data={data.features} />

                        </div>
                    </div>
                </div>
            </section>

            <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>

            <section
                className="mt-[40px] md:mt-[60px] lg:mt-[80px]"
                id="location"
            >
                <div className="container mx-auto">
                    <h2 className="text-[#121212] font-medium font-semibold lg:mb-5 mb-4">
                        Event Location
                    </h2>

                    <MapComponent addresss={data.address || "45 Sunset Blvd, Apt 6B,Brighton Town,Miami, FL33101, USA"} latitude={data.latitude || "4546"} longitude={data.longitude || "43543"} />


                </div>
            </section>
            <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>
            <section
                // className="mt-[40px] md:mt-[60px] lg:mt-[80px]"
                id="date"
            >
                <div className="container mx-auto">
                    <h2 className="text-[#121212] font-medium font-semibold mb-4">
                        Event Date
                    </h2>

                    <div className="w-full border p-3 border-[#e3e3e3] rounded-[12px] flex items-center gap-3 text-[20px] font-[600]">
                        {/* <div className="p-2 rounded-[12px] border border-[#e3e3e3]"> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                            <rect x="0.5" y="1" width="47" height="47" rx="11.5" stroke="#E3E3E3" />
                            <mask id="mask0_163_3344" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="33">
                                <rect x="8" y="8.5" width="32" height="32" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_163_3344)">
                                <path d="M30.6667 37.8333V33.8333H26.6667V31.1666H30.6667V27.1666H33.3333V31.1666H37.3333V33.8333H33.3333V37.8333H30.6667ZM14.6667 35.1666C13.9333 35.1666 13.3056 34.9055 12.7833 34.3833C12.2611 33.8611 12 33.2333 12 32.5V16.5C12 15.7666 12.2611 15.1388 12.7833 14.6166C13.3056 14.0944 13.9333 13.8333 14.6667 13.8333H16V11.1666H18.6667V13.8333H26.6667V11.1666H29.3333V13.8333H30.6667C31.4 13.8333 32.0278 14.0944 32.55 14.6166C33.0722 15.1388 33.3333 15.7666 33.3333 16.5V24.6333C32.8889 24.5666 32.4444 24.5333 32 24.5333C31.5556 24.5333 31.1111 24.5666 30.6667 24.6333V21.8333H14.6667V32.5H24C24 32.9444 24.0333 33.3888 24.1 33.8333C24.1667 34.2777 24.2889 34.7222 24.4667 35.1666H14.6667ZM14.6667 19.1666H30.6667V16.5H14.6667V19.1666Z" fill="#121212" />
                            </g>
                        </svg>
                        {/* </div> */}

                        {data.date ? new Date(data.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        }) : "Sept 12, 2025"}
                    </div>


                </div>
            </section>


            <section className="mt-[40px] sm:mt-[50px]">
                <ActivitySlider current="events" heading="You may also like" showSubheading={false} />
            </section>
        </>
    );
}


