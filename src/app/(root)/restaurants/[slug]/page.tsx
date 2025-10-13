"use client"
// import ChaletsForm from "@/components/ChaletsForm";
import ExperienceMedia from "@/components/ExperienceMedia";
import MapComponent from "@/components/MapComponent";
import ShareBtn from "@/components/ShareBtn";
import BookRestaurantSkeleton from "@/components/skeletons/BookRestaurantSkeleton";
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
    const [openForm, setOpenForm] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [activeId, setActiveId] = useState('details');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: propertyData } = await axios.get(
                    `https://elite-experience-backend.onrender.com/api/restaurants/${slug}`
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
        { id: 'faqa', label: 'Faqs' },
        { id: 'location', label: 'Location' },
    ];

    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
        }
    };


    if (loading) return <BookRestaurantSkeleton />;
    if (error) return <p className="text-red-500 md:mt-20 mt-10 text-center">{error}</p>;


    if (openForm) {
        return (
            <div className="mt-[115px] px-4">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-[40px] w-[40px] rounded-[10000px] border-2 border-[#e3e3e3] flex justify-center items-center cursor-pointer" onClick={() => { setOpenForm(false) }}><FaArrowLeft className="text-[16px] text-[#121212]" /></div>
                    <div>Back</div>
                </div>

                <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 " style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }}>
                    <ExperienceForm location={data.location} timeOptions={["Breakfast", "Lunch", "Dinner"]} experienceType="Restaurant" name={data.name} />
                </div>
            </div>
        )
    }


    return (
        <>

            <div
                className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-white px-4 py-3 border-t border-gray-200 "

            >


                <button className="cursor-pointer py-[10px] px-3 bg-[#0074ec] w-full rounded-[12px] text-[16px] font-[600] text-white" onClick={() => {
                    setOpenForm(true)
                    window.scrollTo({ top: 30, behavior: 'smooth' }) // ⬅ Scroll to top smoothly
                }}>
                    Request a reservation
                </button>
            </div>

            <section className="md:mt-[140px] mt-[80px]">
                <div className="sm:container mx-auto">

                    <div className="sm:block hidden">
                        <div className="flex items-center gap-1 container">
                            <Link href={"/restaurants"} className="text-[#666d86] font-regular underline">Restaurants</Link>
                            <IoIosArrowBack className="text-[#121212]" />
                            <span className="text-[#121212] font-regular">Detailed Restaurant</span>
                        </div>
                    </div>

                    <div className="absolute w-full left-0 sm:pt-7 sm:pb-2 px-4 sm:px-0 sm:static top-[110px] z-19 sm:top-auto">
                        <div className="flex justify-between items-center">
                            <div className="mb-1 sm:hidden block">
                                <Link href="/restaurants">
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



                    <ExperienceMedia images={data.images} url={`https://elite-experience-backend.onrender.com/`} />
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
            
            <section id="details">
                <div className="container mx-auto">
                    <div className="flex gap-10  md:flex-row flex-col">
                        <div className=" w-full  md:pl-3">
<SubMenu items={sections} activeId={activeId} onClick={handleScrollTo} />
                            <div >
                                <h2 className="text-[#121212] font-large font-semibold mb-4">
                                    About The Restaurant
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
                            <div>
                                <RestaurantKeyFeatures data={data.features} />

                            </div>
                        </div>

                        <div className="md:max-w-[487px] sm:block hidden w-full">
                            <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 " style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }}>


                                {/* <AccommodationForm accommodationType="Chalet" dateRanges={dateRanges} name={data.data.propertyDetail.message.detail[0].nom_bien_en[0]} location={data.data.propertyDetail.message.detail[0].secteur[1]._} id={data.data.propertyDetail.message.detail[0].id_bien} /> */}
                                <ExperienceForm location={data.location} timeOptions={["Breakfast", "Lunch", "Dinner"]} experienceType="Restaurant" name={data.name} />
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
                        Restaurant Location
                    </h2>

                    <MapComponent addresss={data.address || "45 Sunset Blvd, Apt 6B,Brighton Town,Miami, FL33101, USA"} latitude={data.latitude || "4546"} longitude={data.longitude || "43543"} />


                </div>
            </section>


            <section className="mt-[40px] sm:mt-[50px]">
                <ExperiencSlider heading="You may also like" showSubheading={false} />
            </section>
        </>
    );
}


