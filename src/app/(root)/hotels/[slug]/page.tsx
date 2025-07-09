"use client"
// import ChaletsForm from "@/components/ChaletsForm";
import ExperienceMedia from "@/components/ExperienceMedia";
import MapComponent from "@/components/MapComponent";
import ShareBtn from "@/components/ShareBtn";
import AccommodationForm from "@/components/ui/Accommodation/AccommodationForm";
import ChaletsKeyFeatures from "@/components/ui/ChaletsKeyFeatures";
import ChaletsSlider from "@/components/ui/ChaletsSlider";
import Faqs from "@/components/ui/Faqs";
import SubMenu from "@/components/ui/SubMenu";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { LuWarehouse } from "react-icons/lu";




export default function BookChalet({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [openForm, setOpenForm] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [activeId, setActiveId] = useState('details');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://elite-experience-backend.onrender.com/api/accommodations/${slug}`
                );
                setData(response.data);
                console.log(response.data.price.highSeason)
            } catch (err) {
                setError("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params.slug]);

    if (loading) return <div className="text-center md:mt-20 mt-12">Loading...</div>;
    if (error) return <p className="text-red-500 md:mt-20 mt-10 text-center">{error}</p>;



    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short', // use 'long' if you want full month name
        });
    };

    const sections = [
        { id: 'details', label: 'Details' },
        { id: 'faqs', label: 'Faqs' },
        { id: 'location', label: 'Location' },
    ];

    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
        }
    };



    if (openForm) {
        return (
            <div className="mt-[115px] px-4">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-[40px] w-[40px] rounded-[10000px] border-2 border-[#e3e3e3] flex justify-center items-center cursor-pointer" onClick={() => { setOpenForm(false) }}><FaArrowLeft className="text-[16px] text-[#121212]" /></div>
                    <div>Back</div>
                </div>

                <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 " style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }}>


                    <AccommodationForm accommodationType="Hotel" dateRanges={[
                        {
                            price: "200",
                            start: "2025-06-20",
                            end: "2025-06-25",
                        },
                        {
                            price: "300",
                            start: "2025-07-01",
                            end: "2025-07-05",
                        },
                    ]} name={data.name} location={data.location} id={data._id} />

                </div>
            </div>
        )
    }


    return (
        <>

            <div
                className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-white px-4 py-3 border-t border-gray-200 flex items-center justify-between"

            >
                <div className="flex flex-col gap-1">
                    <span className="text-[#666D80] text-[16px]">Start from</span>
                    <span className="text-[#121212] text-[16px] font-[600]">
                        €{parseFloat(data.price.highSeason.toString())
                            .toFixed(0)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / Week
                    </span>
                </div>

                <button className="cursor-pointer py-[10px] px-3 bg-[#0074ec] rounded-[12px] text-[16px] font-[600] text-white" onClick={() => {
                    setOpenForm(true)
                    window.scrollTo({ top: 30, behavior: 'smooth' }) // ⬅ Scroll to top smoothly
                }}>
                    Make an Enquiry
                </button>
            </div>

            <section className="md:mt-[140px] mt-[80px]">
                <div className="sm:container mx-auto">

                    <div className="sm:block hidden">
                        <div className="flex items-center gap-1 container">
                            <Link href={"/hotels"} className="text-[#666d86] font-regular underline">Hotel</Link>
                            <IoIosArrowBack className="text-[#121212]" />
                            <span className="text-[#121212] font-regular">Detailed Hotel</span>
                        </div>
                    </div>

                    <div className="absolute w-full left-0 sm:pt-7 sm:pb-2 px-4 sm:px-0 sm:static top-[110px] z-19 sm:top-auto">
                        <div className="flex justify-between items-center">
                            <div className="mb-1 sm:hidden block">
                                <Link href="/chalets">
                                    <div className="h-[40px] w-[40px] rounded-[10000px] bg-white border border-[#e3e3e3] flex justify-center items-center cursor-pointer">
                                        <FaArrowLeft className="text-[16px] text-[#121212]" />
                                    </div>
                                </Link>
                            </div>
                            <div className="sm:flex items-center gap-3 hidden">
                                <h2 className="font-[600] text-[32px] text-[#121212] md:text-[40px] md:mb-3 mb-2">
                                    {data.name}
                                </h2>
                                <span className="text-[20px] text-[#272835] md:block hidden">
                                    {data.location}
                                </span>
                            </div>
                            <div>
                                <ShareBtn />
                            </div>
                        </div>
                    </div>



                    <ExperienceMedia images={data.images} url={`https://elite-experience-backend.onrender.com/`} />
                </div>
            </section>

            <div className="flex items-center gap-3 sm:hidden px-4 mt-[10px]">
                <h2 className="font-[600] heading-h1 text-[#121212] ">
                    {data.name}
                </h2>
                <span className="font-large text-[#272835] ">
                    {data.location}
                </span>
            </div>

            <SubMenu items={sections} activeId={activeId} onClick={handleScrollTo} />

            <section id="details">
                <div className="container mx-auto">
                    <div className="flex gap-10  md:flex-row flex-col">
                        <div className=" w-full  pl-3">

                            <div>
                                <h2 className="text-[#121212] font-large font-semibold mb-4">
                                    About The Hotel
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

                                <div>
                                    <h2 className="text-[#121212] font-semibold mb-4 font-large">
                                        Key Features
                                    </h2>
                                    <div className="grid grid-cols-2 gap-6">
                                        {data.features.map((item: string, index: number) => {


                                            return (
                                                <div key={index} className="flex gap-3 items-center">
                                                    {/* Render the English feature name */}
                                                    <span className="text-[#666D80] font-regular font-semibold">
                                                        {item}
                                                    </span>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>

                                <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>

                                <div id="faqs">
                                    <h2 className="text-[#121212] font-semibold mb-4 font-large">
                                        Faqs
                                    </h2>
                                    <Faqs faqs={data.faqs} />
                                </div>
                            </div>

                        </div>

                        <div className="md:max-w-[487px] sm:block hidden w-full">
                            <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 " style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }}>


                                <AccommodationForm accommodationType="Hotel" dateRanges={[
                                    {
                                        price: "200",
                                        start: "2025-06-20",
                                        end: "2025-06-25",
                                    },
                                    {
                                        price: "300",
                                        start: "2025-07-01",
                                        end: "2025-07-05",
                                    },
                                ]} name={data.name} location={data.location} id={data._id} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>

            <section
                id="location"
            >
                <div className="container mx-auto">
                    <h2 className="text-[#121212] font-medium font-semibold lg:mb-5 mb-4">
                        Hotel Location
                    </h2>

                    <MapComponent addresss={data.location} latitude={data.geoLocation.latitude} longitude={data.geoLocation.longitude} />


                </div>
            </section>


            <section className="md:mt-[50px] mt-[40px]">
                <ChaletsSlider
                />
            </section>
        </>
    );
}
